var jModule = angular.module('johnModule', []);

/**
 * @param  {TagName}
 * @return {[type]}
 */
jModule.directive('hello', function () {
	return {
		restrict : 'E',
		replace : true,
		template : '<p>Hello Macbook Air</p>'
	}
});