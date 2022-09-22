import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, Label, Input, Button } from './ContactForm.styled';
import {
  useFetchContactsQuery,
  useCreacteContactMutation,
} from 'redux/contacts/contactSlice';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [createContact] = useCreacteContactMutation();
  const { data } = useFetchContactsQuery();
  const onSubmitForm = async ({ name, number }) => {
    const newContact = { name, number };

    if (
      data.some(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      return alert(`${name} is already in contacts!`);
    }

    return createContact(newContact).unwrap();
  };

  function handleInputChange(event) {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  }

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handelSubmit = event => {
    event.preventDefault();
    onSubmitForm({ name, number });
    reset();
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Form onSubmit={handelSubmit}>
        <Label id={nanoid()} name="name">
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label id={nanoid()}>
          Phone
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </Form>
      <h2>Contacts</h2>
      <Filter />
      {data && <ContactList contacts={data} />}
    </>
  );
}
