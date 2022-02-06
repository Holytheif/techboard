import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Home from "./HomePage/index";
import Schedule from "./Schedule/index";
import PostSection from "./PostsSection/index";
import ContactUs from "./ContactUs/index";
import TeamMembers from "./Team/index";
const routes = [
	{ path: '/', name: 'Home', Component: Home },
	{ path: '/schedule', name: 'About', Component: Schedule },
	{ path: '/posts', name: 'Posts', Component: PostSection },
	{ path: '/contactus', name: 'ContactUs', Component: ContactUs },
	{ path: '/ourteam', name: 'Team', Component: TeamMembers },
]

const MainContent = () => {
	const location = useLocation();
	return (
		<section className="content">
			<TransitionGroup>
				<CSSTransition
					timeout={300}
					classNames='page-animate'
					key={location.key}
				>
					<Routes>
						<Route exact path='/' element={<Home />}></Route>
						<Route exact path='/schedule' element={<Schedule />}></Route>
						<Route exact path='/posts' element={<PostSection />}></Route>
						<Route exact path='/contactus' element={<ContactUs />}></Route>
						<Route exact path='/ourteam' element={<TeamMembers />}></Route>
					</Routes>
				</CSSTransition>
			</TransitionGroup>
		</section>
	);
}

export default MainContent;