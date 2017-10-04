app = angular.module('app');
app.service('controleAcademicoService', function($http, $state,  $rootScope, configValue) {	

	this.salvar = function(controleAcademico) {
		$rootScope.pageLoading = true;
		return $http.post(configValue.baseUrl + '/controleAcademico', controleAcademico);
	};

	this.excluir = function(controleAcademico) {
		$rootScope.pageLoading = true;
		return $http.post(configValue.baseUrl + '/controleAcademico', controleAcademico);
	};
	
	this.atualizar = function(controleAcademico) {
		$rootScope.pageLoading = true;
		return $http.put(configValue.baseUrl + '/controleAcademico', controleAcademico);
	};

	this.pesquisar = function(controleAcademico) {
		$rootScope.pageLoading = true;
		return $http.get(configValue.baseUrl + '/controleAcademico', controleAcademico);
	};
	
	this.listar = function() {
		$rootScope.pageLoading = true;
		return $http.get(configValue.baseUrl + '/controleAcademico', controleAcademico);
	};

});