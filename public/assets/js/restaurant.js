$(document).ready(function() {
  var name = $("#restaurant");
  var streetInput = $("#street");
  var cityInput = $("#city");
  var stateInput = $("#state");
  var zipInput = $("#zip");
  
  $("#sendAddress").on("click", function handleFormSubmit(event) {
    event.preventDefault()
    console.log("Karina's button clicked")
    // if(!streetInput.val().trim || !cityInput.val().trim || !stateInput.val().trim || !zipInput.val().trim) {
    //   return;
    // }
    var newRestaurant = {
      restname: name.val().trim(),
      street: streetInput.val().trim(),
      city: cityInput.val().trim(),
      state: stateInput.val().trim(),
      zip: zipInput.val().trim()
    };
    console.log("New Restaurant: " + newRestaurant);
    // console.log("Rating: " + newRating);
    

    submitRestaurant(newRestaurant);
    // getRatings();



  });

  function getRatings() {
    var foodRating = document.querySelector("input[name='frequency1']:checked").value;
    var drinksRating = document.querySelector("input[name='frequency2']:checked").value; 
    var atmosphereRating = document.querySelector("input[name='frequency3']:checked").value;
    var staffRating =  document.querySelector("input[name='frequency4']:checked").value;
    var cleanlinessRating = document.querySelector("input[name='frequency5']:checked").value;
    
    console.log("Food: " + foodRating);
    console.log("Drinks: " + drinksRating);
    console.log("Atmosphere: " + atmosphereRating);
    console.log("Staff: " + staffRating);
    console.log("Cleanliness: " + cleanlinessRating);

    var newRating = {
      food: foodRating,
      drinks: drinksRating,
      atmosphere: atmosphereRating,
      staff: staffRating,
      cleanliness: cleanlinessRating
    };
    submitRating(newRating);
  };

  function submitRestaurant(restaurant) {
    $.post("/api/restaurants", restaurant, function() {
      //  window.location.href = "/add-a-place";
      console.log("submitting...")
    })
   console.log("Restaurant submitted!")
  };
  
  function submitRating(Rating) {
    $.post("/api/ratings", Rating, function() {
      // window.location.href = "/add-a-place";
      console.log("Ratings Submitting...")
    })
    console.log("Ratings submitted!")
  };

});