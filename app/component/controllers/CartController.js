app.controller("CartController", [
  "$scope",
  "ProductService",
  function ($scope, ProductService) {
    $scope.computeTotal = function () {
      // console.log("computeTotal");
      $scope.totalItems = ProductService.cart;
      // console.log($scope.totalItems);
      $scope.totalPrice = 0;
      $scope.totalItems.map((element) => {
        $scope.totalPrice +=
          element.p_count * element.p_price;
      });
      // console.log($scope.totalPrice);
    };
    $scope.computeTotal();

    $scope.removeProduct = function (item) {
      // console.log(typeof i, "p_id");
      ProductService.cart =
        ProductService.cart.filter((product) => {
          console.log(product, "product");
          return product.p_id !== item.p_id;
        });
      console.log(
        ProductService.cart,
        "ProductService"
      );
    };

    $scope.decrementProduct = function (item) {
      if (item.p_count > 1) {
        ProductService.cart =
          ProductService.cart.map((product) => {
            if (product.p_id === item.p_id) {
              return {
                ...product,
                p_count: product.p_count - 1,
              };
            }
            return product;
          });
      } else {
        $scope.removeProduct(item);
      }
    };
  },
]);