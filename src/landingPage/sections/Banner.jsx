import { useNavigate } from "react-router-dom";
import BtnPrimary from "../buttons/BtnPrimary";
import BtnSecondary from "../buttons/BtnSecondary";

const Banner = () => {
    const navigate = useNavigate()
    return ( 
        <div id="top" className="md:bg-banner bg-cover bg-no-repeat h-screen relative w-full overflow-hidden">
            <div className="gradient-overlay"></div>
            <div className="content-container md:text-white flex flex-col items-center md:justify-center text-center">
                <h1 className="text-4xl md:text-6xl font-bold w-5/6 mt-16 md:mt-0 mb-5">
                    <span className="text-orange-600">Enugu</span> Tech & Entrepreneurship Summit 2023
                </h1>
                <p className="text-lg md:text-2xl font-semibold mb-10">
                    Great Innovative Ideas Unleashed
                </p>
                <div className="md:flex space-y-5 md:space-y-0 md:space-x-5 w-full md:w-1/2 p-8">
                    <div className="cursor-pointer h-fit w-full">
                        <BtnSecondary btnName={'Partner With Us'} />
                    </div>
                    <div className="cursor-pointer w-full h-fit" onClick={()=>navigate('/register')}>
                        <BtnPrimary btnName={'Register'} />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Banner;
