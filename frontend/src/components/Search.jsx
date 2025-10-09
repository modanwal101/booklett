import React from 'react'
import { categories } from '../assets/assets'

const Search = () => {
  return (
    <div className='my-16 rounded-lg shadow-md bg-white h-[400px] flex flex-col items-center justify-center bg-gradient-to-b from-purple-200/80'>
      <form className='max-w-4xl w-full mx-auto flex justify-center'>
        <input type="text" placeholder='Search book..' className='w-1/2 outline-none border border-gray-300 py-4 text-center'/>
        <button className='py-4 px-12 bg-primary text-white border rounded-full cursor-pointer'>Search</button>
      </form>
      <div className='flex flex-wrap gap-5 mt-8'>
        {
            categories.map((categories) =>(
                <div tabIndex={categories._id} className="w-[116px] mx-auto flex  items-center justify-center border-gray-300 border border-gray-300 rounded-md cursor-pointer">
                    <img src={categories.image} alt="" />

                </div>
            ))
        }
      </div>

    </div>
  )
}

export default Search
