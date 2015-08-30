// Declare dependencies
var bookApp = angular.module('bookApp', [
	'ngRoute', 'bookCtrls'
]);

// Do some configuration tasks
bookApp.config(function ($routeProvider){
	$routeProvider.when('/books', {
		templateUrl : 'tpls/bookList.html',
		controller : 'BookCtrl'
	}).otherwise({
		templateUrl : 'tpls/404.html',
		controller : 'ErrCtrl'
	});
});