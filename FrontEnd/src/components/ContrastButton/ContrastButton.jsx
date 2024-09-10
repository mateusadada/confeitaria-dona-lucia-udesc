import React from 'react'

const ContrastButton = ( { text, onClickFunction } ) => {
  return (
    <button 
      onClick={onClickFunction} 
      className='bg-contrastColor text-white font-bold text-center p-1 rounded-lg w-full text-sm hover:bg-contrastColorHover hover:cursor-pointer'
    >
        { text }
    </button>
  )
}

export default ContrastButton
