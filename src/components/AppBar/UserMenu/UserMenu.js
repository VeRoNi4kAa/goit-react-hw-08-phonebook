import { useSelector, useDispatch } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { authOperations } from 'redux/auth';
import { UserContainer, LogButton } from './UserMenu.styled';

export default function UserMenu() {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  return (
    <>
      <UserContainer>
        <p>Welcome, {name} </p>
        <LogButton
          type="button"
          onClick={() => dispatch(authOperations.logOut())}
        >
          Logout
        </LogButton>
      </UserContainer>
    </>
  );
}
