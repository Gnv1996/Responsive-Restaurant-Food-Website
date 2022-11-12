import React from "react";
import About from "./MyComponents/About.js";
import Contact from "./MyComponents/Contact.js";
import Footer from "./MyComponents/Footer.js";
import Headers from "./MyComponents/Headers.js";
import Home from "./MyComponents/Home.js";
import Service from "./MyComponents/Service.js";
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom' ;


function App(){
  return(
    <Router>
    <div>
     <Headers/>
     <Routes>
      <Route exact path="/home" element={<Home/>} />
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/service" element={<Service/>}/>
      <Route exact path="/contact" element={<Contact/>}/>

     </Routes>
     <Footer/>
     
    </div>
    </Router>
  )
  
}

export default App;