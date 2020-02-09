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
      <div className="address addressLineHeight">
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
  const [hourMin, ampm, snarkyComment] = time.split(" ");
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
        <span> {snarkyComment}</span>
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
  const sundaySchedule = [{ name: "Brunch", time: "10 am (lol)" }];
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
        <GettingThere />
      </div>
    </div>
  );
};

const GettingThere = () => (
  <div className="travel">
    <div className="title">Getting there</div>
    <div className="bodyLineHeight">
      <div style={{ marginTop: 5, marginBottom: 20 }}>
        Saratoga Springs is a 35 minute drive north of the Albany Airport (ALB).
        If you have a tight schedule, we recommend flying in here if you can.
      </div>
      <div style={{ marginTop: 5, marginBottom: 20 }}>
        If you have the time to take advantage of NYC, it's an easy 2.5 hour train
        ride away. The Empire Service Amtrak goes from Penn Station to Albany
        every 1-2 hours, with a couple trains a day making local stops directly to
        Saratoga Springs. The train follows the Hudson River and is a beautiful
        ride in September.
      </div>
      <div style={{ marginTop: 5, marginBottom: 20 }}>
        There are a lot of fun places not too far away, such as The Adirondacks,
        Boston, or Montreal if you have a car.
      </div>
    </div>
  </div>
);

const WhatToExpect = () => (
  <>
    <div className="title">What to expect</div>
    <div className="bodyLineHeight">
      <div style={{ marginBottom: 30 }}>
        We're excited to share our wedding details with you! The venue is right on Saratoga
        Lake, and is at Missy's childhood home. We hope you can join us for the full
        day Saturday and recommend traveling on Friday (or earlier!) if you can.
      </div>
      <div style={{ marginBottom: 30 }}>
        All of the events (both day and night) will take place outside in a
        canopied tent or on the lawn, so please be prepared and have comfortable
        shoes and layers of clothing.
      </div>
      <div style={{ marginBottom: 30 }}>
        The ceremony and lunch will be more formal. Following that we're hoping people
        take advantage of the unstructured time to spend on the lake, play games,
        catch up with friends, or rest for the evening activities.
      </div>
      <div style={{ marginBottom: 30 }}>
        We'll reconvene for evening cocktails, a more casual dinner, and dancing
        into the night. Missy will likely be wearing something shiny.
      </div>
    </div>
  </>
);

const Accommodations = () => {
  return (
    <div className="card accommodations">
      <div className="header">
        <div className="title">Accommodations</div>
        <div className="bodyLineHeight">There are room blocks reserved at two locations. Call to book and be sure to mention the Skevington/Rha wedding.</div>
        <div className="shuttle bodyLineHeight">A shuttle will be available to bring you back and forth from the venue.</div>
      </div>
      <div className="row">
        <div className="hotel">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3295.76961789303!2d-73.72738656546608!3d43.06094684906703!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x67a8679d5bb3f0c3!2sLongfellows%20Restaurant!5e0!3m2!1sen!2sus!4v1579231348270!5m2!1sen!2sus"
            title="Longfellows"
          ></iframe>
          <div className="description addressLineHeight">
            <div><a href="https://www.longfellows.com/hotel/rooms">Longfellows</a></div>
            <div>500 Union Ave</div>
            <div>Saratoga Springs, NY</div>
            <div>12866</div>
            <div>0.5 miles</div>
            <div>$209/night</div>
          </div>
        </div>
        <div className="hotel">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.6822429170456!2d-73.79218058365814!3d43.069150179145645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89de39ca166c6c61%3A0x4d375a7f14db6c03!2sHilton%20Garden%20Inn%20Saratoga%20Springs!5e0!3m2!1sen!2sus!4v1579231884462!5m2!1sen!2sus"
            title="Hilton Garden Inn"
          ></iframe>
          <div className="description addressLineHeight">
            <div><a href="https://www.reservations.com/hotel/hilton-garden-inn-saratoga-springs">The Hilton Garden Inn</a></div>
            <div>125 S Broadway</div>
            <div>Saratoga Springs, NY</div>
            <div>12866</div>
            <div>4 miles</div>
            <div>$199/night</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const App = () => (
  <div className="container">
    <Main />
    <Location />
    <Schedule />
    <Accommodations />
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
