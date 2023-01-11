import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-slice';
// import { useNavigate } from "react-router-dom";


export default function PrivateRoute({ children }) {
  // const navigate = useNavigate();

 



  const isLoggedIn = useSelector(getIsLoggedIn);
   
    return isLoggedIn ? children : <Navigate to={'/login'} />;
  //return isLoggedIn ? children : navigate("login");
}