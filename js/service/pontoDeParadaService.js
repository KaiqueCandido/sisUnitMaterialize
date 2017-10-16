app = angular.module('app');
app.service('pontoDeParadaService', function($http, $state, $rootScope, configValue) {					
	
	this.salvar = function(pontoDeParada) {
		$rootScope.pageLoading = true;
		return $http.post(configValue.baseUrl + '/pontodeparada', pontoDeParada);
	}

	this.excluir = function(pontodeparada) {
		$rootScope.pageLoading = true;
		return $http.post(configValue.baseUrl + '/pontodeparada/remove/' +  pontodeparada.id);
	}	
	this.atualizar = function(pontoDeParada) {
		$rootScope.pageLoading = true;
		return $http.put(configValue.baseUrl + '/pontodeparada', pontoDeParada);
	}

	this.pesquisar = function(idPontoDeParada) {
		$rootScope.pageLoading = true;
		return $http.get(configValue.baseUrl + '/pontodeparada/' + idPontoDeParada);
	}

	this.listar = function() {
		$rootScope.pageLoading = true;
		return $http.get(configValue.baseUrl + '/pontodeparada');
	}
});