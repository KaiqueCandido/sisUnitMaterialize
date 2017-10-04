app = angular.module('app');
app.service('financeiroService', function($http, $state, $rootScope, configValue) {	

	this.salvar = function(financeiro) {
		$rootScope.pageLoading = true;
		return $http.post(configValue.baseUrl + '/financeiro', financeiro);
	};

	this.excluir = function(financeiro) {
		$rootScope.pageLoading = true;
		return $http.post(configValue.baseUrl + '/financeiro', financeiro);
	};
	
	this.atualizar = function(financeiro) {
		$rootScope.pageLoading = true;
		return $http.put(configValue.baseUrl + '/financeiro', financeiro);
	};

	this.pesquisar = function(financeiro) {
		$rootScope.pageLoading = true;
		return $http.get(configValue.baseUrl + '/financeiro', financeiro);
	};
	
	this.listar = function() {
		$rootScope.pageLoading = true;
		return $http.get(configValue.baseUrl + '/financeiro', financeiro);
	};

});