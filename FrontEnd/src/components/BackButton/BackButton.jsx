import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../../assets/backIcon.svg'

const BackButton = ( { route }) => {
  return (
    <Link to={route}>
      <img src={icon} alt="backButton" width={32} height={32} className='bg-contrastColor p-1 rounded-full hover:bg-contrastColorHover hover:transition-[.5s] hover:shadow-lg mb-2' />

    </Link>
  )
}

export default BackButton
