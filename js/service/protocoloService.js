app = angular.module('app');
app.service('protocoloService', function($http, $state, $rootScope, configValue) {	

	this.salvar = function(protocolo) {
		$rootScope.pageLoading = true;
		return $http.post(configValue.baseUrl + '/protocolo', protocolo);
	};

	this.excluir = function(protocolo) {
		$rootScope.pageLoading = true;
		return $http.post(configValue.baseUrl + '/protocolo', protocolo);
	};
	
	this.atualizar = function(protocolo) {
		$rootScope.pageLoading = true;
		return $http.put(configValue.baseUrl + '/protocolo', protocolo);
	};

	this.pesquisar = function(protocolo) {
		$rootScope.pageLoading = true;
		return $http.get(configValue.baseUrl + '/protocolo', protocolo);
	};
	
	this.listar = function() {
		$rootScope.pageLoading = true;
		return $http.get(configValue.baseUrl + '/protocolo', protocolo);
	};

});