import React, { useState, useEffect, useContext } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
import { AppContext } from "../../context/AppContext";

export const ContactsPage = () => {
  const { contacts, addContact } = useContext(AppContext);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isDuplicateName, setIsDuplicateName] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!name || !phone || !email) {
      return alert(
        "Please fill in your name, phone or email before submitting!"
      );
    }
    if (isDuplicateName) {
      return alert(
        `Contact with name ${name} and email ${email} is already in the list!`
      );
    }

    // Add contact to the contacts list
    const newContact = {
      name,
      phone,
      email,
    };
    addContact(newContact);
    // clear form
    setName("");
    setPhone("");
    setEmail("");
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    setIsDuplicateName(
      !!contacts.find(
        (contact) => contact.name === name || contact.email === email
      )
    );
  }, [name, email, contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={contacts} />
      </section>
    </div>
  );
};
