var bookApp = angular.module('bookApp', [
	'ngRoute'
]);

bookApp.config(function ($routeProvider){
	$rootProvider.when('books', {
		templateUrl : 'tpls/bookList.html',
		controller : 'BookCtrl'
	}).otherwise({
		templateUrl : '404.html',
		controller : 'ErrCtrl'
	});
});