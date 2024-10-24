import './App.css'
import Header from './components/header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'
function App() {

const [bookmarks, setBookmarks] = useState([]);
const [readingTime, setReadingTime] = useState(0)

const handleAddToBookmarks = blog =>{
  // console.log(blog);

  const newBookmarks = [...bookmarks, blog];
  setBookmarks(newBookmarks)
  
}
const handleMarkAsRead =(id, time) => {
  // console.log('marking as read',time);
  const newReadingTime = readingTime + time;
  setReadingTime(newReadingTime)
  // remove the read blog from bookmark
  // console.log('remove bookmark', id);
  const remaingbookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
  setBookmarks(remaingbookmarks)
  
  
}
  return (
    <>
      
      <Header></Header>
      <main className='md:flex max-w-7xl mx-auto'>
      <Blogs  handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs> 
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
      
    </>
  )
}

export default App
