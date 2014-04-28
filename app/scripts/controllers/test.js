'use strict';

angular.module('redmineReportDashboardApp')
.controller('TestCtrl', ['$scope','RedmineClient', function ($scope,RedmineClient) {
	RedmineClient.update();
	$scope.lineChartOption = {
		data: [
			{ y: '2006', a: 100, b: 90 },
			{ y: '2007', a: 75,  b: 65 },
			{ y: '2008', a: 50,  b: 40 },
			{ y: '2009', a: 75,  b: 65 },
			{ y: '2010', a: 50,  b: 40 },
			{ y: '2011', a: 75,  b: 65 },
			{ y: '2012', a: 100, b: 90 }
		],
		xkey: 'y',
		ykeys: ['a', 'b'],
		labels: ['Series A', 'Series B']
	};
}]);
