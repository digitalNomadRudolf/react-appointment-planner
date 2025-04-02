import React from "react";

export const ContactPicker = ({ contacts, onChange, value, name }) => {
  return (
    <select name={name} onChange={onChange} value={value}>
      <option value="">No Contact Selected</option>
      {contacts?.map((contact, index) => (
        <option key={`${contact.name}-${index}`} value={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>
  );
};
