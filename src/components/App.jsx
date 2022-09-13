import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useGetContactsQuery } from 'redux/contactSlice';
export default function App() {
  const { data } = useGetContactsQuery()

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {data && < ContactList contacts={data} />}
    </div>
  );
}
