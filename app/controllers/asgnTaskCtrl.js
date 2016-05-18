angular.module('QCrowdCompany').controller('asgnTaskCtrl',['$scope','helpers','$stateParams','steps',function ($scope,helpers,$stateParams,steps) {
  $scope.helpers = helpers;
  steps.$promise.then(
    function (data) {
      $scope.steps =  data;
    },function () {}
  );
    $scope.selected = 0;

    $scope.select= function(index) {
       $scope.selected = index;
    };
    $scope.testers = ['Tester Name','Rohith','Dan','diaz','koya'];
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
              testCaseName:$stateParams.key
        }
      }
    }
}]);
