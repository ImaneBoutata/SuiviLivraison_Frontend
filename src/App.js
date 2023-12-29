import logo from './logo.svg';
import './App.css';
import Acceuil from "./acceuil/acceuil";
import Register from './register/Register';
import Login from './signin/Login';


function App() {
  return (
    <div className="App">
      <Acceuil/>
      <Register/>
      <Login/>
    </div>
  );
}

export default App;
