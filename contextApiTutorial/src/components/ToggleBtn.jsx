import React from "react";
import useTheme from "../contexts/ThemeContext";

const ToggleBtn = () => {
  const { themeMode, darkMode, lightMode } = useTheme();
  console.log(useTheme);

  const handleThemeMode = (e) => {
    console.log(e);
    if (e.target.checked) {
      darkMode();
    } else {
      lightMode();
    }
  };

  return (
    <div
      className={`absolute h-[2rem] w-[4rem]  right-3 top-3 rounded-3xl flex flex-row items-center p-2 cursor-pointer ${
        themeMode === "light" ? "bg-white" : "bg-black justify-end"
      }`}
    >
      <label className="cursor-pointer relative p-4 w-full ">
        <input
          type="checkbox"
          className={` cursor-pointer appearance-none ${
            themeMode === "light" ? "" : ""
          }`}
          checked={themeMode === "dark"}
          onChange={handleThemeMode}
        />
        <span
          className={`absolute top-1/2 transform -translate-y-1/2  h-[1.5rem] w-[1.5rem]  bg-gray-400 rounded-full cursor-pointer ${
            themeMode === "light" ? "left-0" : "right-0"
          }`}
        ></span>
      </label>
    </div>
  );
};

export default ToggleBtn;
