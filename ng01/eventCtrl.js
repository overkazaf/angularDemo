var app = angular.module('jApp', []);
app.controller('EvtController', EvtController);


function EvtController($scope) {
    $scope.count = 0;
    $scope.$on('incEvent', function() {
        $scope.count++;
    });
}
