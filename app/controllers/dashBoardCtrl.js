
angular.module('QCrowdCompany').controller('dashBoardCtrl',['$scope','helpers','$window','$document','$log','dataFactory',function ($scope,helpers,$window,$document,$log,dataFactory) {
  $scope.projects =dataFactory.projects.query();
  $scope.alertMe = function() {
    setTimeout(function() {
      $window.alert('You\'ve selected the alert tab!');
    });
  };
  $scope.query = {projectQuery:'',userQuery:'',statusQuery:'',browserQuery:''};

  $scope.filterStatus = function($event,txt){
    $event.stopPropagation();
    $scope.query.statusQuery =txt;
  }
  $scope.query.browsers = ['firefox','chrome','safari','opera'];
  $scope.platforms = ['platforms','windows 10','windows 8','iOS 8','ubuntu'];
  $scope.model = {
    name: 'Tabs'
  };
  $scope.brarray = [];
  $scope.helpers = helpers;

  $scope.modalOpen = helpers.modalOpen;
  $scope.projectsSelected= [];

  $scope.addSelected = function (id) {
    if($scope.projectsSelected[0]!=id){
      $scope.projectsSelected= [];
      $scope.projectsSelected.push(id);
    }else {
      $scope.projectsSelected= [];
    }
  }
  $scope.platformOptions =   {
    options:    $scope.platforms,
    selected:   'platforms'
  };
  $scope.assgnTskResolver={
    message: {
      browsers : ["chrome","firefox","internet-explorer","safari","opera"],
      brarray : [],
      platformOptions:$scope.platformOptions
    }
  }
  $scope.viewby = {
    options: [
      10,
      25,
      50,
      100
    ],
    selected: 10
  };
   $scope.currentPage = 1;
}]);
