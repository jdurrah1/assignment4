var app = angular.module('493Search', []);

app.controller('searchResult',[ '$scope', '$http', function($scope, $http) {
  // your code goes here
  $scope.searchSpotify = function()
  {

  	var artist = $scope.keyWord;
  		if(artist!='' & typeof artist != "undefined")
	  	$http.get("https://api.spotify.com/v1/search?q=" + artist + "&type=artist").then(function(response){

	  		console.log(response.data);
	  		var numberOfArtist = (response.data)['artists']['items'].length ;
	  		$scope.searchResult = 'Search Result (Total ' + numberOfArtist + ' found.)'; 

	  		if(numberOfArtist== 0)
	  		{

	  			alert('No artist found for: ' + artist); 
	  		} 
	  	});
  	
  	
  }

}]);

app.controller('similarArtistsCtrl',['$scope', '$http', function($scope, $http) {
  // your code goes here 

}]);
