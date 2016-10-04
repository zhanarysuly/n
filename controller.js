var nurmash = angular.module('nurmash', []);

var IndexCtrl = function ( $scope ) {
    $scope.step = "login";

    $scope.selectStep = function ( step ) {
        $scope.step = step;
    }
};

nurmash.controller('IndexCtrl', IndexCtrl);
