import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import PropTypes from 'prop-types';

export const PublicRoute = ({ children }) => {
  const IsLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return !IsLoggedIn ? children : <Navigate to="/contacts" />;
};

PublicRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
