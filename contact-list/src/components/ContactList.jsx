import React, { useState , useEffect } from 'react';
// Import ContactRow if I am using it to render each contact
// import ContactRow from './ContactRow';

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

function ContactList() {
  const [contacts, setContacts] = useState(dummyContacts);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        console.log(data); // Test response
        setContacts(data); // Update state with API data
      } catch (error) {
        console.error(error);
      }
    }

    fetchContacts();
  }, []); // Empty dependency array ensures this runs once on mount


  console.log("Contacts: ", contacts);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          // If using ContactRow component
          // <ContactRow key={contact.id} contact={contact} />
          // Otherwise, just render the contact information directly
          <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ContactList;

