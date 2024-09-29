import { Outlet } from 'react-router-dom';
import GlobalStyle from './styles/styled-components/GlobalStyle';
import ThemeProvider from './styles/theme/ThemeProvider';
import Header from './components/Header';

function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Outlet />
        <Header />
      </ThemeProvider>
    </>
  );
}

export default App;
