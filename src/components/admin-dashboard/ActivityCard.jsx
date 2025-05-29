import React from 'react'
import ProgressCircle from '../ProgressCircle';

// this component contain hardcoded data instead of api fetch 
function ActivityCard() {
    return (
      <div className="rounded-16 bg-primary py-5 px-7">
        <h2 className="text-heading-6 font-semibold text-primary mb-2">
          Overall Activity
        </h2>
        <p className="text-balance font-medium text-neutrals mb-3">
          Hours spent by organizations starting from January
        </p>
        <div className='mx-auto w-fit'>
            <ProgressCircle color="#1E00B9" backgroundColor="#988ADF" size={140} strokeWidth={10}>
            <h2 className=" font-extrabold text-heading-2 max-w-[100px] text-primary text-center text-wrap leading-10">
                200 Hours
            </h2>
            </ProgressCircle>
        </div>
      </div>
    );
}

export default ActivityCard
