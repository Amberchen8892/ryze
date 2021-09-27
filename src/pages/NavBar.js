import React, {useEffect, useState}from 'react';
import { Link } from 'react-router-dom';
import Ryze from '../images/RYZE.png'


export default function NavBar() {
  const [navClassName, setNavClassName] = useState("nav-container");
  const listenScrollEvent = (event) => {
    if (window.scrollY < 60) {
      return setNavClassName("navbar-container")
    } else if (window.scrollY >65) {
      return setNavClassName("navbar-container-scroll")
    } 
  };
  useEffect(() => {
    window.addEventListener('scroll',  listenScrollEvent);
  
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);
    return (
        <div className={navClassName} >
          
            <nav className="navbar navbar-expand-lg navbar-light bg-light container">
        <div className="container-fluid">
         <Link to='/'><img src={Ryze} width="15%" height="18%" alt="logo"/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
            </ul>
           
            <ul className="navbar-nav ">
              <li className="nav-item">
              <Link to='/signup'><button type="button" class="btn btn-outline-light" style={{width:"150px"}}>Sign Up </button></Link>
              </li>
              <li className="nav-item" style={{marginLeft:"10px"}}>
              <Link to='/login'><button type="button" className="btn btn-light btn-two" style={{width:"150px"}}>Member Login</button></Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
        </div>
    )
}
