import BtnPrimary from "../buttons/BtnPrimary";
import BtnSecondary from "../buttons/BtnSecondary";
import event from '../../assets/summit.png'
import { useNavigate } from "react-router-dom";

const Event = () => {
    const navigate = useNavigate()
    return ( 
        <div id="about" className="px-8 lg:px-20 flex flex-col-reverse lg:flex lg:flex-row">
            <div className="space-y-5">
                <h1  className="text-4xl font-bold lg:w-1/2">
                Most Anticipated Event of the Year
                </h1>
                <p className="lg:w-3/4">
                The Enugu Tech and Entrepreneurship (TxE) Summit is back with 
                its second edition, once again to bring together the brightest 
                minds in technology and entrepreneurship in Enugu, Nigeria. 
                </p>
                <p className="lg:w-3/4">
                Enugu TxE aims to ignite innovation, foster collaboration, and 
                empower the local entrepreneurial community. 
                </p>
                <p className="lg:w-3/4">
                The summit aims to drive economic growth and position Enugu 
                as a leading tech hub in SouthEast, Nigeria. The first edition 
                which was held in September, 2022 was tremendously successful.
                </p>

                <div className="lg:w-3/4 space-y-5 md:space-y-0 lg:space-y-0 md:space-x-5 md:flex">
                    <div className="cursor-pointer h-fit w-full">
                        <BtnSecondary btnName={'Partner With Us'} />
                    </div>
                    <div className="cursor-pointer w-full h-fit" onClick={()=>navigate('/register')}>
                        <BtnPrimary btnName={'Register'} />
                    </div>
                </div>
            </div>

            <div className="h-full mb-5">
                <img src={event} loading='lazy' className="h-full object-cover" alt="" />
            </div>
        </div>
     );
}
 
export default Event;