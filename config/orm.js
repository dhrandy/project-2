var orm = {
    getLocation: function (locationData) {
    
        var streetArray = []
        streetArray = locationData.street.split(" ").join("+")
        
        locationData.street = streetArray

        // console.log(locationData)

        $.ajax({
            url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + locationData.street + "," + locationData.city + "," + locationData.state + "&key=AIzaSyCA5M_7o7Zb7AqxnEMLMz_h3dpGr1v8vTg",
            method: "GET"
        })
        .then(function(result) {
            for (i = 0; i < result.results.length; i++) {
                coords = result.results[i].geometry.location
            }
            // console.log(coords)
            $.ajax({
                url: "/user_coords",
                method: "POST",
                data: {coords}
            })
            console.log("DATA SENT")
        })
    }//End get Locationdata
}