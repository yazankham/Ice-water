import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./PopupWithForm.css";

function PopupWithForm(props) {
  const {
    onClose,
    isOpen,
    isFormSubmitted,
    setFormSubmitted
  } = props;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!name.trim()) {
      newErrors.name = 'Personal or company name is required';
    }
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const data = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch('/email', { // يستخدم proxy في التطوير
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Email sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
        setErrors({});
        setFormSubmitted(true);
      } else {
        const errorText = await response.text();
        console.error('Email send failed:', errorText);
        alert(errorText || 'Failed to send email');
      }
    } catch (err) {
      console.error('Network/Fetch error:', err);
      alert(`An error occurred while sending email: ${err?.message || ''}`);
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    }
  }, [isOpen]);

  React.useEffect(() => {
    let timer;
    if (isFormSubmitted) {
      timer = setTimeout(() => {
        setFormSubmitted(true);
        onClose();
      }, 8000);
    }
    return () => clearTimeout(timer);
  }, [isFormSubmitted, onClose, setFormSubmitted]);

  return (
    <section className={`form-popup ${isOpen ? "form-open" : ""}`}>
      {!isFormSubmitted && (
        <form
          className="form-container"
          noValidate
          method="POST"
          onSubmit={handleFormSubmit}
        >
          <button
            type="button"
            onClick={onClose}
            className="form-close"
            aria-label="close form"
          ></button>
          <h2 className="text-lg text-primary pt-[20px] leading-8 pb-[50px] base:pb-[30px] md:text-base md:pt-[0] sm:text-sm sm:leading-5 sm:text-center sm:pb-[10px] sm:pt-[10px]">
            Leave your contact and request, and out manager will reach out to
            you to establish our further partnership!
          </h2>
          <div className="flex flex-col max-w-[600px]">
            <div
              className={`text-sm pb-[11px] ${errors.name ? "text-[#E30613]" : "text-primary"}`}
            >
              {errors.name || "Personal or company name *"}
            </div>
            <label
              name="entry.1377521493"
              className={`h-[60px] ${errors.name ? "labels-invalid" : "labels"}`}
            >
              <input
                type="text"
                aria-label="Personal or company name"
                className="inputs"
                name="entry.1377521493"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <div
              className={`text-sm pb-[11px] ${errors.email ? "text-[#E30613]" : "text-primary"}`}
            >
              {errors.email || "Email *"}
            </div>
            <label
              name="entry.1586441139"
              className={`h-[60px] ${errors.email ? "labels-invalid" : "labels"}`}
            >
              <input
                type="email"
                aria-label="Email"
                className="inputs"
                name="entry.1586441139"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <div className="text-sm pb-[11px] text-primary">
              Your request/interest
            </div>
            <label name="message" className="textarea-label">
              <textarea
                aria-label="Your request or interest"
                name="message"
                type="text"
                className="textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
          </div>

          <button
            type="submit"
            className="button-form"
            aria-label="submit form"
          >
            Send
          </button>
        </form>
      )}
      {isFormSubmitted && (
        <form className="form-thankyou">
          <button
            type="button"
            onClick={onClose}
            className="form-close"
            aria-label="close form"
          ></button>
          <h2 className="text-lg leading-[32px] m-auto text-center sm:text-base sm:leading-7">
            Thanks! We will get in touch with you soon!
          </h2>
        </form>
      )}
    </section>
  );
}

PopupWithForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  isFormSubmitted: PropTypes.bool.isRequired,
  setFormSubmitted: PropTypes.func.isRequired,
};

export default PopupWithForm;