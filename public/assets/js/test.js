$(document).ready(function(){
  var restaurantContainer = $(".restaurant-container");
  
  var restaurants;

  var url = window.location.search;
  var restaurantId;

  getRestaurants();

  function getRestaurants(restaurant) {
    restaurantId = restaurant || "";
    if (restaurantId) {
      restaurantId = "/?restaurant_id=" + restaurantId;
    }
    $.get("/api/restaurants" + restaurantId, function(data) {
      console.log("Restaurant", data);
      restaurants = data;
      initializeRows();
    })
    console.log("restaurantId: " + restaurantId);
  }

  function initializeRows() {
    restaurantContainer.empty();
    var restaurantsToAdd = [];
    for (var i = 0; i < restaurants.length; i++) {
      restaurantsToAdd.push(createNewRow(restaurants[i]));
    }
    restaurantContainer.append(restaurantsToAdd);
  }
  function createNewRow(restaurant) {
    var formattedData = new Date(restaurant.createdAt);
    formattedData = moment(formattedData).format("MMMM Do YYYY, h:mm:ss a");
  }


})