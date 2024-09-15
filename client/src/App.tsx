import { Outlet } from 'react-router-dom';
import GlobalStyle from './styles/styled-components/GlobalStyle';
import ThemeProvider from './styles/theme/ThemeProvider';

function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
