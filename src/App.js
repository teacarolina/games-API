import React, {useState} from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import AppRoute from "./components/AppRoute";
import CategoryResult from './components/search/CategoryResult';

function App() {

  const [category, setCategoryGame] = useState('')
  return (
      <div className="App">
      
        <Navbar handleCategoryChanged={setCategoryGame}/>

        {category === '' ? <></> : <CategoryResult category={category}/>}
        <AppRoute/>
      
      </div>
  )
}

export default App;