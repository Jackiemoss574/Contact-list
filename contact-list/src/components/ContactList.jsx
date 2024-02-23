import React, { useState } from 'react';
// Import ContactRow if you're using it to render each contact
// import ContactRow from './ContactRow';

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

function ContactList() {
  const [contacts, setContacts] = useState(dummyContacts);

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

