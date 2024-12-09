import React, { useState, useEffect } from "react";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error("Error fetching contacts:", error));
  }, []);

  return (
    <div className="container">
      <h1>My Contacts</h1>
      {selectedContact ? (
        <ContactDetails
          contact={selectedContact}
          onBack={() => setSelectedContact(null)}
        />
      ) : (
        <ContactList contacts={contacts} onCardClick={setSelectedContact} />
      )}
    </div>
  );
};

export default App;
