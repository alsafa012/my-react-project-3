import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMakks/BookMarks'
import Header from './Components/Header/Header'

function App() {


  const [bookMarks,setBookmark] = useState([])
  const [readingTime , setReadingTime] = useState(0);
  // console.log(setReadingTime)

  const handleBookmark = (cart)=>{
    // if(!bookMarks)
    // setBookmark(!bookMarks)
    // console.log('jhsjdhsd');
    const isActive = bookMarks.find(item=>item.id === cart.id);
    if (isActive){
      alert('Bookmark already added')
    }else{

      const newBookMarks = [...bookMarks, cart]
      setBookmark(newBookMarks)
    }

  }


  const handleMarkAsRed = (idx ,time)=>{
    const remainingBookMarks = bookMarks.filter(data=>data.id!==idx)
    setBookmark(remainingBookMarks)
    // console.log(idx)
    // const read = readingTime.find(data=>data.readingTime === time.readingTime);
    const read = bookMarks.find(data=>data.id === idx);
    if(read){
      const times = readingTime + time
      setReadingTime(times)
    }else{
      alert('Add Bookmark First')

      // console.log(times)
    }
    // remove id from bookmarks array
  }



  const removeOneBtn=(idx)=>{
    const btn = bookMarks.filter(book=>book.id !== idx)
    // console.log(btn)
    setBookmark(btn);
  }
  // console.log(removeBtn)
  const removeBtn=()=>{
    setBookmark([]);
  }

  return (
    <>
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
    <Blogs handleMarkAsRed={handleMarkAsRed} handleBookmark={handleBookmark}></Blogs>
    <BookMarks bookMarks={bookMarks} removeOneBtn={removeOneBtn} removeBtn={removeBtn} readingTime={readingTime}></BookMarks>
    </div>
    </>
  )
}

export default App
