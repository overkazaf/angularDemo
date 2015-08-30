var app = angular.module('johnApp', []);

app.controller('jController', ['$scope', function ($scope) {
	$scope.greeting = {
		text : 'John Doe'
	};
}]);