import React from 'react'
import backgroundImage from "./../assets/doctor.png";
import maleIcon from "./../assets/male.png"
import femaleIcon from "./../assets/female.png"


export default function Information() {

    return (  
    <> 
        <div className='min-h-screen flex flex-col '>
            
            <div className="flex-1 bg-top-color flex flex-col justify-around">
                <h1 className="text-black sm:text-lg lg:text-3xl py-7 sm:pr-16 lg:pr-72  ">Please Enter your child information</h1>
                
                <div className="flex flex-col justify-center items-center ">
                    <div className="relative flex flex-col w-80 mb-4 "> 
                         <label htmlFor="input1" className="text-black text-xl absolute bottom-7">Name</label>
                         <input id="input1" type="text" className="p-2 border border-gray-300 rounded-2xl " />
                    </div>
                    
                    <div className=" relative flex flex-col w-80 ">
                         <label htmlFor="input2" className="text-black absolute bottom-12 text-xl ">Age</label>
                         <input id="input2" type="text" className="p-2 border border-gray-300 rounded-2xl mb-4" />
                    </div>
                </div>     
            </div>
            
            <div className="flex-1 bg-bottom-color flex  justify-center">
                
                <div className="flex flex-col justify-start  ">
                    <h2 className="text-black text-3xl text-center flex justify-start">Gender</h2> 
                    <div className="flex space-x-4 justify-evenly mt-6">
                        <button className="bg-blue-300 text-white p-2 w-20 h-10 rounded-xl flex items-center justify-center">
                            <img src={maleIcon} className="w-7 h-7" alt="Male Icon" />
                        </button>
                        <button className="bg-pink-300 text-white p-2 w-20 h-10 rounded-xl flex items-center justify-center">
                            <img src={femaleIcon} className="w-7 h-7" alt="Female Icon" />
                        </button>
                    </div>
                    <div className='flex  justify-between mt-6'>
                            <button className='bg-top-color font-roboto rounded-xl w-16 text-xl text-center'>Back</button>
                            <button className='bg-top-color rounded-xl w-16 text-xl font-roboto'>Next</button>
                    </div>
                </div>
                   
                    
            </div> 
              
            <img src={backgroundImage} 
                     alt="Middle Image" className="absolute left-1/5  top-1/2 transform -translate-y-1/2 z-10 w-1/4 mt-4"/>    
        </div>
    </>
  ) 
}
