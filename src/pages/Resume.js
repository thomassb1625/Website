import NavBar from '../utils/NavBar';

const Resume = () => {
    return(
      <main>
        <NavBar selected='resume'/>
        <embed className='pl-10' src="/resume.pdf#toolbar=0&navpanes=0" type="application/pdf" width="50%" height="1000px" />
      </main>
    )
};

export default Resume;