import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/navbar";
import MainContent from "./components/mainContent";

import "./App.scss"

function App() {
	return (
		<Router>
			<ScrollToTop>
				<div className="App">
					<Navbar />
					<MainContent />
				</div>
			</ScrollToTop>
		</Router >
	);
}

export default App;
