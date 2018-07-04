$(document).ready(function() {
  var nameInput = $("#name");
  var locationInput = $("#location");
  var restaurantForm = $("#test");
  
  $(restaurantForm).on("submit", handleFormSubmit);
  
  function handleFormSubmit(event) {
    event.preventDefault();
    if(!nameInput.val().trim || !locationInput.val().trim) {
      return;
    }
    
    var newRestaurant = {
      name: nameInput 
      .val()
      .trim(),
      // location: locationInput
      //   .val()
      //   .trim(),
    }
    console.log("New Restaurant: " + newRestaurant.name);
  }

    function submitRequest(restaurant) {
      $.post("/api/restaurants", restaurant, function() {
        //  window.location.href = "/index.html";
      })
    };
});
