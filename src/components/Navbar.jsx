import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
export default function Navbar(props){
    return(
        <nav className="navbar shadow-sm bg-body-tertiary navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold text-info" to="/">TEXTIFY</Link>
          <button style={{outline:"none"}} className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">  <Link className='nav-link' to="/Textsummary">Summarize</Link></li>
             <li className="nav-item"> <Link className='nav-link' to="/txttovoice">Text to Voice</Link></li>
             <li className="nav-item"> <Link className='nav-link' to="/About">About us</Link></li>
            </ul>
          </div>
        </div>
      </nav>



    )
};