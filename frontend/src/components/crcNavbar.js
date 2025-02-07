import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const CRCNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">HCI APP </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/crcHome">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/enrolledparticipants">Enrolled_Participants</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/scheduledList">Scheduled_List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Logout</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CRCNavbar;
