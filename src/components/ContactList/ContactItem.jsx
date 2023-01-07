import { ItemContact, Text, Button } from './ContactItem.styled';
import { useDeleteContactsMutation } from 'redux/contacts/contactSlice';
import { useState } from 'react';
import Modal from 'components/ModalEdit/Modal';
import PropTypes from 'prop-types';
import { RiEditFill } from 'react-icons/ri';
import { RiDeleteBin5Fill } from 'react-icons/ri';



export const ContactItem = ({ id, phone, name }) => {
  const [onDeleteContact] = useDeleteContactsMutation();
 const [showModal, setShowModal] = useState(false);
  
  

  
 

  
  const openModal = (id) => {
    setShowModal(prevState => !prevState)
  }
  const onCloseModal = () => {
    setShowModal(prevState => !prevState)
  }
  return (
   
      <ItemContact>
        <Text>
      {name}
      </Text>
      <Text>
      {phone}
        </Text>
        <div>
        <Button onClick={() => openModal(id)} type='button'><i>{<RiEditFill/> }</i></Button>
        <Button onClick={() => onDeleteContact(id).unwrap()} type="button">
          <i>{<RiDeleteBin5Fill/> }</i>
          {/* {isLoading ? 'Processing...' : 'Delete'} */}
        </Button>
       
        </div>
        {showModal && <Modal id={id} names={name} phones={phone} onClose={onCloseModal} />}
      </ItemContact>
  
  );
};


ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id:PropTypes.string.isRequired,
};
