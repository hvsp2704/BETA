import React from "react";
// import AltTimeline from "./timeline";
import HiFiTimeline from "./hifitimeline";

function Events() {
  return(
  <div>
    <div class="d-flex justify-content-center p-5 bg-dark text-white"><h1>Schedule for the day</h1></div>
    {/* <AltTimeline /> */}
    <HiFiTimeline />
    {/* <div class="d-flex justify-content-center p-5 bg-dark text-white"><h1>History</h1></div> */}
  </div>
    )
}
export default Events;