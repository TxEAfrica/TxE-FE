import React, { useState } from 'react';
import { Icon } from '../../icons/Icons';
import TxELogo from '../../assets/txeLogo.svg';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <div className='flex justify-center items-center space-x-44 p-4 bg-white sticky top-0 z-50'>
      <div>
        <img src={TxELogo} className="w-24" alt="" />
      </div>
      <div className='relative flex '>
        <ul className={`hidden md:flex font-bold space-x-20 ${showMenu ? 'md:hidden' : ''}`}>
          <li className='p-2'>About</li>
          <li className='p-2'>Achievements</li>
          <li className='p-2'>Speakers</li>
          <li className='p-2'>Event Schedule</li>
        </ul>
        {/* small devices */}
        {!showMenu && (
            <div className='p-3'
            onClick={toggleMenu}>
              <Icon.BarMenu
            className='md:hidden text-2xl font-semibold cursor-pointer'
            
          />
            </div>
        )}
        {showMenu && (
          <div
            className="fixed flex justify-between bg-orange-100 text-black top-0 left-0 right-0 bottom-0 shadow-md p-4 z-10"
            onClick={toggleMenu}
            style={{ opacity: 0.95, transition: 'opacity 1s ease' }}
          >
            <ul className="flex flex-col font-bold mt-16 p-4 space-y-6">
              <li>About</li>
              <li>Achievements</li>
              <li>Speakers</li>
              <li>Event Schedule</li>
            </ul>
            <Icon.CancelMenu
            className='md:hidden text-2xl mt-4 font-semibold cursor-pointer'
          />
            <div className='absolute h-full justify-center items-center w-full'>
            <img src={TxELogo} className='absolute bottom-10 w-3/5 animate-bounce' alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
