import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Container} from "react-bootstrap"
import {Route,Routes,BrowserRouter} from "react-router-dom"
import Home from "Pages/HomeComponent/Home"
import Login from "Pages/LoginComponent/Login"
import Signup from "Pages/SignupComponent/Signup"
import Admin from 'Pages/AdminComponent/Admin';
import About from "Pages/AdminComponent/Admin"

function App() {
  return (
    <div fluid className="App bg-white">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Signup' element={<Signup/>}/>
            <Route path='/Admin' element={<Admin/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
