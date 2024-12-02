import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setStatus('Sending your message...');
  };

  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Us!</h1>
      {/* Use the provided Formspree form endpoint */}
      <form
        action="https://formspree.io/f/mldeagwv"  // Your Formspree form ID
        method="POST"
        className="contact-form"
      >
        {/* Name Field */}
        <div className="input-container">
          <label htmlFor="name" className="input-label">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input-field"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email Field */}
        <div className="input-container" style={{ top: '269px' }}>
          <label htmlFor="email" className="input-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Message Field */}
        <div className="message-container">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="message-field"
            placeholder="Enter your message"
            required
          />
        </div>

        {/* Hidden Input for _replyto (Optional) */}
        <input type="hidden" name="_replyto" value={formData.email} />

        {/* Submit Button */}
        <button type="submit" className="submit-button">Send</button>
      </form>

      {/* Status Message */}
      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default ContactPage;
