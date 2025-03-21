import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = false;
  const isAdmin = false;

  return (
    // <header className="fixed top-0 left-0 w-full bg-[#FCE7C8] bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-[#FADA7A]">
    //   <div className="container mx-auto px-4 py-3">
    //     <div className="flex flex-wrap justify-between items-center">
    //       <Link to="/" className="text-2xl font-bold text-[#B1C29E] items-center space-x-2 flex">
    //         Dayal Skincare Store
    //       </Link>

    //       <nav className="flex flex-wrap items-center gap-4">
    //         <Link to={"/"} className="text-[#B1C29E] hover:text-[#F0A04B] transition-duration-300 ease-in-out">Home</Link>
    //         {user && (
    //           <Link to={"/cart"} className="relative group text-[#B1C29E] hover:text-[#F0A04B] transition-duration-300 ease-in-out">
    //             <ShoppingCart className="inline-block mr-1 group-hover:text-[#F0A04B]" size={20} />
    //             <span className="hidden sm:inline">Cart</span>
    //             <span className="absolute -top-2 -left-2 bg-[#F0A04B] text-[#FCE7C8] rounded-full px-2 py-0.5 text-xs group-hover:bg-[#FADA7A] transition-duration-300 ease-in-out">3</span>
    //           </Link>
    //         )}
            
    //         {isAdmin && (
    //           <Link className='bg-[#F0A04B] hover:bg-[#FADA7A] text-[#FCE7C8] px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center' to={"/secret-dashboard"}>
    //             <Lock className="inline-block mr-1" size={18} /> 
    //             <span className="hidden sm:inline">Dashboard</span>
    //           </Link>
    //         )}

    //         {user ? (
    //           <button className='bg-[#B1C29E] hover:bg-[#AAB99A] text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out'>
    //             <LogOut size={18} />
    //             <span className='hidden sm:inline ml-2'>Log Out</span>
    //           </button>
    //         ) : (
    //           <>
    //             <Link
    //               to={"/signup"}
    //               className='bg-[#FADA7A] hover:bg-[#F0A04B] text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out'>
    //               <UserPlus className='mr-2' size={18} />
    //               Sign Up
    //             </Link>
    //             <Link
    //               to={"/login"}
    //               className='bg-[#B1C29E] hover:bg-[#AAB99A] text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out'>
    //               <LogIn className='mr-2' size={18} />
    //               Login
    //             </Link>
    //           </>
    //         )}
    //       </nav>
    //     </div>
    //   </div>
    // </header>
    <header className="fixed top-0 left-0 w-full bg-[#9F5255] bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-[#A888B5]">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-wrap justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-[#ffff] items-center space-x-2 flex">
            Dayal Skincare Store
          </Link>

          <nav className="flex flex-wrap items-center gap-4">
            <Link
              to={"/"}
              className="text-[#f1ca9d] hover:text-[#81203e] transition-duration-300 ease-in-out"
            >
              Home
            </Link>
            {user && (
              <Link
                to={"/cart"}
                className="relative group text-[#fdfdfd] hover:text-[#771e31] transition-duration-300 ease-in-out"
              >
                <ShoppingCart
                  className="inline-block mr-1 group-hover:text-[#771e31]"
                  size={20}
                />
                <span className="hidden sm:inline">Cart</span>
                <span className="absolute -top-2 -left-2 bg-[#9F5255] text-[#fcfbf9] rounded-full px-2 py-0.5 text-xs group-hover:bg-[#EFB6C8] transition-duration-300 ease-in-out">
                  3
                </span>
              </Link>
            )}

            {isAdmin && (
              <Link
                className="bg-[#9F5255] hover:bg-[#8174A0] text-[#FFD2A0] px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center"
                to={"/secret-dashboard"}
              >
                <Lock className="inline-block mr-1" size={18} />
                <span className="hidden sm:inline">Dashboard</span>
              </Link>
            )}

            {user ? (
              <button className="bg-[#A888B5] hover:bg-[#8174A0] text-[#FFD2A0] py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out">
                <LogOut size={18} />
                <span className="hidden sm:inline ml-2">Log Out</span>
              </button>
            ) : (
              <>
                <Link
                  to={"/signup"}
                  className="bg-[#f3d1b1] hover:bg-[#cca271e5] text-[#55320b] py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
                >
                  <UserPlus className="mr-2" size={18} />
                  Sign Up
                </Link>
                <Link
                  to={"/login"}
                  className="bg-[#f3d1b1] hover:bg-[#cca271e5] text-[#55320b] py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
                >
                  <LogIn className="mr-2" size={18} />
                  Login
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;