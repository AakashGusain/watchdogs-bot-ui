var mainApp = angular.module("mainApp", ["ngRoute"]);


// Setting website routes
mainApp.config(function ($routeProvider) {
    $routeProvider
        .when('/user-registration', {
            templateUrl: 'components/userRegistration.html',
            controller: 'UserRegistrationController'
        })
        .when('/expense-list', {
            templateUrl: 'components/expense-list.html',
            controller: 'ExpenseController'
        })
        .otherwise({
            templateUrl: 'components/landing.html'
        })
});

// User Registration Controller
mainApp.controller('UserRegistrationController', function ($scope) {
    Telegram.WebApp.ready();
    Telegram.WebApp.MainButton.setText('Submit').show().onClick(function () {
        Telegram.WebApp.sendData(JSON.stringify($scope.user));
        Telegram.WebApp.close();
    });
})

// Expense Controller
mainApp.controller('ExpenseController', function ($scope) {
    Telegram.WebApp.ready();
    console.log(Telegram.WebApp.initDataUnsafe)
})

