import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import CounterUpCSS from "./CountUpAnimation.module.css";

function CountUpAnimation() {
	const [counterOn, setCounterOn] = useState(false);

	return (
		<ScrollTrigger
			onEnter={() => setCounterOn(true)}
			onExit={() => setCounterOn(false)}>
			<div className={CounterUpCSS.counterUp}>
				<div className={CounterUpCSS.countItem}>
					<p>Attendees</p>
					<h1>
						{counterOn && (
							<CountUp
								start={0}
								end={28}
								duration={1}
								delay={0.1}
							/>
						)}
						K+
					</h1>
				</div>
				<div className={CounterUpCSS.countItem}>
					<p>Tech Scholarships</p>
					<h1>
						{counterOn && (
							<CountUp
								start={0}
								end={500}
								duration={1}
								delay={0.1}
							/>
						)}
						+
					</h1>
				</div>
				<div className={CounterUpCSS.countItem}>
					<p>Online Community</p>
					<h1>
						{counterOn && (
							<CountUp
								start={0}
								end={22}
								duration={2}
								delay={0.1}
							/>
						)}
						K+
					</h1>
				</div>
				<div className={CounterUpCSS.countItem}>
					<p>Post Event Enrollment</p>
					<h1>
						{counterOn && (
							<CountUp
								start={0}
								end={1613}
								duration={1}
								delay={0.1}
							/>
						)}
						+
					</h1>
				</div>
			</div>
		</ScrollTrigger>
	);
}

export default CountUpAnimation;
