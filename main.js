var mainApp = angular.module("mainApp", ["ngRoute"]);


// Setting website routes
mainApp.config(function($routeProvider) {
    $routeProvider
        .when('/userRegistration',{
            templateUrl: 'userRegistration.html',
			controller: 'UserRegistrationController'
        })
        .when('/expenses',{
            templateUrl: 'expenses.html'
        })
        .otherwise({
            redirectTo: '/userRegistration'
        })
});

// User Registration Controller
mainApp.controller('UserRegistrationController', function($scope) {
    Telegram.WebApp.ready();
    Telegram.WebApp.MainButton.setText('Submit').show().onClick(function () {
        Telegram.WebApp.sendData(JSON.stringify($scope.user));
        Telegram.WebApp.close();
    });
})
