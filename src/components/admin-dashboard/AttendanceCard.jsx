import React from 'react'
import ProgressCircle from '../ProgressCircle'
import {LuUsersRound} from "react-icons/lu"

// this component contain hardcoded data instead of api fetch 
function AttendanceCard() {
    return (
      <div className="rounded-16 bg-primary py-5 px-7">
        <h2 className="font-semibold text-heading-6 text-primary mb-5">
          Attendance
        </h2>
        <div className="w-fit mx-auto mb-10">
          <ProgressCircle
            color="#1E00B9"
            backgroundColor="#988ADF"
            size={165}
            strokeWidth={10}
          >
            <ProgressCircle
              color="#B4E13C"
              backgroundColor="#DDF1A5"
              size={125}
              strokeWidth={10}
            >
              <LuUsersRound size={40} color="#8C8A96"></LuUsersRound>
            </ProgressCircle>
          </ProgressCircle>
        </div>
        <div className='flex justify-between'>
            <div className='flex flex-col items-center justify-between'>
                <h3 className='text-heading-6 font-medium text-neutrals'>Learners</h3>
                <h2 className='text-heading-1 font-bold text-primary'>91%</h2>
            </div>
            <div className='flex flex-col items-center justify-between'>
                <h3 className='text-heading-6 font-medium text-neutrals  max-w-[86px]'>Language Buddies</h3>
                <h2 className='text-heading-1 font-bold text-secondary'>95%</h2>
            </div>
        </div>
      </div>
    );
}

export default AttendanceCard
