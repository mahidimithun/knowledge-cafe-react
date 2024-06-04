import { useState } from 'react'

import './App.css'

import Header from './component/Header/Header'
import Blogs from './Blogs/Blogs'
import Bookmarks from './Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {

    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id, time) => {
    console.log('reading time', time);
    setReadingTime(readingTime + time);

    //remove book mark

    const remaniningBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remaniningBookmarks);

  }


  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>

        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead} ></Blogs>

        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} ></Bookmarks>

      </div>


    </>
  )
}

export default App
