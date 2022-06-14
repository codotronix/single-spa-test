import React, { useState } from 'react';
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
import LoginModal from './components/common/login-modal/Login-Modal'

function App(props) {
  const { customProps: { messenger, msg } } = props
  const [loginVisible, setLoginVisible] = useState(false)
  const handleLogin = username => {
    if(username) {
      // console.log(username)
      messenger.next(username)
    }
    
  }
  return (
    <BrowserRouter>
      <div className="App0">
        <Header showLogin={() => setLoginVisible(true)} />
        <div className="main-container1">
          <Routes>
            <Route index element={<Page1 />} />
            <Route path="app1" element={<Page1 />} />
            <Route path="app2" element={<Page2 />} />
          </Routes>
        </div>

        { loginVisible && <LoginModal handleLogin={handleLogin} setVisible={setLoginVisible}/> }
      </div>
    </BrowserRouter>
  );
}

export default App;
