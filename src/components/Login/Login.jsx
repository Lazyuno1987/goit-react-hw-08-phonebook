
import { useState } from 'react';
import Container from 'components/Container/Container';
import { useLoginMutation } from 'redux/auth/authAPI';
import css from './Login.module.scss'
export const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logIn] = useLoginMutation();

  const hanleSubmit = ev => {
    ev.preventDefault();
    logIn({ email, password }).unwrap();

    setEmail('');
    setPassword('');

  };
  function handleInputChange({ target: { name, value } }) {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  }
  return (
<div className={css.background}>
      <Container>
      <form className={css.form} onSubmit={hanleSubmit}>
        <input
          className={css.input}
            type="text"
            name="email"
             placeholder='Email'
            value={email}
            onChange={handleInputChange}
            required
          />
     
        <input
          className={css.input}
            type="text"
            name="password"
            value={password}
            placeholder='Password'
            onChange={handleInputChange}
            required
          />
      
        <button className={css.button} type="submit">Login</button>
      </form>
        </Container>
       </div>
   
  );
};
