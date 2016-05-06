app.controller('memoCtrl', function ($scope) {
	$scope.todoList = [{"memoInfo":"First Memo", done:false}];
	$scope.memoText = '';

	$scope.saveMemo = function () {
		$scope.todoList.push(
			{
				"memoInfo":$scope.memoText,
				"done" : false
			});
		$scope.memoText = '';
	};

	$scope.doClear = function (){
		var oldList = $scope.todoList;
		$scope.todoList = [];
		angular.forEach(oldList, function (item, index) {
			if (!item.done) {
				$scope.todoList.push(item)
			}
		});
	};
});