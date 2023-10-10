import React, { useEffect, useState } from 'react'
import moon from '../assets/icon-moon.svg'
import sun from '../assets/icon-sun.svg'
function Header () {
  const [theme, setTheme] = useState(true)

  const handleClick = () => {
    setTheme(!theme)
  }

  useEffect(() => {
    if (theme === false) {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])
  return (
    <div className=' flex justify-between items-center  bg-img-mobile-light dark:bg-img-mobile-dark w-full h-[200px] nophone:h-[300px] px-6 md:px-12 pt-2 bg-no-repeat   nophone:bg-img-desktop-light dark:nophone:bg-img-desktop-dark '>
      <h1 className='font-Josefin Sans font-bold text-VeryLightGray text-4xl tracking-[12px] -mt-12 md:text-6xl '>TODO</h1>
      <img src={theme ? moon : sun} onClick={handleClick} alt='moon' className='-mt-12 md:w-12  cursor-pointer' />
    </div>
  )
}

export default Header
