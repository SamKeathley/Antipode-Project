import React, { useState, useContext } from "react";
import { SearchContext } from './SearchContext';

function SearchBar(props) {
    const [inputLocation, setInputLocation] = useState('');
    const [points, setPoints] = useContext(SearchContext);

    function handleChange(e) {
        const newValue = e.target.value;
        setInputLocation(newValue);
    }

    function addPosition(e) {
        e.preventDefault();
        setPoints(prevPoints => [...prevPoints, { lat: points.position.lat, lon: points.position.lon }])
    }

    return (
        <div className="form" onSubmit={addPosition}>
            <input type="text" onChange={handleChange} value={inputLocation} />
            <button>Find</button>
        </div>
    );
}

export default SearchBar;
