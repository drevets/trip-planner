const mapboxgl = require("mapbox-gl");
//const map = require("./index")

const types = {
  activity: "url(http://i.imgur.com/WbMOfMl.png)",
  hotel: "url(http://i.imgur.com/D9574Cu.png)",
  restaurant: "url(http://i.imgur.com/cqR6pUI.png)"
}

function buildMarker(type, coords, map) {
  const newMarker = document.createElement('div');
  newMarker.style.width = "32px";
  newMarker.style.height = "39px";
  newMarker.style.backgroundImage = types[type];
  const flag =  new mapboxgl.Marker(newMarker).setLngLat(coords).addTo(map);
  return flag;

}





module.exports = buildMarker;
