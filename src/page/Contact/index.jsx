import gmail from "../../assets/images/gmail-logo.png";
import phone from "../../assets/images/phone-logo.png";
import linkedin from "../../assets/images/linkedin-logo.png";
import Instagram from "../../assets/images/Instagram-logo.png";
import twitter from "../../assets/images/twitter-logo.png";
import ContactForm from "./components/ContactForm";

const Contact = () => {
  return (
    <>
      <section>
        <div className="flex bg-teal-500 rounded-3xl flex-col justify-between gap-24 my-8 px-4 py-8 lg:flex-row lg:gap-4 xl:my-12 xl:p-12">
          <div>
            <h2 className="text-neutral-800 text-5xl font-semibold xl:text-6xl xl:font-bold">
              Join Us
            </h2>
            <p className="text-zinc-700 text-sm leading-normal pt-4 lg:text-base lg:w-[494px]">
              Have a knack for creating Awesome Solutions? Willing to learn,
              contribute, and grow as part of a dynamic team? Reach out to us.
              Lets create the next big thing together!
            </p>
            <div className="my-20 flex flex-col justify-between gap-6">
              <p className="flex items-center gap-6">
                <img src={phone} alt="phone" />
                <a
                  href="tel:+2348132255469"
                  className="text-zinc-700 text-base"
                >
                  +234 - 813 - 225 - 5469
                </a>
              </p>
              <p className="flex gap-6">
                <img src={gmail} alt="gmail" />
                <a
                  href="mailto:careers@paddi.ng"
                  className="text-zinc-700 text-base underline"
                >
                  careers@paddi.ng
                </a>
              </p>
            </div>
            <div className="flex gap-10">
              <a href="#">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href="#">
                <img src={Instagram} alt="instagram" />
              </a>
              <a href="#">
                <img src={twitter} alt="twitter" />
              </a>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
