function initMap(){
  var d = document.getElementById('canvas');
  var mapLocation = new google.maps.LatLng(65.4145043, -52.910141)
  var mapOptions = {
    center: mapLocation,
    zoom: 13.5,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
  };
  
  var myMap = new google.maps.Map(d, mapOptions);
  
  var marker = new google.maps.Marker({
    position: {lat: 65.41987011913906, lng: -52.885100609233845},
    map: myMap,
	animation: google.maps.Animation.DROP,
  });
  
  var text1 = "<p>Hey, they have a soccer field. Neat.</p>";
  
  var infoWindow1 = new google.maps.InfoWindow({
    content: text1,
  });
  
  google.maps.event.addListener(marker, 'mouseover', function() {
    infoWindow1.open(myMap, marker);
  });
  
  var rectangle = new google.maps.Rectangle({
    strokeColor: "#35589E",
    strokeOpacity: 0.75,
    strokeWeight: 2,
    fillColor: "#35589E",
    fillOpacity: 0.25,
    map: myMap,
    bounds: {
      north: 65.41504897853659,
      south: 65.41001055726869,
      east: -52.92900575833482,
      west: -52.947206708469736,
    },
  });
  
  var text2 = "<p>An airport. I guess.</p>";
  
  var infoWindow2 = new google.maps.InfoWindow({
    content: text2,
  });
  
  google.maps.event.addListener(marker, 'click', function() {
    infoWindow2.open(myMap, marker);
  });
}

window.initMap = initMap;