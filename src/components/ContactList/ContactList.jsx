import { List } from './ContactList.styled';
import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';

export const ContactList = ({ contacts }) => {

  const data = useSelector(state => state.filter.value);
  const normalizedFilter = data.toLowerCase();

  const onFiltr = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      {contacts.length > 0 && (
        <List>
          {onFiltr().map(({ name, phone, _id }) => {
            return (
              <ContactItem key={nanoid()} name={name} phone={phone} id={_id} />
            );
          })}
        </List>
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      phone: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
