
// Create a factory that creates an object, adds
// a method to it and returns that object

app13.factory('HelloFactory', function(){
    var factory = {};

    factory.helloFactory = function(){
        console.log('Hello Factory');
    };

    return factory;

});