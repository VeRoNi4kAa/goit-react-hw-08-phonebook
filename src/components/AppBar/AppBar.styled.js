import styled from 'styled-components';

export const NavContainer = styled.div`
  border-bottom: solid 1px;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-around;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Nav = styled.nav`
  padding: 10px 0 10px 0;
`;
export const NavItem = styled.li`
  list-style: none;
  display: inline;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
export const Greeting = styled.p`
  font-size: 25px;
`;
