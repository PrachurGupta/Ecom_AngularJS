var app = angular.module("shoppingcart", [
  "ngRoute",
]);

app.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "views/home.html",
        controller: "shoppingCTR",
      })
      .when("/products", {
        templateUrl: "views/products.html",
        controller: "shoppingCTR",
      })
      .when("/cart", {
        templateUrl: "views/cart.html",
        controller: "shoppingCTR",
      })
      .otherwise({
        redirectTo: "/home",
      });
  },
]);

app.controller("shoppingCTR", function ($scope) {
  $scope.carts = [];
  $scope.products = [
    {
      p_id: "1",
      p_name: "ASUS VivoBook 14",
      p_image: "images/ASUS.jpg",
      p_price: 35990,
    },
    {
      p_id: "2",
      p_name: "HP Laptop 14s, 12th Gen",
      p_image: "images/HP.jpg",
      p_price: 40990,
    },
    {
      p_id: "3",
      p_name: "Lenovo IdeaPad Slim 3",
      p_image: "images/Lenovo.jpg",
      p_price: 34990,
    },
  ];

  $scope.addToCart = function (product) {
    if (product) {
      $scope.carts.push({
        p_id: product.p_id,
        p_name: product.p_name,
        p_price: product.p_price,
      });
      console.log($scope.carts);
    }
  };

  //   $scope.addToCart = function (product) {
  //     console.log(product);
  //   };

  $scope.total = 0;

  $scope.setTotals = function (cart) {
    if (cart) {
      $scope.total += cart.p_price;
    }
  };

  $scope.remove_cart = function (cart) {
    if (cart) {
      $scope.carts.splice(
        $scope.carts.indexOf(cart),
        1
      );
      $scope.total -= cart.p_price;
    }
  };
});
