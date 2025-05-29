import React from 'react'
import ProgressCircle from '../ProgressCircle';
import { TOTAL_HOURS } from '@/constants/constants';

function HoursSpentCard({user}) {
  const {hours_spent}=user
        return (
          <div className="w-full p-6 flex flex-col items-center bg-primary rounded-16">
            <h2 className="text-heading-1 text-primary">Hours spent</h2>
            <p className="font-medium text-base text-neutrals mb-5">
              Hours spent by Learner over this program.
            </p>
            <div>
              <ProgressCircle
                size={197}
                color="#1E00B9"
                backgroundColor="#988ADF"
                progress={hours_spent/TOTAL_HOURS*100}
              >
                <h2 className="font-bold text-heading-1 max-w-[145px] text-primary text-center text-wrap leading-10">
                  {hours_spent} Hours
                </h2>
              </ProgressCircle>
            </div>
          </div>
        );
}

export default HoursSpentCard
