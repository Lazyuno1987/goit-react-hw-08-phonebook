import { nanoid } from 'nanoid';
import { useState } from 'react';
import css from './RegisterPage.module.css';
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
    register({ name, email, password }).unwrap();

    reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label id={nanoid()}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label id={nanoid()}>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          required
        />
      </label>
      <label id={nanoid()} name="password">
        Password
        <input
          type="text"
          name="password"
          value={password}
          onChange={handleInputChange}
          required
        />
      </label>

      <button type="submit">Register</button>
    </form>
  );
};
