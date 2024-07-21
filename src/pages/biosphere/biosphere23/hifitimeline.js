import { Chrono } from "react-chrono";
import React from "react";

function HiFiTimeline() {
    return (
        <Chrono
      items={[
        {
          title: "January 21st, 9:30 - 10:00 AM",
          cardTitle: "Lighting Ceremony and Welcome address",
        },
        {
          title: "January 21st, 10:00 - 11:00 AM",
          cardTitle: "Lectures by eminent key Speakers",
        },
        {
          title: "January 21st, 11:00 - 11:20 AM",
          cardTitle: "Tea Break",
        },
        {
          title: "January 21st, 11:20 AM - 12:30 PM",
          cardTitle: "Oral Presentations",
        },
        {
          title: "January 21st, 12:30 - 1:30 PM",
          cardTitle: "Poster Presentations",
        },
        {
          title: "January 21st, 1:30 - 2:30 PM",
          cardTitle: "Lunch",
        },
        {
          title: "January 21st, 2:30 - 5:00 PM",
          cardTitle: "iGEM talk",
        },
        {
          title: "January 21st, 5:00 - 6:00 PM",
          cardTitle: "Cultural program and Award ceremony",
        },
      ]}
      mode="VERTICAL_ALTERNATING">
        <div className="chrono-icons" >
    <img
      src="https://img.icons8.com/ios-filled/100/000000/twitter.png"
      alt="twitter"
    />
    <img
      src="https://img.icons8.com/ios-filled/100/000000/about.png"
      alt="twitter"
    />
    <img
      src="https://img.icons8.com/ios-filled/100/000000/contacts.png"
      alt="twitter"
    />
    <img
      src="https://img.icons8.com/ios-filled/100/000000/briefcase.png"
      alt="twitter"
    />
    <img
      src="https://img.icons8.com/ios-filled/100/000000/idea.png"
      alt="twitter"
    />
    <img
      src="https://img.icons8.com/ios-filled/100/000000/sun.png"
      alt="twitter"
    />
    <img
      src="https://img.icons8.com/ios-filled/100/000000/info.png"
      alt="twitter"
    />
    </div>
    </Chrono>
    )
}

export default HiFiTimeline;