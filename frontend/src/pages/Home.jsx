import React from 'react'
import Hero from '../components/Hero'
import Search from '../components/Search'
import Category from '../components/Category'
import NewArrival from '../components/NewArrival'

function Home() {
  return (
    <div>
        <Hero/>
        <Search/>
        <Category/>
        <NewArrival/>
    </div>
  )
}

export default Home
