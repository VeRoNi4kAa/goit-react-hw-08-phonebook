import React, { useState } from 'react';
import { useGetContactsQuery } from '../../redux/contacts/contacts';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';
import { FormContainer, ContactsContainer, Phonebook } from './Contacts.styled';

export default function Contacts() {
  const [filter, setFilter] = useState('');
  const { data, error, isLoading } = useGetContactsQuery();

  return (
    <>
      <Phonebook>
        <FormContainer>
          <h1>Phonebook</h1>
          <ContactForm data={data}></ContactForm>
        </FormContainer>
        <ContactsContainer>
          <h2>Contacts</h2>
          <Filter filter={filter} setFilter={setFilter} />
          <ContactList
            error={error}
            isLoading={isLoading}
            data={data}
            filter={filter}
          />
        </ContactsContainer>
      </Phonebook>
    </>
  );
}
