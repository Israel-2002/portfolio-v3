import Button from "@/components/Button";
import { cn } from "@/lib/cn";
import { useFormik } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
  fullname: Yup.string()
    .required("Full name is required")
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name must be 50 characters or less"),

  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email address"),

  message: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message cannot exceed 500 characters"),
});

const Form = () => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      message: "",
    },

    validationSchema: schema,

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="mx-auto w-full max-w-[620px] rounded-xl bg-white p-5 shadow-xl shadow-primary/10 md:p-6 lg:max-w-none lg:p-8">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-6 grid gap-4">
          <div>
            <input
              {...formik.getFieldProps("fullname")}
              type="text"
              placeholder="Full Name"
              className={cn(
                "w-full rounded-md border border-gray-200 bg-[#F8F8F8] px-4 py-3 text-matte-black focus:border-transparent focus:outline-primary lg:py-4",
                formik.errors.fullname
                  ? "border-red-500 focus:outline-red-500"
                  : "",
              )}
            />

            {formik.touched && formik.errors.fullname && (
              <p className="mt-1 text-sm text-red-500">
                {formik.errors.fullname}
              </p>
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

        <Button
          type="submit"
          label="Send Message"
          className="w-full rounded-md hover:bg-primary/95"
        />
      </form>
    </div>
  );
};

export default Form;
