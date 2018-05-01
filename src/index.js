
const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker")




mapboxgl.accessToken = 'pk.eyJ1IjoiZHJldmV0cyIsImEiOiJjamdvMzVseHoybGt3MzNwcTYxeGd3YXR5In0.T6BaXZ3VM_YDRBocZxxlyQ'

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885],
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


buildMarker('hotel', [-87.6372, 41.8947], map);


module.exports = map




