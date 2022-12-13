import styled from 'styled-components';

export const Nav = styled.nav`
  padding: 10px 0 0px 0;
`;
export const NavItem = styled.li`
  list-style: none;
  display: inline;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
