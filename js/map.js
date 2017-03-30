function initMap() {
  //code for initializing the google map
    "use strict";
    var uluru = {lat: -25.363, lng: 131.044},
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: uluru,
            zoomControl: true,
            scaleControl: true,
            scrollwheel: false,
            disableDoubleClickZoom: true

        }),
        marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
}