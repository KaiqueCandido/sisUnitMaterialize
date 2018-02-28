var app = angular.module('app')
app.controller('motoristaRotasController', function($scope, $rootScope, $state, rotaService, configValue){

	$rootScope.menuAtual = 'Rotas';

	$rootScope.usuarioLogado = {};
	$rootScope.usuarioLogado.id = 1;

	$scope.rotas = [];

	$scope.carregarRotas = function () {
		rotaService.listarPorMotorista($rootScope.usuarioLogado.id).then(function sucess(response) {
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

	$scope.iniciarRota = function (rota) {

		var pontosDeParada = rota.pontosDeParada;

		var origin = pontosDeParada[0].latitude + "," + pontosDeParada[0].longitude;
		var destination = pontosDeParada[pontosDeParada.length -1].latitude + "," + pontosDeParada[pontosDeParada.length -1].longitude;
		var waypoints = '';

		for (var i = 1; i < (pontosDeParada.length -1); i++) {
			
			waypoints = waypoints + pontosDeParada[i].latitude + "," + pontosDeParada[i].longitude;

			if ((i + 1) < (pontosDeParada.length -1)) {

				waypoints = waypoints + "|";

			}

		}		

		var link = configValue.mapsUrlApi + "/?api=1&origin=" + origin + "&destination=" + destination + "&travelmode=driving&waypoints=" + waypoints;

		window.location = link;

	}

	$scope.carregarRotas();
	iniciarJquery();	

})
