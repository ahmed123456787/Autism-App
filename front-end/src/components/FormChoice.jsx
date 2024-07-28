import * as React from "react";
import { useNavigate } from 'react-router-dom';
import  { useState } from 'react';
import backgroundImage from "./../assets/doctor.png";

export default function FormChoice() {
  const navigate = useNavigate();
  const GoToShortForm = ()=>{navigate('/ShortForm');};
  const GoToLongForm = ()=>{navigate('/LongForm');};
  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => {
    setIsToggled(prevState => !prevState);
  };
  return (
    <div className="flex flex-col min-h-screen bg-top-color">
       <div className="flex flex-1 flex-col bg-top-color h-1/2">
        <p className="font-poppins sm:text-lg lg:text-3xl text-center mt-10 ">Choose the form type</p>
        <div className="flex justify-center mt-auto mb-10 group">
          <button onClick={GoToShortForm} className="bg-top-button-color rounded-xl w-96 h-20 ml-96 shadow-md cursor-pointer font-poppins font-bold hover:bg-top-button-hover ">
          <span className="group-hover:hidden">Short Form</span>
          <span className="hidden group-hover:inline">This is a quick and less accurate test</span>
          </button>
        </div>
         </div>
        <div className="flex flex-1 flex-col bg-white h-1/2">
        <div className="flex justify-center mt-10 mb-10 group">
          <button onClick={GoToLongForm} className="bg-bottom-button-color rounded-xl w-96 h-20 ml-96 shadow-md cursor-pointer font-poppins font-bold hover:bg-bottom-button-hover">
          <span className="group-hover:hidden">Long Form</span>
          <span className="hidden group-hover:inline">This is a long and more accurate test</span>
          </button>
        </div>
        
        </div>
        <img src={backgroundImage} alt="Middle Image" className="absolute left-1/5  top-1/2 transform ml-20 -translate-y-1/2 z-10 w-1/4"/>
    </div>
  );
}

