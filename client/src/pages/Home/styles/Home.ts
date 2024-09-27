import styled from 'styled-components';

const HomeBox = styled.section`
  color: gray;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  text-align: center;

  h1 {
    font-weight: 100;
    font-size: 3.4rem;
    margin-bottom: 1rem;
    color: #ffffff; /* Blanco para el título */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 100;
    margin-bottom: 1.5rem;
    color: #e0e0e0;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 768px) {
    padding: 4rem 2rem;

    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 2.2rem;
    }
  }
`;

const OptionParagraph = styled.p`
  font-weight: normal;
  font-size: 1.1rem;
  cursor: pointer;
  margin: 0.5rem 0;
  background-color: transparent;
  padding: 0.75rem 1.5rem;
  border: 0.2rem solid #333333;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, background-color 0.2s ease;
  white-space: nowrap;
  text-align: left;

  span {
    color: #1f1f1f;
    padding: 0.2rem;
    font-weight: bold;
    margin-right: 0.7rem;
  }

  &:hover {
    transform: scale(1.02);
    background-color: #333333;
    color: #e0e0e0;
  }

  @media (min-width: 768px) {
    max-width: 500px;
    padding: 1rem 2rem;
  }
`;

export { HomeBox, OptionParagraph };
