var app = angular.module("egApp", ["ngRoute", "ngAnimate", "finance"]);


app.controller("egCtrl", function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});

app.controller("egRepeat", function($scope){
    $scope.nums = ["One", "Two", "Three", "Four"];
});

app.controller('InvoiceController', ['currencyConverter', function(currencyConverter) {
  this.qty = 1;
  this.cost = 2;
  this.inCurr = 'EUR';
  this.currencies = currencyConverter.currencies;

  this.total = function total(outCurr) {
    return currencyConverter.convert(this.qty * this.cost, this.inCurr, outCurr);
  };
  this.pay = function pay() {
    window.alert("Thanks!");
  };
}]);


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

app.config(function($routeProvider){
    $routeProvider
            .when("/dashboard", {
                templateUrl: "dashboard.html"
            })
            .when("/form", {
                templateUrl: "form.html"
            })
            .when("/tables", {
                templateUrl: "tables.html"
            })
            .when("/sidebareg", {
                templateUrl: "sidebareg.html"
            })
            .when("/ngeg", {
                templateUrl: "ngcollection.html"
            })
            .when("/price", {
                templateUrl: "price.html"
            })
            .when("/empdata", {
                templateUrl: "empinfo.jsp"
            });
});

app.controller("egRecords", function($scope, $http){
    $http.get("data/people.json").then(function(response){
        $scope.ppl = response.data.people;
    });
});
