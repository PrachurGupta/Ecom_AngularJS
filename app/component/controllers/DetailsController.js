app.controller("DetailsController", [
    "$scope",
    "$routeParams",
    "ProductService",
    function (
      $scope,
      $routeParams,
      ProductService
    ) {
      // console.log(parseInt($routeParams.p_id));
      $scope.product =
        ProductService.getProducts().find(function (
          product
        ) {
          // console.log(product, "product");
          return product.p_id === $routeParams.p_id;
        });
    },
  ]);