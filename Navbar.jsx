import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-hot-toast";
import {Link} from "react-router-dom"

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;


  const {cart} = useSelector((state) => state);

  return (
    <div >
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">

        <NavLink to="/">
          <div className="ml-5">
          <img src="../logo.png" className="h-14"/>
          </div>
        </NavLink>

          <div className="flex items-center font-medium text-slate-100 mr-10 space-x-6">
            <NavLink to="/">
              <p>Loundry</p>
            </NavLink>
             <NavLink to="/Food">
              <p>Food</p>
             </NavLink>
             <NavLink to="https://u25869663.ct.sendgrid.net/ls/click?upn=8nWkUzAck1lVFbMrNGHwcSVldmEdWW-2F6fUWwCTdh-2BDfzjGiqpG7MYk3GV3gv2JaSs4Cmp4Pxq3Y8t-2FEIs2WOmPk9HUvKj74AbuKMQjveH20-3DPPSU_p2xYqWXqteTZlhT4JQZK2HaUbniMVG6TtEOK68vwCQTzG03CaoC1nUrDrEyTJnm9qmgoqUzsb6z7sud9SlShAPxTnxPUotvIPTe7z25g3OaVj4vKG-2BDB0LzH1v5ywcMY95-2FJ8O1QAAUpJmc1rwPrcUof5ONRUIXHm2ykMNmyk3umb2kQPF9k1NWo5VmhI1TnhLalCccVwDS2fwfGdZjpyKgTBixKMdbiJ9BsEP81PAsWVXwrEOi1oS99sID6HgtN-2FxzTtKZ3AJP9ocjKb7IgMo5epp0hd7P5TKeY6DvcqoFoxNczQdKjzZyCKjt1ELgtEKtgxhmQRqwjre-2FOWyxxROK3LLTOZgFzDLAizoe4FG5gpVJhbxafpqN4t9H7Z61-2F ">
              <p>help</p>
             </NavLink>

            <NavLink to="/cart">
              <div className="absolute">
                  <FaShoppingCart className="text-2xl "/>
                  {
                    cart.length > 0 &&
                    <span
                    className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >{cart.length}</span>
                  }
                  
              </div>
               {/* Login - SignUp - LogOut - Dashboard */}
        <div className='flex items-center gap-x-4 ml-10'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log in
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button  className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Sign up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.error("Logged Out");
                    }}
                    className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="./">
                    <button
                     className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Dashboard
                    </button>
                </Link>
            }
        </div>
            </NavLink>
            
          </div>
      </nav>
    </div>
  )
};

export default Navbar;
