import React from 'react'
import ContactList from '../components/ContactList'
import { Link } from 'react-router-dom'


export default function NavBar() {
  return (
<header className='h-[10vh] py-10 border-b-1 text-black'>
<nav className='flex w-[70%] mx-auto justify-between'>
        <Link to="/Nosotros" className='text-orange-500 text-2xl'> Ver Nosotros </Link>
        <Link to="/contacts" className='text-orange-500 text-2xl'> Ver Contactos</Link>
    </nav>
 </header>
  )
}