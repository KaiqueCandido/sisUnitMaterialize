var app = angular.module('app');
app.controller('passageirosController', function ($scope, $rootScope, $state, enumService, passageiroService, estadoService, cidadeService, cepService) {
	$scope.selecionado = true;
	$scope.passageiroSelecionadoInativo = true;
	$scope.passageiroSelecionado = {};
	$scope.passageiros = [];			
	$scope.statusDasEntidades = 'ATIVO';
	$scope.passageiro = {};
	$scope.passageiro.documentosPessoais = {};
	$scope.passageiro.contato = {};
	$scope.passageiro.endereco = {};
	$scope.passageiro.endereco.estado = {};
	$scope.passageiro.endereco.cidade = {};
	$scope.passageiro.contas = [] ;
	
	$scope.contaPassageiro = {};

	// Enums
	$scope.sexos = [];
	$scope.tiposDeZona = [];

	$scope.estados = [];
	$scope.permissoes = [];

	$scope.carregarPassageiros = function () {
		passageiroService.listar().then(function sucess(response) {
			$rootScope.pageLoading = false;
			if(response.data.length > 0) {
				$scope.passageiros = [];			
				$scope.passageiros = response.data;			
			} else {
				Materialize.toast('Não foi encontrado registros de passageiro', 5000, 'rounded toasts-warning');
			}
		}, function error() {
			$rootScope.pageLoading = false;
			Materialize.toast('Não foi possivel carregar os passageiro', 5000, 'rounded toasts-error');
			
		});
	}
	
	$scope.prepararDados = function () {
		$scope.carregarSexosEnums();
		$scope.carregarEstados();
		$scope.carregarTiposDeZonaEnums();		
		$scope.atualizarSelects();
		Materialize.updateTextFields();
	};

	$scope.carregarSexosEnums = function () {
		enumService.sexos().then(function sucess(response) {
			$rootScope.pageLoading = false;			
			if(response.data.length > 0) {				
				$scope.sexos = response.data;			
			} else {				
				Materialize.toast('Não foi encontrado os sexos', 5000, 'rounded toasts-warning');
			}
		}, function error() {
			$rootScope.pageLoading = false;
			Materialize.toast('Não foi possivel carregar os sexos', 5000, 'rounded toasts-error');			
		});		
	};

	$('#sexo').change(function(){
		$scope.passageiro.sexo = $(this).val();		
	});
	
	$scope.carregarEstados = function () {
		estadoService.listar().then(function sucess(response) {
			$rootScope.pageLoading = false;
			if(response.data.length > 0) {
				$scope.estados = response.data;			
			} else {
				Materialize.toast('Não foi encontrado os estados', 5000, 'rounded toasts-warning');
			}
		}, function error() {
			$rootScope.pageLoading = false;
			Materialize.toast('Não foi possivel carregar os sexos', 5000, 'rounded toasts-error');			
		});		
	};

	$('#estado').change(function(){
		$scope.passageiro.documentosPessoais.estadoDeEmissaoDoRg = angular.fromJson($(this).val());				
	});

	$scope.carregarTiposDeZonaEnums = function () {
		enumService.tiposDeZona().then(function sucess(response) {
			$rootScope.pageLoading = false;
			if(response.data.length > 0) {
				$scope.tiposDeZona = response.data;			
			} else {
				Materialize.toast('Não foi encontrado os tipos de zona', 5000, 'rounded toasts-warning');
			}
		}, function error() {
			$rootScope.pageLoading = false;
			Materialize.toast('Não foi possivel carregar os tipos de zona', 5000, 'rounded toasts-error');			
		});		
	};

	$('#tipoDeZona').change(function(){
		$scope.passageiro.endereco.tipoDeZona = $(this).val();
	});		

	$scope.salvarPassageiro = function () {		
		passageiroService.salvar($scope.passageiro).then(function sucess(response) {
			$rootScope.pageLoading = false;
			Materialize.toast('Passageiro cadastrado com sucesso', 5000, 'rounded toasts-sucess');
			delete $scope.passageiro;
			$scope.carregarPassageiros();
		}, function error() {
			$rootScope.pageLoading = false;
			Materialize.toast('Não foi possivel cadastrar o passageiro', 5000, 'rounded toasts-error');
		});
	};

	$scope.confirmarAtualizacaoDePassageiro = function () {	
		$('#modalConfirmacaoEdicaoDePassageiro').modal('open'); 
	};

	$scope.editarPassageiro = function () {	
		passageiroService.atualizar($scope.passageiroSelecionado).then(function sucess(response) {
			$rootScope.pageLoading = false;
			Materialize.toast('Passageiro atualizado com sucesso', 5000, 'rounded toasts-sucess');
			delete $scope.passageiroSelecionado;
			$scope.carregarPassageiros();
			$('#modalConfirmacaoEdicaoDePassageiro').modal('close'); 
			$('#modalEditarPassageiro').modal('close'); 
		}, function error() {
			$rootScope.pageLoading = false;
			Materialize.toast('Não foi possivel atualizar o passageiro', 5000, 'rounded toasts-error');
		});
	};

	$scope.inativarPassageiro = function () {	
		passageiroService.inativar($scope.passageiroSelecionado).then(function sucess(response) {
			$rootScope.pageLoading = false;
			Materialize.toast('O status do passageiro foi modificado para INATIVO', 5000, 'rounded toasts-sucess');
			delete $scope.passageiroSelecionado;
			$scope.carregarPassageiros();
			$('#modalConfirmacaoExclusaoDePassageiro').modal('close'); 
		}, function error() {
			$rootScope.pageLoading = false;
			Materialize.toast('Não foi possivel atualizar o passageiro', 5000, 'rounded toasts-error');
		});
	};

	$scope.ativarPassageiro = function () {	
		passageiroService.ativar($scope.passageiroSelecionado).then(function sucess(response) {
			$rootScope.pageLoading = false;
			Materialize.toast('O status do passageiro foi modificado para ATIVO', 5000, 'rounded toasts-sucess');
			delete $scope.passageiroSelecionado;
			$scope.carregarPassageiros();
			$('#modalConfirmacaoAtivacaoDePassageiro').modal('close'); 
		}, function error() {
			$rootScope.pageLoading = false;
			Materialize.toast('Não foi possivel ativar o passageiro', 5000, 'rounded toasts-error');
		});
	};

	$scope.pesquisaEstadoECidade = function (cep) {
		cepService.buscarEstadoECidade(cep).then(function sucess(response) {			
			if(typeof response.data.erro === 'undefined') {				
				cidadeService.pesquisarPorCodIbge(response.data.ibge).then(function sucess(response) {
					$rootScope.pageLoading = false;	
					$scope.passageiro.endereco.cidade = response.data;
				}, function error() {
					$rootScope.pageLoading = false;
					Materialize.toast('Não foi possivel encontrar a cidade para o cep informado', 5000, 'rounded toasts-error');
				});

				$scope.estados.forEach(function (estado) {
					if(estado.uf === response.data.uf){						
						$scope.passageiro.endereco.estado = estado;				
					}
				});
			} else {				
				$rootScope.pageLoading = false;	
				Materialize.toast('O cep informado não existe na base de dados!', 5000, 'rounded toasts-error');
				delete $scope.passageiro.endereco.estado;
				delete $scope.passageiro.endereco.cidade;			
			};			
		}, function error() {
			$rootScope.pageLoading = false;
			Materialize.toast('O cep informado é invalido!', 5000, 'rounded toasts-error');
			delete $scope.passageiro.endereco.estado;
			delete $scope.passageiro.endereco.cidade;			
		});	
};

$scope.selecionaPassageiro = function(passageiro) {
	if(passageiro.selecionado === 'grey') {
		passageiro.selecionado = 'none';
		$scope.selecionado = true;
		$scope.passageiroSelecionadoInativo = true;
	} else {
		if (passageiro.conta.statusDoCadastro === 'ATIVO'){
			$scope.limpaSelecoes();
			passageiro.selecionado = 'grey';
			$scope.selecionado = false;			
			$scope.passageiroSelecionado = passageiro;
		} else {
			$scope.limpaSelecoes();
			passageiro.selecionado = 'grey';
			$scope.passageiroSelecionado = passageiro;
			$scope.passageiroSelecionadoInativo = false;
		}
	}
};

$scope.alternaStatusDasEntidades = function(){
	$scope.statusDasEntidades === 'ATIVO' ? $scope.statusDasEntidades = 'INATIVO' : $scope.statusDasEntidades = 'ATIVO';
	$scope.selecionado = true;
	$scope.passageiroSelecionadoInativo = true;
	$scope.limpaSelecoes();
}

$scope.limpaSelecoes = function(){
	$scope.passageiros.forEach(function(passageiro){
		passageiro.selecionado = 'none';
	});
};	

$scope.atualizarSelects = function(){
	setTimeout(function (){
		$('select').material_select();
	}, 500);
};

$scope.carregarPassageiros();
iniciarJquery();

});