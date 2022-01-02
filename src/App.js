import React from "react";
import { useState } from "react";

import Home from "../src/components/HomePage/index";
import Schedule from "../src/components/Schedule/index";
import PostSection from "../src/components/PostsSection";
import ContactUs from "../src/components/ContactUs/index";
import TeamMembers from "./components/Team";

import "./App.scss"

import { motion } from "framer-motion";

const choiceClickHandler = (setChoice, option) => {
	setChoice(option);
}

const renderChoice = (choice) => {
	switch (choice) {
		case "home":
			return (
				<>
					<motion.div
						key={choice}
						initial={{ opacity: 0.01 }}
						animate={{ opacity: 1 }}
						transition={{
							delay: 0.1,
							duration: 0.8
						}}
					>
						<Home />
					</motion.div>
				</>
			);
		case "schedule":
			return (
				<>
					<motion.div
						key={choice}
						initial={{ opacity: 0.01 }}
						animate={{ opacity: 1 }}
						transition={{
							delay: 0.1,
							duration: 0.8
						}}
					>
						<Schedule />
					</motion.div>
				</>
			);
		case "posts":
			return (
				<>
					<motion.div
						key={choice}
						initial={{ opacity: 0.01 }}
						animate={{ opacity: 1 }}
						transition={{
							delay: 0.1,
							duration: 0.8
						}}
					>
						<PostSection />
					</motion.div>
				</>
			);
		case "contactUs":
			return (
				<>
					<motion.div
						key={choice}
						initial={{ opacity: 0.01 }}
						animate={{ opacity: 1 }}
						transition={{
							delay: 0.1,
							duration: 0.8
						}}
					>
						<ContactUs />
					</motion.div>
				</>
			);
		case "team":
			return (
				<>
					<motion.div
						key={choice}
						initial={{ opacity: 0.01 }}
						animate={{ opacity: 1 }}
						transition={{
							delay: 0.1,
							duration: 0.8
						}}
					>
						<TeamMembers />
					</motion.div>
				</>
			);
		default:
			break;
	}
}

function App() {
	const [choice, setChoice] = useState("home");

	return (
		<div className="App">
			<section className="choice-navbar">
				<div className="button-list">
					<button className="home nav-btn" onClick={() => choiceClickHandler(setChoice, "home")}>
						<i className="icon fa fa-home" id="uno"></i>
					</button>
					<button className="schedule nav-btn" onClick={() => choiceClickHandler(setChoice, "schedule")}>
						<i
							className="icon fa fa-calendar"
							id="dos"
						></i>
					</button>
					<button className="posts nav-btn" onClick={() => choiceClickHandler(setChoice, "posts")}>
						<i
							className="icon fa fa-user-friends"
							id="cuatro"
						></i>
					</button>
					<button className="contactUs nav-btn" onClick={() => choiceClickHandler(setChoice, "contactUs")}>
						<i
							className="icon fa fa-comments"
							id="pent"
						></i>
					</button>
					<button className="team nav-btn" onClick={() => choiceClickHandler(setChoice, "team")}>
						<i
							className="icon fa fa-comments"
							id="pent"
						></i>
					</button>
				</div>
			</section>
			<section className="content">
				{renderChoice(choice)}
			</section>
		</div>
	);
}

export default App;
