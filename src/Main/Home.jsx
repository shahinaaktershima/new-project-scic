import ForTask from "../Layout/todo/task/ForTask";
import Marque from "../Layout/todo/task/Marque";


import Banner from "./Banner";
import Footer from "./Footer";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
           
            <ForTask></ForTask>
            <Marque></Marque>
            <Footer></Footer>
        </div>
    );
};

export default Home;