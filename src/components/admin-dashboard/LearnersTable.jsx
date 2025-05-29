import React from "react";
import { LuSearch, LuSlidersHorizontal } from "react-icons/lu";
import LearnersTableRow from "./LearnersTableRow";
import { LEARNERS_TABLE_TABS } from "@/constants/constants";
import axios from "axios";
import { BASE_URL, USERS_URL } from "@/constants/routes";
import { cookies } from "next/headers";


async function LearnersTable() {  
  const learners = await axios
    .get(`${BASE_URL}${USERS_URL}`, {
      headers: {
        Cookie: `jwt=${cookies().get("jwt").value}`,
      },
    })
    .then((response) => response.data);

  return (
    <div className="bg-white rounded-16 px-16 py-10 mb-5">
      <div className="flex items-center gap-2 mb-5">
        <h2 className='text-primary font-medium text-heading-6 relative after:content-[""] after:absolute after:-bottom-1 after:h-0.5 after:w-full after:bg-secondary after:left-0'>
          Learners
        </h2>
        <span className="w-0.5 h-5 block bg-[#B1B0B8]"></span>
        <h2 className="text-neutrals font-medium text-heading-6">
          Language Buddies
        </h2>
      </div>
      <div className="mb-5 h-12 px-4 flex items-center gap-4 border-1 border-neutrals rounded-16">
        <LuSlidersHorizontal size={24} color="#B1B0B8"></LuSlidersHorizontal>
        <span className="w-0.5 h-full block bg-[#B1B0B8]"></span>
        <LuSearch size={24} color="#B1B0B8"></LuSearch>
        <input
          type="text"
          placeholder="Search by Name, Level, etc"
          className="w-full h-full outline-none focus:outline-none placeholder:text-heading-6 font-medium text-neutrals"
        ></input>
      </div>
      <div className="-mr-8">
        <div className=" flex items-center justify-between mb-5">
          {LEARNERS_TABLE_TABS.map((tab) => (
            <h4
              className="text-base text-neutrals font-regular"
              key={tab.label}
              style={{
                width: `${tab.width}%`,
              }}
            >
              {tab.label}
            </h4>
          ))}
        </div>
        <div className="flex flex-col items-center">
          {learners.map((learner, index) => (
            <>
              <LearnersTableRow
                key={learner.fullName}
                learner={learner}
              ></LearnersTableRow>
              {index !== learners.length - 1 && (
                <hr className="w-full h-[1px] bg-[#E6E6E8] my-2.5"></hr>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LearnersTable;
