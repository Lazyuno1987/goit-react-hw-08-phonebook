import { useDispatch, useSelector } from 'react-redux';
import defaultAvatar from './avatar.png';
import {  useLogoutMutation } from 'redux/auth/authAPI';
import { getUsername } from 'redux/auth/auth-slice';
import Exit from '../../assets/Exit-min.svg'
import css from './UserMenu.module.scss'








export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);
   
  const [logOut] = useLogoutMutation();

 
 
  const avatar = defaultAvatar;

  return (
    <div className= {css.container}>
      <img src={avatar} alt="" width="32" className= {css.avatar} />
      <span className={css.name}>Wellcome {name}</span>
     
      {/* <button className={css.button} type="button" onClick={() => dispatch(logOut())}> */}
 <img src={Exit} className={css.exit} alt='exit' onClick={() => dispatch(logOut())} />
      {/* </button> */}
    </div>
  );
};


