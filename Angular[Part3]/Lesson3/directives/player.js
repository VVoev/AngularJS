app11.directive("player", function() {

    // Create a directive object
    var directive = {};

    // Define that we are using an element directive instead of
    // a A: attribute, C: class, or M: comment
    // I covered how to apply as an attribute previously
    // I normally only apply as elements or attributes because
    // it is easy to figure out where the directive was applied.
    directive.restrict = 'E';

    // The template is filled with the data and replaces the element
    directive.template = "{{player.name}} had a {{player.avg}} AVG with {{player.hr}} homeruns and a {{player.obp}} OBP";

    // Scope defines what is unique about each element
    directive.scope = { player: "=name" };

    // compile is called during the initialization phase
    directive.compile = function(element, attributes){

        // The link function receives the scope, the element The
        // directive is associated with and that elements
        // attributes. Here we can handle events on that element
        var linkFunc = function($scope, element, attributes){
            element.bind('click', function() {
                element.html('Barry disappeared');
            });
        }
        return linkFunc;
    }
    return directive;
});