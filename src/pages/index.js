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

const ScheduleItem = ({ time, name }) => {
  const [hourMin, ampm] = time.split(" ");
  let hour, min;
  if (hourMin.indexOf(":") > 0) {
    [hour, min] = hourMin.split(":");
  } else {
    hour = hourMin;
  }

  return (
    <div className="scheduleRow">
      <div className="time">
        <span className="hour">{hour}</span>
        {min ? <span className="min">{min}</span> : null}
        <span className="ampm">{ampm}</span>
      </div>
      <div className="spacer" />
      <div className="eventName">{name}</div>
    </div>
  );
};

const Schedule = () => {
  const fridaySchedule = [
    { name: "Gathering in downtown Saratoga", time: "7 pm" }
  ];
  const saturdaySchedule = [
    { name: "Guest arrival", time: "11:30 am" },
    { name: "Ceremony and lunch", time: "12 pm" },
    { name: "Lake hangout / Siesta", time: "2 pm" },
    { name: "Cocktails", time: "6 pm" },
    { name: "Dinner and night party", time: "7 pm" }
  ];
  const sundaySchedule = [{ name: "Brunch", time: "10 am" }];
  return (
    <div className="card row schedule">
      <div className="subcard">
        <div className="day">
          <div className="title">
            Friday, Sept. 18<span className="super">th</span>
          </div>
          <div className="scheduleTable">
            {fridaySchedule.map((row, i) => (
              <ScheduleItem {...row} key={i} />
            ))}
          </div>
        </div>
        <div className="day">
          <div className="title">
            Saturday, Sept. 19<span className="super">th</span>
          </div>
          <div className="scheduleTable">
            {saturdaySchedule.map((row, i) => (
              <ScheduleItem {...row} key={i} />
            ))}
          </div>
        </div>
        <div className="day">
          <div className="title">
            Sunday, Sept. 20<span className="super">th</span>
          </div>
          <div className="scheduleTable">
            {sundaySchedule.map((row, i) => (
              <ScheduleItem {...row} key={i} />
            ))}
          </div>
        </div>
      </div>
      <div className="subcard">
        <WhatToExpect />
      </div>
    </div>
  );
};

const GettingThere = () => (
  <div className="travel">
    <div className="title">Getting there</div>
    <div className="subtitle">By air</div>
    <div style={{ marginTop: 5, marginBottom: 20 }}>
      Saratoga Springs is a 35 minute drive north of the Albany Airport (ALB).
      You can fly into Albany but there are no direct flights from the Bay Area.
      Another option is to fly into NYC and take the train (see below).
    </div>
    <div className="subtitle">By train</div>
    <div style={{ marginTop: 5, marginBottom: 20 }}>
      The Empire Service Amtrak goes from Penn Station in New York to Albany
      every 1-2 hours, with a couple trains a day making local stops directly to
      Saratoga Springs. The NYC to Albany trip takes around 2.5 hours, and is
      thoroughly pleasant. Sit on the left side of the train for scenic views of
      the Hudson Valley.
    </div>
  </div>
);

const WhatToExpect = () => (
  <>
    <div className="title">What to expect</div>
    <div style={{ marginBottom: 30 }}>
      The venue is right on Saratoga Lake, and is at Missy's childhood home. We
      hope you can join us for the full day Saturday and recommend traveling on
      Friday (or earlier!) if you can.
    </div>
    <div style={{ marginBottom: 30 }}>
      All of the events (both day and night) will take place outside in a
      canopied tent, so please be prepared and have comfortable shoes and layers
      of clothing.
    </div>
    <div style={{ marginBottom: 30 }}>
      Following the more formal sit-down lunch, you'll have some unstructured
      time to spend on the lake, play games, catch up with friends, or rest for
      the evening activities.
    </div>
    <div style={{ marginBottom: 30 }}>
      We'll reconvene for evening cocktails, a light/casual dinner, and dancing
      into the night.
    </div>
  </>
);

const Accommodations = () => (
  <div>
    <div className="title">Accommodations</div>
    <div style={{ marginBottom: 20 }}>
      We are still figuring out the details around accommodations, but we will
      update you as we get them!
    </div>
    <div>
      If you have special constraints or considerations, please reach out and
      let us know!
    </div>
  </div>
);

const App = () => (
  <div className="container">
    <Main />
    <Location />
    <Schedule />
    <div className="card row">
      <div className="subcard">
        <GettingThere />
      </div>
      <div className="subcard">
        <Accommodations />
      </div>
    </div>
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
