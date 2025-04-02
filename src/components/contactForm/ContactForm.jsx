import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  const phoneRegex = /^(\(\d{3}\)|\d{3})-?\d{3}-?\d{4}$/;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        <input
          name="name"
          placeholder="Enter your name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="phone">
        <input
          name="phone"
          placeholder="Enter your phone"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          pattern={phoneRegex.source}
        />
      </label>
      <label htmlFor="email">
        <input
          name="email"
          placeholder="Enter your email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};
