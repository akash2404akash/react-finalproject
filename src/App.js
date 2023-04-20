import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import About from './About';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header/>}>
              <Route path="Home" element={<Home/>} />
              <Route path="About" element={<About/>} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
