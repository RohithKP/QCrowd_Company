angular.module('QCrowdCompany').factory('profDataFactory', function($resource) {
  return $resource('./assets/json/professional.json', {});
});
