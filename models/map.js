require('dotenv').config()
var keys = require("../keys.js")

var apiKey = keys.apiKey

URL = "https://maps.googleapis.com/maps/api/geocode/json?"

var map

function initMap() {
    //**** DEFAULT ZOOM FOR MAP****

    var options = {
        zoom:8,
        center: {lat: 35.2271, lng: -80.8431}
    }

    map = new google.maps.Map(document.getElementById('map'), options)

    //****LISTEN FOR MAP CLICK TO ADD MARKER****

    google.maps.event.addListener(map, "click", function(event) {
        addMarker({coords:event.latLng})
    })
    
    var markers = [
        {
            coords:{lat: 35.2271, lng: -80.8431},
            image: "",
            content:"TEST 1"
        },
        {
            coords:{lat: 41.2063, lng: -74.0418},
            image: "",
            content: "TEST 2"
        },
        {
            coords:{lat: 41.8781, lng: -87.6298},
            image: "",
            content: "TEST 3"
        }
    ]

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
            position: props.coords,
            map: map,
            icon: props.image,
            content: props.content
        })

        //****ADD CLICK EVENT TO MARKERS TO CALL MARKER INFO****

        marker.addListener("click", function() {
            infoWindow.open(map, marker)
        })
    }

    // ****CHECK FOR ICON****

    // if(props.icon) {
    // 	marker.setIcon(props.icon)
    // }

    // ****VALIDATE CONTENT****

    // if(props.content) {
    // 	var infoWindow = new google.maps.InfoWindow ({
    // 	content: props.content
    // 	})
    // }
    
    //****ADD CLICK EVENT TO MARKERS TO CALL MARKER INFO****

    // marker.addListener("click", function() {
    // 	infoWindow.open(map, marker)
    // })

}//****end of map****