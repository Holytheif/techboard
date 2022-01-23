import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "../src/components/HomePage/index";
import Schedule from "../src/components/Schedule/index";
import PostSection from "../src/components/PostsSection";
import ContactUs from "../src/components/ContactUs/index";
import TeamMembers from "./components/Team";

import "./App.scss"
import ScrollToTop from "./components/ScrollToTop";


function App() {
	return (
		<Router>
			<ScrollToTop>
				<div className="App">
					<section className="choice-navbar">
						<div className="button-list">
							<button className="home nav-btn" > <Link to="/" >
								<i className="icon fa fa-home" id="uno"></i>
							</Link>
							</button>
							<button className="schedule nav-btn" > <Link to="/schedule" >
								<i className="icon fa fa-calendar" id="dos"></i>
							</Link>
							</button>
							<button className="posts nav-btn" > <Link to="posts" >
								<i className="fas fa-clone"></i>
							</Link>
							</button>
							<button className="contactUs nav-btn" > <Link to="contactus" >
								<i className="fas fa-address-book"></i>
							</Link>
							</button>
							<button className="team nav-btn" > <Link to="ourteam" >
								<i className="fas fa-users"></i>
							</Link>
							</button>
						</div>
					</section>
					<section className="content">
						<Routes>
							<Route exact path='/' element={<Home />}></Route>
							<Route exact path='/schedule' element={<Schedule />}></Route>
							<Route exact path='/posts' element={<PostSection />}></Route>
							<Route exact path='/contactus' element={<ContactUs />}></Route>
							<Route exact path='/ourteam' element={<TeamMembers />}></Route>
						</Routes>
					</section>
				</div>
			</ScrollToTop>
		</Router >
	);
}

export default App;
