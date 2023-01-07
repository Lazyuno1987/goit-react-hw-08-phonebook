import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-slice';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import css from './AppBar.module.css'
import Container from 'components/Container/Container';


export const AppBar = () => {
  const isLogin = useSelector(getIsLoggedIn);

  
  
  return (
    <div className={css.background}>
    <Container>
    <header className={css.header}>
      <Navigation />
      {isLogin ? <UserMenu /> : <AuthNav />}
      </header>
      </Container>
      </div>
  );
};
