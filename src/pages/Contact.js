import NavBar from '../utils/NavBar';

const Contact = () => {
    return (
      <main>
        <NavBar selected='contact'/>
        <p className='pl-2'>
          <img src='/xlogo.png' alt="Twitter Logo" className="h-3 inline-block align-middle mr-2"/>
          twitter(x?): <a href='https://twitter.com/thomassb1625' rel='noreferrer' target='_blank' className='hover:underline hover:text-blue-700'>@thomassb1625</a>
        </p>
        <p className='pl-2'>
          <img src='/tglogo.webp' alt="Twitter Logo" className="h-3 inline-block align-middle mr-2"/>
          telegram: <a href='https://t.me/Thomas_Baker1625' rel='noreferrer' target='_blank' className='hover:underline hover:text-blue-700'>@Thomas_Baker1625</a>
        </p>
        <p className='pl-2'>
          <img src='/discordlogo.svg' alt="Twitter Logo" className="h-3 inline-block align-middle mr-2"/>
          discord: <a href='https://discordapp.com/users/833857518111424593' rel='noreferrer' target='_blank' className='hover:underline hover:text-blue-700'>thomassb1625</a>
        </p>
        <p className='pl-2'>
          <img src='/linkedinlogo.png' alt="Twitter Logo" className="h-3 inline-block align-middle mr-2"/>
          linkedin: <a href='www.linkedin.com/in/thomas-baker-a90414168' rel='noreferrer' target='_blank' className='hover:underline hover:text-blue-700'>Thomas Baker</a>
        </p>
      </main>
    )
};

export default Contact