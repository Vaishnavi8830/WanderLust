


console.log(mapToken);
mapboxgl.accessToken = mapToken;
{/* // TO MAKE THE MAP APPEAR YOU MUST
    // ADD YOUR ACCESS TOKEN FROM
    // https://account.mapbox.com */}

const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: [-74.5, 40], // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});
