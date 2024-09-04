import React from 'react';
import backgroundImage from "./../assets/doctor.png";
import maleIcon from "./../assets/male.png";
import femaleIcon from "./../assets/female.png";
 

export default function Information() {    
  return ( 

    <div className='min-h-screen flex flex-col'>
        <div className="flex-1 bg-top-color flex flex-col justify-around ">
           <h1 className="text-black text-base sm:text-lg md:text-2xl lg:text-3xl py-7 sm:pr-16 flex justify-around">
               Please Enter your child information
            </h1>
            <div className="flex flex-col justify-center items-center sm:ml-16 md:ml-24 lg:ml-48">
                  <div className="relative flex flex-col sm:w-62 md:w-72 lg:w-80 mb-4">
                      <label htmlFor="input1" className="text-black text-sm sm:text-lg md:text-xl absolute bottom-7 pl-8">Name</label>
                      <input id="input1" type="text" className="p-2 border border-gray-300 rounded-2xl bg-input-color" />
                  </div>
            <div className="relative flex flex-col sm:w-62 md:w-72 lg:w-80">
                      <label htmlFor="input2" className="text-black text-sm sm:text-lg md:text-xl absolute bottom-12 pl-8">Age</label>
                      <input id="input2" type="text" className="p-2 border border-gray-300 rounded-2xl mb-4 bg-input-color" />
            </div>
        </div>
      </div>

      <div className="flex flex-1 bg-bottom-color  justify-center">
        <div className='flex flex-col mt-2'>
          <h2 className="text-black text-lg sm:text-xl md:text-2xl text-center">Gender</h2>
          <div className="flex justify-evenly sm:w-62 md:w-72 lg:w-80 sm:ml-16 md:ml-24 lg:ml-48 mt-4">
              <button className="bg-blue-300 text-white p-2 w-16 h-8 sm:w-24 sm:h-12 md:w-20 md:h-12 rounded-xl flex items-center justify-center">
                  <img src={maleIcon} className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" alt="Male Icon" />
              </button>
              <button className="bg-pink-300 text-white p-2 w-16 h-8 sm:w-24 sm:h-12 md:w-20 md:h-12 rounded-xl flex items-center justify-center">
                 <img src={femaleIcon} className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" alt="Female Icon" />
              </button>
          </div>
          <div className='flex justify-between sm:w-62 md:w-72 lg:w-80 sm:ml-16 md:ml-24 lg:ml-48 space-x-4 mt-6 '>
            <button className='bg-top-color rounded-xl h-8 w-16 sm:w-20 md:w-24 text-sm sm:text-lg md:text-xl text-center'>Back</button>
            <button className='bg-top-color rounded-xl h-8 w-16 sm:w-20 md:w-24 text-sm sm:text-lg md:text-xl text-center '>Next</button>
         </div>
      </div>
        
      </div>     
        <img
          src={backgroundImage}
          alt="Middle Image"
          className="absolute sm:left-1/5  top-1/2 transform -translate-y-1/2 z-10 w-1/4 mt-4  "
        />
    </div>
  );
}

