var app = angular.module('app');
app.controller('rotasController', function ($scope, $rootScope, $state, rotaService, enumService) {
	$scope.selecionada = true;
	$scope.rotaSelecionadaInativa = true;
	$scope.rotaSelecionada = {};
	$scope.rotas = [];
	$scope.statusDasEntidades = 'ATIVO';
	$scope.rota = {};
	$scope.rota.cronograma = {};
	
	// Enums
	$scope.diasDaSemana = [];
	$scope.turnos = [];

	$scope.carregarRotas = function () {
		rotaService.listar().then(function sucess(response) {
			$rootScope.pageLoading = false;
			if(response.data.length > 0) {
				$scope.rotas = response.data;				
			} else {
				Materialize.toast('Não foi encontrado registros de rotas', 5000, 'rounded toasts-warning');
			}
		}, function error() {
			$rootScope.pageLoading = false;
			Materialize.toast('Não foi possivel carregar as rotas', 5000, 'rounded toasts-error');
		});
	};

	$scope.prepararDadosParaCadastro = function () {
		$scope.carregarDiasDaSemana();
		$scope.carregarTurnos();
		$scope.atualizarSelects();
	};

	$scope.carregarDiasDaSemana = function () {
		enumService.diasDaSemana().then(function sucess (response) {
			$rootScope.pageLoading = false;
			if(response.data.length > 0) {
				$scope.diasDaSemana = response.data;				
			} else {
				Materialize.toast('Não foi encontrado registros de dias da semana', 5000, 'rounded toasts-warning');
			}
		}, function error () {
			$rootScope.pageLoading = false;
			Materialize.toast('Não foi possivel carregar os dias da semana', 5000, 'rounded toasts-warning');			
		});
	};

	$scope.carregarTurnos = function () {
		enumService.turnos().then(function sucess (response) {
			$rootScope.pageLoading = false;
			if(response.data.length > 0) {
				$scope.turnos = response.data;				
			} else {
				Materialize.toast('Não foi encontrado registros de turnos', 5000, 'rounded toasts-warning');
			}
		}, function error () {
			$rootScope.pageLoading = false;
			Materialize.toast('Não foi possivel carregar os turnos', 5000, 'rounded toasts-warning');			
		});
	};

	$scope.selecionaRota = function(rota) {
		if(rota.selecionada === 'grey') {
			rota.selecionada = 'none';
			$scope.selecionada = true;
			$scope.rotaSelecionadaInativa = true;
		} else {
			if (rota.statusDoCadastro === 'ATIVO'){
				$scope.limpaSelecoes();
				rota.selecionada = 'grey';
				$scope.selecionada = false;			
				$scope.rotaSelecionado = rota;
			} else {
				$scope.limpaSelecoes();
				rota.selecionada = 'grey';
				$scope.rotaSelecionado = rota;
				$scope.rotaSelecionadaInativa = false;
			}
		}
	};

	$scope.alternaStatusDasEntidades = function(){
		$scope.statusDasEntidades === 'ATIVO' ? $scope.statusDasEntidades = 'INATIVO' : $scope.statusDasEntidades = 'ATIVO';
		$scope.selecionada = true;
		$scope.rotaSelecionadaInativa = true;
		$scope.limpaSelecoes();
	}

	$scope.limpaSelecoes = function(){
		$scope.rotas.forEach(function(rota){
			rota.selecionada = 'none';
		});
	};	

	$scope.atualizarSelects = function(){
		setTimeout(function (){
			$('select').material_select();
		}, 500);
	};

	$scope.carregarRotas();
	iniciarJquery();

});