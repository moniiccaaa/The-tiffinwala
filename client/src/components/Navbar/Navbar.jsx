import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import NavbarMenu from './NavbarMenu';
// import ProfileAvatar from './Avatar'



function NavbarLg({name}) {
  return (
    <>
      <div className='w-full md:flex hidden justify-between shadow items-center py-3 lg:px-16 md:px-12 sm:px-8 px-2'>
        <Link to="/" className='flex gap-1.5 items-center'>
          <img src="/TiffinWalaLogo.png" className='h-[70px] object-contain' alt="" />
          <h1 className='font-bold text-xl font-mono'>Tiffin Wala</h1>
        </Link>
        <div className='flex gap-4'>

          <ul className='gap-4 flex items-center font-semibold '>
            <li><Link to="/about">About Us</Link></li>
          
          </ul>
          <ul className='gap-4 flex items-center font-semibold '>
            <li><Link to="/contact">Contact Us</Link></li>
          
          </ul>
          <ul className='gap-4 flex items-center font-semibold '>
            <li><Link to="/provider">Tiffin Providers</Link></li>
            {/* {name ? <ProfileAvatar name={name} /> : <NavbarMenu />} */}
            <NavbarMenu/>
          </ul>
        </div>
      </div>
    </>
  )
}

function Navbar() {
  const user = useSelector((state) => state.user.user);
  return (
    <nav>
      <NavbarLg name={user?.name}/>
    </nav>
  )
}

export default Navbar
