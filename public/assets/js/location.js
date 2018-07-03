// **** API CALL TO GET LOCATION FROM THE FORM ****

var map
var coords
var markers = []

function sendLocation() {
    $("#sendAddress").on("click", function () {
        event.preventDefault()
        console.log("search button clicked")
        var locationData = {
            street: $("#street").val(),
            city: $("#city").val(),
            state: $("#state").val(),
            zip: $("#zip").val()
        }

        var streetArray = []
        streetArray = locationData.street.split(" ").join("+")

        locationData.street = streetArray

        console.log(locationData)

        $.ajax({
                url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + locationData.street + "," + locationData.city + "," + locationData.state + "&key=AIzaSyCA5M_7o7Zb7AqxnEMLMz_h3dpGr1v8vTg",
                method: "GET"
            })
            .then(function (result) {
                for (i = 0; i < result.results.length; i++) {
                    coords = result.results[i].geometry.location
                }
                console.log(coords)
            })
    })
}

sendLocation()

console.log("location js file loaded")