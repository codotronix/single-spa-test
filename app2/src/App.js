import React, { useState, useEffect } from 'react';
import './App.css';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Page1 from './components/pages/Page1';
import Page2 from './components/pages/Page2';
import Header from './components/layout/header/header';

function App(props) {
  console.log('props2=', props)
  const { customProps: { messenger, msg } } = props
  // const [news, setNews] = useState('')

  const [username, setUsername] = useState('')

  const loginListener = l => setUsername(l)

  useEffect(() => {
    // if(typeof(customProps) !== 'undefined') {
      messenger.subscribe(loginListener)
    // }

    // return () => messenger.unsubscribe(loginListener)
  }, 
  [])


  return (
    <HashRouter>
      <div className="App2">
        <Header />
        {/* <input value={news} onChange={e => setNews(e.target.value)} />
        <button type="button" onClick={handleClick}>Send Message</button> */}

        <h3>Logged in user: {username}</h3>

        <Routes>
          <Route index element={<Page1 />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
