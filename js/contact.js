
      function initMap(){
    var options = {
      zoom:10,
      center: {lat: 0.306006, lng: 32.576072}
    }
    var map =new google.maps.Map(document.getElementById('map'), options);
    var marker =new google.maps.Marker({position:{lat: 0.306006, lng: 32.576072}, map:map});

    var infoWindow = new google.maps.InfoWindow({content:'Watts Sounds'});

    marker.addListener('mouseover', function(){infoWindow.open(map, marker);});
  } 