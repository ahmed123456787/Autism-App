import React from 'react'
import backgroundImage from "./../assets/doctor.png";

const QuestionForm = () => {

    return (
      
        <div className='min-h-screen flex flex-col'>
            <div className="flex-1 bg-top-color flex flex-col justify-start pt-14 ">
                <h1 className='text-center text-2xl'>choose the form type</h1>
                <div className='flex flex-row w-full justify-around  bg-blue-300 ml-36' >
                    <div className='flex justify-start '>
                    <button className='h-16 w-96 rounded-2xl font-bold text-2xl bg-input-color '>Long Form</button>
                    </div>
                    </div>
            </div>

            <div className="flex flex-1 bg-bottom-color  justify-around ">
                <div className='flex flex-col w-1/3 justify-start bg-blue-300 ml-64' >
                    <button className='w-full h-16 rounded-2xl font-bold text-2xl bg-input-color '>Long Form</button>
                    <div className='flex justify-between '>
                    <button className='bg-top-color rounded-xl h-8 w-16 sm:w-20 md:w-24 text-sm sm:text-lg md:text-xl text-center'>Back</button>
                    <button className='bg-top-color rounded-xl h-8 w-16 sm:w-20 md:w-24 text-sm sm:text-lg md:text-xl text-center '>Next</button>

                    </div>
                </div>
    
            </div>
            <img
                src={backgroundImage}
                alt="Middle Image"
                className="absolute sm:left-1/5  top-1/2 transform -translate-y-1/2 z-10 w-1/4"
            />
        </div>
    );
}

export default QuestionForm