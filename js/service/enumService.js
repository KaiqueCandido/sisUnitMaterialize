app = angular.module('app');
app.service('enumService', function() {	
	this.getEstadosCivis = function (){
		var estadosCivis = [
		{nome:"Casado", value: "CASADO"}, 
		{nome: "Solteiro", value: "SOLTEIRO"},
		{nome: "Viúvo", value: "VIUVO"},
		{nome: "Divorciado", value: "DIVORCIADO"},
		];
		return estadosCivis;
	};

	this.getRacas = function (){
		var racas = [
		{nome:"Branca", value: "BRANCA"}, 
		{nome: "Preta", value: "PRETA"},
		{nome: "Parda", value: "PARDA"},
		{nome: "Amarela", value: "AMARELA"},
		{nome: "Indígena", value: "INDIGENA"}, 
		{nome: "Não Declarada", value: "NAODECLARADA"}
		];
		return racas;
	};

	this.getTiposSanguineos = function (){
		var tiposSanguineos = [
		{nome:"A+", value: "PosA"}, 
		{nome: "A-", value: "NegA"},
		{nome: "B+", value: "PosB"},
		{nome: "B-", value: "NegB"},
		{nome: "AB+", value: "PosAB"},
		{nome: "AB-", value: "NegAB"},
		{nome: "O+", value: "PosO"},
		{nome: "O-", value: "NegO"},
		];
		return tiposSanguineos;
	};


});