import { Link } from 'react-router-dom';
import NavBar from './NavBar';

export default function HomePage() {
  return (
    <>
     <h1 className='text-2xl text-black'>📱 Contact Manager</h1>
      <NavBar/>
       
        <main className='flex justify-center items-center w-full h-full'>
          <h1>Home - Contact Manager</h1>
        </main>
      
    </>
  )
}
 