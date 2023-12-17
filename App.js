import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Hobbies from './components/Hobbies';
import Changes from './components/Changes';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/hobbies" component={Hobbies} />
          <Route path="/changes" component={Changes} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;