import { Chrono } from "react-chrono";
import React from "react";

function getItem(){
  const items = [
    {
      title: "March 2nd,  09:30 am",
      cardTitle: <h3>Inaugration Ceremony</h3>,
      },
    {
      title: "March 2nd,  10:00 am",
      cardTitle: <h3>Talk by Eminent Speaker</h3>,
       },
    {
      title: "March 2nd,  10:30 am",
      cardTitle: <h3>Poster Presentation</h3>,
      },
    {
      title: "March 2nd,  12:00 pm",
      cardTitle: <h3>Talk by Eminent Speaker</h3>,
      },
    {
      title: "March 2nd,  12:30 pm",
      cardTitle: <h3>Kahoot Quiz</h3>,
      },
    {
      title: "March 2nd,  12:45 pm",
      cardTitle: <h3>UG specific Event</h3>,
      },
    {
      title: "March 2nd,  1:15 pm",
      cardTitle: <h3>Lunch</h3>,
      },
    {
      title: "March 2nd,  02:15 pm",
      cardTitle: <h3>Oral Presentation</h3>,
      },
    {
      title: "March 2nd,  03:30 pm",
      cardTitle: <h3>Industry Talk</h3>,
      },
    {
      title: "March 2nd,  04:00 pm",
      cardTitle: <h3>Tea Break</h3>,
      },
    {
      title: "March 2nd,  04:15 pm",
      cardTitle: <h3>Just a minute</h3>,
      },
    {
      title: "March 2nd,  04:30 pm",
      cardTitle: <h3>Cultural Event</h3>,
      },
    {
      title: "March 2nd,  05:00 pm",
      cardTitle: <h3>Prize Distribution</h3>,
      },
  ]
  return items;
}

function HiFiTimeline() {
    
    return (
        <div >
          <center>
          <Chrono items={getItem()} mode="VERTICAL_ALTERNATING" cardHeight = "50" cardWidth = "300" highlightCardsOnHover	="true" slideItemDuration = "500" slideshow = "true"
          fontSizes={{
            cardSubtitle: '1rem',
            cardText: '1rem',
            cardTitle: '2rem',
            title: '1.5rem',
          }}>
            <div className="chrono-icons" >

            </div>
      
          </Chrono>
          </center>
        </div>
    )
}

export default HiFiTimeline;