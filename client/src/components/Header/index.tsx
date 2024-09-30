import styled from 'styled-components';
import ThemeButton from '../ThemeButton/ThemeButton';

const HeaderContainer = styled.header`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #030301;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  padding: 0 16px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const HeaderButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 12h16M4 6h16M4 18h16" />
        </svg>
      </HeaderButton>
      <HeaderButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </HeaderButton>
      <HeaderButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12l5 5L20 7" />
        </svg>
      </HeaderButton>
      {/* <ThemeButton /> */}
    </HeaderContainer>
  );
};

export default Header;
