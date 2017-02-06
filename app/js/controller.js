(function() {

var petrApp = angular.module('petrApp', []);
petrApp.controller('petrCtrl',['$scope', '$http', function($scope, $http) {
  $http.get('products.json').then(function(data){
    $scope.products = data.data;
    for(i = 0; i < $scope.products.length; i++) {
    var tags = $scope.products[i].assocProducts;
    var re = /\n*;\n*/;
    var tagList = tags.split(re);
    console.log(tagList); //  ["Лето", "зима", "осень 2009 года"]
    petrApp.controller('tagName',['$scope', function($scope){

    }]);
  }
  },
function(Error) {
  console.log("error");
});
}]);


petrApp.controller("setPriceAlt", function($scope) {
  $scope.Price = data.data.priceRetailAlt;
  $scope.PriceGold = data.data.priceGoldAlt;
});
petrApp.controller("setPrice", function($scope) {
  $scope.Price = data.data.priceRetail;
  $scope.PriceGold = data.data.priceGold;
});

petrApp.controller("CounterController", function($scope) {
        $scope.counter = 1;
        $scope.decrement = function($scope) {
          if($scope.counter > 1) {
           $scope.counter--;
         }
       };
});
})();