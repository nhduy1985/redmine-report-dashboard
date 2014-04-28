'use strict';

angular.module('redmineReportDashboardApp')
.factory('RedmineClient', ['$resource', function($resource) {
	return $resource('/api/flows/:id', { id: '@id' }, {
		'update': { method: 'PUT' }
	});
}]);
