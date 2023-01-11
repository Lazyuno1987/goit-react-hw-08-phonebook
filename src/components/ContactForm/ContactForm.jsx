// import { useState } from 'react';
// import * as yup from 'yup';
// import {
//   useFetchContactsQuery,
//   useCreacteContactMutation,
// } from 'redux/contacts/contactSlice';
// import { Filter } from 'components/Filter/Filter';
// import { ContactList } from 'components/ContactList/ContactList';
// import Container from 'components/Container/Container';
// import css from './ContactForm.module.scss'




// export default function ContactForm() {

//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [errors, setErrors] = useState('')
//   const [createContact] = useCreacteContactMutation();

//   const {data} = useFetchContactsQuery()

//    let schema = yup.object().shape({
//   name: yup.string().max(15,  'Name must contain 15 characters or less').required('Name is required'),
//   phone: yup.string().max(15,  'Phone must contain 15 characters or less').required('Phone is required'),
//   });
  

  
 
  
//   const onSubmitForm = async (value) => {

    
//     const newContact = { name, phone };


//     if (
//      data?.data?.result?.some(contact => contact.name.toLowerCase() === value.name.toLowerCase())
//     ) {
//       return alert(`${name} is already in contacts!`);
//     }
  
     
//     return createContact(newContact).unwrap();
//   };

//   function handleInputChange(event) {
//     const { name, value } = event.currentTarget;
//       schema.validate( name, phone )
//       .catch((err) => {
        
//           console.log(err.errors)
//           setErrors(err.errors) 
//           return
        
     
     
//     });
 
//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'phone':
//         setPhone(value);
//         break;
//       default:
//         return;
//     }
//   }

//   const reset = () => {
//     setName('');
//     setPhone('');
//   };

//   const handelSubmit = event => {
//     event.preventDefault();
//     onSubmitForm({ name, phone });
//     reset();
//   };

//   return (
//     <div className={css.background}>
//       <Container>
//       <h1 className={css.first_title}>Add contact</h1>
//       <form className={css.form} onSubmit={handelSubmit} >
       
//           <input
//             className={css.input}
//             type="text"
//             name="name"
//             value={name}
//             placeholder=" Contact name"
//             onChange={handleInputChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//           {errors!=='' ? <span style={{color:'red'}}>{errors }</span> : null}
       
//           <input
//             className={css.input}
//             type="tel"
//             name="phone"
//             placeholder='Phone number'
//             value={phone}
//             onChange={handleInputChange}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//       {errors!=='' && <span style={{color:'red'}}>{errors }</span>}
//         <button className={css.button} type="submit">Add contact</button>
//       </form>
      
//       <Filter />
//       {data?.data && <ContactList contacts={data?.data?.result} />}
//      </Container>
//     </div>
//   );
// }


import { useState } from 'react';
import * as yup from 'yup';
import {

  useCreacteContactMutation,
} from 'redux/contacts/contactApi';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import Container from 'components/Container/Container';
import css from './ContactForm.module.scss'
import { useSelector } from 'react-redux';




export default function ContactForm() {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState('')
  const [createContact] = useCreacteContactMutation();
  const {data} = useSelector(state => state.contacts.contacts)
//  console.log(data)
  // const {data} = useFetchContactsQuery()

   let schema = yup.object().shape({
  name: yup.string().max(15,  'Name must contain 15 characters or less').required('Name is required'),
  phone: yup.string().max(15,  'Phone must contain 15 characters or less').required('Phone is required'),
  });
  

  
 
  
  const onSubmitForm = async (value) => {

    
    const newContact = { name, phone };


    if (
    //  data?.data?.result?.some(contact => contact.name.toLowerCase() === value.name.toLowerCase())
       data?.results?.some(contact => contact.name.toLowerCase() === value.name.toLowerCase())) {
      return alert(`${name} is already in contacts!`);
    }
  
     
    return createContact(newContact).unwrap();
  };

  function handleInputChange(event) {
    const { name, value } = event.currentTarget;
      schema.validate( name, phone )
      .catch((err) => {
        
        
          setErrors(err.errors) 
          return
        
     
     
    });
 
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  }

  const reset = () => {
    setName('');
    setPhone('');
  };

  const handelSubmit = event => {
    event.preventDefault();
    onSubmitForm({ name, phone });
    reset();
  };

  return (
    <div className={css.background}>
      <Container>
      <h1 className={css.first_title}>Add contact</h1>
      <form className={css.form} onSubmit={handelSubmit} >
       
          <input
            className={css.input}
            type="text"
            name="name"
            value={name}
            placeholder=" Contact name"
            onChange={handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          {errors!=='' ? <span style={{color:'red'}}>{errors }</span> : null}
       
          <input
            className={css.input}
            type="tel"
            name="phone"
            placeholder='Phone number'
            value={phone}
            onChange={handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
      {errors!=='' && <span style={{color:'red'}}>{errors }</span>}
        <button className={css.button} type="submit">Add contact</button>
      </form>
      
      <Filter />
      {data && <ContactList contacts={data?.result} />}
     </Container>
    </div>
  );
}

