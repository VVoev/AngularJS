var app12 = angular.module('app12', []);



app12.directive("exDir", function() {
    return {
        transclude: true,

        // ng-transclude defines where the data in the element
        // shows up in the template
        template: "<div><h4>{{moreLorem}}</h4></div><div ng-transclude></div>"
    }

});

app12.controller("mainCtrl", function($scope) {

    $scope.moreLorem = "The Amazing Lorem Story";

});