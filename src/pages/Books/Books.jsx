import React, { Suspense, useEffect, useState } from 'react'
import { data } from 'react-router'
import Book from './Book/Book'

function Books({data}) {
  const [allBooks,setAllBooks] = useState([])
  // useEffect(()=>{
  //   fetch("booksData.json")
  //   .then(res => res.json())
  //   .then(data => {
  //     setAllBooks(data)
  //   })

  // },[])

  // const  booksPromise = fetch('booksData.json').then(res=>res.json())



  return (
    <div>
       <h1 className='text-center font-bold  p-3 text-3xl'>Books</h1>
       <Suspense fallback={<span>Loading....</span>}>
        <div className='grid grid-cols-3 gap-8'>
             {
              data.map((singleBook)=><Book key={singleBook.bookId} singleBook={singleBook}></Book>)
             }
        </div>
       </Suspense>
    </div>
  )
}

export default Books
