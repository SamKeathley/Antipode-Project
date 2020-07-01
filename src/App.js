import React from 'react';
import { SearchProvider } from './SearchContext';
import Map from './Map';
import SearchBar from './SearchBar';
import './styles.css';


function App() {

  return (
    <SearchProvider>
      <div className="container">
        <SearchBar />
        <Map />
      </div>
    </SearchProvider>
  )
}

export default App;
