app1.controller('ctrl1', function($scope) {

    // Define initial values
    $scope.first = 1;
    $scope.second = 1;
    $scope.fibFirst = 0;
    $scope.fibSecond = 0;

    // Change the value for calculation when the button is clicked
    // I used a shortcut using the unary plus operator to convert
    // the string number values which are then added
    $scope.updateValue = function() {
        $scope.calculation = $scope.first + ' + ' + $scope.second +
            " = " + (+$scope.first + +$scope.second);
    };

    $scope.CalculateFib = function () {
        $scope.result = ($scope.fibFirst*3  +$scope.fibSecond*3)
    }
});
