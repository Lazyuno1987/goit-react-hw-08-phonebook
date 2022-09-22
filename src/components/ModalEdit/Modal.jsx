import { ModalBack, ModalContent } from './Modal.styled';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
//import { useSelector } from 'react-redux';
import { useUpdateContactMutation, useFetchContactsQuery } from 'redux/contacts/contactSlice';
import { Form, Label, Input, Button } from './Modal.styled';
import { nanoid } from 'nanoid';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, names, numbers, id }) {
  //console.log(name)
 // console.log(id)
  const contactId = id;
  const { data } = useFetchContactsQuery();
  const [name, setNameNew] = useState(names);
  const [number, setNumberNew] = useState(numbers);
  const [changeContact] = useUpdateContactMutation();
  //const { data } = useFetchContactsQuery();
  console.log(name)
  console.log(contactId)
  
  const contact = data.find(el => el.id === contactId);
 
console.log(contact)
  const onSubmitForm =  (values) => {
    console.log(values)
    console.log(changeContact({values, id: contactId}))
 data.some(
      contact => contact.name === names && contact.id !== id,
    )
      ? alert(`${name} is already in the contact's list.`)
      : changeContact({values, id: contactId}).unwrap();
    onClose()
  };

  function handleInputChange({target} ) {
     target.name === 'name'
      ? setNameNew(target.value)
      : setNumberNew(target.value);
  }

  const reset = () => {
    setNameNew('');
    setNumberNew('');
  };

  const handelSubmit = (evt) => {
    evt.preventDefault();
    onSubmitForm({ name, number});
     reset();
  };

    const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <ModalBack onClick={handleBackdropClick}>
      <ModalContent>
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

        <Button  type="submit">Edit contact</Button>
      </Form>
      </ModalContent>
    </ModalBack>,
    modalRoot
  );
}

Modal.propTypes = {

  onClose: PropTypes.func.isRequired,
};