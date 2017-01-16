
var app = angular.module('mainApp',[]);
var testMike;
function adminCtrl($scope, $http) {
    $scope.vm = this;
    this.testMike = "hey hey";
}

//Register controller with module  
app.controller("adminCtrl",adminCtrl);  