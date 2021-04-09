import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Form from "../../components/Form/Form";
import ContactAdditional from "../../components/ContactAdditional/ContactAdditional";

function Contact() {
  return (
    <div>
      <Navbar />
      <br></br>
      <section class="container">
      <section class="row">
      <ContactAdditional/>
      <Form />
      </section>
      </section>
    </div>
  );
}
export default Contact;
