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
    var formattedDate = new Date(restaurant.createdAt);
    formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
    var newRestaurantCard = $("<div>");
    newRestaurantCard.addClass("card");
    var newRestaurantHeading = $("<div>");
    newRestaurantHeading.addClass("card-header");
    // var newPostDate = $("<small>");
    var newRestaurantstreet =$("<h2>");
    var newRestaurantcity =$("<h2>");
    var newRestaurantstate =$("<h2>");
    var newRestaurantzip =$("<h2>");
    var newRestaurantCardBody = $("<div>");
    newRestaurantCardBody.addClass("card-body");
    var newRestaurantBody= $("<p>")
    newRestaurantstreet.text = (restaurant.street);
    newRestaurantcity.text = (restaurant.city);
    newRestaurantstate.text = (restaurant.state);
    newRestaurantzip.text = (restaurant.zip);
    // newPostDate.text(formattedDate);
    return newRestaurantCard;
    newRestaurantHeading.append(newRestaurantstreet);
    newRestaurantHeading.append(newRestaurantcity);
    newRestaurantHeading.append(newRestaurantstate);
    newRestaurantHeading.append(newRestaurantcity);
    newRestaurantCardBody.append(newRestaurantBody);
    newRestaurant


  }


})