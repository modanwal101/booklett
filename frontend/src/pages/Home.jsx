import React from 'react'
import Hero from '../components/Hero'
import Search from '../components/Search'
import Category from '../components/Category'
import NewArrival from '../components/NewArrival'
import NewsLetter from '../components/NewsLetter'

function Home() {
  return (
    <div>
        <Hero/>
        <Search/>
        <Category/>
        <NewArrival/>
        <NewsLetter/>
    </div>
  )
}

export default Home
