import styled from 'styled-components';

const HomeBox = styled.section`
  color: #333;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  text-align: center;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: gray;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: gray;
  }

  @media (min-width: 768px) {
    padding: 4rem 2rem;

    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.3rem;
      margin: 1rem 0; 
  }
`;

const OptionParagraph = styled.p`
  font-size: 1.2rem;
  cursor: pointer;
  margin: 0.5rem 0;
  background-color: transparent;
  padding: 0.75rem 1.5rem;
  border: 1px solid gray;
  border-radius: 12px;
  width: 100%;
  max-width: 400px; /* Aumenta el ancho máximo */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, background-color 0.2s ease;
  white-space: nowrap; /* Evita saltos de línea */
  text-align: left;

  &:hover {
    transform: scale(1.02);
    background-color: #333333;
    color: gray;
  }
`;

export { HomeBox, OptionParagraph };
