angular.module('QCrowdCompany').controller('profListCtrl',['$scope','helpers','dataFactory',function ($scope,helpers,dataFactory) {
$scope.helpers = helpers;
$scope.professionals = [{"id":"1","name":"Aron Swartz","email_id":"Aron@abcd.com"},{"id":"2","name":"Aron Swartz","email_id":"Aron@abcd.com"},{"id":"3","name":"Aron Swartz","email_id":"Aron@abcd.com"},{"id":"4","name":"Aron Swartz","email_id":"Aron@abcd.com"},
{"id":"5","name":"Aron Swartz","email_id":"Aron@abcd.com"},{"id":"6","name":"Aron Swartz","email_id":"Aron@abcd.com"},{"id":"7","name":"Aron Swartz","email_id":"Aron@abcd.com"},{"id":"8","name":"Aron Swartz","email_id":"Aron@abcd.com"},{"id":"9","name":"Aron Swartz","email_id":"Aron@abcd.com"}];

$scope.roles=['Role*','Role1','Role2'];
$scope.skills=['Skill Select*','Skill1','skill2'];
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
  $scope.professionals = dataFactory.professionals.query();
  $scope.viewby = {
  options: [10,25,50,100],
  selected: 10
};
 $scope.currentPage = 1;
}]);
