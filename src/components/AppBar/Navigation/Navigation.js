import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Nav, NavItem } from './Navigation.styled';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>
      <Nav>
        {isLoggedIn && (
          <NavItem>
            <NavLink to="/contacts">Contacts</NavLink>
          </NavItem>
        )}
      </Nav>
    </div>
  );
}
