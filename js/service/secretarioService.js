app = angular.module('app');
app.service('secretarioService', function($http, $state, $rootScope, configValue) {	

	this.salvar = function(secretario) {
		$rootScope.pageLoading = true;
		return $http.post(configValue.baseUrl + '/secretario', secretario);
	};

	this.excluir = function(secretario) {
		$rootScope.pageLoading = true;
		return $http.post(configValue.baseUrl + '/secretario', secretario);
	};
	
	this.atualizar = function(secretario) {
		$rootScope.pageLoading = true;
		return $http.put(configValue.baseUrl + '/secretario', secretario);
	};

	this.pesquisar = function(secretario) {
		$rootScope.pageLoading = true;
		return $http.get(configValue.baseUrl + '/secretario', secretario);
	};
	
	this.listar = function() {
		$rootScope.pageLoading = true;
		return $http.get(configValue.baseUrl + '/secretario', secretario);
	};

});