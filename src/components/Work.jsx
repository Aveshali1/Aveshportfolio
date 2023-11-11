import React from 'react';
import { data } from "../data/data.js";


const Work = () => {

    // projects file
    const project = data;
    //setProject(data);
  
  return (
    
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent work</p>








        </div>
      

          {/* Project Descriptions */}
          <div className='mb-8 p-6 bg-[#122040] rounded-md shadow-lg'>
          <h2 className='text-2xl font-bold text-white mb-4'>
          Data Analytics with python 

          </h2>
          <p className='text-white'>
          Warranty Data Analysis and Feature Correlations
Interpretations and suggestions to work on the significant issues.
Tech Stack: Python, Matplotlib, Seaborn, Numpy, Pandas, Jupyter Notebook.
          </p>
        </div>

        <div className='mb-8 p-6 bg-[#122040] rounded-md shadow-lg'>
          <h2 className='text-2xl font-bold text-white mb-4'>
          Development of cheapest testing facility for breathing fuction

          </h2>
          <p className='text-white'>
          Breathing operation testing at a very low cost.
Supplier gave the development cost of >3 lacs and a duration of eight weeks.
We developed a simple U-tube manometer using a pressure gauge and a vacuum device
It has been developed within three two days at a cost of less than INR 1000
          </p>
        </div>

        <div className='mb-8 p-6 bg-[#122040] rounded-md shadow-lg'>
          <h2 className='text-2xl font-bold text-white mb-4'>
          Fuel Tank cap breathing system | Automotives

          </h2>
          <p className='text-white'>
          The product could not withstand the required pressure to perform the breathing operation. Design modification of sealing
and spring turned out to have required breathing pressure and vacuum.
The hidden projected area was recalculated to get the corrected force.
Spring design modified to withstand the specified pressure.
          </p>
        </div>
        <div className='mb-8 p-6 bg-[#122040] rounded-md shadow-lg'>
          <h2 className='text-2xl font-bold text-white mb-4'>
          Design and development of fuel tank oscillation setup | Automotive


          </h2>
          <p className='text-white'>
          To check the fuel spillover from the tank, it was required to oscillate it as per the standardized condition to capture the
failure of fuel spillage.
          </p>
        </div>



      </div>
    </div>
  );
};

export default Work;





