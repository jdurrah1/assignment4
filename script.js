var app = angular.module('493Search', []);
/*
app.filter('listToMatrix', function() {
  function listToMatrix(list, elementsPerSubArray) {
    var matrix = [], i, k;
    for (i = 0, k = -1; i < list.length; i++) {
      if (i % elementsPerSubArray === 0) {
        k++;
        matrix[k] = [];
      }
      matrix[k].push(list[i]);
    }
    return matrix;
  }
  return function(list, elementsPerSubArray) {
    return listToMatrix(list, elementsPerSubArray);
  };
});
*/
app.controller('searchResult',[ '$scope', '$http', function($scope, $http) {
  // your code goes here
  $scope.artstsMatrix = []
  $scope.searchSpotify = function()
  {

  	var artist = $scope.keyWord;
  		if(artist!='' & typeof artist != "undefined")
	  	$http.get("https://api.spotify.com/v1/search?q=" + artist + "&type=artist").then(function(response){

	  		console.log(response.data);
	  		var numberOfArtist = (response.data)['artists']['items'].length ;
	  		$scope.searchResult = 'Search Result (Total ' + numberOfArtist + ' found.)'; 

	  		//create matix of artist

	  		var artistFound = (response.data)['artists']['items'];
	  		if(numberOfArtist== 0)
	  		{

	  			alert('No artist found for: ' + artist); 
	  		} 
	  		else
	  		{
		  		var  matrix = [],i,j; 

		  		for(i =0, j=0; i< artistFound.length; i++)
		  		{
		  			if(i%4===0)
		  			{
		  				j++;
		  				matrix[j] =[];
		  			}
		  			matrix[j].push(artistFound[i]);
		  		}
		  		$scope.artstsMatrix = matrix; 
	  		}


	  	});
  	
  	
  }

}]);

app.controller('similarArtistsCtrl',['$scope', '$http', function($scope, $http) {
  // your code goes here 

}]);
