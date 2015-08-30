var bookCtrls = angular.module('bookCtrls', []);

bookCtrls.controller('BookCtrl', function ($scope) {
	$scope.books = [
		{name : 'Thinking in JAVA', author : 'A'},
		{name : 'Advanced Javascript Programming', author : 'B'},
		{name : 'APUE', author : 'C'}
	];
});

bookCtrls.controller('ErrCtrl', function ($scope) {
	$scope.info = 'Page Not Found';
});