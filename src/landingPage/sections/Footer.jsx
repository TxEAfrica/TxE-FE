import { Icon } from "../../icons/Icons";
import txeLogo from '../../assets/txeLogo.svg'
import ScrollToContainerLink from "../scroll/ScrollToContainerLink";

const Footer = () => {
    return ( 
        <div className="bg-orange-50 bottom-0 px-8 lg:px-20 py-4 relative">
            <div className="md:flex justify-around space-y-4 md:space-y-0">
                <div>
                    <p>
                        WANT TO KNOW MORE?
                    </p>
                    <h1 className="flex text-orange-500 font-semibold text-3xl">
                        Contact Us <Icon.Arrow className="-rotate-45 my-auto" />
                    </h1>
                    <div className="flex md:justify-between my-5 text-2xl">
                        <Icon.Instagram className="mr-6 md:mr-0" />
                        <Icon.LinkedIn className="mr-6 md:mr-0" />
                        <Icon.Twitter className="mr-6 md:mr-0" />
                        <Icon.Email className="mr-6 md:mr-0" />
                    </div>
                </div>

                <div  className="md:space-y-4">
                    <h1  className="font-bold">
                        Event Center
                    </h1>
                    <h2>
                        Golden Heart Centre, <br /> Emene.
                    </h2>
                    <h3 className="font-bold mt-2 md:mt-0">
                        Event Dates
                    </h3>
                    <p className="text-lg">
                        Sept. 28th & 29th, 2023
                    </p>
                </div>

                <div>
                    <h1 className="font-bold">
                        Event Time
                    </h1>
                    <p className="mt-2 mb-4">
                        10:00 am
                    </p>
                    <div className="text-sm">
                        <ul className=" space-y-4">
                            <li>About</li>
                            <li>Achievements</li>
                            <li>Speakers</li>
                            <li>Event</li>
                        </ul>
                    </div>
                </div>
                
                <ScrollToContainerLink to={'top'}>
                    <div className="absolute right-10 top-10 bottom-0 h-fit text-2xl p-2">
                        <Icon.Arrow className="-rotate-90" />
                    </div>
                </ScrollToContainerLink>
              
            </div>

            <div className="md:flex justify-between items-end space-y-2 mt-3 md:space-y-0 md:mt-0">
                <img src={txeLogo} alt="" />
                <p>A Williams Uchemba Foundation Initiative.</p>
                <p>© Enugu Tech Summit 2023</p>
            </div>
        </div>
     );
}
 
export default Footer;