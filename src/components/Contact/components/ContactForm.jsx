// import { useState } from 'react'

function ContactForm() {
  // const [name, setName] = useState('');
  // const [mail, setMail] = useState('');
  // const [message, setMessage] = useStae('');

  return (
    <form>
      <div className="bg-white rounded-3xl xl:py-10 xl:px-8">
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="border-2 border-stone-500 rounded-lg p-2 mt-2 focus-visible:outline-teal-500"
          />
        </div>
        <div className="my-4 flex flex-col">
          <label htmlFor="mail">Mail</label>
          <input
            type="text"
            className="w-[402px] border-2 border-stone-500 rounded-lg p-2 mt-2 focus-visible:outline-teal-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="6"
            className="w-[402px] border-2 border-stone-500 rounded-lg p-2 mt-2 focus-visible:outline-teal-500"
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
