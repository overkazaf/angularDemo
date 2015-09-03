var app = angular('jApp', []);

app.provider('jService', [function ($http) {
	
	this.$get = [function() {
		var doRequest = function (url) {
			return $http({
				method : 'GET',
				dataType : 'data.json',
				url : url
			});
		}
		return {
			userList : function (url){
				return doRequest(url);
			}
		};
	}];
}]);

app.controller('userController', function ($scope, jService) {
	jService.userList(url);
});