import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'




const Hero = () => {
    const {navigate} = useContext(AppContext)
  return (
    <div className='my-16 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-b from-cyan-100/90'>

        {/* left div */}
        <div className='relative'>
            <img src={assets.hero_girl} alt="" />
            <div className='hidden md:block absolute top-20 -right-40'>
                <img src={assets.hero_book} alt="" />
            </div>
               
        </div>

        {/* Right div */}
        <div>
            <h1 className='text-2xl md:text-5xl font-bold text-gray-800'>Discover Your Next <br />
             <span className='text-primary'>Favorite Book</span>
            </h1>
            <div className='my-19 flex flex-col md:flex-row gap-5 md:gap-10'>
                <button 
                  onClick={()=>{navigate("/books")
                    window.scrollTo({top:0, behavior: "smooth"})
                  }}
                className='bg-primary text-white rounded-full px-10 py-2 cursor-pointer'>Shop Now</button>
                <button
                  onClick={()=>{navigate("/books")
                    window.scrollTo({top:0, behavior: "smooth"})
                  }}
                className='bg-white text-primary border rounded-full px-10 py-2 cursor-pointer'>Explore now</button>
            </div>

        </div>
      
    </div>
  )
}

export default Hero
  