// Pass the service into the controller to
// access its method
app13.controller('mainCtrl', function(HelloService, HelloFactory) {
    HelloService.helloService();
    HelloFactory.helloFactory();
});