import logo from './logo.svg';
import React from 'react';
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
    <BrowserRouter basename='app1'>
      <div className="App">
        <Header />
        <Routes>
          <Route index element={<Page1 />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
