import NavBar from '../utils/NavBar';

const Contact = () => {
    return (
      <main>
        <NavBar/>
        <p className='pl-2'>twitter: <a href='https://twitter.com/thomassb1625' rel='noreferrer' target='_blank' className='hover:underline hover:text-blue-700'>@thomassb1625</a></p>
        <p className='pl-2'>telegram: <a href='https://t.me/Thomas_Baker1625' rel='noreferrer' target='_blank' className='hover:underline hover:text-blue-700'>@Thomas_Baker1625</a></p>
        <p className='pl-2'>discord: <a href='https://discordapp.com/users/833857518111424593' rel='noreferrer' target='_blank' className='hover:underline hover:text-blue-700'>thomassb1625</a></p>
        <p className='pl-2'>linkedin: <a href='www.linkedin.com/in/thomas-baker-a90414168' rel='noreferrer' target='_blank' className='hover:underline hover:text-blue-700'>Thomas Baker</a></p>
      </main>
    )
};

export default Contact