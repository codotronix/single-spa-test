import logo from './logo.svg';
import React, { useState, useEffect } from 'react';

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Page1 from './components/pages/Page1';
import Page2 from './components/pages/Page2';
import Header from './components/layout/header/header';

function App(props) {
  console.log('props1=', props)
  const { customProps: { messenger, msg } } = props
  const [username, setUsername] = useState('')

  const loginListener = l => setUsername(l)

  useEffect(() => {
    // if(typeof(customProps) !== 'undefined') {
      messenger.subscribe(loginListener)
    // }

    // return () => messenger.unsubscribe(loginListener)
  }, 
  [])

  // console.log('customProps=', customProps)

  return (
    <BrowserRouter basename='app1'>
      <div className="App1">
        <Header />

        <h3>Logged in user: {username}</h3>

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
