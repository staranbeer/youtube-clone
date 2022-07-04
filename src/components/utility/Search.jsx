import React from 'react'
import { MdSearch } from 'react-icons/md'
import Input from './Input'

const Search = () => {
  return (
    <div className='flex items-stretch '>
        <Input className={"flex-1 border-youtube-600 border "}/>
        <button className='py-2 px-6 bg-youtube-600'><MdSearch size={22} /></button>
    </div>
  )
}

export default Search