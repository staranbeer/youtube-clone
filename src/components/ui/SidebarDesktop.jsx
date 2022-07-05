import React from 'react'
import { MdExplore, MdHome, MdHomeFilled, MdOutlineExplore } from 'react-icons/md'

const SidebarDesktop = ({isSidebarOpen}) => {
const pages = [
  { name: "Home", route: "/", icon: <MdHomeFilled size={24} /> },
  { name: "Explore", route: "/explore", icon: <MdExplore size={24} /> },
];
  return (
    <div className={` items-start text-white  youtubeSidebarMobile:flex hidden`}>
        <div className='w-[72px] flex flex-col justify-start items-center relative bg-youtube-800 h-screen'>
            <div className='py-3.5 text-center '>
                <MdHomeFilled className='text-white w-[72px]  'size={24}/>
                <span className='text-xxs text-gray-100 '>Home</span>
            </div>

             <div className='py-3.5 text-center '>
                <MdOutlineExplore className='text-white w-[72px]  'size={24}/>
                <span className='text-xxs text-gray-100 '>Home</span>
            </div>
            
        </div>
        <div className={`overflow-hidden bg-youtube-800 h-screen ${isSidebarOpen ? "w-40" : "w-0"}`}>taran</div>
    </div>
  )
}

export default SidebarDesktop