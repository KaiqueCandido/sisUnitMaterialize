var app = angular.module('app');
app.controller('veiculosController', function ($scope, $rootScope, $state, veiculoService, estadoService, cidadeService) {
	$scope.selecionado = true;
	$scope.veiculoSelecionadoInativo = true;
	$scope.veiculoSelecionado = {};
	$scope.veiculos = [];			
	$scope.statusDasEntidades = 'ATIVO';
	$scope.veiculo = {};
	$scope.veiculo.estado = {};
	$scope.veiculo.cidade = {};		
	$scope.estados = [];
	$scope.cidades = [];

	/*Listar veiculos do banco banco*/
	$scope.listarVeiculos = function() {		
		veiculoService.listar().then(function sucess(response) {
			$rootScope.pageLoading = false;
			if(response.data.length > 0) {
				$scope.statusDasEntidades = 'ATIVO';
				$scope.veiculos = response.data;		
			} else {				
				Materialize.toast('Nenhum registro encontrado!', 5000, 'rounded toasts-warning');
			}			
		}, function error() {
			$rootScope.pageLoading = false;
			Materialize.toast('Erro de comunicação com o servidor, por favor tente novamente!', 5000, 'rounded toasts-error');
		});
	};

	$scope.carregarDadosParaCadastro = function () {
		estadoService.listar().then(function sucess(response) {
			$rootScope.pageLoading = false;
			if(response.data.length > 0) {					
				$scope.estados = response.data;					
				$scope.atualizarSelects();
			} else {				
				Materialize.toast('Não foi encontrado nenhum registros de estados!', 5000, 'rounded toasts-warning');
			}			
		}, function error() {
			$rootScope.pageLoading = false;
			Materialize.toast('Erro de comunicação com o servidor, por favor tente novamente!', 5000, 'rounded toasts-error');
		});
	};

	$("#estado").change(function(){
		var estado = angular.fromJson($(this).val());
		cidadeService.listarPorEstado(estado.id).then(function sucess(response) {
			$rootScope.pageLoading = false;
			if(response.data.length > 0) {
				$scope.cidades = response.data;
				$scope.atualizarSelects();
			} else {
				Materialize.toast('Não foi encontrado nenhuma cidade para o estado selecionado!', 5000, 'rounded toasts-warning');
			}
		});
		
	});
	

	$scope.selecionaVeiculo = function(veiculo) {
		if(veiculo.selecionado === 'grey') {
			veiculo.selecionado = 'none';
			$scope.selecionado = true;
			$scope.veiculoSelecionadoInativo = true;
		} else {
			if (veiculo.statusDoCadastro === 'ATIVO'){
				$scope.limpaSelecoes();
				veiculo.selecionado = 'grey';
				$scope.selecionado = false;			
				$scope.veiculoSelecionado = veiculo;
			} else {
				$scope.limpaSelecoes();
				veiculo.selecionado = 'grey';
				$scope.veiculoSelecionado = veiculo;
				$scope.veiculoSelecionadoInativo = false;
			}
		}
	};

	$scope.limpaSelecoes = function(){
		$scope.veiculos.forEach(function(veiculo){
			veiculo.selecionado = 'none';
		});
	};	

	$scope.atualizarSelects = function(){
		setTimeout(function (){
			$('select').material_select();
		}, 500);
	};	

	iniciarJquery();
	$scope.listarVeiculos();

});