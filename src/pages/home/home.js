import React from "react";
import eventimg from "./event.jpeg"
import "./App.css"
import logo from "./logo.png"
import dept from "./dept.png"
import bio from "./bio.png"

// import one from "./hero/one.jpg"
import two from "./hero/two.JPG"
import three from "./hero/three.jpg"
import four from "./hero/four.jpg"
import five from "./hero/five.jpg"
import six from "./hero/six.jpg"
import seven from "./hero/seven.jpg"

import interact from "./interaction.png";
import lec from "./lec.png"
import stic from "./stic.jpg"
import comp from "./comp.png"


function Home() {
  return (
    <div class="container w-100">
    <div class="row border-top border-bottom border-1 border-dark p-3 align-items-center ">
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active ">
            <img class="img-thumbnail " src={dept} alt="first slide"></img>
          </div>
          <div class="carousel-item ">
            <img class="img-thumbnail " src={two} alt="Second slide"></img>
          </div>
          <div class="carousel-item">
            <img class="img-thumbnail " src={three} alt="Third slide"></img>
          </div>
          <div class="carousel-item">
            <img class="img-thumbnail " src={four} alt="Fourth slide"></img>
          </div>
          <div class="carousel-item">
            <img class="img-thumbnail " src={five} alt="Fifth slide"></img>
          </div>
          <div class="carousel-item">
            <img class="img-thumbnail " src={six} alt="Sixth slide"></img>
          </div>
          <div class="carousel-item">
            <img class="img-thumbnail " src={seven} alt="Seventh slide"></img>
          </div>
        </div>
      </div>
      </div>

      <div class="row border-top border-bottom border-1 border-dark p-3 align-items-center">
        <div class="col-sm ">

        <div class = "container">
          <div class = "row">
            <div class = "col-sm">
              <center><h1>What We Do</h1></center>
            </div>
          </div>
          <div class ="row">
            {/* <div class="col-sm">
              <center><img src = {interact} class = "rounded mx-auto d-block"></img></center>
            </div> */}
            <div class="col-sm">
              <center><img src = {comp} class = "rounded mx-auto d-block h-25"></img></center>
            </div>
            <div class="col-sm">
              <center><img src = {lec} class = "rounded mx-auto d-block h-25"></img></center>
            </div>
          </div>
          <div class = "row">
            <p align ="justify">We at BETA, aim to add to the experience of the students and faculties of DBEB alike and establishing discourse and bridging the gap between them outside the curricular scenario. We do this through a gamut of events, both grand and warm, and wish to empower them with practical knowledge of various opportunities available.  Events like Biosphere, Insights on Research Intern, Fresher’s, Farewell, DBEB STIC-D etc. have helped us achieve that end</p>
          </div>
        </div>


        </div>
        <div class="col-sm ">
          <center>
          <img src={logo} class="d-block w-50"></img>
          </center>
        
        </div>
      </div>

      <div class="row border-bottom border-1 border-dark p-3">
        <center>
          <h1>Upcoming Events</h1>
        <div id="carouselExampleIndicators" class="carousel slide bg-dark" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="card">
                <center><img src={stic} class=" d-block w-50" alt="..."></img></center>
                <div class="card-body">
                  <h5 class="card-title">STIC Dinner</h5>
                  <p class="card-text">07th February, 7:00 - 10:00 pm</p>
                  {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
              <br></br>
            </div>
            <div class="carousel-item">
              <div class="card">
                <center><img src={bio} class="d-block w-50" alt="..."></img></center>
                <div class="card-body">
                  <h5 class="card-title">Biosphere'24</h5>
                  <p class="card-text">2nd March, Inaugaration Ceremony @ 9:30 am</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <br></br>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        </center>
      </div>
      <br></br>
      <div class="row">

      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>

    

    

    
  );
}
export default Home;