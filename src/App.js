import React from "react";
import Home from "../src/components/HomePage/index";
import Schedule from "../src/components/Schedule/index";
import PostSection from "../src/components/PostsSection";
import ContactUs from "../src/components/ContactUs/index";
import BlogPosts from "./components/BlogPosts"
import "./styles.css"


function App() {
  return (
    <div className="App">
      <div className="ct" id="t1">
        <div className="ct" id="t2">
          <div className="ct" id="t3">
            <div className="ct" id="t4">
              <div className="ct" id="t5">
                <section>
                  <ul>
                    <div className="DisplayName">
                      <a href="#t1">
                        <li className="icon fa fa-home" id="uno"></li>
                      </a>
                      <a href="#t2">
                        <li className="icon fa fa-calendar" id="dos"></li>
                      </a>
                      <a href="#t3">
                        <li className="icon fa fa-star" id="tres"></li>
                      </a>
                      <a href="#t4">
                        <li className="icon fa fa-user-friends" id="cuatro"></li>
                      </a>
                      <a href="#t5">
                        <li className="icon fa fa-comments" id="pent"></li>
                      </a>
                    </div>
                  </ul>
                  <Home />
                  <Schedule />
                  <BlogPosts />
                  <PostSection />
                  <ContactUs />
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
