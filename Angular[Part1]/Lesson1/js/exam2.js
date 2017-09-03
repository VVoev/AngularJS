var app2 = angular.module('app2', []);

app2.controller('ctrl1', function ($scope) {

    $scope.randomNum1 = Math.floor((Math.random() * 10) + 1);
    $scope.randomNum2 = Math.floor((Math.random() * 10) + 1);

});

// Define multiple controllers
app2.controller('badCtrl', function ($scope) {
    var badFeelings = ["Disregarded", "Unimportant", "Rejected", "Powerless"];

    $scope.bad = badFeelings[Math.floor((Math.random() * 4))];
});

app2.controller('goodCtrl', function ($scope) {
    var goodFeelings = ["Pleasure", "Awesome", "Lovable", "Inner Peace"];

    $scope.good = goodFeelings[Math.floor((Math.random() * 4))];
});

app2.controller('TelCtrl', function ($scope) {
    var myChangesToPassDsa = ["Awful", "NoChanse", "50:50", "six-five"];

    $scope.dsa = myChangesToPassDsa[Math.floor((Math.random() * 4))]

    var calculatePercent = 100/Math.random(1,10)/10;
    $scope.percent = calculatePercent.toFixed(0);
})


