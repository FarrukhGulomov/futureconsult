let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.755116940630415, lng: 64.42781967146986 },
    zoom: 15,
  });
}