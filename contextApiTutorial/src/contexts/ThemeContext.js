import { createContext, useContext } from "react";

// creating context for theme
export const ThemeContext = createContext({
  themeMode: "light",
  darkMode: () => {},
  lightMode: () => {},
});

// creating provider for theme

export const ThemeProvider = ThemeContext.Provider;

// creating custom hook for themeContext
export default function useTheme() {
  return useContext(ThemeContext);
}
