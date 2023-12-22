import Marquee from "react-fast-marquee";


const Marque = () => {
    return (
        <div className="max-h-[400px] my-10 mx-auto">
            <h2 className="text-center text-3xl font-bold mb-10">Explore all the task and select which one will be helpfull for you..</h2>
        <Marquee className="" speed={20} pauseOnHover={true}>
<img className="h-[300px] w-full" src="https://i.postimg.cc/Bn0mnMcp/image.png" alt="" />
<img className="h-[300px] w-full" src="https://i.postimg.cc/6pthXTt1/image.png" alt="" />
<img  className="h-[300px] w-full" src="https://i.postimg.cc/RF67RHLq/image.png" alt="" />
<img className="h-[300px] w-full" src="https://i.postimg.cc/9QmykSY6/image.png" alt="" />

        </Marquee> 
     </div>
    );
};

export default Marque;