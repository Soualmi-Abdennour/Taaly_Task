import React from "react";

function ImpactMeasurment({user}) {
  const { impact_measurments } = user;
  return (
    <div className="py-5 px-6 bg-primary rounded-16">
      <h2 className="mb-3 text-heading-1 font-semibold text-primary">
        Impact Measurement
      </h2>
      <div className="mb-2 flex items-center">
        <h2 className="flex-1 text-heading-4 font-semibold text-body">
          Questions
        </h2>
        <div className="w-[122px]  flex items-center justify-between">
          <h2 className="text-heading-4 font-semibold text-body">T0</h2>
          <h2 className="text-heading-4 font-semibold text-body">T1</h2>
        </div>
      </div>
      <hr className="w-full h-[2px] bg-[#B1B0B8] mb-4"></hr>
      <div>
        {impact_measurments.map((question, index) => (
          <div className="mb-2 flex items-center gap-20">
            <p className="flex-1 text-heading-4 font-medium text-black">{`${
              index + 1
            }. ${question.question}`}</p>
            <div className="w-28 flex items-center justify-between">
              <h2 className="text-heading-4 font-medium text-black">
                {question.T0}
              </h2>
              <h2 className="text-heading-4 font-medium text-black">
                {question.T1}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImpactMeasurment;
