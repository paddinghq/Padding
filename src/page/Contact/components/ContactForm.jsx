import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ThreeDots } from "react-loader-spinner";

function ContactForm() {
  const form = useRef();

  const [initialFormData] = useState({
    name: "",
    mail: "",
    message: "",
  });

  const [formData, setFormData] = useState(initialFormData);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  //handleForm 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_z84uat1",
        "template_tnqatcj",
        form.current,
        "QhV3BMdeULZl3zU0v"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmissionStatus("success");
          setFormData(initialFormData);
        },
        (error) => {
          console.log(error.text);
          setSubmissionStatus("error");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });


  return (
    <form ref={form} onSubmit={handleSubmit}>
      <div className="bg-white rounded-3xl px-4 py-10 xl:px-8">
        {submissionStatus === "success" && (
          <div className="text-teal-400">Message successfully submitted!</div>
        )}
        {submissionStatus === "error" && (
          <div className="text-red-500">
            Error submitting the message. Please try again.
          </div>
        )}
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            required
            className="border-2 border-stone-500 rounded-lg p-2 mt-2 focus-visible:outline-teal-500"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="my-4 flex flex-col">
          <label htmlFor="mail">Mail</label>
          <input
            type="text"
            id="mail"
            required
            className="border-2 border-stone-500 rounded-lg p-2 mt-2 focus-visible:outline-teal-500 lg:w-[402px]"
            value={formData.mail}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="6"
            className="border-2 border-stone-500 rounded-lg p-2 mt-2 focus-visible:outline-teal-500 lg:w-[402px]"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mt-10 text-right">
          <button
            type="submit"
            className="bg-neutral-800 text-center text-neutral-50 text-base font-medium font-['Manrope'] p-3 rounded hover:bg-neutral-600 transition-all relative"
            disabled={isSubmitting}
          >
            {isSubmitting && (
              <div className="flex items-center justify-center">
                <ThreeDots
                  visible={true}
                  height="20"
                  width="50"
                  color="#4fa94d"
                  radius="9"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            )}
            {!isSubmitting && "Send message"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
