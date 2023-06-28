var app = angular.module("shoppingcart", [
  "ngRoute",
]);

app.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "views/home.html",
        // controller: "shoppingCTR",
      })
      .when("/products", {
        templateUrl: "views/products.html",
        controller: "shoppingCTR",
      })
      .when("/details/:p_id", {
        templateUrl: "views/details.html",
        controller: "DetailsController",
      })
      .when("/cart", {
        templateUrl: "views/cart.html",
        controller: "CartController",
      })
      .when("/checkOut", {
        templateUrl: "views/checkOut.html",
        controller: "CheckOutController",
      })
      .otherwise({
        redirectTo: "/home",
      });
  },
]);

app.service("ProductService", function () {
  // $http
  //   .get("../data/products.json")
  //   .then(function (response) {
  //     console.log(response.data.products);
  //     $scope.products = response.data.products;
  //   });
  var products = [
    {
      p_id: "1",
      p_count: 1,
      p_name: "ASUS VivoBook 14",
      p_image: "images/ASUS.jpg",
      p_price: 35990,
    },
    {
      p_id: "2",
      p_count: 1,
      p_name: "HP Laptop 14s, 12th Gen",
      p_image: "images/HP.jpg",
      p_price: 40990,
    },
    {
      p_id: "3",
      p_count: 1,
      p_name: "Lenovo IdeaPad Slim 3",
      p_image: "images/Lenovo.jpg",
      p_price: 34990,
    },
    {
      p_id: "4",
      p_count: 1,
      p_name: "Lenovo IdeaPad Slim 4",
      p_image: "images/Lenovo.jpg",
      p_price: 34990,
    },
  ];

  this.cart = [];

  this.getProducts = function () {
    return products;
  };
});
