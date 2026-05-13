import React from 'react'
import bannerImage from '../../assets/books.jpg'
function Banner() {
  return (
   <div className="hero bg-base-200 min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse mx-10">
    <img
      src={bannerImage}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h2 className="text-5xl font-bold">Books to freshen up your bookshelf</h2>
      
      <button className="btn btn-primary bg-green-500 text-white mt-2">View The List</button>
    </div>
  </div>
</div>
  )
}

export default Banner
