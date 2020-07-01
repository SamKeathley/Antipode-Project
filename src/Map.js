import React, { useEffect } from 'react';


function Map() {

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
        <div id='map'></div>
    )
}

export default Map;
