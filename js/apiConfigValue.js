var app = angular.module('app');
app.value("configValue", {
    baseUrl: "http://localhost:8080/SisUniT_Server/ws",
    cepUrl: "https://viacep.com.br/ws/"
});