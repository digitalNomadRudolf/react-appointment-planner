import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  description,
  setDescription,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        <input
          name="name"
          id="name"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="date">
        <input
          type="date"
          id="date"
          name="date"
          min={getTodayString()}
          placeholder="Date of your appointment"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <label htmlFor="time">
        <input
          type="time"
          id="time"
          name="time"
          placeholder="Time of your appointment"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </label>
      <label htmlFor="description">
        <textarea
          name={description}
          id="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
      </label>
      <ContactPicker
        contacts={contacts}
        onChange={(e) => setContact(e.target.value)}
        value={contact}
        name={name}
      />

      <button type="submit">Submit Appointment</button>
    </form>
  );
};
