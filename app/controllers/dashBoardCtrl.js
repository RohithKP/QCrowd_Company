
angular.module('QCrowdCompany').controller('dashBoardCtrl',['$scope','helpers','$window','$document','$log','projects',function ($scope,helpers,$window,$document,$log,projects) {
  projects.$promise.then(
    function (data) {
      $scope.projects =  data;
    },function () {}
  );

 $scope.tcName = undefined;
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

  $scope.addSelected = function (id,tname) {
    if($scope.projectsSelected[0]!=id){
      $scope.projectsSelected= [];
      $scope.projectsSelected.push(id);
    }else {
      $scope.projectsSelected= [];
    }
    $scope.tcName=tname;
  }
  $scope.testerOptions =   {
    options:    $scope.testers,
    selected:    $scope.testers[0]
  };
  $scope.assgnTskResolver={
    message: function () {
          return {
            browsers : ["chrome","firefox","internet-explorer","safari","opera"],
            brarray : [],
            testerOptions:$scope.testerOptions,
            testCaseName:$scope.tcName
          }
    }
  }
  $scope.viewby = {
    options: [10,25,50,100],
    selected: 10
  };
   $scope.currentPage = 1;
   $scope.platformOptions = {
   options: ['platform','windows 10','windows 8','iOS 8','ubuntu'],
   selected: 'platform'
  };
}]);
