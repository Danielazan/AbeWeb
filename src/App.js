import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Container} from "react-bootstrap"
import {Route,Routes,BrowserRouter, Navigate} from "react-router-dom"
import Home from "Pages/HomeComponent/Home"
import Login from "Pages/LoginComponent/Login"
import Signup from "Pages/SignupComponent/Signup"
import Admin from 'Pages/AdminComponent/Admin';
import About from "Pages/AdminComponent/Admin"
import Sales from "Pages/SalesComponent/Sales"
import Verify from "Pages/VerificationComponent/Verify"
import Enquiry from 'Pages/EnquiryComponent/Enquiry';

import UserHook from "Hook/UserHook"

function App() {
  const {User} = UserHook()

  
  return (
    <div fluid className="App bg-white">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>

            <Route path='/Login' element={!User ? <Login/> : <Navigate to='/' />}/>
            
            <Route path='/Signup' element={ !User ? <Signup/> : <Navigate to='/' />}/>

            <Route path='/Verify' element={ <Verify/>}/>

            <Route path='/Admin' element={User ? <Admin/> : <Navigate to='/Login' />}/>

            <Route path="/about" element={<About/>}/>

            <Route path="/Enquiry" element={<Enquiry/>}/>

            <Route path="/Sales" element={User ? <Sales/> : <Navigate to='/Login' />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
