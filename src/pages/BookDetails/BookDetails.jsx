import React from 'react'
import {  useLoaderData, useParams } from 'react-router'

function BookDetails() {
  const{ id }= useParams();
  const bookId = parseInt(id)
  const data = useLoaderData();
  const singleBook = data.find(book => book.bookId === bookId);
  const {bookName,author,image,rating,category,tags,yearOfPublishing,publisher,review} = singleBook
  return (
    
   
     <div className='p-5'>
         <div className='w-80 mx-auto  flex flex-col items-center shadow-sm bg-gray-300'>
    <img className='w-40 p-5' src={image} alt="" />
    <p className='line-clamp-2 overflow-hidden"'>{review}</p>
    <h4 className='text-xl font-semibold'>{bookName}</h4>
    <div className='flex gap-5 p-5'>
       <button className='bg-amber-500 px-2 py-1 rounded-sm text-white'>Mark as read</button>
    <button className='bg-blue-500 px-2 py-1 rounded-sm text-white'>WishList</button>
    </div>
</div>
     </div>
  
  
  )
}

export default BookDetails
