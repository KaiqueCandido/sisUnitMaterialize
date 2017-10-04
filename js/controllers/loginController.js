var app = angular.module('app')


app.controller('loginController', function($scope, $state, $http, loginService){	
	
	$scope.autenticacao = function (login) {  	
    $state.go('homeGestor');
   /*loginService.login(login).then(function sucess(response) {
    var headers = response.headers();       
    if (headers.pessoatype === 'gestor') {
      console.log('Gestor')
    } else if (headers.pessoatype === 'rofessor') {
      console.log('Professor')
    } else {
      console.log('Aluno')
    }
    console.log('Gestor')
    
  }, function error(response) {
    console.log(response);
  });*/
 };  	

 $scope.goToAluno = function () {   
   $state.go('homeAluno');
 };

 $scope.goAreRestrita = function () {  	
   $state.go('loginDesenvolvedor');
 };

 $scope.goToProfessor = function () {  	
   $state.go('homeProfessor');
 };  	

});