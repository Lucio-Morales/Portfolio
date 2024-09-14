import { useContext, createContext } from "react";

const ThemeContext = createContext({
    theme: '',
    toggleTheme: () => {},
})

const useThemeContext = () => useContext(ThemeContext)

export {useThemeContext, ThemeContext} 