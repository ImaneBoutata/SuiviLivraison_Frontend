import logo from './logo.svg';
import './App.css';
import Acceuil from "./acceuil/acceuil";
import Register from './register/Register';
import Login from './signin/Login';
import ColisTracking from './UserComponent/ColisTracking';
import Navbar from './Navbar/Navbar';
import Tracking from "./acceuil/tracking";


function App() {
  return (
    <div className="App">

      <Navbar />
      <br />
      <br />
      <Tracking/>
    </div>
  );
}

export default App;
