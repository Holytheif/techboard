import React from "react";
import img from "../images/img.svg";
import "./index.scss";
function Home() {
	return (
		<div className="page" id="p1">
			<div className="intro-header">
				<h1>AIT Technical Board</h1>
				<p>
					Engineering and technical board aspires to drop-ship particulars regarding every happening in the gallery of engineering world be it ongoing hackathons, exciting events, amazing sessions  and conferences taking place through the platform.

				</p>
			</div>
			<div className="major-event-info">
				<h1>Solutions</h1>
				<div className="Homeflex">
					<p>
						“SOLUTIONS” is the most awaited TECHNICAL FEST of AIT “SOLUTIONS 2K22” in a 'What not Different!!!' with the first-ever virtual + ground zero experience,
						So gear up your machines, brush up your minds, and markdown your calendar  to participate, win exciting prizes, and have an awesome experience✨
					</p>
					<img src={img} />
				</div>
			</div>
		</div>
	);
}
export default Home;
