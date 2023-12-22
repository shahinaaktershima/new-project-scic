

import React, { useEffect, useState } from 'react';
import Todo from '../Todo';

const Task = () => {
    const [tasks,setTasks]=useState([]);
    const [datas,setdata]=useState([])
    useEffect(()=>{
        fetch('https://new-project-server-chi.vercel.app/tasks')
        .then(res=>res.json())
        .then(data=>setTasks(data))
    },[])
    useEffect(()=>{
        fetch('https://new-project-server-chi.vercel.app/added')
        .then(res=>res.json())
        .then(data=>setdata(data))
    },[])
    return (
       <div>
         <div className='pt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {
            tasks.map(task=><Todo key={task._id} task={task}></Todo>)
          } 
        </div>
         <div className='pt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
         {
           datas.map(task=><Todo key={task._id} task={task}></Todo>)
         } 
       </div>
       </div>
    );
};

export default Task;