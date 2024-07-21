
import { Route, Routes } from "react-router-dom";
import BNavbar from "../../components/bnavbar"
import About from "./biosphere24/about";
import Schedule from "./biosphere24/schedule";
import Events from "./biosphere24/events";
import Gallery from "./biosphere24/gallery";
import './App.css'

function ComponentWithBNavbar(component){
  return(
    <div>
      <BNavbar name ="24"/>
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
