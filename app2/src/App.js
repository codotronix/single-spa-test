import React, { useState } from 'react';
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
  const [news, setNews] = useState('')

  const handleClick = () => {
    if(news) {
      messenger.next(news)
    }
    setNews('')
  }


  return (
    <HashRouter>
      <div className="App2">
        <Header />
        <input value={news} onChange={e => setNews(e.target.value)} />
        <button type="button" onClick={handleClick}>Send Message</button>
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
