app5.controller('gListCtrl', function ($scope) {

    $scope.groceries = [
        {item: "Tomatoes", purchased: false},
        {item: "Potatoes", purchased: false},
        {item: "Bread", purchased: false},
        {item: "Bananas", purchased: false}
    ];

    // Receives the new item entered in the input box and puts
    // it on the end of the array
    $scope.addItem = function (newItem) {
        // Check that the input box has a value
        if (!(newItem === undefined || newItem === "")) {
            $scope.groceries.push({
                item: newItem, purchased: false
            });
            $scope.missingNewItemError = "";
        } else {

            // Show an error if no item was entered
            $scope.missingNewItemError = "Please Enter an Item";
        }
    };
});