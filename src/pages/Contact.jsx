import React from 'react';

const Contact = () => (
  <section className="section contact">
    <h1>Contact</h1>
    <p>Let's connect! You can reach me at:</p>
    <ul>
      <li>Email: <a href="mailto:arvinjoseph1919@gmail.com">arvinjoseph1919@gmail.com</a></li>
      <li>LinkedIn: <a href="https://www.linkedin.com/in/arvin-joseph-b70b46254" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/arvin-joseph-b70b46254</a></li>
      <li>GitHub: <a href="https://github.com/Arvinjoseph" target="_blank" rel="noopener noreferrer">github.com/Arvinjoseph</a></li>
    </ul>
    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>
);

export default Contact;
