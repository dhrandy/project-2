var map
var coords
var markers = []

$.ajax({
    url: "/user_coords",
    method: "GET"
}).then(function(data) {
    coords = req.body
    console.log(coords)
    initMap()
})

function initMap() {
    //**** DEFAULT ZOOM FOR MAP****

    var options = {
        zoom: 10,
        center: {coords}
    }

    map = new google.maps.Map(document.getElementById('map'), options)

    //****LISTEN FOR MAP CLICK TO ADD MARKER****

    google.maps.event.addListener(map, "click", function(event) {
        addMarker({coords:event.latLng})
    })

    // **** RUN FUNCTIONS TO SHOW LOCATION ****
    sendLocation()

    for(var i = 0; i < markers.length; i++) {
            addMarker(markers[i])
    }

    function addMarker(props){

        // ****CHECK FOR ICON****

        if(props.icon) {
            marker.setIcon(props.icon)
        }

        // ****VALIDATE CONTENT****

        if(props.content) {
            var infoWindow = new google.maps.InfoWindow ({
            content: props.content
            })
        }

        var marker = new google.maps.Marker ({
            position: coords,
            map: map,
            icon: props.image,
            content: props.content
        })

        //****ADD CLICK EVENT TO MARKERS TO CALL MARKER INFO****

        marker.addListener("click", function() {
            infoWindow.open(map, marker)
        })
    }
}