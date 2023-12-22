import { useForm } from "react-hook-form";
import { BiTask } from "react-icons/bi";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const AddTask = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const { register, handleSubmit } = useForm();
    const onSubmit =async (data) => {console.log(data)
    // image upload to image bb and then get an url
    const menuItem={
        name:data.name,
        description:data.description,
        deadline:data.deadline,
        priority:data.priority,
        photo:data.photo,
      }
    //   const menuRes=await axiosSecure.post('/addmeal',menuItem )

    fetch('https://new-project-server-chi.vercel.app/added',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(menuItem)
       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'task Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            navigate(location?.state?location?.state:'/dashboard/')  
        }
       })
    }
    return (
        <div className="mx-10 my-10">
          <h2 className="text-3xl font-bold">Add Tasks</h2>
           <form onSubmit={handleSubmit(onSubmit)}>
      
      <div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Name</span>
   
  </label>
  <input
   {...register("name")}
  type="text" placeholder="name" className="input input-bordered w-full " />
  
</div>
      <div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">priority</span>
   
  </label>
  <input
   {...register("priority")}
  type="text" placeholder="priority" className="input input-bordered w-full " />
  
</div>
     <div className="flex gap-10">
       
<div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Deadline</span>
   
  </label>
  <input
   {...register("deadline",{required:true})}
  type="date" placeholder="deadline" className="input input-bordered w-full " />
  
</div>
     </div>
     <div className="form-control">
  <label className="label">
    <span className="label-text">description</span>
   
  </label>
  <textarea   {...register("description",{required:true})} className="textarea textarea-bordered h-24" placeholder="description"></textarea>
 
</div>
<div>
<input 
  {...register("photo")}
type="file" placeholder="photo-url" className="file-input file-input-bordered w-full max-w-xs my-4" />
</div>
    
      
     <button className="btn ml-4">Add tasks <BiTask></BiTask></button>
    </form> 
        </div>
    );
};

export default AddTask;