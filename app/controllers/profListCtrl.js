angular.module('QCrowdCompany').controller('profListCtrl',['$scope','profDataFactory',function ($scope,profDataFactory) {
  $scope.professionals = profDataFactory.query();
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
