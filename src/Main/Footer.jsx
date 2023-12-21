import { BiTask } from "react-icons/bi";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-purple-600 text-black">
          <footer className="footer p-10  ">
  <aside className="">
    <BiTask className="text-5xl"></BiTask>
    <p className="text-2xl font-bold">Task management<br/>Providing reliable service since 1992</p>
  </aside> 
  <nav>
    <header className="footer-title">Social</header> 
    <div className="grid grid-flow-col gap-4">
     
     
     <Link> <a href="" className="bg-blue-400 text-2xl"><FaFacebookF></FaFacebookF></a></Link>
     <Link> <a href="" className="bg-blue-400 text-2xl"><FaTwitter ></FaTwitter></a></Link>
     <Link> <a href="" className="bg-red-400 text-2xl"><FaYoutube></FaYoutube></a></Link>
    </div>
  </nav>
  
</footer>  
<aside className="footer footer-center p-4 ">
    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
  </aside>
        </div>
    );
};

export default Footer;