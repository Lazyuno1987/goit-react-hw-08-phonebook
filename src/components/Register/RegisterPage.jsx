import { nanoid } from 'nanoid';
import { useState } from 'react';
import Container from 'components/Container/Container';
import css from './RegisterPage.module.scss'
import { useRegisterMutation } from '../../redux/auth/authAPI';

export const RegisterPage = () => {
  const [register] = useRegisterMutation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  
  const handleInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    register({ name, email, password, id:nanoid() }).unwrap();
    reset();

  };
 

  return (
     <div className={css.background}>
      <Container>
        
    <form className={css.form} onSubmit={handleSubmit} >
     
        <input
          className={css.input}
          type="text"
          placeholder='Name'
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
    
   
   
        <input
          className={css.input}
          type="email"
          name="email"
          placeholder='Email'
          value={email}
          onChange={handleInputChange}
          required
        />
   
     
        <input
          className={css.input}
          type="text"
          placeholder='Password'
          name="password"
          value={password}
          onChange={handleInputChange}
          required
        />
   

      <button className={css.button} type="submit">Register</button>
      </form>
      </Container>
       </div>
  );
};
