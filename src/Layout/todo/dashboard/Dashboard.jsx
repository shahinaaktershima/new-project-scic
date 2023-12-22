import { useContext } from "react";
import { BiTask } from "react-icons/bi";

import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../../Main/AuthProvider";
import { FaHome } from "react-icons/fa";


const Dashboard = () => {
    const {user}=useContext(AuthContext);
   
    return (
        <div className="flex flex-col md:flex-row">
            
        <div className="md:w-64 w-30 min-h-screen bg-purple-400">
            <ul className="menu md:p-4 flex flex-row md:flex-col">
           <li className="text-center">{
            user&&<img className="md:h-[100px] md:w-[100px] h-[50px] w-[50px] rounded-full" src={user.photoURL
            } alt="" />
            }</li>
                
                  <li ><NavLink to='/dashboard/' ><FaHome></FaHome>  Home</NavLink></li>
               
              
                <li ><NavLink to='/dashboard/addtasks' > <BiTask></BiTask> Add tasks</NavLink></li>
                <li ><NavLink to='/dashboard/addedtasks' > <BiTask></BiTask> Added tasks</NavLink></li>
                <li ><NavLink to='/dashboard/completedtasks' > <BiTask></BiTask> completed tasks</NavLink></li>
               
                <li><NavLink className={'btn btn-sm'} to='/'>Back to home</NavLink></li>
               
            
              
              
              
            </ul>
        </div>
        <div className="flex-1">
            <Outlet></Outlet>
        </div>
        </div>
    );
};

export default Dashboard;