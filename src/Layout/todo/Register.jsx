import { useContext } from "react";
import { AuthContext } from "../../Main/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const Register = () => {
    const {Register,google}=useContext(AuthContext);
    const navigate=useNavigate();
   
    const {
        register,
        handleSubmit,
        
       
        formState: { errors },
      } = useForm();
      
      const onSubmit= (data) => {console.log(data)
        Register(data.email,data.password)
        .then(res=>{
            console.log(res.user);
            Swal.fire({
                title: "Good job!",
                text: "Registered successfully!",
                icon: "success"
              });
            navigate(location?.state?location?.state:'/')
        })
        .catch(err=>{
            console.log(err);
        })}
        const handleGoogle=()=>{
            google()
            .then(res=>{
                console.log(res.user);
                navigate(location?.state?location?.state:'/')
            })
            .catch(err=>{
                console.log(err.message);
                
            })
        }
    return (
        <div>
           <div className="hero min-h-screen bg-purple-400 ">
        <div className="hero-content flex flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up NOW!</h1>
           
          </div>
          <div className="card px-3  shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">name</span>
                </label>
                <input type="text" name="name" {...register("name",{ required: true })} placeholder="name" className="input input-bordered"  />
                {errors.name && <span className="text-red-400">This field is required</span>}
              </div>
             
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email",{ required: true })} name="email" placeholder="email" className="input input-bordered md:w-80"  />
                {errors.email && <span className="text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password",{ required: true ,maxLength: 20,minLength:6 ,pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!#$%&?]{8,20}$/})} name="password" placeholder="password" className="input input-bordered"  />
                { errors.password?.type === "required" && 
        <p className="text-red-400">password must be 6 characters</p>
                }
                { errors.password?.type === "pattern" && 
        <p className="text-red-400">password must be uppercase lowercase and one spacial character </p>
                }
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
             
              <div className="form-control mt-6">
                
                <input  className="btn btn-primary" type="submit" value="SignUp" />
              </div>
            </form>
            <p className="text-center"><small>Already have an account? <Link className="text-purple-600 font-bold" to='/login'>Go to Login page</Link></small></p>
            <div className="divider text-center"></div>
            <button onClick={handleGoogle} className="btn my-2 bg-blue-600 text-white w-3/4 mx-auto">Log in with google</button>
          </div>
        </div>
      </div> 
        </div>
    );
};

export default Register;