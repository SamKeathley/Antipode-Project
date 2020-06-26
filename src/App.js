import React, { useEffect } from 'react';
import './styles.css';

function App() {

  const script = document.createElement('script');
  const API_KEY = 'process.env.REACT_APP_TOMTOM_API_KEY';

  useEffect(() => {
    script.src = process.env.PUBLIC_URL + '/sdk/tomtom.min.js';
    document.body.appendChild(script);
    script.async = true;
    script.onload = function () {
      window.tomtom.L.map('map', {
        source: 'vector',
        key: API_KEY,
        center: [37.769167, -122.478468],
        basePath: '/sdk',
        zoom: 15
      });
    }
  }, [script]);

  return (
    <div id='map'></div>
  )
}

export default App;
