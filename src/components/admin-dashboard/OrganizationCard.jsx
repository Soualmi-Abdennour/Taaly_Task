import React from 'react'

function OrganizationCard({svgColor,backGroundColor,buttonColor}) {
    return (
      <div
        className="rounded-16 relative p-5 z-0"
        style={{
          backgroundColor: backGroundColor,
        }}
      >
        <svg
          className="absolute top-0 -z-10"
          width="310"
          height="88"
          viewBox="0 0 310 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M300.78 -167.195C284.81 -9.8695 238.987 85.9897 172.774 77.5345C154.489 75.2012 138.777 62.9871 130.143 46.7001C109.398 7.59011 118.61 -107.862 129.753 -156.658C143.872 -218.461 222.347 -211.945 209.17 -133.835C205.9 -114.456 196.229 -96.7002 183.914 -81.3661C142.729 -30.0672 72.6421 0.478093 9.03537 -16.2999"
            stroke={svgColor}
            stroke-width="18"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
        </svg>
        <div className="mb-7">
          <h2 className="text-heading-3 font-semibold text-body">
            Amsterdam Organization
          </h2>
          <p className="text-base font-semibold text-body">Location</p>
          <p className="text-base font-semibold text-body max-w-[168px]">
            *Overview about the organization
          </p>
        </div>
        <div className="flex justify-end pr-2">
          <button
            className="rounded-4 px-4 py-2 text-body font-semibold text-sm"
            style={{
              backgroundColor: buttonColor,
            }}
          >
            Details
          </button>
        </div>
        <svg
          className="absolute bottom-0 -z-10"
          width="304"
          height="99"
          viewBox="0 0 304 99"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-28.368 212.716C32.1299 66.6122 103.562 -12.0399 164.554 15.0828C181.398 22.5714 192.939 38.7849 196.529 56.8656C205.162 100.287 163.168 208.225 138.475 251.762C107.195 306.903 33.9005 278.114 68.964 207.084C77.664 189.461 92.0281 175.232 108.23 164.083C162.417 126.78 238.325 117.66 294.429 152.005"
            stroke={svgColor}
            stroke-width="18"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
        </svg>
      </div>
    );
}

export default OrganizationCard
