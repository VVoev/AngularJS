angular.module('numberFilter', []).filter('isBigger', function(){
    return function(number1,number2){
        return Math.max(number1,number2);
    };
});
