import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
const BookCard = ({book}) => {
  return (
    <div className='p-4'>
        <Link to={`/book/${book._id}`}>
        <img src={book.image} alt="" className='w-[255px] h-[350px] transition-all duration-300 hover:scale-105'/>
        <div className='flex items-center justify-between my-1'>
            <div className='flex items-center gap-2 my-1'>
                <img src={assets.star_icon} alt="" />
                <p>{book.rating}</p>
            </div>
        </div>
        </Link>
      
    </div>
  )
}

export default BookCard
