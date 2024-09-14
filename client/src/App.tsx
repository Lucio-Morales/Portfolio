import Button from './components/Button';
import GlobalStyle from './styles/styled-components/GlobalStyle';
import ThemeProvider from './styles/theme/ThemeProvider';

function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Button />
      </ThemeProvider>
    </>
  );
}

export default App;
