import './App.css';
import Navbar from './components/navbar/Navbar';
import AppRoute from "./components/AppRoute";

import {
  BrowserRouter as Router,
} from "react-router-dom";  

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      </Router>
      <AppRoute/>
    </div>
  );
}

export default App;
