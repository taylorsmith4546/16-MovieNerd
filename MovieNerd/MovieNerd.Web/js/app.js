angular.module('app', []);

angular.module('app').controller('indexController', function ($scope, $http) {

    $scope.message = 'Hello World';

    $scope.searchTerm = '';

    console.log('issuing http get');

    $scope.searchForMovie = function () {
        $http.get('http://www.omdbapi.com/?s=' + $scope.searchTerm)
   .success(function (data) {
       $scope.movies = data.Search;
       console.log(data);
   })
   .error(function (error) {
       alert(error);
   });

    };

    });


