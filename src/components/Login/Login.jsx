import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useLoginMutation } from 'redux/auth/authAPI';
import { Label, Input, Button, Form } from './Login.styled';
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
      <Form onSubmit={hanleSubmit}>
        <Label id={nanoid()}>
          Email
          <Input
            type="text"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
          />
        </Label>
        <Label id={nanoid()}>
          Password
          <Input
            type="text"
            name="password"
            value={password}
            onChange={handleInputChange}
            required
          />
        </Label>
        <Button type="submit">Login</Button>
      </Form>
    </>
  );
};
