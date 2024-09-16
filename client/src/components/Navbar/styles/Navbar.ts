import styled from "styled-components";

const Nav = styled.nav`
    position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 50;
`
const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li``;

const NavButton = styled.button`
  color: white;
  background-color: transparent;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }

  &:focus {
    outline: none;
  }
`