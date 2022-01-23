import React from "react";
import "./index.scss";
import teamLeadsDetails from "./teamLeads";
import jtSecDetails from "./JointSecDetails";
import JtSecSocialMedia from "./JtSecSocialMedia.json";
import TechLeadsSocialMedia from "./TechLeadsSocialMedia.json";

const fetchTeamJtSecDetails = () => {
	let temp = [];

	for (let i = 0; i < jtSecDetails.length; i++) {
		temp.push({
			...jtSecDetails[i],
			...(JtSecSocialMedia.find((itmInner) => itmInner.Name === jtSecDetails[i].name))
		}
		);
	}
	temp.map((member) => {
		delete member["Name"];
	})
	return temp;
}

const fetchTeamLeadDetails = () => {
	let temp = [];

	for (let i = 0; i < teamLeadsDetails.length; i++) {
		temp.push({
			...teamLeadsDetails[i],
			...(TechLeadsSocialMedia.find((itmInner) => itmInner.Name === teamLeadsDetails[i].name))
		}
		);
	}
	temp.map((member) => {
		delete member["Name"];
	})
	return temp;
}

const renderTeamLeadsDetails = () => {

	const teamLeadsDetails = fetchTeamLeadDetails();

	return (teamLeadsDetails.map((member, index) => {
		if (index == 1) {
			return (
				<>
					<div className={member.designation}>
						<div className="member-card">
							<div className="links">
								<a href={member["LinkedIn profile"]}>
									<button>
										<i className="fab fa-linkedin option-icon socio-links"></i>
									</button>
								</a>
								<a href={member["Facebook profile"]}>
									<button>
										<i className="fab fa-facebook option-icon socio-links"></i>
									</button>
								</a>
								<button>
									<i className="fab fa-google-plus socio-links"></i>
								</button>
								<a href={member["Instagram profile"]}>
									<button>
										<i className="fab fa-instagram option-icon socio-links"></i>
									</button>
								</a>
							</div>
							<div className="description">
								<div className="member-image">
									<img src={member.url} />
								</div>
								<div className="member-desc">
									<h3 className="name">
										{member.name}
									</h3>
									<h4 className="designation">
										{member.designation}
									</h4>
								</div>
							</div>
						</div>
					</div>
					<div className="break"></div>
				</>
			)
		}
		return (
			<>
				<div className={member.designation}>
					<div className="member-card">
						<div className="links">
							<a href={member["LinkedIn profile"]}>
								<button>
									<i className="fab fa-linkedin option-icon socio-links"></i>
								</button>
							</a>
							<a href={member["Facebook profile"]}>
								<button>
									<i className="fab fa-facebook option-icon socio-links"></i>
								</button>
							</a>
							<button>
								<i className="fab fa-google-plus socio-links"></i>
							</button>
							<a href={member["Instagram profile"]}>
								<button>
									<i className="fab fa-instagram option-icon socio-links"></i>
								</button>
							</a>
						</div>
						<div className="description">
							<div className="member-image">
								<img src={member.url} />
							</div>
							<div className="member-desc">
								<h3 className="name">
									{member.name}
								</h3>
								<h4 className="designation">
									{member.designation}
								</h4>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}));
}

const renderTeamJtSecDetails = () => {

	const teamJtSecDetails = fetchTeamJtSecDetails();

	return (teamJtSecDetails.map((member) => {
		return (
			<>
				<div className={member.designation}>
					<div className="member-card">
						<div className="links">
							<a href={member["LinkedIn profile"]}>
								<button>
									<i className="fab fa-linkedin option-icon socio-links"></i>
								</button>
							</a>
							<a href={member["Facebook profile"]}>
								<button>
									<i className="fab fa-facebook option-icon socio-links"></i>
								</button>
							</a>
							<button>
								<i className="fab fa-google-plus socio-links"></i>
							</button>
							<a href={member["Instagram profile"]}>
								<button>
									<i className="fab fa-instagram option-icon socio-links"></i>
								</button>
							</a>
						</div>
						<div className="description">
							<div className="member-image">
								<img src={member.url} />
							</div>
							<div className="member-desc">
								<h3 className="name">
									{member.name}
								</h3>
								<h4 className="designation">
									{member.designation}
								</h4>
							</div>
						</div>
					</div>
				</div>
			</>);
	})
	);
}

const TeamMembers = () => {
	return (
		<div className="page" id="p6">
			<div className="header">
				<h3 className="page-title">Our Team</h3>
				<svg width="577" height="41" viewBox="0 0 577 41" fill="none" xmlns="http://www.w3.org/2000/svg">
					<line x1="57.5" y1="19.5" x2="519.5" y2="19.5" stroke="white" strokeWidth="3" strokeLinecap="round" />
					<path d="M23.6042 20.4833C23.6042 20.4833 14.936 15.9204 6.5814 16.2546C4.58972 16.3226 -0.693536 17.9372 1.88941 21.9757C4.10852 25.4416 15.7324 24.6557 23.6042 20.4833Z" fill="white" />
					<path d="M35.5804 23.4628C35.5804 23.4628 25.9999 25.5046 19.7943 31.1085C18.3075 32.4354 15.2815 37.0574 19.8508 38.5073C23.7741 39.7501 32.2025 31.7067 35.5804 23.4628Z" fill="white" />
					<path d="M35.5804 17.5372C35.5804 17.5372 25.9999 15.4954 19.7943 9.89154C18.3075 8.56457 15.2815 3.94256 19.8508 2.49266C23.7741 1.24986 32.2025 9.29325 35.5804 17.5372Z" fill="white" />
					<path d="M552.976 20.5167C552.976 20.5167 561.644 25.0796 569.999 24.7454C571.99 24.6774 577.274 23.0628 574.691 19.0243C572.472 15.5584 560.848 16.3443 552.976 20.5167Z" fill="white" />
					<path d="M541 17.5372C541 17.5372 550.58 15.4954 556.786 9.89154C558.273 8.56457 561.299 3.94256 556.729 2.49266C552.806 1.24986 544.378 9.29325 541 17.5372Z" fill="white" />
					<path d="M541 23.4628C541 23.4628 550.58 25.5046 556.786 31.1085C558.273 32.4354 561.299 37.0574 556.729 38.5073C552.806 39.7501 544.378 31.7067 541 23.4628Z" fill="white" />
				</svg>
			</div>
			<h3 className="section-title">TechBoard Leads</h3>
			<div className="member-section">
				{renderTeamLeadsDetails()}
			</div>
			<h3 className="section-title">Joint Secrataries</h3>
			<div className="member-section">
				{renderTeamJtSecDetails()}
			</div>
		</div>
	);
}

export default TeamMembers;