import TxELogoBg from "../../assets/txeLogoBg.svg";
import "../Landing.css";

const EventSchedule = () => {
	return (
		<div id="event-schedule">
			<div
				id="schedule"
				className="md:flex text-center md:text-start items-center md:justify-between px-8 md:px-20">
				<div className="md:w-3/4">
					<h1
						id="section-heading"
						className="text-5xl mt-10 lg:mt-0 font-bold mb-4 md:mb-0">
						Event Schedule
					</h1>
					<p className="md:w-2/3 lg:w-1/2 mt-4">
						The Enugu TxE Summit 2023 will be a two day event each day focusing
						on a different theme.
					</p>
				</div>
				<div>
					<div
						id="date"
						className="text-lg text-right font-normal mt-5">
						September 29th, 2023
						<div className="flex space-x-2 mt-2 flex justify-center items-center lg:justify-start lines">
							<div className="w-72 h-1 rounded-full bg-orange"></div>
							<div className="w-72 h-1 rounded-full bg-orange-50"></div>
						</div>
					</div>
				</div>
			</div>

			<div
				id="schedule-split"
				className="flex justify-center mx-auto mt-10">
				<div
					id="schedule-split-1"
					className="px-8 md:px-20 w-1/2 lg:w-1/3 md:w-1/2">
					{/* <h1 className="orange mb-5 text-2xl">_day one</h1> */}
					<div>
						<ul className="space-y-10 md:w-full lg:w-full text-gray-300">
							<li className="space-y-2">
								<h1 className=" md:w-full md:text-4xl font-normal font-semibold orange">
									Enterprenuership
								</h1>
								<p className="md:w-full lg:w-full">
									A 1-day interactive workshop and fireside chat with leading
									experts from leading tech companies including Google
								</p>
							</li>
							<li className="space-y-2">
								<h1 className="font-bold">Idea Pitch Session</h1>
								<p className="md:w-full lg:w-full">
									Innovative businesses will be given an opportunity to pitch
									their ideas and businesss solutions to a panel of judges and
									recieve feedback.
								</p>
							</li>
							<li className="space-y-2">
								<h1 className="font-bold">Enterprenuership</h1>
								<p className="md:w-full lg:w-full">
									A 1-day interactive workshop and fireside chat with leading
									experts from leading tech companies including Google
								</p>
							</li>
							<li className="space-y-2">
								<h1 className="font-bold">Grants and Support for Startups</h1>
								<p className="md:w-full lg:w-full">
									Innovative businesses will stand a chance to be awarded seed
									fund grants to encourage their ventures.
								</p>
							</li>
						</ul>
					</div>
				</div>

				<div
					id="schedule-split-2"
					className="flex px-2 md:px-20 w-full lg:w-full md:w-full">
					{/* <h1 className="orange mb-5 text-2xl">_day two</h1> */}
					<div className="relative">
						<ul className="space-y-10 lg:px-12 list-circle z-20 md:w-full border-l-2 border-l-orange text-gray-300 event-list">
							<li className="space-y-2 px-4 md:w-full lg:w-full">
								<h1 className="md:text-4xl font-normal font-semibold lg:w-full orange">
									Tech Skill Boost
								</h1>
								<p className="md:w-2/3 lg:w-full">
									An interactive workshop and fireside chat with leading experts
									from leading tech companies including Google.
								</p>
							</li>
							<li className="space-y-2 px-4">
								<h1 className="font-bold">In-demand skills</h1>
								<p className="md:w-2/3 lg:w-full">
									Learn which skills are most sort after
								</p>
							</li>
							<li className="space-y-2 px-4">
								<h1 className="font-bold">
									Learning opportunities & resources
								</h1>
								<p className="md:w-2/3 lg:w-full">
									How and where to learn those skills
								</p>
							</li>
							<li className="space-y-2 px-4">
								<h1 className="font-bold">Securing employment</h1>
								<p className="md:w-2/3 lg:w-full">
									How to use your skills to work for global tech companies
									remotely from enugu and earn in dollars
								</p>
							</li>
							<li className="space-y-2 px-4">
								<h1 className="font-bold">Q&A with Top Tech Talents</h1>
								<p className="md:w-2/3 lg:w-full">
									Ask experienced tech employees questions and get feedback from
									them directly
								</p>
							</li>
							<li className="space-y-2 px-4">
								<h1 className="font-bold">Scholarships & Devices</h1>
								<p className="md:w-2/3 lg:w-full">
									1000 scholarships and 200 devices to jumpstart training and
									career.
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EventSchedule;
