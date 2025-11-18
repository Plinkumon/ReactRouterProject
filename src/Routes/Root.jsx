import React from 'react'
import Navigation from '../Components/Navbar'
import Footer from '../Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Root.css'


function Root() {
  return (
   <div className="background-container">
        
        <Navigation/>

        <h1><i>Your daily walk with God starts here...</i></h1>
        <Footer/>
      </div>
  )
}

export default Root