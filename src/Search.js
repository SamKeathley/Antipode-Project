import React, { useState, useEffect } from 'react';

function Search() {

    const [points, setPoints] = useState(null);

    useEffect(() => {
        fetch("https://api.tomtom.com/search/2/search/beaverton.json?key=" + process.env.REACT_APP_TOMTOM_KEY)
            .then(res => res.json())
            .then(
                res => {
                    console.log(res.results[0])
                    setPoints(res.results[0])
                })
    }, [])

    return (
        <div>
            {points && <div>{points.position.lat}</div>}
            {points && <div>{points.position.lon}</div>}
        </div>
    );
}
export default Search;