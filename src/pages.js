import './css/pages.css'
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <main>
      <NavBar/>
      <p>This is normal text - <b>and this is bold text</b>.</p>
    </main>
  )
}

export function Resume() {
  return (
    <main>
      <NavBar/>
      <p>This is shit text - <b>and this is bold text</b>.</p>
    </main>
  )
}

export function Contact() {
  return (
    <main>
      <NavBar/>
    </main>
  )
}

export function ReadingList() {
  return (
    <main>
      <NavBar/>
      <p>This is normal text - <b>and this is bold text</b>.</p>
    </main>
  )
}


export function NavBar() {
  return (
    <div className='flex flex-row text-xl pl-2'>
      <Link to='/projects' className='hover:underline'>
        <h1>projects</h1>
      </Link>
      <Link to='/resume' className='pl-2 hover:underline'>
        <h1>resume</h1>
      </Link>
      <Link to='/contact' className='pl-2 hover:underline'>
        <h1>contact</h1>
      </Link>
      <Link to='/books' className='pl-2 hover:underline'>
        <h1>reading list</h1>
      </Link>
    </div>
  )
}