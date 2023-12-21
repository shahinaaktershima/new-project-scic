import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Main/Main';
import Error from './Main/Error';
import Todo from './Layout/todo/Todo';
import Login from './Layout/todo/Login';
import Register from './Layout/todo/Register';
import AddTask from './Layout/todo/AddTask';
import Home from './Main/Home';
import AuthProvider from './Main/AuthProvider';
import Private from './Main/Private';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children:[{
      path:'/todo',
      element:<Private><Todo></Todo></Private>
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='max-w-7xl mx-auto'>
   <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
 </div>,
)
