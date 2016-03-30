angular.module('QCrowdCompany').controller('addProfInstCtrl', function ($scope, $uibModalInstance,message) {
  $scope.proceed = function () {
    $uibModalInstance.close();
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
  $scope.rolesOptions = message.rolesOptions;
  $scope.skillsOptions = message.skillsOptions;
  $scope.skilltypesOptions = message.skilltypesOptions;
});
