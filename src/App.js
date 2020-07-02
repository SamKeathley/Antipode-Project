import React, { useEffect, useContext } from 'react';
import { SearchProvider } from './SearchContext';
import SearchBar from './SearchBar';
import './styles.css';


function App() {

  const script = document.createElement('script');

  useEffect(() => {
    script.src = process.env.PUBLIC_URL + '/sdk/tomtom.min.js';
    document.body.appendChild(script);
    script.async = true;
    script.onload = function () {
      window.tt.map({
        key: process.env.REACT_APP_TOMTOM_KEY + '',
        container: 'map',
        source: 'tomtom://vector/1/basic-main',
        center: [4.899431, 52.379189],
        zoom: 15
      });
    }
  }, [script]);

  return (
    <SearchProvider>
      <div className="container">
        <SearchBar />
        <div id='map' className='map'></div>
      </div>
    </SearchProvider>
  )
}

export default App;
