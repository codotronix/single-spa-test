import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Page1 from './components/pages/Page1';
import Page2 from './components/pages/Page2';
import Header from './components/layout/header/header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="main-container">
          <Routes>
            <Route index element={<Page1 />} />
            <Route path="app1" element={<Page1 />} />
            <Route path="app2" element={<Page2 />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
