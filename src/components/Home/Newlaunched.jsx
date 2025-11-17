import React from 'react'
import newlaunchImg from '../../assets/newlyLaunched.png'

const Newlaunched = () => {
  return (
    <div className='max-w-7xl  cursor-pointer m-auto hover:shadow-2xl'>
        <img src={newlaunchImg} className='object-contain w-full' alt="new launch" />
    </div>
  )
}

export default Newlaunched