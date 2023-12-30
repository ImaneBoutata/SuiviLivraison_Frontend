import logo from './logo.svg';
import './App.css';
import Acceuil from "./acceuil/acceuil";
import Register from './register/Register';
import Login from './signin/Login';
import Tracking from "./acceuil/tracking";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
    // <div className="App">
    //  <Tracking/>
    // </div>
    <Router>
      <Routes>
          <Route exact path="/"  element={<Tracking/>} />
          <Route path="/login"  element={<Login/>} />
          <Route path="/register"  element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
