import React from "react";

const ContactDetails = ({ contact, onBack }) => {
  return (
    <div className="contact-details">
      <button onClick={onBack}>Back</button>
      <h2>{contact.name}</h2>
      <p>
        <strong>Username:</strong> {contact.username}
      </p>
      <p>
        <strong>Email:</strong> {contact.email}
      </p>
      <p>
        <strong>Phone:</strong> {contact.phone}
      </p>
      <p>
        <strong>Website:</strong>{" "}
        <a href={`https://${contact.website}`} target="_blank" rel="noopener noreferrer">
          {contact.website}
        </a>
      </p>
      <p>
        <strong>Address:</strong> {`${contact.address.street}, ${contact.address.suite}, ${contact.address.city}, ${contact.address.zipcode}`}
      </p>
      <p>
        <strong>Company:</strong> {contact.company.name}
      </p>
    </div>
  );
};

export default ContactDetails;