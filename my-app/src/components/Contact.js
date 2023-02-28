import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { contacts } from "../Data";

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ibylisq",
        "template_4vi0t0e",
        form.current,
        "uI6dem_EN1VmtKRlW"
      )
      .then(
        (result) => {
          setMessageSent(true);
          e.target.reset("Message sent");
        },
        (error) => {}
      );
  };

  return (
    <div className="container mx-auto mb-7 px-6" id="contact">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold">Contact</h2>
        <div className="w-14 h-[3px] rounded-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      </div>
      <div className="shadow-lg p-4 max-w-[700px] mx-auto">
        <div className="grid gap-8 sm:grid-cols-3">
          {contacts.map((contact) => {
            const { id, icon, text } = contact;
            return (
              <div className="flex gap-2 items-center flex-col" key={id}>
                <div className="text-blue text-xl">{icon}</div>
                <div className="text-[0.9rem] opacity-80">{text}</div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex  gap-12 flex-wrap justify-center">
          <form ref={form} onSubmit={sendEmail} >
            <div>
            <div className="mb-5">
              <input
                type="text"
                name="name"
                className="outline-none bg-transparent border border-solid border-blue p-2 text-[0.9rem]"
                placeholder="Name"
              />
            </div>
            <div className="mb-5">
              <input
                type="email"
                name="user_email"
                className="outline-none bg-transparent border border-solid border-blue p-2 text-[0.9rem]"
                placeholder="Email"
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                name="budget"
                className="outline-none bg-transparent border border-solid border-blue p-2 text-[0.9rem]"
                placeholder="Budget"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                name="message"
                className="outline-none bg-transparent border border-solid border-blue resize-none text-[0.9rem] p-2 h-40 w-80"
              />
              <div className="mt-2 text-end">
                <button type="submit"
                  value="Send"
                  className="text-[0.9rem] text-blue">
                  Send message
                </button>
                {messageSent && <p className="text-black font-fourth">Message Sent!</p>}
              </div>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
