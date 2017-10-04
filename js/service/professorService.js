app = angular.module('app');
app.service('professorService', function($http, $state, $rootScope, configValue) {	

	this.salvar = function(professor) {
		$rootScope.pageLoading = true;
		return $http.post(configValue.baseUrl + '/professor', professor);
	};

	this.excluir = function(professor) {
		$rootScope.pageLoading = true;
		return $http.post(configValue.baseUrl + '/professor', professor);
	};
	
	this.atualizar = function(professor) {
		$rootScope.pageLoading = true;
		return $http.put(configValue.baseUrl + '/professor', professor);
	};

	this.pesquisar = function(professor) {
		$rootScope.pageLoading = true;
		return $http.get(configValue.baseUrl + '/professor', professor);
	};
	
	this.listar = function() {
		$rootScope.pageLoading = true;
		return $http.get(configValue.baseUrl + '/professor', professor);
	};

});