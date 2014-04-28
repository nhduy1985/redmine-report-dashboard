'use strict';

angular
  .module('routes/api', [])
  .config(function ($routeProvider) {
    var prefix = "/api";
    $routeProvider
      .when(prefix + '/', {
        controller: 'ApiCtrl'
      })
      .otherwise({
        redirectTo: prefix + '/'
      });
  });
