import { Chrono } from "react-chrono";
import React from "react";

function HiFiTimeline() {
    return (
        <Chrono

        
      items={[
        {
          title: "19th Oct, 2022",
          cardTitle: "Chai, Samosa and Biotech",
          cardSubtitle: "A casual ‘Chai-pe-Charcha’ among the PG and UG students of the department.",
          // cardDetailedText: `Complete description of event`,
        },
        {
          title: "28th Feb, 2023",
          cardTitle: "Fresher’s’22",
          cardSubtitle: "A long-awaited welcome to the batch of ‘26.",
          // cardDetailedText: `Complete description of event`,
        },
        
        {
          title: "8th May 2023",
          cardTitle: "Farewell’23",
          cardSubtitle: "An official wave of good-bye to the batch of ‘23",
          // cardDetailedText: `Complete description of event`,
        },
        {
          title: "8th Aug, 2023",
          cardTitle: "Insights on Research Intern",
          cardSubtitle: "An interactive session on research interns by experienced seniors.",
          // cardDetailedText: `Complete description of event`,
        },
        {
          title: "27th August, 2023",
          cardTitle: "Tour of Stalls’23",
          cardSubtitle: "Our introduction with the new batch of freshers.",
          // cardDetailedText: `Complete description of event`,
        },
        {
          title: "2 March, 2024",
          cardTitle: "Biosphere'24",
          cardSubtitle: "BETA is back with its flagship event, Biosphere. The symposium would witness participation from pharmaceutical giants and renowned guest speakers in the field of biotechnology, not to mention an overview of the exciting research being carried out in the department.",
          // cardDetailedText: `Complete description of event`,
        },
        {
          title: "24 - 27 March, 2024",
          cardTitle: "TRYST",
          cardSubtitle: "The upcoming tech fest will witness scores of competitions, guest lectures and events from BETA. Stay Tuned for event registrations.          ",
          // cardDetailedText: `Complete description of event`,
        },

      ]}
      mode="VERTICAL_ALTERNATING" cardHeight = "50" cardWidth = "600" highlightCardsOnHover	="true" slideItemDuration = "500" slideshow = "true"
      fontSizes={{
        cardSubtitle: '1rem',
        cardText: '1rem',
        cardTitle: '2rem',
        title: '1.5rem',
      }}
>
    </Chrono >

    )
}

export default HiFiTimeline;