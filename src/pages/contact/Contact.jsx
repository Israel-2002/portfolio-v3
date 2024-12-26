import Container from "@/components/Container";
import Form from "@/pages/contact/Form";
import {
  RiLinkedinLine,
  RiTelegram2Line,
  RiTwitterXLine,
} from "@remixicon/react";

const Contact = () => {
  return (
    <div className="bg-[#F8F8F8] pb-[3.25rem] pt-32 md:pt-[11.25rem] lg:pb-[5.625rem] xl:pb-[10rem] xl:pt-[14.375rem]">
      <Container>
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-16">
          <div className="flex-shrink-0 text-center lg:text-left">
            <h2 className="page-title mb-6">
              Let&apos;s work <br /> together
            </h2>
            <p className="mx-auto mb-4 max-w-[370px] text-sm font-semibold text-[#2F2F2F80] md:text-[0.9375rem]">
              Got a question or just want to say hello? Feel free to reach out –
              I&apos;ll be here to respond!
            </p>

            <div className="mx-auto flex w-fit items-center gap-3.5 text-grey lg:mx-0 lg:gap-5">
              <a
                href="https://www.linkedin.com/in/israel-teye-dornor-5ba88725b"
                target="_blank"
              >
                <RiLinkedinLine className="hover:text-primary" />
              </a>

              <a href="https://t.me/kiki1187" target="_blank">
                <RiTelegram2Line className="hover:text-primary" />
              </a>

              <a href="https://x.com/Dreing16" target="_blank">
                <RiTwitterXLine className="hover:text-primary" />
              </a>
            </div>
          </div>

          <Form />
        </div>
      </Container>
    </div>
  );
};

export default Contact;
