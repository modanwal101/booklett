import React, { useState } from 'react'

const AddAdress = () => {
  const [address, setAddress] =useState({
    fullName: "",
    phone: "",
    email: "",
    street:"",
    city:"",
    state:"",
    postalcode:"",
    country:"",
  })
  const handleChange= (e)=>{
    setAddress({...address,[e.taget.name]: e.taget.value,})
  }
  // APi call
  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log("Address submitted:", address);
    // resetnthe form after submission
    
  }
  return (
    <div className='flex items-center justify-center h-screen bg-primary'>
    <form 
    onSubmit={handleSubmit}
    class="bg-white text-gray-500 max-w-100 mx-4 md:p-6 p-4 text-left text-sm rounded shadow-[0px_0px_10px_0px] shadow-black/10">
    <h2 class="text-2xl font-semibold mb-6 text-center text-gray-800">Add_Address</h2>

    <input 
    className='w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-300 outline-none rounded py-2.5 px-3' 
    type="text"
    value={address.fullName}
    name = "fullName"
    onChange={handleChange}
    placeholder='fullname'
      required
    />
     <input 
    className='w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-300 outline-none rounded py-2.5 px-3' 
    type="text"
    value={address.phone}
    name = "phone"
    onChange={handleChange}
    placeholder='Phone Number'
      required
    />
     <input 
    className='w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-300 outline-none rounded py-2.5 px-3' 
    type="email"
    value={address.email}
    name = "email"
    onChange={handleChange}
    placeholder='email'
      required
    />
     <input 
    className='w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-300 outline-none rounded py-2.5 px-3' 
    type="text"
    value={address.street}
    name = "street"
    onChange={handleChange}
    placeholder='street'
      required
    />
    <input 
    className='w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-300 outline-none rounded py-2.5 px-3' 
    type="text"
    value={address.city}
    name = "city"
    onChange={handleChange}
    placeholder='city'
      required
    />
     <input 
    className='w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-300 outline-none rounded py-2.5 px-3' 
    type="text"
    value={address.state}
    name = "state"
    onChange={handleChange}
    placeholder='state'
      required
    />
     <input 
    className='w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-300 outline-none rounded py-2.5 px-3' 
    type="text"
    value={address.postalcode}
    name = "postalcode"
    onChange={handleChange}
    placeholder='postalcode'
      required
    />
     <input 
    className='w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-300 outline-none rounded py-2.5 px-3' 
    type="text"
    value={address.country}
    name = "country"
    onChange={handleChange}
    placeholder='country'
      required
    />
    

    <button type="button" class="w-full my-3 bg-gray-800 active:scale-95 transition py-2.5 rounded text-white">Add Address</button>
   </form>
   </div> 
  )
}

export default AddAdress
