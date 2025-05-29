"use client"
import React from 'react'


function LangField({label,emoji,bgColor,textColor}) {
    return (
      <div
        className={`rounded-16 border-1 border-primary  py-2 px-3 flex  items-center gap-2 ${
          bgColor ? bgColor : "bg-white"
        }`}
      >
        {emoji}
        <span className={`text-heading-6 font-medium ${textColor?textColor:"text-primary"}`}>{label}</span>
      </div>
    );
}

export default LangField
