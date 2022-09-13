import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, Label, Input, Button } from './ContactForm.styled';
import { useAddContactMutation, useGetContactsQuery } from 'redux/contactSlice';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');
  const [createContact] = useAddContactMutation();
  const { data } = useGetContactsQuery();

  const onSubmitForm = async ({ name, phone }) => {
    const newContact = { name, phone };

    if (
      data.some(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      return alert(`${name} is already in contacts!`);
    }
    return createContact(newContact);
  };

  function handleInputChange(event) {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
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
    onSubmitForm({ name, phone });
    reset();
  };

  return (
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
        Number
        <Input
          type="tel"
          name="phone"
          value={phone}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
}
