import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { NavBar } from './Components/NavBar';
import PreopOtfporunbiased from './Components/PreopOtfporunbiased';
import PreopOtfunbiased from './Components/PreopOtfunbiased';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
        <Route exact path="/PreopOtfunbiased" element={<PreopOtfunbiased />} />
          <Route exact path="/PreopOtfporunbiased" element={<PreopOtfporunbiased />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
