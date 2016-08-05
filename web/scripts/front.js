var app = angular.module("egApp", ["ngRoute", "ngAnimate"]);

app.config(function($routeProvider){
    $routeProvider
            .when("/", {
                templateUrl: "fptemp.html"
            })
            .when("/angulareg", {
                templateUrl: "angularegs.html"
            })
                    .otherwise("/");
});

app.controller("egCtrl", function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});

app.controller("egRepeat", function($scope){
    $scope.nums = ["One", "Two", "Three", "Four"];
});

app.controller("egFilter", function($scope){
    $scope.egname = "originallyCamelCaseText";
    $scope.numarray = ["one", "two", "three", "four", "five"];
    
    $scope.ordinals = [
        {nums: 1, cardinal:"one", ordinal:"first"},
        {nums: 2, cardinal:"two", ordinal:"second"},
        {nums: 3, cardinal:"three", ordinal:"third"},
        {nums: 4, cardinal:"four", ordinal:"fourth"},
        {nums: 5, cardinal:"five", ordinal:"fifth"}
    ];
    
    $scope.orderNum = function(x) {
        $scope.numOrder = x;
    }
});


app.directive("egNewTag", function(){
    return {
        template: "<strong>Template content from eg-new-tag.</scrong>"
    };
});

app.controller("egRecords", function($scope, $http){
    $http.get("data/people.json").then(function(response){
        $scope.ppl = response.data.people;
    });
});
