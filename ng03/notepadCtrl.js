app.controller('notepadCtrl', function ($scope){
	$scope.message = '';
	$scope.save = function (){
		alert('message has been saved');
	};

	$scope.clear = function (){
		$scope.message = '';
	};

	$scope.left = function (){
		return (100 - $scope.message.length);
	};
});