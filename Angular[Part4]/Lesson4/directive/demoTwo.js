app14.directive("getPlayerInfo", function($compile) {
    return function(scope, element, attrs){

        // The template
        var playerList = "<ul><li ng-repeat='player in players'>{{player.name}}</li></ul>";

        // Wrap it in a jqLite object
        var listElem = angular.element(playerList);

        // Create the compile function which
        // generates are HTML
        var compileFunc = $compile(listElem);

        // Process our content
        compileFunc(scope);

        // Update our jqLite object and add it to the
        // document
        element.append(listElem);

    }
});