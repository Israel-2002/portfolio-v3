import Button from "@/components/Button";

const Form = () => {
  return (
    <div className="mx-auto w-full max-w-[620px] rounded-xl bg-white p-5 shadow-xl shadow-primary/10 md:p-6 lg:max-w-none lg:p-8">
      <form>
        <div className="mb-6 grid gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-md border border-gray-200 bg-[#F8F8F8] px-4 py-3 text-matte-black focus:border-transparent focus:outline-primary lg:py-4"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md border border-gray-200 bg-[#F8F8F8] px-4 py-3 text-matte-black focus:border-transparent focus:outline-primary lg:py-4"
          />

          <textarea
            rows={7}
            placeholder="Leave me a message"
            className="w-full rounded-md border border-gray-200 bg-[#F8F8F8] px-4 py-3 text-matte-black focus:border-transparent focus:outline-primary lg:py-4"
          ></textarea>
        </div>

        <Button
          label="Send Message"
          className="w-full rounded-md hover:bg-primary/95"
        />
      </form>
    </div>
  );
};

export default Form;
