angular.module('countryApp', [])

angular.module('countryApp')
	.controller('countryTroller', ['$scope', '$http', function($scope, $http){

		console.log('TEST')

		$scope.getCountries = function(){

			$http.get('/countries')

		}

		
	}])