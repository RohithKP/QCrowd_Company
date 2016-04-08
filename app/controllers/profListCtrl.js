angular.module('QCrowdCompany').controller('profListCtrl',['$scope','helpers','professionals',function ($scope,helpers,professionals) {
$scope.helpers = helpers;

$scope.roles=['Role*','Role1','Role2'];
$scope.skills=['Skill Select','Skill1','skill2'];
$scope.skilltypes=['Skill Type','Type1','Type2'];

$scope.profarr = [];
$scope.rolesOptions =   {
  options:    $scope.roles,
  selected:   $scope.roles[0]
};
$scope.skillsOptions =   {
  options:    $scope.skills,
  selected:   $scope.skills[0]
};
$scope.skilltypesOptions =   {
  options:    $scope.skilltypes,
  selected:   $scope.skilltypes[0]
};

$scope.addProfResolver = {
       message: function () {
                return {
                rolesOptions:$scope.rolesOptions,
                skillsOptions:$scope.skillsOptions,
                skilltypesOptions:$scope.skilltypesOptions
                }
              }
  }
  professionals.$promise.then(
    function (data) {
      $scope.professionals =  data;
    },function () {}
  );
  $scope.viewby = {
  options: [5,10,25,50,100],
  selected: 5
};
 $scope.currentPage = 1;
}]);
