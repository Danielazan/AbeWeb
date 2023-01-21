import React, { useState, useEffect } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Route,Routes,BrowserRouter, Navigate} from "react-router-dom"
import Home from "Pages/HomeComponent/Home"
import Login from "Pages/LoginComponent/Login"
import Signup from "Pages/SignupComponent/Signup"
import Admin from 'Pages/AdminComponent/Admin';
import About from "Pages/AdminComponent/Admin"
import Refunds from "Pages/AdminComponent/Refunds"
import Verify from "Pages/VerificationComponent/Verify"
import Enquiry from 'Pages/EnquiryComponent/Enquiry';
import EnquiryTable from 'Pages/EnquiryComponent/EnquiryTable';
import Stock from "Pages/ManageStock"
import Stats from 'Pages/StatsComponent/Stats';
import Table from 'Pages/TableComponent/Table';
import UserHook from "Hook/UserHook";
import Sales from './Pages/SalesComponent/Sales';
import SalesMain from './Pages/SalesComponent/SalesMain';
import moment from "moment";

function App() {
  const { User } = UserHook();

  // state variable to keep track of next scheduled send time
  const [nextSend, setNextSend] = useState(moment().hour(18).startOf('hour'));

  useEffect(() => {
    // schedule a recurring function that runs every minute
    const sendInterval = setInterval(() => {
        // get the current time
        const now = moment();
        // check if current time is same or after the next scheduled send time
        if (now.isSameOrAfter(nextSend)) {
            // Send email code here
            console.log("Email sent");
            // update next scheduled send time to next day's 6:00pm
            setNextSend(nextSend.add(1, 'day'));
        }
    }, 60000);
    // clear the interval when component unmounts
    return () => clearInterval(sendInterval);
  }, [nextSend]);

  return (
    <div fluid className='App bg-white'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route
            path='/Login'
            element={!User ? <Login /> : <Navigate to='/' />}
          />

          <Route
            path='/Signup'
            element={!User ? <Signup /> : <Navigate to='/' />}
          />

          <Route path='/Verify' element={<Verify />} />

          <Route path='/stock' element={<Stock />} />

          <Route path='/Table' element={<Table />} />

          <Route path='/Refunds' element={<Refunds />} />

          <Route
            path='/Order'
            element={User ? <SalesMain /> : <Navigate to='/Login' />}
          />

          <Route
            path='/Admin'
            element={User ? <Admin /> : <Navigate to='/Login' />}
          />

          <Route path='/about' element={<About />} />

          <Route path='/Stats' element={<Stats />} />

          <Route
            path='/Enquiry'
            element={User ? <Enquiry/> : <Navigate to='/Login' />}
          />

          <Route path='/EnquiryTable' element={<EnquiryTable />} />

          <Route
            path='/SalesMain'
            element={User ? <SalesMain /> : <Navigate to='/Login' />}


          />
          <Route 
            path = "/Sales" element= {User ? <Sales/>: <Navigate to="/Login"/>}/>
            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
