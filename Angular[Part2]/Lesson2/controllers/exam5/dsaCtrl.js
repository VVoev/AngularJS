app5.controller('dsaCtrl', function ($scope) {

    $scope.marks = [
        {mark: "VeryBad"},
        {mark: "Neutral"},
        {mark: "VeryGood"}
    ]

    $scope.addMark = function (mark) {

        if (mark !== undefined || mark === null) {
            $scope.marks.push(mark);
        } else {
            $scope.missingMark = "Please enter a value";
        }
    }
});
