angular.module('QCrowdCompany').controller('tskInstanceCtrl',['$scope', '$uibModalInstance','helpers','message',function ($scope, $uibModalInstance,helpers,message) {
  $scope.proceed = function () {
    $uibModalInstance.close();
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
  $scope.helpers = helpers;
  $scope.browsers = message.browsers;
  $scope.brarray = message.brarray;
  $scope.testerOptions = message.testerOptions;
}]);
