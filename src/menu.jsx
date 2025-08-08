import React, { useState, useEffect } from 'react';

const Menu = () => {
    const [headerBg, setHeaderBg] = useState(false);
    const [openmenu, setOpenMenu] = useState(false);

    const changeHeaderBg = () => {
      if (window.scrollY >= 80) {
        setHeaderBg(true);
      } else {
        setHeaderBg(false);
      }
    };

    useEffect(() => {
      window.addEventListener('scroll', changeHeaderBg);
      return () => {
        window.removeEventListener('scroll', changeHeaderBg);
      };
    }, []);

  return (
    <div className='w-full h-16 transition-all ease-out  px-10 fixed top-0 z-50' style={{ backgroundColor: headerBg || openmenu ? '#000' : 'transparent' }}>
        
        <div className='flex items-center justify-between w-full'>
          <h1 className='text-2xl font-bold' style={{color: headerBg ? 'white' : 'black'}}>Top's</h1>
          <i className="bi bi-list-nested text-5xl cursor-pointer" style={{color: headerBg ? 'white' : 'black'}} onClick={() => setOpenMenu(true)}></i>
        </div>
        {openmenu && (
          <div className='w-full h-full bg-black flex items-center justify-center z-50'>
            
          </div>
        )}
    </div>
  )
}

export default Menu