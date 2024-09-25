import React from 'react'
import { TiThMenu } from "react-icons/ti";

const Header = () => {
  return (
    <div className='flex flex-row items-center w-full bg-blue-400'>
      <header className='flex flex-row items-center p-4 gap-10 '>
        <button className='lg:hidden'>
          <TiThMenu size={30} />
        </button>
        <span className='font-extrabold font-serif'>Makizushi</span>
        <nav className='lg:flex hidden'>
          <ul className='flex flex-row gap-8 mr-10'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>TV Shows</a></li>
            <li><a href='#'>Movies</a></li>
            <li><a href='#'>News & Popular</a></li>
          </ul>
        </nav>
      </header>
    </div>

  )
}

export default Header
