import Banner from "./sections/Banner";
import Navbar from "./sections/Navbar";
import Sponsors from "./sections/Sponsors";

const Home = () => {
    return ( 
        <>
            <Navbar />
            <div className="w-full relative">
                <Banner />
                <div className="flex justify-center items-center absolute bottom-0 md:-bottom-20 left-0 right-0 z-30">
                    <Sponsors />
                </div>
            </div>
        </>
     );
}
 
export default Home;