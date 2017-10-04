app = angular.module('app');
app.service('instituicaoService', function($http, $state, $rootScope, configValue) {	

	this.salvar = function(instituicao) {
		$rootScope.pageLoading = true;
		return $http.post(configValue.baseUrl + '/instituicao', instituicao);
	};

	this.excluir = function(instituicao) {
		$rootScope.pageLoading = true;
		return $http.post(configValue.baseUrl + '/instituicao/remove', instituicao);
	};

	this.ativar = function(instituicao) {
		$rootScope.pageLoading = true;
		instituicao.statusDoCadastro = 'ATIVO';		
		return $http.put(configValue.baseUrl + '/instituicao', instituicao);
	};
	
	this.atualizar = function(instituicao) {
		$rootScope.pageLoading = true;
		return $http.put(configValue.baseUrl + '/instituicao', instituicao);
	};

	this.pesquisar = function(instituicao) {
		$rootScope.pageLoading = true;
		return $http.get(configValue.baseUrl + '/instituicao', instituicao);
	};
	
	this.listar = function() {
		$rootScope.pageLoading = true;
		return $http.get(configValue.baseUrl + '/instituicao');
	};

});