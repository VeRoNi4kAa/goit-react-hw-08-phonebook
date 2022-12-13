import styled from 'styled-components';

export const Nav = styled.nav`
  padding: 25px 0 10px 0;
`;
export const NavItem = styled.div`
  list-style: none;
  display: inline;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
