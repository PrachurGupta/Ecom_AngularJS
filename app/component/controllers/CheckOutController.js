app.controller("CheckOutController", [
  "$scope",
  "ProductService",
  "$location",
  function ($scope, ProductService, $location) {
    $scope.checkOutMessage = function () {
      $location.path("checkOut");
      console.log("checkOutMessage");
    };
    // console.log("Check Out Controller");
  },
]);
