// create a schema
var userModel = {
  name: "",
  email: ""
};

var app = angular.module('mainApp',[]);
var testMike;
var guestList = [];
var selectedIds = [];

//adminCtrl.$inject = ['scope', '$http'];
function adminCtrl($scope, $http) {
    $scope.vm = this;
    this.testMike = "wutt";
    var initGuestList = $http.get('../api/guest');   
        initGuestList.then(function(data) {
                $scope.guestList = data.data;
        });

    this.addGuest = function(){
        $http.post('../api/guest',this.userModel).then(function(data) {
                $scope.guestList = data.data;
        });
        alert("name:" + this.userModel.name +" email:" + this.userModel.email);
    };

    this.toggleSelection = function(guest){
        if($scope.selectedIds){
            $scope.selectedIds.push(guest);
        }else{
            $scope.selectedIds = [guest];
        }
        
        alert("id selected:" + $scope.selectedIds[0].name);
    };
}

//Register controller with module  
app.controller("adminCtrl",adminCtrl); 