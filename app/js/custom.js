angular.module('QCrowdCompany',['ui.router','ngAnimate','ngResource','ui.bootstrap']).config(function ($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');

  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'partials/login.html',
    controller: 'validationCtrl'
  })
  .state('register', {
    url: '/register',
    templateUrl: 'partials/register.html',
    controller: 'validationCtrl'
  })
  .state('proflist', {
    url: '/professionals',
    templateUrl: 'partials/professionals.list.html',
    controller: 'profListCtrl'
  })
  .state('dashboard', {
    url: '/dashboard',
    templateUrl: 'partials/dashboard.html',
    controller: 'dashBoardCtrl'
  })
  .state('asgnTask', {
    url: '/asgnTask',
    templateUrl: 'partials/asgnTask.html',
    controller: 'asgnTaskCtrl'
  })

});
