import { useThemeContext } from '../../styles/theme';

const ThemeButton = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <button onClick={toggleTheme}>
      Cambiar a {theme === 'light' ? 'modo oscuro' : 'modo claro'}
    </button>
  );
};

export default ThemeButton;
