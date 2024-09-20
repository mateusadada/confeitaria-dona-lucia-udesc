import { useState } from "react";

const InputWithLabel = (props) => {
  const {label, placeholder, inputType, inputValue, onChangeFunction} = props;
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <label htmlFor={label}
        className="mt-2 text-[1rem]"
      >
        {label}
      </label>
      <input 
        className="bg-gray-100 rounded-md py-1 px-2 outline-none text-lightGray text-[1rem]"
        id={label} placeholder={placeholder} type={inputType} 
        value={inputValue} onChange={onChangeFunction}
      />
    </div>
  )
}

export default InputWithLabel;
