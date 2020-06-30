import React, { useState, useEffect } from 'react';

function Search() {

    useEffect(() => {
        fetch("https://api.tomtom.com/search/2/search/beaverton.json?key=" + process.env.REACT_APP_TOMTOM_KEY)
            .then(res => res.json())
            .then(
                data => console.log(data)
            )
    }, [])

    return (
        <div>
        </div>
    );
}
export default Search;