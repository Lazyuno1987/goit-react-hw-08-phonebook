import { useDispatch, useSelector } from 'react-redux';
import defaultAvatar from './avatar.png';
import { useLogoutMutation } from 'redux/auth/authAPI';
import { getUsername } from 'redux/auth/auth-slice';
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);
  const [logOut] = useLogoutMutation();

  const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Wellcom {name}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </button>
    </div>
  );
};
