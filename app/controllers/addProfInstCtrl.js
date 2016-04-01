angular.module('QCrowdCompany').controller('addProfInstCtrl', function ($scope, $uibModalInstance,message) {
  $scope.proceed = function() {
    $scope.$broadcast('show-errors-check-validity');
    if ($scope.profAddForm.$valid) {
      $scope.register ={ name: '', email: '', contact : '', description: '' };
      $uibModalInstance.close();
    }
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
  $scope.rolesOptions = message.rolesOptions;
  $scope.skillsOptions = message.skillsOptions;
  $scope.skilltypesOptions = message.skilltypesOptions;
});
