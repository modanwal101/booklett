import { Link, NavLink, Outlet } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const AdminLayout = () => {
  const { setIsAdmin, navigate,axios } = useContext(AppContext);

  const sidebarLinks = [
    { name: "All Books", path: "/admin", icon: assets.list_icon },
    { name: "Add Book", path: "/admin/add-product", icon: assets.add_icon },
    { name: "Orders", path: "/admin/orders", icon: assets.order_icon },
  ];

  // logout function
  const logout = async() => {
    try{
     const {data} = await axios.get("/admin/logout");
     if(data.success){
      toast.success(data.message);
      setIsAdmin(false);
      navigate("/")
     }
    }catch(error){
      toast.error(error.message);
    }
    setIsAdmin(false);
    navigate("/");
  };

  return (
    <>
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
        <Link to="/admin">
          <img className="h-9" src={assets.logo} alt="Logo" />
        </Link>

        <div className="flex items-center gap-5 text-gray-500">
          <p>Hi! Admin</p>
          <button
            onClick={logout}
            className="border rounded-full text-sm px-4 py-1 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Sidebar + Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="md:w-64 w-20 border-r h-[550px] text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
          {sidebarLinks.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              end={item.path === "/admin"}
              className={({ isActive }) =>
                `flex items-center py-3 px-4 gap-3 ${
                  isActive
                    ? "border-r-4 md:border-r-[6px] bg-purple-100 border-purple-500 text-purple-700"
                    : "hover:bg-gray-100 border-white"
                }`
              }
            >
              <img src={item.icon} alt={item.name} className="w-6 h-6" />
              <p className="md:block hidden">{item.name}</p>
            </NavLink>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6">
          <Outlet /> {/* ✅ this displays nested routes like ProductList, AddProduct, etc. */}
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
