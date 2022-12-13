import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDeleteContactMutation } from '../../redux/contacts/contacts';
import ContactListItem from '../ContactListItem';
import { List } from './ContactList.styled';

export default function ContactList({ error, isLoading, data, filter }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const [contacts, setContats] = useState(null);

  useEffect(() => {
    if (data) {
      setContats(data);
    }
  }, [contacts, data]);

  const filterContacts = () => {
    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };
  return (
    <ul>
      <List>
        {error ? (
          <>Here will be contacts</>
        ) : isLoading ? (
          <>Loading...</>
        ) : filterContacts() ? (
          filterContacts().map(({ id, name, phone }) => (
            <ContactListItem
              key={id}
              onDelete={deleteContact}
              name={name}
              number={phone}
              deleting={isDeleting}
              id={id}
            />
          ))
        ) : null}
      </List>
    </ul>
  );
}
