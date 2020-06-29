import React, { useEffect } from 'react';
import Search from './Search';
import './styles.css';


function App() {

  const script = document.createElement('script');

  useEffect(() => {
    script.src = process.env.PUBLIC_URL + '/sdk/tomtom.min.js';
    document.body.appendChild(script);
    script.async = true;
    script.onload = function () {
      window.tomtom.L.map('map', {
        source: 'vector',
        key: process.env.REACT_APP_TOMTOM_KEY + '',
        center: [37.769167, -122.478468],
        basePath: '/sdk',
        zoom: 15
      });
    }
  }, [script]);

  return (
    <div>
      <div id='map'></div>
      <Search />
    </div>
  )
}

export default App;
