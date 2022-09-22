import React from "react";

import "../style.css";

function Contact() {
  return (
    <div id="contact">
      <h1 className="head">CONTACT</h1>
      <a
        href="https://mail.google.com"
        target="blank"
        className="btn btn--mail"
      >
        Email Me
      </a>
    </div>
  );
}

export default Contact;
