import { Link } from "react-router-dom";



const Banner = () => {
    return (
        <div className="hero min-h-[500px] py-10 md:py-0" style={{backgroundImage: 'url(https://i.postimg.cc/3JVk851s/image.png)'}}>
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content text-center ">
          <div className="md:max-w-4xl">
            <h1 className="mb-5 md:text-5xl font-bold text-black">WELCOME to the task management world</h1>
            <p className="mb-5 text-red-600 md:text-2xl font-bold"> It serves as a centralized hub where teams can collaborate, plan, assign, and track the progress of different tasks throughout the development lifecycle.</p>
            <div>
              
              <div className="btn bg-blue-500  border-0 -ml-3 -mb-2">
              
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <Link to='/login'> <button className="">Lets explore</button></Link>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    );
};

export default Banner;