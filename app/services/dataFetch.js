angular.module('QCrowdCompany').factory('dataFactory',['$resource',function($resource) {
  return{
    professionals: $resource('./assets/json/professional.json', {}),
    projects : $resource('./assets/json/projects.json', {}),
    steps : $resource('./assets/json/steps.json',{},{ query: {method:'GET', isArray: false}})
  };
}]);
