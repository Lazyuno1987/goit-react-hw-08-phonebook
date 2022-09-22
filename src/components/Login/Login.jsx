import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useLoginMutation } from 'redux/auth/authAPI';
import css from './Login.module.css';
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
    <>
      <form onSubmit={hanleSubmit} className={css.form}>
        <label id={nanoid()}>
          Email
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label id={nanoid()}>
          Password
          <input
            type="text"
            name="password"
            value={password}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
};
