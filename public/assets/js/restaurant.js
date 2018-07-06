$(document).ready(function() {
  // var nameInput = $("#name");
  var streetInput = $("#street");
  var cityInput = $("#city");
  var stateInput = $("#state");
  var zipInput = $("#zip");

  $("#sendAddress").on("click", function handleFormSubmit(event) {
    event.preventDefault()
    console.log("Karina's button clicked")
    if(!streetInput.val().trim || !cityInput.val().trim || !stateInput.val().trim || !zipInput.val().trim) {
      return;
    }
    var newRestaurant = {
      // resname: nameInput.val().trim(),
      street: streetInput.val().trim(),
      city: cityInput.val().trim(),
      state: stateInput.val().trim(),
      zip: zipInput.val().trim()
    };

    submitRestaurant(newRestaurant);

    getRatings();
    
  });

  function getRatings() {
    var foodRating = document.querySelector("input[name='frequency1']:checked").value;
    var drinksRating = document.querySelector("input[name='frequency2']:checked").value;
    var atmosphereRating = document.querySelector("input[name='frequency3']:checked").value;
    var staffRating = document.querySelector("input[name='frequency4']:checked").value;
    var cleanlinessRating = document.querySelector("input[name='frequency5']:checked").value;
    var parkingRating = document.querySelector("input[name='frequency6']:checked").value;

    console.log("Food: " + foodRating);
    console.log("Drinks: " + drinksRating);
    console.log("Atmosphere: " + atmosphereRating);
    console.log("Staff: " + staffRating);
    console.log("Cleanliness: " + cleanlinessRating);
    console.log("Parking: " + parkingRating);

    var newRating = {
      food: foodRating,
      drinks: drinksRating,
      atmosphere: atmosphereRating,
      staff: staffRating,
      cleanliness: cleanlinessRating,
      parking: parkingRating
    };
    submitRating(newRating);
  };

  function submitRestaurant(restaurant) {
    $.post("/api/restaurants", restaurant, function () {
      //  window.location.href = "/add-a-place";
    })
  };

  function submitRating(Rating) {
    $.post("/api/ratings/", Rating, function () {
      // window.location.href = "/add-a-place";
    })
  };


  $('#addForm')
    .form({
      fields: {
        empty: {
          identifier: 'street',
          rules: [
            {
              type: 'empty',
              prompt: 'Please enter a Street'
            }
          ]
        },
        empty: {
          identifier: 'city',
          rules: [
            {
              type: 'empty',
              prompt: 'Please enter a City'
            }
          ]
        },
        empty: {
          identifier: 'state',
          rules: [
            {
              type: 'empty',
              prompt: 'Please enter a State'
            }
          ]
        },
        empty: {
          identifier: 'zip',
          rules: [
            {
              type: 'empty',
              prompt: 'Please enter a Zip Code'
            }
          ]
        },
        // checkbox: {
        //   identifier: 'checkbox',
        //   rules: [
        //     {
        //       type: 'checked',
        //       prompt: 'Please check the checkbox'
        //     }
        //   ]
        // }
      }
    })
    ;
});









// $(document).ready(function() {
//   var streetInput = $("#street");
//   var cityInput = $("#city");
//   var stateInput = $("#state");
//   var zipInput = $("#zip");

//   $("#sendAddress").on("click", function handleFormSubmit(event) {
//     event.preventDefault()
//     console.log("Karina's button clicked")
//     // if(!streetInput.val().trim || !cityInput.val().trim || !stateInput.val().trim || !zipInput.val().trim) {
//     //   return;
//     // }
//     var newRestaurant = {
//       street: streetInput.val().trim(),
//       city: cityInput.val().trim(),
//       state: stateInput.val().trim(),
//       zip: zipInput.val().trim()
//     };
//     console.log("New Restaurant: " + newRestaurant);
//     // console.log("Rating: " + newRating);

//     submitRestaurant(newRestaurant);


//   });














      // function getRatings(restaurantid) {
      //   console.log(restaurantid);
      //   var foodRating = document.querySelector("input[name='frequency1']:checked").value;
      //   var drinksRating = document.querySelector("input[name='frequency2']:checked").value; 
      //   var atmosphereRating = document.querySelector("input[name='frequency3']:checked").value;
      //   var staffRating =  document.querySelector("input[name='frequency4']:checked").value;
      //   var cleanlinessRating = document.querySelector("input[name='frequency5']:checked").value;
      //   var parkingRating = document.querySelector("input[name='frequency6']:checked").value;


      //   var newRating = {
      //     food: foodRating,
      //     drinks: drinksRating,
      //     atmosphere: atmosphereRating,
      //     staff: staffRating,
      //     cleanliness: cleanlinessRating,
      //     parking: parkingRating,
      //     RestaurantId: restaurantid
      //   };
      //   submitRating(newRating);
      // };


  // function submitRestaurant(restaurant) {
  //   console.log(restaurant);
  //   $.post("/api/restaurants", restaurant, function(response) {
      //  window.location.href = "/add-a-place";
      // console.log(response)
      //  getRatings(response.id);
  //   }).then (function (restaurantdata){
  //     console.log(restaurantdata)
  //   })
  //  console.log("Restaurant submitted!")
  // };

  // function submitRating(Rating) {
  //   console.log(Rating);
  //   $.post("/api/ratings/", Rating, function() {
  //     // window.location.href = "/add-a-place";
  //     console.log("Ratings Submitting...")
  //   })
  //   console.log("Ratings submitted!")
  // };

// });