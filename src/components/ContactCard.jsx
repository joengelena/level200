import React from "react";

const ContactCard = ({ contact, onClick }) => {
  return (
    <div className="contact-card" onClick={onClick}>
      <h2>{contact.name}</h2>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
    </div>
  );
};

export default ContactCard;
