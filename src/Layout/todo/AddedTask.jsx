import {  useEffect, useState } from "react";
import Swal from "sweetalert2";


const AddedTask = () => {
    
    const [items,setdata]=useState([]);
    useEffect(()=>{
        fetch('https://new-project-server-chi.vercel.app/added')
        .then(res=>res.json())
        .then(data=>setdata(data))
    },[])
   
    const handleDelete=id=>{
       
        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              
fetch(`https://new-project-server-chi.vercel.app/added/${id}`,{
    method:'DELETE'
})
.then(res=>res.json())
.then(data=>{
    console.log(data);
    if(data.deletedCount>0){

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const remaining=items.filter(item=>item._id!==id)
              setdata(remaining)
            }
          });
       
    }
})
}   
          
        

    
  
    return (
        <div>
           <div>
           <div className="flex justify-evenly my-8">
            <h2 className="text-4xl font-bold">Total Added Task:{items.length}</h2>
            
           </div>
           <div className="overflow-x-auto w-full">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Deadline</th>
        
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        items.map((item,index)=><tr key={item._id}>
            <th>{index+1}</th>
            <td>{item.name}</td>
            <td>{item.deadline}</td>
           
            <td> <button  onClick={()=>handleDelete(item._id)} className="btn bg-orange-400 text-white text-xl flex items-center  btn-ghost btn-xs">
         X
              </button></td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div> 
        </div>
    );
};

export default AddedTask;