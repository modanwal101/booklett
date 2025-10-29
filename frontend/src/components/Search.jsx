import React, { useContext, useState } from 'react'
import { categories } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Search = () => {
  const { setSearchQuery, navigate } = useContext(AppContext)
  const [input, setInput] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    setSearchQuery(input)
    navigate("/books")
  }

  return (
    <div className="my-16 rounded-lg shadow-md bg-white h-[400px] flex flex-col items-center justify-center bg-gradient-to-b from-purple-200/80">
      <form 
        onSubmit={handleSearch}
        className="max-w-4xl w-full mx-auto flex justify-center"
      >
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Search book.." 
          className="w-1/2 outline-none border border-gray-300 py-4 text-center"
        />
        <button 
          type="submit"
          className="py-4 px-12 bg-primary text-white border rounded-full cursor-pointer"
        >
          Search
        </button>
      </form>

      <div className="flex flex-wrap gap-5 mt-8">
        {categories.map((category) => (
          <div
            key={category._id}
            tabIndex={category._id}
            className="w-[116px] mx-auto flex items-center justify-center border border-gray-300 rounded-md cursor-pointer hover:bg-purple-100 transition"
            onClick={() => {
              setSearchQuery(category.name)
              navigate("/books")
            }}
          >
            <img src={category.image} alt={category.name || "category"} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Search
