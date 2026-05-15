import React, { use } from 'react'
import { FaStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router';
function Book({singleBook}) {
    // console.log(singleBook)
//    const data = use(booksPromise);
//    console.log(data)
  const {bookName,author,image,bookId,rating,category,tags,yearOfPublishing,publisher} = singleBook
  return (
    <Link to={`/bookDetails/${bookId}`}>
              <div className="card bg-base-100 shadow-sm border border-gray-400">
  <figure className=' bg-gray-200 w-2/3 mx-auto my-3 p-4'>
    <img className='w-30 h-40 px-4 py-3'
      src={image}
      alt=""/>
  </figure>
  <div className="card-body w-2/3 mx-auto my-3 p-1">
    <div className='flex justify-center gap-10'>
         {
      tags.map((tag,index)=> <button key={index}>{tag}</button>)
     }
    </div>
    <div className='flex  justify-between'>
       <h2 className="card-title text-base font-semibold">{bookName}</h2>
       <h3 className='bg-amber-300 rounded-sm py-1 px-2'>{yearOfPublishing}</h3>
    </div>
    
    <p>{publisher}</p>
     
    
       <div className='flex justify-between border-t border-dashed'>
        <h3>{category}</h3>
      <h3 className='flex items-center gap-1'>
  {rating}
  <FaStarHalfStroke />
</h3>
     </div>
    </div>
</div>
    </Link>
  )
}

export default Book
