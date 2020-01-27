import React from "react";
import "./index.scss";

import { Router } from "@reach/router";
import PrivateRoute from "../components/PrivateRoute";
import Login from "../components/Login";

const locationUrl =
  "https://www.google.com/maps/place/700+Crescent+Ave,+Saratoga+Springs,+NY+12866/@43.0561266,-73.7299642,14z";

const Main = () => (
  <div className="card column main">
    <div className="intro">An internet website to announce</div>
    <div className="mainTitle">
      <div className="part">Missy</div>
      <div className="part">&</div>
      <div className="part">Phil's</div>
    </div>
    <div className="subtitle">Marital Union</div>
  </div>
);

const Location = () => (
  <div className="card row location">
    <div
      className="subcard column text"
      style={{ justifyContent: "space-between", alignItems: "flex-start" }}
    >
      <div className="address">
        <div className="title">Saratoga Springs</div>
        <div>700 Crescent Ave</div>
        <div>Saratoga Springs, NY</div>
        <div>12866</div>
      </div>
      <div className="directions">
        <a href={locationUrl} target="_blank" rel="noopener noreferrer">
          Get Directions &nbsp;&nbsp;&nbsp;&#8594;
        </a>
      </div>
    </div>
    <a
      href={locationUrl}
      className="subcard column map"
      target="_blank"
      rel="noopener noreferrer"
    >
      &nbsp;
    </a>
  </div>
);

const Schedule = () => {
  const fridaySchedule = [
    { name: "Gathering in downtown Saratoga", time: "7 pm" },
  ];
  const saturdaySchedule = [
    { name: "Ceremony and lunch", time: "12 pm" },
    { name: "Lake hangout and downtime", time: "2 pm" },
    { name: "Cocktails", time: "6 pm" },
    { name: "Dinner and night party", time: "7 pm" }
  ];
  const sundaySchedule = [
    { name: "Brunch", time: "10 am" },
  ];
  return (
    <div className="card row schedule">
      <div className="subcard">
        <div className="day">
          <div className="title">Friday, Sept. 18th</div>
          <div className="scheduleTable">
            {fridaySchedule.map((row, i) => (
              <div className="scheduleRow" key={i}>
                <div className="time">{row.time}</div>
                <div className="spacer" />
                <div className="eventName">{row.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="day">
          <div className="title">Saturday, Sept. 19th</div>
          <div className="scheduleTable">
            {saturdaySchedule.map((row, i) => (
              <div className="scheduleRow" key={i}>
                <div className="time">{row.time}</div>
                <div className="spacer" />
                <div className="eventName">{row.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="day">
          <div className="title">Sunday, Sept. 20th</div>
          <div className="scheduleTable">
            {sundaySchedule.map((row, i) => (
              <div className="scheduleRow" key={i}>
                <div className="time">{row.time}</div>
                <div className="spacer" />
                <div className="eventName">{row.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="subcard">
        <div className="title">What to expect</div>
        <div>The venue is right on Saratoga Lake, and is Missy's childhood home.</div>
        <div>We hope you can join us for the full day Saturday and recommend traveling on Friday (or earlier!) if you can.</div>
        <div style={{ marginTop: 25}}>fill this in more...</div>
      </div>
    </div>
  );
};

const App = () => (
  <div className="container">
    <Main />
    <Location />
    <Schedule />
  </div>
);

export default () => {
  return (
    <Router>
      <Login path="/login" />
      <PrivateRoute path="/" component={App} />
    </Router>
  );
};
