import React, { useContext } from 'react'
import { categories } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Category = () => {
  const {setSelectedCategory, navigate} = useContext(AppContext);
  const handleCategoryClick =(name)=>{
    setSelectedCategory(name);
    navigate("/books");
  }
  return (
    <div className='my-16'>
      <h1 className='text-2xl md: text-5xl font-bold text-gray-800'>Showp By Category</h1>
      <div className='my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 items-center justify-center'>
        {categories.map((categories)=>(
            <div 
            onClick={()=>{
              handleCategoryClick(Category.name);
              window.scrollTo({top: 0, behavior:"smooth"})
            }}
            key={categories._id} className='flex flex-col items-center border border-gray-300 rounded-lg transition-all hover:scale-105 p-3 cursor-pointer'>
                <img src={categories.image} alt="" />
                <h4>{categories.name}</h4>

            </div>
        ))}
      </div>
    </div>
  )
}

export default Category
