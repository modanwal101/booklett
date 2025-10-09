import React from 'react'
import { Link } from 'react-router-dom'
import { assets, books } from '../assets/assets'
const BookCard = ({book}) => {
  return (
    <div className='p-4'>
        <Link to={`/book/${book._id}`}>
        <img src={book.image} alt="" className='w-[255px] h-[350px] transition-all duration-300 hover:scale-105'/>
         </Link>
        <div className='flex items-center justify-between my-1'>
            <div className='flex items-center gap-2 my-1'>
                <img src={assets.star_icon} alt="" />
                <p>{book.rating}</p>
            </div>
          <div className='flex items-center gap-2 my-3'>
                <p>{book.reviews}</p>
                <p>Reviews</p>
            </div>
        </div>
        <div>
          <p>Author: {book.author}</p>
          <h3 className='text-lg font-semibold'>{book.title}</h3>
          <div className='flex items-center gap-5'>
           <p className='text-gray-400 line-through'> ${book.price}</p>
           <p className='text-gray-800'>${book.offerPrice}</p>
          </div>

        </div>
        <button className='bg-blue-600 text-white rounded-full px-10 py-2 cursor-pointer mt-4 hover:bg-blue-800'>Add To Card</button>
       
      
    </div>
  )
}

export default BookCard
