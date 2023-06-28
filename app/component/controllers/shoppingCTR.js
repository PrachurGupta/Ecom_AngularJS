app.controller("shoppingCTR", [
  "$scope",
  "ProductService",
  function ($scope, ProductService) {
    $scope.cart = [];
    // console.log($scope.cart, "cart");
    $scope.products =
      ProductService.getProducts();

    $scope.addToCart = function (product) {
      // console.log("Addto Cart");
      const itemPresent =
        ProductService.cart.find(function (item) {
          if (product.p_id === item.p_id) {
            item.p_count += 1;
          }
          return product.p_id === item.p_id;
        });
      if (!itemPresent) {
        ProductService.cart.push({
          p_id: product.p_id,
          p_name: product.p_name,
          p_price: product.p_price,
          p_count: product.p_count,
        });
      }
      // console.log(
      //   ProductService.cart,
      //   "ProductService.cart"
      // );

      
    };
  },
]);