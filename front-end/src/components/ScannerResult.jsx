import React from 'react';
import backgroundImage from './../assets/doctor.png';
import Wheel from './Wheel';


const ScannerResult = () => {

    return (
      
    <div className='min-h-screen flex flex-col'>
      <div className="flex-1 bg-top-color flex flex-col  h-1/2">
          <div className='flex flex-row justify-end w-4/5 md:w-3/5 lg:w-2/5'>
            <p className='text-lg sm:text-xl md:text-2xl lg:text-2xl text-center'>
              According to the answers provided, your child <span className='text-lg sm:text-xl md:text-2xl font-bold'>has Autism.</span>
              Here is a quick observation about your child's behaviors and mental problems in the schema.
            </p>
        </div> 
      </div>

        <div className="flex flex-1 justify-center h-1/2 bg-bottom-color">
        <Wheel/>
      </div>

      <img
        src={backgroundImage}
        alt="Middle Image"
        className="absolute sm:left-1/5 top-1/2 transform -translate-y-1/2 z-10 w-1/4 mt-10"
      />
    </div>
  );
}

export default ScannerResult;
