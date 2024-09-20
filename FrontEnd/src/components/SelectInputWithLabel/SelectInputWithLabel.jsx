import React, { useEffect } from 'react';
import ContrastButton from '../ContrastButton/ContrastButton';

const SelectInputWithLabel = (props) => {
  const { options, handleChange, label } = props;

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <label htmlFor="input" className="mt-2 text-[1rem]">
        {label}
      </label>
      <select name="selectInput" id="SelectInput" onChange={handleChange} className='bg-gray-100 rounded-md py-1 px-2 outline-none text-lightGray text-[1rem]'>
        {options && options.length > 0 ? (
          options.map((option, index) => (
            <option key={index} value={option.id} className='text-[1rem]'>
              {option.nome}
            </option>
          ))
        ) : (
          <option value="">Nenhuma opção disponível</option> 
        )}
      </select>
    </div>
  );
};

export default SelectInputWithLabel;
