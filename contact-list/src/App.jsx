import { useState, useEffect } from 'react';
import ContactList from './ContactList'; // Make sure this path is correct based on your file structure
// Import other components as needed, like ContactDetails

function App() {
  // State to keep track of the selected contact ID
  const [selectedContactId, setSelectedContactId] = useState(null);
  // State to store all contacts
  const [contacts, setContacts] = useState([]);

  // Fetch contacts from the API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') // Replace with the actual API URL
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => console.error('Error fetching contacts:', error));
  }, []);

  // Function to reset the selected contact
  const resetSelection = () => setSelectedContactId(null);

  return (
    <div className="App">
      <header>
        <h1>Contact List</h1>
        {/* Add any additional header content or navigation here */}
      </header>
      <main>
        {selectedContactId ? (
          <div>
            {/* Render selected contact details here, pass resetSelection to go back */}
            {/* <ContactDetails contactId={selectedContactId} resetSelection={resetSelection} /> */}
          </div>
        ) : (
          <ContactList contacts={contacts} setSelectedContactId={setSelectedContactId} />
        )}
      </main>
      <footer>
        {/* Footer content (if any) */}
      </footer>
    </div>
  );
}

export default App;

