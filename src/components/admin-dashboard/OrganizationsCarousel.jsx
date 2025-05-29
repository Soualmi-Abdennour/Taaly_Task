import React from 'react'
import OrganizationCard from './OrganizationCard';
import {LuChevronLeft,LuChevronRight} from "react-icons/lu"
import { ORGANIZATIONS_CARDS_COLORS } from '@/constants/constants';



function OrganizationsCarousel() {
    return (
      <div className="relative">
        <div className="flex items-center gap-3">
          {ORGANIZATIONS_CARDS_COLORS.map((card) => (
            <OrganizationCard
              key={card.backGroundColor}
              {...card}
            ></OrganizationCard>
          ))}
        </div>
        <div
          className="absolute flex justify-between  top-1/2 -left-7 -translate-y-1/2"
          style={{
            width: "calc(100% + 56px)",
          }}
        >
          <button className="size-12 rounded-full bg-white flex items-center justify-center">
            <LuChevronLeft size={32} color="#000000"></LuChevronLeft>
          </button>
          <button className="size-12 rounded-full bg-white flex items-center justify-center">
            <LuChevronRight size={32} color="#000000"></LuChevronRight>
          </button>
        </div>
      </div>
    );
}

export default OrganizationsCarousel
