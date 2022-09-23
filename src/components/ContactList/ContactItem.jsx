import { ItemContact, Text, Button } from './ContactItem.styled';
import { useDeleteContactsMutation } from 'redux/contacts/contactSlice';
import { useState } from 'react';
import Modal from 'components/ModalEdit/Modal';
import PropTypes from 'prop-types';

export const ContactItem = ({ id, number, name }) => {
  const [onDeleteContact, { isLoading }] = useDeleteContactsMutation();
 const [showModal, setShowModal] = useState(false);
  
  
  const openModal = (id) => {
    setShowModal(prevState => !prevState)
  }
  const onCloseModal = () => {
    setShowModal(prevState => !prevState)
  }
  return (
    <>
      <ItemContact>
        <Text>
          {name}: {number}
        </Text>
        <div>
           <Button onClick={()=>openModal(id)} type='button'>Edit</Button>
        <Button onClick={() => onDeleteContact(id).unwrap()} type="button">
          {isLoading ? 'Processing...' : 'Delete'}
        </Button>
       
        </div>
        {showModal && <Modal id={id} names={name} numbers={number} onClose={onCloseModal} />}
      </ItemContact>
    </>
  );
};


ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id:PropTypes.string.isRequired,
};
