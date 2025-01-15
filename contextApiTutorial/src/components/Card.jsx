import React from "react";
import useTheme from "../contexts/ThemeContext";

const Card = () => {
  const { themeMode } = useTheme();
  return (
    <div className="absolute h-[26rem] w-[20rem] rounded-md upper-div text-content top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-custom p-3 text-slate-900 overflow-clip text-center">
      <div className="h-[60%] w-[full] ">
        <img src="/images/card-image.jpg" className="h-full object-cover" />
      </div>
      <div className="h-auto w-full">
        <h3 className="text-center font-bold text-xl mt-2">Vintage card</h3>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ex sint
        </p>
      </div>
    </div>
  );
};

export default Card;
