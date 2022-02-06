import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<section className="choice-navbar">
			<div className="button-list">
				<button className="home nav-btn" > <Link to="/" >
					<img src="./icons/TB logo.svg" alt="" id="logo" />
				</Link>
				</button>
				<button className="schedule nav-btn" > <Link to="/schedule" >
					<img src="./icons/Schedule.svg" alt="" />
				</Link>
				</button>
				<button className="posts nav-btn" > <Link to="posts" >
					<img src="./icons/Post.svg" alt="" />
				</Link>
				</button>
				<button className="contactUs nav-btn" > <Link to="contactus" >
					<img src="./icons/Contact.svg" alt="" />
				</Link>
				</button>
				<button className="team nav-btn" > <Link to="ourteam" >
					<img src="./icons/Team member.svg" alt="" />
				</Link>
				</button>
			</div>
		</section>
	);
}

export default Navbar;