import { useSelector } from 'react-redux';
import Navigation from './Navigation/Navigation';
import NavAuth from './NavAuth/NavAuth';
import UserMenu from './UserMenu';
import { authSelectors } from 'redux/auth';
import { NavContainer, Greeting } from './AppBar.styled';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>
      <nav>
        <NavContainer>
          <Navigation />
          {!isLoggedIn && (
            <Greeting>Please login or register to use the phone book.</Greeting>
          )}
          {!isLoggedIn ? <NavAuth /> : <UserMenu />}
        </NavContainer>
      </nav>
    </div>
  );
}
