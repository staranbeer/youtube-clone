import React from 'react'

const Input = ({className}) => {
  return (
    <input type="search"  className={` x bg-[#111111]  p-2 ${className}`} placeholder='Search'  />
  )
}

export default Input