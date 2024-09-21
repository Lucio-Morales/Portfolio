import { NavContainer } from './styles';

const Navbar = () => {
  return (
    <NavContainer>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </NavContainer>
  );
};

export default Navbar;
