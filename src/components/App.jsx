import ContactForm from './ContactForm/ContactForm';
import { Routes, Route } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { RegisterPage } from './Register/RegisterPage';
import { Login } from './Login/Login';
import { useFetchCurrentUserQuery } from 'redux/auth/authAPI';
import {  useSelector } from 'react-redux';
import { getToken } from 'redux/auth/auth-slice';
import PrivateRoute from './Routes/PrivatRoute';
import PublicRoute from './Routes/PublicRoute';
import { useFetchContactsQuery } from 'redux/contacts/contactSlice';




export default function App() {
  const token = useSelector(getToken);


    useFetchCurrentUserQuery(null, { skip: !token });
     const { data } = useFetchContactsQuery();
 
 
  
  return (
    <>
      <AppBar />
    
      <Routes>

         <Route
          path="register"
          element={
            <PublicRoute restricted>
              <RegisterPage />
             </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
             <PublicRoute restricted>
              <Login />
             </PublicRoute>
          }
        />
        <Route
          path="contacts"
          element={
             <PrivateRoute>
              <ContactForm data={data} />
             </PrivateRoute>
          }
        />
       
        </Routes>
  
    </>
  );
}
