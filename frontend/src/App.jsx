import React, { useContext } from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import Books from './pages/Books'
import Signup from './pages/Signup'
import BookDetails from './pages/BookDetails'
import Login from './pages/Login'
import Card from './pages/Card'
import MyOrders from './pages/MyOrders'
import AddAdress from './pages/AddAdress'
import Navbar from './components/Navbar'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import { AppContext } from './context/AppContext'
import AdminLayout from './pages/admin/AdminLayout'
import ProductList from './pages/admin/ProductList'
import AddProduct from './pages/admin/AddProduct'
import Order from './pages/admin/Order'
import AdminLogin from './pages/admin/AdminLogin'
function App() {
  const isAdminPath = useLocation().pathname.includes("/admin");
  const {isAdmin, navigate} = useContext(AppContext)
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32">
      <Toaster/>
       {isAdminPath ? null :<Navbar/>}
     
         <Routes> 
         <Route path='/' element ={<Home/>}/>
          <Route path='/books' element ={<Books/>}/>
           <Route path='/book/:id' element ={<BookDetails/>}/>
           <Route path='/signup' element ={<Signup/>}/>
            <Route path='/login' element ={<Login/>}/>
             <Route path='/cart' element ={<Card/>}/>
              <Route path='/my-orders' element ={<MyOrders/>}/>
               <Route path='/add-address' element ={<AddAdress/>}/>
                    {/* Admin Routes */}
                <Route path='/admin'element= {isAdmin ? <AdminLayout/>: <AdminLogin/>}>
                <Route index element = {isAdmin? <ProductList/>: null}/>
                <Route path='add-product' element = {isAdmin? <AddProduct/>: null}/>
                <Route path='orders' element = {isAdmin? <Order/>: null}/>
                </Route>    
         </Routes>
         {
          isAdminPath ?null :<Footer/>
         }
    
    </div>
  )
}

export default App
