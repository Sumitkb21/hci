// import logo from './logo.svg';
import './index.css';

import React, { useContext, useEffect } from 'react'
// import Login from './components/login';
import Signup from './components/signup';
import Navbar from './components/navbar';
import {Routes,Route} from 'react-router-dom';
import { Home } from './components/home';
import CRCLogin from './components/crcLogin';
import { CRCHome } from './components/crcHome';
import EnrolledParticipants from './components/enrolledParticipants.js';
import ShowScheduledList from './components/showScheduledList.js';
import PILogin from './components/piLogin.js';
import { PIHome } from './components/piHome.js';
// import { Scheduled_List } from '../../backend/models/scheduledList.js';



function App() {


  return (
    <>
    {/* <h1>Hello SIr</h1> */}
    {/* <Navbar/> */}
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/crcLogin" element={<CRCLogin/>}/>

    <Route path="/signup" element={<Signup/>}/>
    <Route path="/crcHome" element={<CRCHome/>}/>
    <Route path="/enrolledparticipants" element={<EnrolledParticipants/>}/>
    <Route path="/scheduledList" element={<ShowScheduledList/>}/>
    <Route path="/piLogin" element={<PILogin/>}/>
    
    <Route path="/piHome" element={<PIHome/>}/>
   


    </Routes>
    {/* <Footer/> */}

    </>
  );
}

export default App;
