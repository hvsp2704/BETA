import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Events from "./pages/events/events";
import Team from "./pages/team/team";
import Gallery from "./pages/gallery/gallery";
import Navbar from "./components/navbar"
import BNavbar from "./components/bnavbar"
import Biosphere24 from "./pages/biosphere/biosphere24";
import Biosphere23 from "./pages/biosphere/biosphere23";
import './App.css'

function ComponentWithNavbar(component){


  return(
    <div>
      <Navbar/>
      <br></br>
      {component}
    </div>

  )
}
function ComponentWithBNavbar(component){
  return(
    <div>
      <BNavbar/>
      <br></br>
      {component}
    </div>

  )
}

function App() {

  return (
    <>
      <Routes>
        <Route path="/"         element={ComponentWithNavbar(<Home />)} />
        <Route path="/about"    element={ComponentWithNavbar(<Team />)} />
        {/* <Route path="/contact"  element={<Contact />)} /> */}
        <Route path="/gallery" element={ComponentWithNavbar(<Gallery />)} />
        <Route path="/events"   element={ComponentWithNavbar(<Events />)} />
        <Route path="/biosphere24//*"   element={(<Biosphere24/>)} />
        <Route path="/biosphere23//*"   element={(<Biosphere23/>)} />
        {/* <Route path="/expo"     element={<Expo />} /> */}
      </Routes>
    </>
  );
}

export default App;