app5.controller('userCtrl', function ($scope) {

    $scope.user = [{
        fName: "Vlado",
        lName: "Voev",
        street: "Bregalnica 22",
        subscribe: "Subscribe",
        delivery: "Email"
    }];

    $scope.saveUser = function (userInfo) {
        if ($scope.userForm.$valid) {
            $scope.user.push({
                fName: userInfo.fName,
                lName: userInfo.lName,
                street: userInfo.street,
                subscribe: userInfo.subscribe,
                delivery: userInfo.delivery
            });
            console.log('User Saved');
        } else {
            console.log('Error : Couldn\'t Save User');
        }
    }

});
