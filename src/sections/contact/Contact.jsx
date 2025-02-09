import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container contact__container">
        <div className="section__title">
          <h2>contact</h2>
          <div className="underline"></div>
        </div>
        <p className="contact__first-p">
          For this “ Love what you see? Let’s make something amazing together!
          Reach out through any of the following channels below, and I’ll be in
          touch immediately 🚀
        </p>
        <div className="contact__btns">
          <a
            href="mailto:otaighobawo@gmail.com"
            target="_blank"
            className="btn"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/bawo-otaigho-b49a69167/"
            target="_blank"
            className="btn white"
          >
            Linkedin
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
