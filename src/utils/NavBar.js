import { Link } from 'react-router-dom';

const NavBar = ({ selected }) => {
    return (
      <div className='flex flex-row text-xl pl-2'>
        <Link to='/projects'  className={selected === 'projects' ? 'underline hover:underline' : 'hover:underline'}>
          <h1>projects</h1>
        </Link>
        <Link to='/resume' className={selected === 'resume' ? 'underline pl-2 hover:underline' : 'pl-2 hover:underline'}>
          <h1>resume</h1>
        </Link>
        <Link to='/books' className={selected === 'books' ? 'underline pl-2 hover:underline' : 'pl-2 hover:underline'}>
          <h1>reading list</h1>
        </Link>
        <Link to='/contact' className={selected === 'contact' ? 'underline pl-2 hover:underline' : 'pl-2 hover:underline'}>
          <h1>contact</h1>
        </Link>
      </div>
    )
}

export default NavBar;