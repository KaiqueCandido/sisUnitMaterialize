var app = angular.module('app');
app.config(function ($httpProvider) {
  $httpProvider.interceptors.push('requestFilter');
});
