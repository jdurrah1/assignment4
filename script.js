var app = angular.module('493Search', []);

app.controller('searchResult',[ '$scope', '$http', function($scope, $http) {
  // your code goes here
  $scope.artstsMatrix = [];
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
  	
  	
  };

  $scope.getImageUrl = function(artist)
  {

  	var imageUrl; // =artist.images[0]; 

  	if(artist.images.length !== 0)
  	{
  		imageUrl = artist.images[0].url;
  	}
  	else
  	{
  		imageUrl = "noimage.jpg";
  		 
  	}
  	return imageUrl;
  };

  $scope.getArtistName = function(artist)
  {
  	if(artist.name.length > 25)
  	{
  		var name = artist.name; 
  		name = name.substring(0,21) + "...";
  		return name; 
  	}

  	return artist.name; 
  };

  $scope.checkHot = function(artist)
  {

  	if(artist.popularity > 50)
  		return "hot"; 

  	return ""; 
  };
  $scope.getExternalUrl = function(artist)
  {
  	return artist.external_urls.spotify; 
  };
  $scope.getGenres = function(artist)
  {

  	return (Object.keys(artist.genres).map(function(k){return artist.genres[k]}).join(", "));
  };

 $scope.getModalID = function(artist)
 {

 	return "#"+artist.id;
 }

}]);

app.controller('similarArtistsCtrl',['$scope', '$http', function($scope, $http) {
  $scope.similarArtstsMatrix =[];
  $scope.getSimilarArtist = function(artist)
  {

  	$http.get("https://api.spotify.com/v1/artists/" +artist.id+"/related-artists").then(function(response){

	  		console.log(response.data);


  			var similarArtistFound = (response.data)['artists'];

	  		var  matrix = [],i,j; 

	  		for(i =0, j=0; i< similarArtistFound.length; i++)
	  		{
	  			if(i%4===0)
	  			{
	  				j++;
	  				matrix[j] =[];
	  			}
	  			matrix[j].push(similarArtistFound[i]);
	  		}
	  		$scope.similarArtstsMatrix = matrix; 
	  		console.log(matrix);
	  		

	 });
  };

   $scope.getSimilarArtistName = function(artist)
  {
  	if(artist.name.length > 15)
  	{
  		var name = artist.name; 
  		name = name.substring(0,11) + "...";
  		return name; 
  	}

  	return artist.name; 
  };

}]);
































