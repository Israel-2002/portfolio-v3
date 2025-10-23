import Button from "@/components/Button";
import { cn } from "@/lib/cn";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import Response from "@/pages/contact/Response";

const schema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be 50 characters or less"),

  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email address"),

  message: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message cannot exceed 500 characters"),
});

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [response, setResponse] = useState({ message: "", status: undefined });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validationSchema: schema,

    onSubmit: (values, { resetForm }) => {
      setIsLoading(true);

      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          values,
          {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          },
        )
        .then(() => {
          setResponse({
            message:
              "Thanks for reaching out! Your message has been received, and I'll respond soon.",
            status: 200,
          });

          resetForm();
        })
        .catch((err) => {
          console.log(err);

          setResponse({
            message: "Something wen't wrong, please try again later.",
            status: 400,
          });
        })
        .finally(() => {
          setIsLoading(false);
          setIsSubmitted(true);
        });
    },
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isSubmitted]);

  return (
    <div className="mx-auto w-full max-w-[620px] rounded-xl bg-white p-5 shadow-xl shadow-primary/10 md:p-6 lg:max-w-none lg:p-8">
      <form onSubmit={formik.handleSubmit}>
        <div className="grid gap-4">
          <div>
            <input
              {...formik.getFieldProps("name")}
              type="text"
              placeholder="Name"
              className={cn(
                "w-full rounded-md border border-gray-200 bg-[#F8F8F8] px-4 py-3 text-matte-black focus:border-transparent focus:outline-primary lg:py-4",
                formik.errors.name
                  ? "border-red-500 focus:outline-red-500"
                  : "",
              )}
            />

            {formik.touched && formik.errors.name && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.name}</p>
            )}
          </div>

          <div>
            <input
              {...formik.getFieldProps("email")}
              type="email"
              placeholder="Email"
              className={cn(
                "w-full rounded-md border border-gray-200 bg-[#F8F8F8] px-4 py-3 text-matte-black focus:border-transparent focus:outline-primary lg:py-4",
                formik.errors.email
                  ? "border-red-500 focus:outline-red-500"
                  : "",
              )}
            />

            {formik.touched && formik.errors.email && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.email}</p>
            )}
          </div>

          <div>
            <textarea
              {...formik.getFieldProps("message")}
              rows={7}
              placeholder="Leave me a message"
              className={cn(
                "w-full rounded-md border border-gray-200 bg-[#F8F8F8] px-4 py-3 text-matte-black focus:border-transparent focus:outline-primary lg:py-4",
                formik.errors.message
                  ? "border-red-500 focus:outline-red-500"
                  : "",
              )}
            ></textarea>

            {formik.touched && formik.errors.message && (
              <p className="mt-1 text-sm text-red-500">
                {formik.errors.message}
              </p>
            )}
          </div>
        </div>

        {isSubmitted && !isLoading && (
          <Response message={response.message} status={response.status} />
        )}

        <Button
          type="submit"
          icon={<div className="loader"></div>}
          label="Send Message"
          className="mt-6 w-full justify-center rounded-md hover:bg-primary/95"
          disabled={isLoading}
          isLoading={isLoading}
        />
      </form>
    </div>
  );
};

export default Form;
