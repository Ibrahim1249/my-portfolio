
import emailjs from '@emailjs/browser';
import { useState } from 'react';


function Contact() {
  const template_id = import.meta.env.VITE_TEMPLATE_ID;
  const service_id = import.meta.env.VITE_SERVICE_ID;
  const public_key = import.meta.env.VITE_PUBLIC_KEY;

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSendMessage = (e)=>{
    e.preventDefault();
    if(fullName === "" && email === "" && message === ""){
       return;
    }
    var templateParams = {
      name: fullName,
      email : email,
      message: message,
    };
    emailjs.send(service_id, template_id, templateParams, {
    publicKey: public_key,
  }).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Your message has been sent successfully");
      },
      (error) => {
        console.log('FAILED...', error);
      },
    );
    setFullName("");
    setEmail("");
    setMessage("");
  }
  return (
   
    <>
        <article className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      <section className="mapbox" data-mapbox="">
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d533.2157567216516!2d76.73348343211063!3d24.00482870790896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1715515102529!5m2!1sen!2sin"
            width={400}
            height={300}
            loading="lazy"
          />
        </figure>
      </section>
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form action="#" className="form" data-form="">
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
                required
              data-form-input=""
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              data-form-input=""
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input=""
            onChange={(e) => setMessage(e.target.value)}
            value={message}            
          />
          <button className="form-btn" type="submit" data-form-btn="" onClick={handleSendMessage}>
            <ion-icon name="paper-plane" />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
    </>
  )
}

export default Contact