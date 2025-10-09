import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import BookCard from './BookCard'

const NewArrival = () => {
  const { booksData } = useContext(AppContext)

  return (
    <div className='my-16'>
      <h1 className='text-2xl md:text-5xl font-bold text-gray-800'>New Arrival</h1>
      <div className='flex gap-4 flex-wrap'>
        {booksData && booksData.length > 0 ? (
          booksData.slice(0, 5).map((book) => (
            <BookCard key={index} book={book} />
          ))
        ) : (
          <p>No new arrivals yet.</p>
        )}
      </div>
    </div>
  )
}

export default NewArrival
