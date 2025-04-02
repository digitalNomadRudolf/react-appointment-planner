import React, { createContext, useCallback, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const addContact = useCallback(
    (contactInfo) => {
      setContacts((prevContacts) => [...prevContacts, contactInfo]);
    },
    [contacts]
  );

  const addAppointment = useCallback(
    (appointmentInfo) => {
      setAppointments((prevAppointments) => [
        ...prevAppointments,
        appointmentInfo,
      ]);
    },
    [appointments]
  );

  return (
    <AppContext.Provider
      value={{ contacts, appointments, addAppointment, addContact }}
    >
      {children}
    </AppContext.Provider>
  );
};
