angular.module('QCrowdCompany').controller('asgnTaskCtrl',['$scope','helpers',function ($scope,helpers) {
  $scope.helpers = helpers;
  $scope.steps = {"testCaseId":[{"id":"1","que":"Lorem Ipsum is simply dummy text of the printing and typesetting industry","check":"nsectetur, from a Lorem Ipsum "},{"id":"2","que":"Lornd typesetting industry","check":"nsectetur, from a Lorem Ipsum "},{"id":"3","que":"Lorem Ipsum is simply dummy text of the printing and typesetting industry","check":"nsectetur, from a Lorem Ipsum "},{"id":"4","que":"nsectetur, from a Lorem Ipsum nsectetur, from a Lorem Ipsum ","check":"dummy text of the printing and typesetting indust"}],
                  "testCaseId2":[{"id":"1","que":"specimen book. It has survived not only five centuries, but also","check":"It has survived not only five specimen book. centuries, but also"},{"id":"2","que":"ved not only fi It has survived not only five ","check":"ved not only fi"}],
                  };
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
      message: {
        browsers : ["chrome","firefox","internet-explorer","safari","opera"],
        brarray : [],
        testerOptions:$scope.testerOptions
      }
    }
}]);
