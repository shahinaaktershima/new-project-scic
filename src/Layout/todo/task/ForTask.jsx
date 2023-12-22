
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


// Import Swiper React components

import { Navigation } from 'swiper/modules';

const ForTask = () => {
    return (
        <div className='my-5'>
        <h2 className='font-bold text-3xl text-center my-5'>For whom this task will be helpful?</h2>
           <Swiper navigation={true} modules={[Navigation]} className="mySwiper text-center">
        <SwiperSlide><div className="hero h-full  bg-base-200 md:px-16">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img  src="https://i.postimg.cc/L60yyYCj/image.png" className="max-w-md rounded-lg shadow-2xl h-[400px]" />
    <div>
      <h1 className="text-5xl font-bold text-red-600">Developers/Programmers</h1>
      <p className="py-6 text-xl text-purple-600 font-bold">For obvious reasons, web development tasks are directly beneficial to developers. They gain hands-on experience, improve their coding skills, and stay updated with new technologies. This helps them in advancing their careers and becoming more proficient in their field.</p>
    
    </div>
  </div>
 </div></SwiperSlide>
        <SwiperSlide><div className="hero h-full  bg-base-200 md:px-16">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.postimg.cc/P5y16Br9/image.png" className="max-w-md rounded-lg shadow-2xl h-[400px]" />
    <div>
      <h1 className="text-5xl font-bold text-red-600">Business Owners/Entrepreneurs</h1>
      <p className="py-6 text-xl text-purple-600 font-bold">Understanding the basics of web development can be incredibly beneficial for business owners. It enables them to communicate more effectively with their development team, make informed decisions regarding their website or web applications, and have a clearer vision of what's feasible in terms of web functionalities.</p>
     
    </div>
  </div>
 </div></SwiperSlide>
        <SwiperSlide><div className="hero h-full  bg-base-200 md:px-16">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.postimg.cc/850HZxwN/image.png" className="max-w-md rounded-lg shadow-2xl h-[400px]" />
    <div>
      <h1 className="text-5xl font-bold text-red-600">Designers</h1>
      <p className="py-6 text-xl text-purple-600 font-bold">Web development tasks help designers comprehend the technical aspects of implementing their designs on the web. It allows them to create designs that are not only aesthetically pleasing but also functional and feasible to implement.</p>
     
    </div>
  </div>
 </div></SwiperSlide>
        <SwiperSlide><div className="hero h-full  bg-base-200 md:px-16">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.postimg.cc/k40jnkSw/image.png" className="max-w-md rounded-lg shadow-2xl h-[400px]" />
    <div>
      <h1 className="text-5xl font-bold text-red-600">Digital Marketers</h1>
      <p className="py-6 text-xl text-purple-600 font-bold">Knowing web development basics assists marketers in understanding how websites work, which is crucial for optimizing content, SEO strategies, and user experience. They can make data-driven decisions and collaborate effectively with development teams to achieve marketing goals</p>
     
    </div>
  </div>
 </div></SwiperSlide>
        <SwiperSlide><div className="hero h-full  bg-base-200 md:px-16">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.postimg.cc/9FF9DLBB/image.png" className="max-w-md rounded-lg shadow-2xl h-[400px]" />
    <div>
      <h1 className="text-5xl font-bold text-red-600">Students/Learners</h1>
      <p className="py-6 text-xl text-purple-600 font-bold">Learning web development can be an excellent gateway into the tech industry. It helps individuals build a foundational understanding of programming, design, and the internet, setting them on a path to various tech-related careers.</p>
     
    </div>
  </div>
 </div></SwiperSlide>
        <SwiperSlide><div className="hero h-full  bg-base-200 md:px-16">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.postimg.cc/7LghszV6/image.png" className="max-w-md rounded-lg shadow-2xl h-[400px]" />
    <div>
      <h1 className="text-5xl font-bold text-red-600">Freelancers</h1>
      <p className="py-6 text-xl text-purple-600 font-bold">Having web development skills can significantly expand the scope of services freelancers offer. It allows them to take on website building, maintenance, or customization projects, increasing their marketability and earning potential</p>
     
    </div>
  </div>
 </div></SwiperSlide>
       
      </Swiper> 
        </div>
    );
};

export default ForTask;