app = angular.module('app');
app.service('rotaService', function($http, $state, $rootScope, configValue) {					
	
	this.salvar = function(rota) {
		$rootScope.pageLoading = true;
		return $http.post(configValue.baseUrl + '/rota', rota);
	};

	this.excluir = function(rota) {
		$rootScope.pageLoading = true;
		return $http.post(configValue.baseUrl + '/rota/remove/' +  rota.id);
	};

	this.atualizar = function(rota) {
		$rootScope.pageLoading = true;
		return $http.put(configValue.baseUrl + '/rota', rota);
	};

	this.pesquisarPorId = function(idRota) {
		$rootScope.pageLoading = true;
		return $http.get(configValue.baseUrl + '/rota/' + idRota);
	};

	this.listar = function() {
		$rootScope.pageLoading = true;
		return $http.get(configValue.baseUrl + '/rota');
	};

	this.inativar = function(rota) {
		$rootScope.pageLoading = true;
		rota.statusDoCadastro = 'INATIVO';
		return $http.put(configValue.baseUrl + '/rota', rota);
	};
	
	this.ativar = function(rota) {
		$rootScope.pageLoading = true;
		rota.statusDoCadastro = 'ATIVO';		
		return $http.put(configValue.baseUrl + '/rota', rota);
	};
});