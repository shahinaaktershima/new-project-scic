import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="mx-auto  bg-purple-600 py-10">
        <div> <img className="mx-auto" src="https://i.postimg.cc/x81gynyt/image.png" alt="" /></div>
         <div className=" text-center mt-3"><Link to='/' className="btn bg-purple-600 font-bold text-white ">Go back home</Link></div>
     </div>
    );
};

export default Error;