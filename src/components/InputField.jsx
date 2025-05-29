import React from 'react'

function InputField({id,label,type,name,placeholder,register,errors}) {  
    return (
      <div className="flex flex-col items-start gap-1 mb-5 w-full">
        <label htmlFor={id} className="font-semibold text-heading-5 text-black">
          {label}
        </label>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="placeholder:font-medium placeholder:text-heading-5 placeholder:text-neutrals font-medium text-black text-heading-5 w-full border-1 border-neutrals rounded-7 py-[14px] px-5"
          {...register(name)}
        ></input>
        {errors[name] && <span className='text-red-500 text-base font-medium'>{errors[name].message}</span>}
      </div>
    );
}

export default InputField
