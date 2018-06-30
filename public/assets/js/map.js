location = require("location.js")

var map
var coords
var markers = []


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

// // **** API CALL TO GET LOCATION FROM THE FORM ****
// function sendLocation() {
//     $("#sendAddress").on("click", function() {
//         event.preventDefault()
//         var locationData = {
//             street: $("#street").val(),
//             city: $("#city").val(),
//             state: $("#state").val(),
//             zip: $("#zip").val()
//         }
//         var streetArray = []
//         streetArray = locationData.street.split(" ").join("+")
        
//         locationData.street = streetArray

//         // console.log(locationData.street)
        
//         $.ajax({
//             url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + locationData.street + "," + locationData.city + ","+locationData.state + "&key=AIzaSyCA5M_7o7Zb7AqxnEMLMz_h3dpGr1v8vTg",
//             method: "GET"
//         })
//         .then(function(result) {
//             for (i = 0; i < result.results.length; i++) {
//                 coords = result.results[i].geometry.location
//                 console.log(coords)
//                 markers.push(coords)
//             }
//         })
//     })
// }