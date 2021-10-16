import { directive } from "@babel/types";
import { getByTitle } from "@testing-library/react";
import React from "react";
// import img1 from "../images/img1.svg";

function Schedule() {
  return (
    <div className="page" id="p2">
      <h3>Schedule</h3>
      <hr></hr>
      <div className="fieldset">
        <fieldset>
          <legend> 29 Sep , Saturday</legend>
          <div className="divide2">
            <div className="event">
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, qu
              </p>
            </div>
            <div className="eventimg">
              <img />
            </div>
          </div>
          <a href="" className="download" download>
            Download
          </a>
        </fieldset>
        <fieldset>
          <legend>29 Sep , Saturday</legend>
          <div className="divide2">
            <div className="event">
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, qu
              </p>
            </div>
            <div className="eventimg">
              <img />
            </div>
          </div>
          <a href="" className="download" download>
            Download
          </a>
        </fieldset>
      </div>
      <div className="fieldset">
        <fieldset>
          <legend>29 Sep , Saturday</legend>
          <div className="divide2">
            <div className="event">
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, qu
              </p>
            </div>
            <div className="eventimg">
              <img />
            </div>
          </div>
          <a href="" className="download" download>
            Download
          </a>
        </fieldset>
        <fieldset>
          <legend>29 Sep , Saturday</legend>
          <div className="divide2">
            <div className="event">
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, qu
              </p>
            </div>
            <div className="eventimg">
              <img />
            </div>
          </div>
          <a href="" className="download" download>
            Download
          </a>
        </fieldset>
      </div>
    </div>
  );
}

export default Schedule;
