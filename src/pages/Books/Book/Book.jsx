import React, { use } from 'react'

function Book({singleBook}) {
    // console.log(singleBook)
//    const data = use(booksPromise);
//    console.log(data)
  return (
          <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img className='w-70 h-80 px-4 py-3'
      src={singleBook.image}
      alt=""/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  )
}

export default Book
