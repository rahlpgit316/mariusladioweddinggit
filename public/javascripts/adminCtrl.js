
var app = angular.module('mainApp',[]);
var testMike;
function adminCtrl($scope, $http) {
    $scope.vm = this;
    this.testMike = "hey hey";
     $http.get('graph.facebook.com/')
                .success(function(data) {
                        $scope.todos = data;
                })
                .error(function(data) {
                        console.log('Error: ' + data);
                });
}

//Register controller with module  
app.controller("adminCtrl",adminCtrl);  