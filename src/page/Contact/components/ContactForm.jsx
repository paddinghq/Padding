import { useState, useEffect } from "react";

function ContactForm() {
  const [initialFormData] = useState({
    name: "",
    mail: "",
    message: "",
  });

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const storedFormData =
      JSON.parse(localStorage.getItem("formSubmissions")) || [];
    const newFormSubmissions = [...storedFormData, formData];

    localStorage.setItem("formSubmissions", JSON.stringify(newFormSubmissions));

    console.log(newFormSubmissions);

    setFormData(initialFormData);
  };

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem("formSubmissions"));
    if (storedFormData) {
      setFormData(storedFormData[storedFormData.length - 1]);
    }
    setFormData(initialFormData);
  }, [initialFormData]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white rounded-3xl px-4 py-10 xl:px-8">
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
            className="bg-neutral-800 text-center text-neutral-50 text-base font-medium font-['Manrope'] p-3 rounded hover:bg-neutral-600 transition-all"
          >
            Send message
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
