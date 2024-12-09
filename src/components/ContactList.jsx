import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, onCardClick }) => {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          onClick={() => onCardClick(contact)}
        />
      ))}
    </div>
  );
};

export default ContactList;