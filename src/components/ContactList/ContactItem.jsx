import { ItemContact, Text, Button } from './ContactItem.styled';
import { useDeleteContactMutation } from 'redux/contactSlice';

export const ContactItem = ({ id, phone, name }) => {
  const [onDeleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <>
      <ItemContact>
        <Text>
          {name}: {phone}
        </Text>
        <Button onClick={() => onDeleteContact(id)} type="button">
          {isLoading ? 'Processing...' : 'Delete'}
        </Button>
      </ItemContact>
    </>
  );
};
