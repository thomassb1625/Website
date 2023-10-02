import NavBar from '../utils/NavBar';

const ReadingList = () => {
    return (
      <main>
        <NavBar selected='books'/>
        <p className='pl-2'>
          Here's my <a href="https://languid-split-0ff.notion.site/Bookshelf-a1190a07d599476c86ada1b55c74afd1"
            target="_blank"
            rel="noopener noreferrer"
            className='hover:underline text-blue-700'>notion bookshelf
          </a>
        </p>
        <a href="https://languid-split-0ff.notion.site/Bookshelf-a1190a07d599476c86ada1b55c74afd1"
          target="_blank"
          rel="noopener noreferrer"
          className='hover:underline text-blue-700'>
          <img src="/NotionScreenshot.jpg" alt="Bookshelf Preview" className="h-56 w-96 pl-2"/>
        </a>
      </main>
    )
};

export default ReadingList;