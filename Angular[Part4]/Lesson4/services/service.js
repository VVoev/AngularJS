// Creates a simple service that provides a method
// we can use in other controllers, directives and
// filters. Services unlike factories don't return
// anything, but instead provide access to a
// single object that can be used by your entire
// application
app13.service('HelloService', function(){
    this.helloService = function() {
        console.log('Hello Service');
    };
});