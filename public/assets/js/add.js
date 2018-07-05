// **** API CALL TO GET LOCATION FROM THE FORM ****
function sendLocation() {
    $("#sendAddress").on("click", function () {
        event.preventDefault()
        console.log("search button clicked")

        var name = $("#restaurant").val()

        var locationData = {
            street: $("#street").val(),
            city: $("#city").val(),
            state: $("#state").val(),
            zip: $("#zip").val()
        }

        var loactionRating = {
            food: parseInt($("input[name='frequency1']:checked").val()),
            drinks: parseInt($("input[name='frequency2']:checked").val()),
            atmosphere: parseInt($("input[name='frequency3']:checked").val()),
            staff: parseInt($("input[name='frequency4']:checked").val()),
            cleanliness: parseInt($("input[name='frequency5']:checked").val())
        }
        // console.log(name)
        // console.log(locationData)
        // console.log(loactionRating)

        var streetArray = []
        streetArray = locationData.street.split(" ").join("+")


        $.ajax({
                url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + locationData.street + "," + locationData.city + "," + streetArray + "&key=AIzaSyCA5M_7o7Zb7AqxnEMLMz_h3dpGr1v8vTg",
                method: "GET"
            })
            .then(function (result) {
                for (i = 0; i < result.results.length; i++) {
                    coords = result.results[i].geometry.location
                }
                locationCoords = coords
                // console.log(locationCoords)
                
                var package = {
                    name: name,
                    locationData: locationData,
                    loactionRating: loactionRating,
                    locationCoords: locationCoords
                }

                console.log(package)

                $.ajax({
                    url:"/api/restaurants",
                    method: "POST",
                    data: package
                }). then(function() {
                    console.log("Data Sent")
                })
                // window.location.assign("/app/" + coords.lat + "/" + coords.lng)
            })
    })
}

sendLocation()