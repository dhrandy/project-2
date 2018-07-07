$(document).ready(function () {
    var map
    var markers = []
    var locationArray = []

    var pathArray = window.location.pathname.split('/')

    LAT = Number(pathArray[2])
    LNG = Number(pathArray[3])

    coords = {
        lat: LAT,
        lng: LNG
    }

    var map

    function initMap() {
        //**** DEFAULT ZOOM FOR MAP****

        var options = {
            zoom: 14,
            center: 
            // coords
             {lat: 35.2271, lng: -80.8431} 
        }

        map = new google.maps.Map(document.getElementById('map'), options)

        getResults()

        console.log(locationArray)
        
        for (var i = 0; i < locationArray.length; i++) {
            console.log("LOOP MAKERS RAN")
            addMarker(locationArray[i])
        }
        // **** Get the data out of the data base ****
        function getResults() {
            $.ajax({
                url: "/api/restaurants",
                method: "GET"
            })
            .then(function (result) {
                for (i = 0; i < result.length; i++) {
                    // console.log(result[i])
                    getCoords(result[i])
                }
            })
    
        }
        // ****  Creates a new object to add in coordinates  ****
        function getCoords(x) {
            var locationData = {
                name: x.restname,
                street: x.street,
                city: x.city,
                state: x.state,
                zip: x.zip,
                latLng: {
                    lat:0,
                    lng:0 
                }
                
            }
    
            var streetArray = []
            streetArray = locationData.street.split(" ").join("+")
    
            $.ajax({
                    url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + streetArray + "," + locationData.city + "," + locationData.state + "&key=AIzaSyAWZ_iRjVcTuqPP0iOTNZfwvTU5nazcOyw",
                    method: "GET"
            })
            .then(function (result) {
                for (i = 0; i < result.results.length; i++) {
                    coords = result.results[i].geometry.location
    
                    locationData.latLng = coords
                    locationArray.push(locationData)
                }
                for (var i = 0; i < locationArray.length; i++) {
                    addMarker(locationArray[i])
                }
            })

    
        }
        //  ****  Takes in an object to populate markers on the map and add a click event for the info windows ****
        function addMarker(props) {

            // ****CHECK FOR ICON****
            if (props.icon) {
                marker.setIcon(props.icon)
            }

            // ****VALIDATE CONTENT****
            if (props.name) {
                var infoWindow = new google.maps.InfoWindow({
                    content: "<h4>" + props.name + "</h4>" +  "<p>" + props.street + "<p>" + props.city + ", " + props.state + ", " + props.zip + "<p>" + "<button class='ui compact red button'>BUSY</button>" + " " + "<button class='ui compact green button'>NOT BUSY</button>" + "<p><ul>" + "<li>" + "FOOD: " + "&bigstar;&bigstar;&bigstar;&bigstar;&bigstar;" + "<li>" + "DRINKS: "+ "&bigstar;&bigstar;&bigstar;&bigstar;&bigstar;" + "<li>" + "ATMOSPHERE: "+ "&bigstar;&bigstar;&bigstar;&bigstar;&bigstar;" + "<li>" + "STAFF: " + "&bigstar;&bigstar;&bigstar;&bigstar;&bigstar;"+ "<li>" + "CLEANLINESS" + "&bigstar;&bigstar;&bigstar;&bigstar;&bigstar;"
                })
            }

            var marker = new google.maps.Marker({
                position: props.latLng,
                map: map,
                icon: props.image,
                content:""
            })

            //****ADD CLICK EVENT TO MARKERS TO CALL MARKER INFO****
            marker.addListener("click", function () {
                infoWindow.open(map, marker)
            })
        }

    } //****end of map****
    // rating()

    initMap()

    // function rating() {
    //     //display rating
    //     $('.ui.rating')
    //         .rating();
    //     // console.log("rating")
    // }

})