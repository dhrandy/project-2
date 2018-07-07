$(document).ready(function () {

    console.log("Show Map Working")

    var markers = []
    var pathArray = window.location.pathname.split('/')

    LAT = Number(pathArray[2])
    LNG = Number(pathArray[3])

    coords = {
        lat: LAT,
        lng: LNG
    }

    console.log(coords)

    var map

    function initMap() {
        //**** DEFAULT ZOOM FOR MAP****

        var options = {
            zoom: 14,
            center:
             {lat: 35.2271, lng: -80.8431} 
            //  center of Charlotte
        }
        console.log("work1")

        map = new google.maps.Map(document.getElementById('map'), options)

        console.log(options)
        console.log(map)

        console.log("work2")

        //****LISTEN FOR MAP CLICK TO ADD MARKER****

        // google.maps.event.addListener(map, "click", function(event) {
        //     addMarker({coords:event.latLng})
        // })

        var markers = [{
            coords,
            image: "",
            content: `
        <div>
            <h1>SOME PLACE</h1>
            <button class="ui compact red button">BUSY</button>
            <button class="ui compact green button">NOT BUSY</button>
        </div>
        <div class="ui container">
        <div class="ui grid">
            <div class="ui row collapse">
                <div class="ui column">Food:</div>
                <div class="ui column">
                    <span id="food-rating"></span><span> Stars</span>
                </div>
            </div>

            <div class="ui row collapse">
                <div class="ui column">Drinks:</div>
                <div class="ui column">
                    <span class="ui rating r-space" id="drinks" data-rating="5" data-max-rating="5"></span>
                </div>
            </div>

            <div class="ui row collapse">
                <div class="ui column">Atmosphere: </div>
                <div class="ui column">
                    <span class="ui rating r-space" id="atmosphere" data-rating="4" data-max-rating="5"></span>
                </div>
            </div>

            <div class="ui row collapse">
                <div class="ui column">Staff:</div>
                <div class="ui column">
                    <span class="ui rating r-space" id="staff" data-rating="5" data-max-rating="5"></span>
                </div>
            </div>

            <div class="ui row collapse">
                <div class="ui column">Cleanliness:</div>
                <div class="ui column">
                    <span class="ui rating r-space" id="cleanliness" data-rating="4" data-max-rating="5"></span>
                </div>
            </div>
            <div class="ui row collapse">
                <div class="ui right column">Parking:</div>
                <div class="ui column">
                    <span class="ui rating r-space" id="parking" data-rating="5" data-max-rating="5"></span>
                </div>
            </div>
        </div>
    </div>
        `
        }]

        for (var i = 0; i < markers.length; i++) {
            addMarker(markers[i])
        }

        function addMarker(props) {

            // ****CHECK FOR ICON****
            if (props.icon) {
                marker.setIcon(props.icon)
            }

            // ****VALIDATE CONTENT****
            if (props.content) {
                var infoWindow = new google.maps.InfoWindow({
                    content: props.content
                })
            }

            var marker = new google.maps.Marker({
                position: props.coords,
                map: map,
                icon: props.image,
                content: props.content
            })

            //****ADD CLICK EVENT TO MARKERS TO CALL MARKER INFO****
            marker.addListener("click", function () {
                infoWindow.open(map, marker)
            })
        }
    } //****end of map****
    rating()
    initMap()

    function rating() {
        //display rating
        $('.ui.rating')
            .rating();
        console.log("rating")
    }

})