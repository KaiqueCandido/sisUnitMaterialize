app = angular.module('app');
app.service('cidadeService', function($http, $rootScope, configValue) {					
	
	this.listarPorEstado = function(idEstado) {
		$rootScope.pageLoading = true;
		return $http.get(configValue.baseUrl + '/cidade/' + idEstado);
	};

});