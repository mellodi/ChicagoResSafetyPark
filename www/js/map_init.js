var map;
function initMap(userLocation) {
    console.log()
    var latLng = {lat: userLocation.lat, lng: userLocation.lng};
    var starIcon = "/ChicagoResSafetyPark/img/small_star.png";
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: latLng,
        mapTypeId: 'roadmap'
    });
    
    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        icon: starIcon
    });

}
