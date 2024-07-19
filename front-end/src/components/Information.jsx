import React from 'react'
import backgroundImage from "./../assets/doctor.png";
import maleIcon from "./../assets/male.png"
import femaleIcon from "./../assets/female.png"


export default function Information() {

    return (  
    <>
        <div className='min-h-screen flex flex-col'>
            
            <div className="flex-1 bg-top-color flex justify-around">
                <h1 className="text-black sm:text-lg lg:text-3xl py-7 sm:pr-16 lg:pr-52  ">Please Enter your child information</h1>
                
                <div className="flex flex-col  justify-end">
                    <div className="flex flex-col"> 
                         <label htmlFor="input1" className="text-black ">Name</label>
                         <input id="input1" type="text" className="p-2 border border-gray-300 rounded-2xl " />
                    </div>
                    <div className="flex flex-col">
                         <label htmlFor="input2" className="text-black ">Age</label>
                         <input id="input2" type="text" className="p-2 border border-gray-300 rounded-2xl mb-4" />
                    </div>
                </div>     
            </div>
            
            <div className="flex-1 bg-bottom-color flex  justify-center">
                <div className="flex flex-col items-center space-y-4">
                    <h2 className="text-black text-3xl">Gender</h2> 
                    <div className="flex space-x-4">
                        <button className="bg-blue-300 text-white p-2 w-14 h-8 rounded-2xl flex items-center justify-center">
                            <img src={maleIcon} className="w-7 h-7" alt="Male Icon" />
                        </button>
                        <button className="bg-pink-300 text-white p-2 w-14 h-8 rounded-2xl flex items-center justify-center">
                            <img src={femaleIcon} className="w-7 h-7" alt="Female Icon" />
                        </button>
                    </div>
                </div>
            </div> 
              
            <img src={backgroundImage} 
                     alt="Middle Image" className="absolute left-1/5  top-1/2 transform -translate-y-1/2 z-10 w-1/4"/>    
        </div>
    </>
  ) 
}
