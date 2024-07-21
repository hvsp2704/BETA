
import { Route, Routes } from "react-router-dom";
import BNavbar from "../../components/bnavbar"
import About from "./biosphere23/about";
import Schedule from "./biosphere23/schedule";
import Events from "./biosphere23/events";
import Gallery from "./biosphere23/gallery";
import './App.css'

function ComponentWithBNavbar(component){
  return(
    <div>
      <BNavbar name ="23"/>
      <br></br>
      {component}
    </div>

  )
}

function Biosphere() {
  return(
    <>
      <Routes>
        {/* <Route path="/"         element={ComponentWithNavbar(<Home />)} /> */}
        <Route path="/"    element={ComponentWithBNavbar(<About />)} />
        {/* <Route path="/contact"  element={<Contact />)} /> */}
        <Route path="/gallery" element={ComponentWithBNavbar(<Gallery />)} />
        <Route path="/schedule" element={ComponentWithBNavbar(<Schedule />)} />
        <Route path="/events"   element={ComponentWithBNavbar(<Events />)} />
        {/* <Route path="/expo"     element={<Expo />} /> */}
      </Routes>
    </>
    
      )
}
export default Biosphere;
