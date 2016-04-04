angular.module('QCrowdCompany',['ui.router','ngAnimate','ngResource','ui.bootstrap','angularUtils.directives.uiBreadcrumbs']).config(function ($stateProvider,$urlRouterProvider) {
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
  .state('dashboard', {
    url: '/dashboard',
    views:{
      '':{templateUrl: 'partials/home.html'},
      'mainView@dashboard':{templateUrl:'partials/dashboard.html', controller:'dashBoardCtrl'}
    },
    data: {
    displayName: 'Home'
  },
  resolve: {
        projects: function(dataFactory){
            return dataFactory.projects.query();
          }
        }
  })
  .state('dashboard.proflist', {
    url: '^/professionals',
    views:{
      'mainView@dashboard':{templateUrl:'partials/professionals.list.html', controller:'profListCtrl'}
    },
    data: {
    displayName: 'List Of professionals'
  },
  resolve: {
        professionals: function(dataFactory){
            return dataFactory.professionals.query();
          }
        }
  })
  .state('dashboard.asgnTask', {
    url: '^/asgnTask/:key',
    views:{
      'mainView@dashboard':{templateUrl:'partials/asgnTask.html', controller:'asgnTaskCtrl'}
    },
    data: {
    displayName: 'Assign Task'
  },
  resolve: {
        steps: function(dataFactory){
            return dataFactory.steps.query();
          }
        }
  })
});

angular.module("QCrowdCompany").run(function ($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams) {
  });
});
