var app = angular.module('app');
app.factory('requestFilter', function ($q, $state, $rootScope) {
  return{        
    response: function (response) {           
      /*if ((response.status === -1) || (response.status === 204)){
        $state.go('notFound');
      } */
      return response;    
    },
    responseError: function (rejection) {      
      /*if ((rejection.status === -1) || (rejection.status === 204)){
        $rootScope.pageLoading = false;
        $state.go('notFound');
      } */
      return $q.reject(rejection);
    }
  };
});
