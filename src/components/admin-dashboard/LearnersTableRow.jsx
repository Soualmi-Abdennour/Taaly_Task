import Image from 'next/image'
import React from 'react'
import ProgressCircle from '../ProgressCircle'
import { LuArrowRight } from 'react-icons/lu'
import { TOTAL_HOURS } from '@/constants/constants';
import Link from 'next/link';

// width values uses for fields are in sync with the LEARNERS_TABLE_TABS width values with total=93% (7% for space-between)

function LearnersTableRow({ learner }) {
  const {
    profile_img,
    full_name,
    level,
    program,
    organization,
    rating,
    hours_spent,
    user_id
  } = learner;
  return (
    <div className="flex items-center justify-between w-full">
      <div className="w-[7%]">
        <Image
          src={profile_img}
          width={50}
          height={50}
          className="rounded-full"
        ></Image>
      </div>
      <h2 className="font-medium text-heading-6 text-body  w-[20%]">
        {full_name}
      </h2>
      <h2 className="font-medium text-heading-6 text-body  w-[15%]">
        {level}
      </h2>
      <h2 className="font-medium text-heading-6 text-body  w-[12%]">
        {program}
      </h2>
      <h2 className="font-medium text-heading-6 text-body  w-[15%]">
        {organization}
      </h2>
      <h2 className="font-medium text-heading-6 text-body w-[7%]">
        {rating}/10
      </h2>
      <div className="w-[12%] flex justify-start">
        <ProgressCircle
          size={55}
          strokeWidth={4}
          color="#04001A"
          backgroundColor="#B1B0B8"
        >
          <h3 className="flex items-center flex-col -space-y-1.5">
            <span className="font-bold text-base text-body ">
              {((hours_spent / TOTAL_HOURS) * 10).toFixed(1)}
            </span>
            <span>/10h</span>
          </h3>
        </ProgressCircle>
      </div>
      <Link href={`/dashboard/${user_id}`} className="w-[5%] flex items-center gap-1">
        <h3 className="font-semibold text-base text-primary">View</h3>
        <span>
          <LuArrowRight size={24} color="#1E00B9"></LuArrowRight>
        </span>
      </Link>
    </div>
  );
}

export default LearnersTableRow
