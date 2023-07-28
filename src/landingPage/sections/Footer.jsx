import { Icon } from "../../icons/Icons";

const Footer = () => {
    return ( 
        <div>
            <div>
                <div>
                    <p>
                        WANT TO KNOW MORE?
                    </p>
                    <h1 className="flex">
                        Contact Us <Icon.Arrow className="-rotate-45 my-auto" />
                    </h1>
                    <div>
                        <Icon.Instagram />
                        <Icon.LinkedIn />
                        <Icon.Twitter />
                        <Icon.Email />
                    </div>
                </div>

                <div>
                    <h1>
                        Event Center
                    </h1>
                    <h2>
                        Golden Heart Centre, <br /> Emene
                    </h2>
                    <h3>
                        Event Dates
                    </h3>
                    <p>
                        Sept. 28th & 29th, 2023
                    </p>
                </div>

                <div>
                    <h1>
                        Event Time
                    </h1>
                    <p>
                        10:00 am
                    </p>
                    <div>
                        <ul>
                            <li>About</li>
                            <li>Achievements</li>
                            <li>Speakers</li>
                            <li>Event</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <img src={txeLogo} alt="" />
                <p>A Williams Uchemba Foundation Initiative.</p>
                <p>© Enugu Tech Summit 2023</p>
            </div>
        </div>
     );
}
 
export default Footer;