import React, { useContext, useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";
import { AppContext } from "../../context/AppContext";

export const AppointmentsPage = () => {
  const { appointments, contacts, addAppointment } = useContext(AppContext);

  const [currentName, setCurrentName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentName || !contact || !date || !time) {
      return alert("Please fill in all the fields");
    }

    const newContactInfo = {
      name: currentName,
      contact,
      date,
      time,
      description,
    };

    addAppointment(newContactInfo);
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          contact={contact}
          date={date}
          handleSubmit={handleSubmit}
          setContact={setContact}
          setDate={setDate}
          setTime={setTime}
          name={currentName}
          setName={setCurrentName}
          time={time}
          description={description}
          setDescription={setDescription}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList list={appointments} />
      </section>
    </div>
  );
};
