import React from 'react';
import 'D:/reactcls/awesomeapp/node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'D:/reactcls/awesomeapp/node_modules/bootstrap/dist/js/bootstrap.bundle';
import './Project.css';
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import { Routes,BrowserRouter,
      Route 
  } from "react-router-dom";
const App = () =>{
    return(
        <> 
        <Navbar/>
           <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/service" element={<Service/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route path="*" element={<Home/>}  />
           </Routes>
          
        </>
    )
}
export default App;