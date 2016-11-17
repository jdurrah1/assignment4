var app = angular.module('493Search', []);

app.controller('searchResult',[ '$scope', '$http', function($scope, $http) {
  // your code goes here

  $scope.searchSpotify = function()
  {

  	$scope.searchValue = 'hi'; 
  }

}]);

app.controller('similarArtistsCtrl',['$scope', '$http', function($scope, $http) {
  // your code goes here 

}]);
