app = angular.module('app');
app.service('alunoService', function($http, $state, $rootScope, configValue) {	

	this.salvar = function(aluno) {
		$rootScope.pageLoading = true;
		return $http.post(configValue.baseUrl + '/aluno', aluno);
	};

	this.excluir = function(aluno) {
		$rootScope.pageLoading = true;
		return $http.post(configValue.baseUrl + '/aluno/remove', aluno);
	};
	
	this.ativar = function(aluno) {
		$rootScope.pageLoading = true;
		aluno.statusDoCadastro = 'ATIVO';		
		return $http.put(configValue.baseUrl + '/aluno', aluno);
	};
	
	this.atualizar = function(aluno) {
		$rootScope.pageLoading = true;
		return $http.put(configValue.baseUrl + '/aluno', aluno);
	};

	this.pesquisar = function(aluno) {
		$rootScope.pageLoading = true;
		return $http.get(configValue.baseUrl + '/aluno', aluno);
	};
	
	this.listar = function() {
		$rootScope.pageLoading = true;
		return $http.get(configValue.baseUrl + '/aluno');
	};

});