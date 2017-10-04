app = angular.module('app');
app.service('cursoService', function($http, $state, $rootScope, configValue) {	

	this.salvar = function(curso) {
		$rootScope.pageLoading = true;
		return $http.post(configValue.baseUrl + '/curso', curso);
	};

	this.excluir = function(curso) {
		$rootScope.pageLoading = true;
		return $http.post(configValue.baseUrl + '/curso/remove', curso);
	};

	this.ativar = function(curso) {
		$rootScope.pageLoading = true;
		curso.statusDoCadastro = 'ATIVO';		
		return $http.put(configValue.baseUrl + '/curso', curso);
	};
	
	this.atualizar = function(curso) {
		$rootScope.pageLoading = true;
		return $http.put(configValue.baseUrl + '/curso', curso);
	};

	this.pesquisar = function(curso) {
		$rootScope.pageLoading = true;
		return $http.get(configValue.baseUrl + '/curso', curso);
	};
	
	this.listar = function() {
		$rootScope.pageLoading = true;
		return $http.get(configValue.baseUrl + '/curso');
	};

});