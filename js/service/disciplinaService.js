app = angular.module('app');
app.service('disciplinaService', function($http, $state, $rootScope, configValue) {	

	this.salvar = function(disciplina) {
		$rootScope.pageLoading = true;
		return $http.post(configValue.baseUrl + '/disciplina', disciplina);
	};

	this.excluir = function(disciplina) {
		$rootScope.pageLoading = true;
		return $http.post(configValue.baseUrl + '/disciplina/remove', disciplina);
	};

	this.ativar = function(disciplina) {
		$rootScope.pageLoading = true;
		disciplina.statusDoCadastro = 'ATIVO';
		console.log(disciplina);
		return $http.put(configValue.baseUrl + '/disciplina', disciplina);
	};
	
	this.atualizar = function(disciplina) {
		$rootScope.pageLoading = true;
		return $http.put(configValue.baseUrl + '/disciplina', disciplina);
	};

	this.pesquisar = function(disciplina) {
		$rootScope.pageLoading = true;
		return $http.get(configValue.baseUrl + '/disciplina', disciplina);
	};
	
	this.listar = function() {
		$rootScope.pageLoading = true;
		return $http.get(configValue.baseUrl + '/disciplina');
	};

});