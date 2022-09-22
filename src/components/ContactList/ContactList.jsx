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
          {onFiltr().map(({ name, number, id }) => {
            return (
              <ContactItem key={nanoid()} name={name} number={number} id={id} />
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
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
