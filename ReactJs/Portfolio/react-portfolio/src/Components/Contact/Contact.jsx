import React , {useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

function Contact() {

  const [isSending, setIsSending] = useState(false);
  const form = useRef();

  function sendEmail(e){
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm('Mano@15376', 'template_47x194i', form.current, {
        publicKey: 'Jg1C0eniD_rA6UH5l',
      })
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
          setIsSending(false);
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.log('FAILED...', error.text);
          setIsSending(false);
        },
      );
  };

  return (
    <div className="contactContainer" id="contact">
      <h2>CONTACT ME</h2>
      <p className="contactSubtext">Have a question or want to work together?</p>

      <div className="contactContent">
        <div className="contactInfo">
          <p>Email: sankarmano1998@gmail.com</p>
          <p>Phone: 6384887765</p>
          <p>Location: Madurai, India</p>
        </div>

        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text"  name ="name"  placeholder="Your Name"  required />
          <input type="email" name ="email" placeholder="Your Email" required />
          <textarea name ="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" disabled={isSending}>{isSending ? 'Sending...' : 'Send Message'}</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
