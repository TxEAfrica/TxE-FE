import BtnPrimary from "../buttons/BtnPrimary";
import BtnSecondary from "../buttons/BtnSecondary";
import event from '../../assets/summit.png'

const Event = () => {
    return ( 
        <div className="px-8 md:px-20 flex flex-col-reverse md:flex md:flex-row">
            <div className="space-y-5">
                <h1  className="text-4xl font-bold md:w-1/2">
                Most anticipated Event of the Year
                </h1>
                <p className="md:w-3/4">
                The Enugu Tech and Entrepreneurship (TxE) Summit is back with 
                its second edition, once again to bring together the brightest 
                minds in technology and entrepreneurship in Enugu, Nigeria. 
                </p>
                <p className="md:w-3/4">
                Enugu TxE aims to ignite innovation, foster collaboration, and 
                empower the local entrepreneurial community. 
                </p>
                <p className="md:w-3/4">
                The summit aims to drive economic growth and position Enugu 
                as a leading tech hub in SouthEast, Nigeria. The first edition 
                which was held in September, 2022 was tremendously successful.
                </p>

                <div className="md:w-3/4 space-y-5 md:space-y-0 md:space-x-5 md:flex">
                    <BtnSecondary btnName={'Partner With Us'} />
                    <BtnPrimary btnName={'Register'} />
                </div>
            </div>

            <div className="h-full mb-5">
                <img src={event} className="h-full" alt="" />
            </div>
        </div>
     );
}
 
export default Event;