import React, { useState } from 'react';
import { useGetContactsQuery } from './redux/services/contacts';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

function App() {
  const [filter, setFilter] = useState('');
  const { data, error, isLoading } = useGetContactsQuery();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm data={data}></ContactForm>
      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <ContactList
        error={error}
        isLoading={isLoading}
        data={data}
        filter={filter}
      />
    </div>
  );
}

export default App;
