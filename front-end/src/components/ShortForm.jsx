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
  const ShortQue = ['• Does your child look at you when you call his or her name?', '• Does your baby seem interested in other babies his or her age?', '• When you are pointing at something, does your child follow your gaze to see what you are pointing at?', '• Is your child able to start a social exchange with other children?', '• Does your child often appear as if he is in his own world?', '• When your child expresses his/her feelings, for instance by crying or smiling, is that mostly on expected and appropriate moments?', '• When your child has been left alone for some time, does he/she try to attract your attention, for instance by crying or calling?', '• Does your child react when spoken to, for instance, by looking, listening, smiling, speaking or babbling?', '• Does your child ever use his/her index finger to point, to indicate interest in something?', '• Does your baby try to get your attention to show you something interesting?', '• Does your baby ignore loud or startling sounds?', '• Is your child sensitive to painful experiences such as hitting his or her head?', '• Does your child react in a normal way to sensory stimulation, such as (coldness, warmth), light, sound, pain or tickling?', '• Does your child watch rotating objects such as a fan or wheels for long periods', '• Does your baby rock his or her body back and forth over and over?', '• Does your baby get stuck doing a simple activity over and over?', '• Does your baby seem to get stuck on playing with a part of a toy (such as an eyeball, label, wheel or tag), instead of the whole toy?', '• Does your child ever pretend, for example, to make a cup of tea using a toy cup and teapot, or pretend other things?', '• Does your child copy you by washing dishes, pretending to cook or take out the garbage, etc.?', '• Does your child imitate your facial gestures', '• Does your baby easily joins when you introduce him/her to a new game (like peek-a-boo etc.)', '• Does your child, on his/her own accord, ever bring objects over to you or show you something?', '• If you or someone else in the family is visibly upset, does your child show signs of wanting to comfort them? (e.g. stroking hair, hugging them)', '• Does your child show affection by cuddling up to you?', '• Does your child smile when you praise him/her? 0 1 2 3', '• In new or strange situations, does your baby look at your face for comfort?']
  const [ShortQueindex, setShortQueindex] = useState(0);
  let Answer = new Array(ShortQue.length);
  const handleChange = (event) => {
    setValue(Number(event.target.value));
  };
  

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
              console.log(Answer[ShortQueindex]);
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