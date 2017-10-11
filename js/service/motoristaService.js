app = angular.module('app');
app.service('motoristaService', function($http, $rootScope, configValue) {	

	this.salvar = function(motorista) {
		$rootScope.pageLoading = true;
		return $http.post(configValue.baseUrl + '/motorista', motorista);
	};

	this.excluir = function(motorista) {
		$rootScope.pageLoading = true;
		return $http.post(configValue.baseUrl + '/motorista/remove', motorista);
	};
	
	this.ativar = function(motorista) {
		$rootScope.pageLoading = true;
		motorista.statusDoCadastro = 'ATIVO';		
		return $http.put(configValue.baseUrl + '/motorista', motorista);
	};
	
	this.atualizar = function(motorista) {
		$rootScope.pageLoading = true;
		return $http.put(configValue.baseUrl + '/motorista', motorista);
	};

	this.pesquisarPorId = function(idmotorista) {
		$rootScope.pageLoading = true;
		return $http.get(configValue.baseUrl + '/motorista/' + idmotorista);
	};
	
	this.listar = function() {
		$rootScope.pageLoading = true;
		return $http.get(configValue.baseUrl + '/motorista');
	};

});