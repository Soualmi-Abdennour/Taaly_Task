import React from 'react'
import ProgressCircle from '../ProgressCircle';
import { TOTAL_CREDIT } from '@/constants/constants';

function CreditSpentCard({user}) {
  const {credit_spent}=user
    return (
      <div className="w-full p-6 flex flex-col items-center bg-primary rounded-16">
        <h2 className="text-heading-1 font-semibold text-secondary">Credit spent</h2>
        <p className="font-medium text-base text-neutrals mb-5">
          Credit spent by Learner over this program.
        </p>
        <div>
          <ProgressCircle progress={credit_spent/TOTAL_CREDIT *100} size={197} color="#B4E13C" backgroundColor="#DDF1A5">
            <h2 className='font-bold text-heading-1 max-w-[145px] text-secondary text-center text-wrap leading-10'>{TOTAL_CREDIT-credit_spent} Remain ing</h2>
          </ProgressCircle>
        </div>
      </div>
    );
}

export default CreditSpentCard
