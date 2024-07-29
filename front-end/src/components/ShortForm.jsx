import * as React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from "./../assets/doctor.png";

export default function ShortForm() {
  const [value, setValue] = useState(2); // Set default value to 2 (middle of 0-4)
  const navigate = useNavigate();
  const GoFormChoice = ()=>{navigate('/');};
  const GoResult = ()=>{navigate('/ScannerResult');};
  const GoShortFrom = ()=>{navigate('/ShortFrom');};
  const ShortQue = new Array();
  const [ShortQueindex, setShortQueindex] = useState(0);
  let Answer = new Array(ShortQue.length);
  const handleChange = (event) => {
    setValue(Number(event.target.value));
  };

  async function fetchData() {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/short-questions');
      const data = await response.json();
      const questions = data.map(item => item.announcement);
      ShortQue.push(...questions);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchData();
  (async () => {
      await fetchData();
      //console.log(ShortQue); 
      
    })();

  const choices = ['Strongly disagree', 'Disagree', 'Not sure', 'Agree', 'Strongly agree'];
  return (
    <div className="flex flex-col  bg-top-color">
       <div className="flex flex-1 flex-col  bg-top-color h-1/2 mb-24">
        <p className="font-poppins sm:text-lg lg:text-3xl text-center mt-10 ">Question</p>
        <p className="font-poppins text-center mt-5 font-bold">{ShortQueindex + 1}/50</p>
        <p className="font-poppins ml-96 mt-20 text-center">{ShortQue[ShortQueindex]}</p>
         </div>
        <div className="flex flex-1 flex-col bg-white h-1/2 ">
        
            
          <div className="flex flex-col items-center justify-center ml-96 mt-10">
      <div className="relative w-64 ">
        <input
          type="range"
          min="0"
          max="4"
          step="1"
          value={value}
          onChange={handleChange}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer "
        />
        <div className="absolute top-0 left-0 w-full flex justify-between ">
          {choices.map((choice, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full ${
                value === index ? 'bg-gray-700' : 'bg-gray-400'
              }`}
              style={{ transform: 'translateX(-50%)' }}
            />
          ))}
        </div>
      </div>
      <div className="mt-4 text-lg font-semibold text-gray-700 ">
        {choices[value]}
      </div>
      <div className="flex justify-center mt-24 mb-16 w-96">
          <button  onClick={()=>{
            GoFormChoice;setShortQueindex(ShortQueindex - 1)
            if (ShortQueindex==0) GoFormChoice;
          }} className="bg-top-color font-poppins mr-40 h-10 rounded-xl w-24 text-xl text-center shadow-md cursor-pointer hover:bg-top-button-color">Back</button>
          <button  onClick = {()=>{
            switch (value) {
              case 0:
                Answer[ShortQueindex] = -2;
                break;
              case 1:
                Answer[ShortQueindex] = -1;
                break;
              case 2:
                Answer[ShortQueindex] = 0;
                break;
              case 3:
                Answer[ShortQueindex] = 1;
                break;
              case 4:
                Answer[ShortQueindex] = 2;
                break;
            
              default:
                break;
            }
            if (ShortQueindex < ShortQue.length - 1) {
              setShortQueindex(ShortQueindex + 1);
            } else {
              GoResult();
            }
          }} className="bg-top-color rounded-xl w-24 text-xl ml-10 font-poppins shadow-md cursor-pointer hover:bg-top-button-color">Next</button>
        </div>
    </div>
  
          
        </div>
        <img src={backgroundImage} alt="Middle Image" className="absolute left-1/5 top-1/2 transform ml-20 -translate-y-1/2 z-10 w-1/4"/>
    </div>
  );
}

