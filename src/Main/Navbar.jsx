import { useContext } from "react";
import { BiTask } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {
  const {user,LogOut}=useContext(AuthContext);
  const handleLogOut=()=>{
    LogOut()
    .then()
    .catch()
  }
  
    const navlinks=<>
     <li ><NavLink className={'font-bold '} to='/'>Home</NavLink></li>
     <li><NavLink className={'font-bold '} to='/register'>Register</NavLink></li>
     <li><NavLink className={'font-bold '} to='/task'>Task</NavLink></li>
     
           
     
    
    
              
    </>
    return (
        <div className="navbar bg-purple-600 max-w-7xl fixed ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {
                navlinks
             }
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"><BiTask></BiTask>Task Management</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {
            navlinks
           }
          </ul>
        </div>
        <div className="navbar-end md:mr-20">
        {
    user?
   <div className="flex md:flex-row flex-col gap-5"> <NavLink to='/dashboard' className={'btn bg-purple-400 border-black text-black font-bold'}>Dashboard</NavLink>
   <Link onClick={handleLogOut} ><button className="font-bold">log out</button></Link></div>
   :  <a href=""><NavLink className={'font-bold '} to='/login'>LogIn</NavLink></a>
  }
  </div>
       
      </div>
    );
};

export default Navbar;