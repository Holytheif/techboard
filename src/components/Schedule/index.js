import { directive } from "@babel/types";
import { getByTitle } from "@testing-library/react";
import React from "react";
// import img1 from "../images/img1.svg";

function Schedule() {
  return (
    <div className="page" id="p2">
      <h3 className="page-title">Schedule</h3>
      <div className="fieldset">
        <fieldset>
          <legend> 29 Sep , Saturday</legend>
          <div className="divide2">
            <div className="event">
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, qu
              </p>
            </div>
            <div className="event-img">
              <img />
            </div>
          </div>
          <a href="">
            <button className="download">
              Download
            </button>
          </a>
        </fieldset>

      </div>
    </div>
  );
}

export default Schedule;
