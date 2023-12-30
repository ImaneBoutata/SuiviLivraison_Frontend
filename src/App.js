import logo from './logo.svg';
import './App.css';
import Acceuil from "./acceuil/acceuil";
import Register from './register/Register';
import Login from './signin/Login';
import ColisTracking from './UserComponent/ColisTracking';
import Navbar from './Navbar/Navbar';


function App() {
  return (
    <div className="App">

      <Navbar />
      <br />
      <br />

      <ColisTracking />
    </div>
  );
}

export default App;
