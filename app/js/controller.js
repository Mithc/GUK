(function() {

var petrApp = angular.module('petrApp', []);
petrApp.controller('petrCtrl', function($scope, $http) {
  $http.get('products.json').then(function(data){
    $scope.products = data.data;
    var assoc=[];
    for (i = 0; i < $scope.products.length; i++ ) {
    assoc = $scope.products[i].assocProducts;
    var re = /\n*;\n/;
    var tagList = assoc.split(re);
    console.log(tagList);
  }
    },
function(Error) {
  console.log("error");
});
});


petrApp.controller("CounterController", function($scope) {
        $scope.counter = 1;
        $scope.decrement = function(product) {
          if($scope.counter  > 1) {
           $scope.counter--;
         }
       };
});
})();
