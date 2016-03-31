
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
  $scope.testers = ['Tester Name','Rohith','Dan','diaz','koya'];
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
  $scope.testerOptions =   {
    options:    $scope.testers,
    selected:    $scope.testers[0]
  };
  $scope.assgnTskResolver={
    message: {
      browsers : ["chrome","firefox","internet-explorer","safari","opera"],
      brarray : [],
      testerOptions:$scope.testerOptions
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
