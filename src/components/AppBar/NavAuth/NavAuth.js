import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from './NavAuth.styled';
import '../AppBar.css';

export default function NavAuth() {
  return (
    <div>
      <Nav>
        <ul>
          <NavItem>
            <NavLink to="/register" className="notActive">
              Register
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/login" className="notActive">
              Login
            </NavLink>
          </NavItem>
        </ul>
      </Nav>
    </div>
  );
}
