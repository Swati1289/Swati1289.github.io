import React from "react";

import "./style.css";

function Contact() {
  return (
    <div id="contact">
      <h1 className="head">CONTACT</h1>
      <a
        href="mailto:swati.hegde650@gmail.com"
        target="_blank"
        className="btn btn--mail"
      >
        Email Me
      </a>
    </div>
  );
}

export default Contact;
