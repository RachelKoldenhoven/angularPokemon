/**
 * Created by rachelkoldenhoven on 4/6/16.
 */
app.controller('PokemonController', function($scope, $http) {
  $scope.view = {};
  $scope.view.display = "";
  $scope.newPokemon = {};
  $scope.newMove = {};
  $scope.pokemonId = 1;

  $scope.getRandom = function() {

  };

  $scope.getNewPokemon = function() {
    $scope.loading = true;
    $scope.pokemonId = Math.floor((Math.random() * 721) + 1);
    $http.get('http://pokeapi.co//api/v2/pokemon/' + $scope.pokemonId).then(function(data){
      $scope.newPokemon = data.data;
      $scope.loading = false;
      console.log($scope.newPokemon);
    });
  };

  $scope.getNewMove = function() {
    $scope.pokemonId = Math.floor((Math.random() * 639) + 1);
    $http.get('http://pokeapi.co//api/v2/move/' + $scope.pokemonId).then(function(data){
      $scope.newMove = data.data;
      console.log($scope.newMove.name);
    });
  };



  });