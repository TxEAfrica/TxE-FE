import TxELogoBg from "../../assets/txeLogoBg.svg"

const EventSchedule = () => {
    return ( 
        <div id="event-schedule">
            <div className="md:flex text-center md:text-start items-center md:justify-between px-8 md:px-20">
                <div className="md:w-3/4">
                    <h1 className="text-3xl font-bold mb-4 md:mb-0">
                        Event Schedule
                    </h1>
                    <p className="md:w-2/3 lg:w-1/2 mt-4">
                    The Enugu TxE Summit 2023 will be a two day event each day 
                    focusing on a different theme.
                    </p>
                </div>
                <div>
                    <div className='text-lg font-semibold mt-5'>
                    September 28th & 29th, 2023
                    <div className='flex space-x-2 mt-2 flex justify-center items-center lg:justify-start'>
                    <div className='w-10 h-2 rounded-full bg-orange-500'></div>
                    <div className='w-10 h-2 rounded-full bg-black'></div>
                    </div>
                    </div>
                </div>
            </div>
            
            <div className="flex mt-10 relative">
                <div className="absolute md:relative mr-10 my-auto">
                    <img src={TxELogoBg} loading='lazy'  alt="logo" />
                </div>
                <div className="px-8 md:px-20 w-1/2 lg:w-2/3 md:w-full">
                    <h1 className="text-orange-500 mb-5 text-2xl">
                        _day one
                    </h1>
                    <div>
                        <ul className="space-y-10 md:w-4/5">
                            <li className="space-y-2">
                                <h1 className="md:text-3xl font-bold">
                                Enterprenuership 
                                </h1>
                                <p className="text-sm md:text-lg lg:w-full">
                                A 1-day interactive workshop and fireside 
                                chat with leading experts from leading tech 
                                companies including Google
                                </p>
                            </li>
                            <li className="space-y-2">
                                <h1 className="font-bold">
                                Idea Pitch Session 
                                </h1>
                                <p className="text-sm md:text-lg lg:w-full">
                                Innovative businesses will be given an 
                                opportunity to pitch their ideas and businesss 
                                solutions to a panel of judges and recieve 
                                feedback.
                                </p>
                            </li>
                            <li className="space-y-2">
                                <h1 className="font-bold">
                                Enterprenuership 
                                </h1>
                                <p className="text-sm md:text-lg lg:w-full">
                                A 1-day interactive workshop and fireside 
                                chat with leading experts from leading tech 
                                companies including Google
                                </p>
                            </li>
                            <li className="space-y-2">
                                <h1 className="font-bold">
                                Grants and Support for Startups 
                                </h1>
                                <p className="text-sm md:text-lg lg:w-full">
                                Innovative businesses will stand a chance to 
                                be awarded seed fund grants to encourage their 
                                ventures.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h1 className="text-orange-500 mb-5 text-2xl">
                        _day two
                    </h1>
                    <div className="relative">
                        <ul className="space-y-10 lg:px-24 list-circle md:w-full border-l-2 border-orange-500">
                            <li className="space-y-2  px-4">
                                <h1 className="md:text-3xl font-bold">
                                Tech Skill Boost 
                                </h1>
                                <p className="text-sm md:text-lg">
                                An interactive workshop and fireside chat with 
                                leading experts from leading tech companies 
                                including Google.
                                </p>
                            </li>
                            <li className="space-y-2 px-4">
                                <h1 className="font-bold">
                                In-demand skills 
                                </h1>
                                <p className="text-sm md:text-lg">
                                Learn which skills are most sort after
                                </p>
                            </li>
                            <li className="space-y-2 px-4">
                                <h1 className="font-bold">
                                Learning opportunities & resources 
                                </h1>
                                <p className="text-sm md:text-lg">
                                How and where to learn those skills
                                </p>
                            </li>
                            <li className="space-y-2 px-4">
                                <h1 className="font-bold">
                                Securing employment 
                                </h1>
                                <p className="text-sm md:text-lg">
                                How to use your skills to work for global tech 
                                companies remotely from enugu and earn in 
                                dollars
                                </p>
                            </li>
                            <li className="space-y-2 px-4">
                                <h1 className="font-bold">
                                Q&A with Top Tech Talents 
                                </h1>
                                <p className="text-sm md:text-lg">
                                Ask experienced tech employees questions and 
                                get feedback from them directly
                                </p>
                            </li>
                            <li className="space-y-2 px-4">
                                <h1 className="font-bold">
                                Scholarships & Devices 
                                </h1>
                                <p className="text-sm md:text-lg">
                                1000 scholarships and 200 devices to jumpstart 
                                training and career.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default EventSchedule;