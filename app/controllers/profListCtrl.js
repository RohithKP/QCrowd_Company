angular.module('QCrowdCompany').controller('profListCtrl',['$scope','dataFactory',function ($scope,dataFactory) {
  $scope.professionals = dataFactory.professionals.query();
  $scope.viewby = {
  options: [10,25,50,100],
  selected: 10
};
 $scope.currentPage = 1;
}]);
