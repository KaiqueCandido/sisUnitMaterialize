app = angular.module('app');
app.service('coordenadorService', function($http, $state, $rootScope, configValue) {	

	this.salvar = function(coordenador) {
		$rootScope.pageLoading = true;
		return $http.post(configValue.baseUrl + '/coordenador', coordenador);
	};

	this.excluir = function(coordenador) {
		$rootScope.pageLoading = true;
		return $http.post(configValue.baseUrl + '/coordenador', coordenador);
	};
	
	this.atualizar = function(coordenador) {
		$rootScope.pageLoading = true;
		return $http.put(configValue.baseUrl + '/coordenador', coordenador);
	};

	this.pesquisar = function(coordenador) {
		$rootScope.pageLoading = true;
		return $http.get(configValue.baseUrl + '/coordenador', coordenador);
	};
	
	this.listar = function() {
		$rootScope.pageLoading = true;
		return $http.get(configValue.baseUrl + '/coordenador', coordenador);
	};

});