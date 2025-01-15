import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import ToggleBtn from "./components/ToggleBtn";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
  const [themeMode, setThemeMode] = useState("light");
  const darkMode = () => {
    setThemeMode("dark");
  };
  const lightMode = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, darkMode, lightMode }}>
      <div className="h-[100vh] w-[100vw] upper-div flex flex-col">
        <div className="h-[70vh] w-full flex flex-col lower-div text-content p-4">
          <h1 className="text-center text-4xl underline heading font-semibold">
            Welcome to React Context api tutorial!
          </h1>
          <Card />
          <ToggleBtn />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
