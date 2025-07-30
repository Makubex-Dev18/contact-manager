import React from 'react'
import ContactList from '../components/ContactList'

export default function Nosotros() {
  return (
   <main className='flex flex-col justify-between items-center h-screen text-black px-4 py-6'>
  <div className="text-center space-y-4  mb-32">
    <h1 className="text-2xl font-bold">Sobre la aplicación</h1>
    <p>Esta es una aplicación de gestión de contactos desarrollada con React y React Router.</p>
    <p>Permite agregar, editar y eliminar contactos, así como marcarlos como favoritos.</p>
    <p>La aplicación cuenta con una interfaz intuitiva y fácil de usar.</p>
  </div>

  <div className='w-full flex justify-center'>
    <img src="./public/contact-manager.webp" alt="Fondo" className='w-[300px] md:w-[700px] h-auto' />
  </div>
</main>

  )
}