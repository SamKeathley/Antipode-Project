import React, { useState, useEffect, createContext } from 'react';

export const SearchContext = createContext();

export const SearchProvider = props => {
    const [points, setPoints] = useState(null);

    useEffect(() => {
        fetch("https://api.tomtom.com/search/2/search/beaverton.json?key=" + process.env.REACT_APP_TOMTOM_KEY)
            .then(res => res.json())
            .then(
                res => {
                    const [item] = res.results;
                    console.log(item)
                    setPoints(item)
                })
    }, [])

    return (
        <SearchContext.Provider value={[points, setPoints]}>
            {props.children}
        </SearchContext.Provider>
    );
}

        // <div>
        //     {points && <div>{points.position.lat}</div>}
        //     {points && <div>{points.position.lon}</div>}
        // </div>