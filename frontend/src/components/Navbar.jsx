import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { BsCart } from "react-icons/bs";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast"

const Navbar = () => {
    const {navigate, user, setUser,cartCount} = useContext(AppContext)
  const [open, setOpen] = useState(false);

  const logout = async () =>{
    setUser(false);
    toast.success("Logged out successfully")
    navigate("/")
  }

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-32" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
       <Link to={"/"}>Home</Link>
       <Link to={"/books"}>Books</Link>

        

        <div className="relative cursor-pointer">
          <BsCart className="w-6 h-6" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full">
            {cartCount?cartCount :0}
          </button>
        </div>
        {user ?(<div className="flex items-center gap-5">
            <button className="px-6 py-1 bg-indigo-500 text-white rounded-full cursor-pointer" onClick={()=>{
                navigate("/my-orders")
                window.scrollTo({top: 0, behavior: "smooth"})
            }}>My orders</button>
            <p className="cursor-pointer hover:underline" onClick={logout}>Logout</p>
        </div>):(<button className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full" onClick={()=>navigate("/login")}>
          Login
        </button>)
        
        }
        
        
      </div>

      {/* Mobile menu toggle */}
      <button onClick={() => setOpen(!open)} aria-label="Menu" className="sm:hidden">
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
      >
        <Link to={"/"}>Home</Link>
       <Link to={"/books"}>Books</Link>
        {user ?(<div className="flex items-center gap-5">
            <button className="px-6 py-1 bg-indigo-500 text-white rounded-full cursor-pointer" onClick={()=>{
                navigate("/my-orders")
                window.scrollTo({top: 0, behavior: "smooth"})
            }}>My orders</button>
            <p className="cursor-pointer hover:underline" onClick={logout}>Logout</p>
        </div>):(<button className="cursor-pointer px-6 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full" onClick={()=>navigate("/login")}>
          Login
        </button>)
        
        }
      </div>
    </nav>
  );
};

export default Navbar;
