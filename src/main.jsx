import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Main/Main';
import Error from './Main/Error';
import Login from './Layout/todo/Login';
import Register from './Layout/todo/Register';
import AddTask from './Layout/todo/AddTask';
import Home from './Main/Home';
import AuthProvider from './Main/AuthProvider';
import Private from './Main/Private';
import Task from './Layout/todo/task/Task';
import Dashboard from './Layout/todo/dashboard/Dashboard';
import AddedTask from './Layout/todo/AddedTask';
import UpdateTask from './Layout/todo/UpdateTask';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children:[{
      path:'/task',
      element:<Private><Task></Task></Private>
    },
    {
     path:'/',
     element:<Home></Home>
    },
   
    {
      path:'/addtask',
      element:<Private><AddTask></AddTask></Private>
    }
  
  
  
  ]
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/register',
    element:<Register></Register>

  },
  {
    path:'/dashboard',
    element:<Dashboard></Dashboard>,
    errorElement:<Error></Error>,
    children:[{
      path:'/dashboard/',
      element:<Task></Task>
    },
  {
    path:'/dashboard/addtasks',
    element:<AddTask></AddTask>
  },
  {
    path:"/dashboard/addedtasks",
    element:<AddedTask></AddedTask>
  }
  
  ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='max-w-7xl mx-auto'>
   <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
 </div>,
)
