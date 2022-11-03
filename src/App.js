import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Container} from "react-bootstrap"
import {Route,Routes,BrowserRouter} from "react-router-dom"
import Home from "Pages/HomeComponent/Home"

function App() {
  return (
    <div fluid className="App bg-white">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
