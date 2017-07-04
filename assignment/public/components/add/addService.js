angular.module('catalogApp')
    .factory('addService', ['$http', function($http) {
        return {
            addTask : function(task) {
                return $http.post('/companies', task)
                    .then((response)=>{
                     console.log('response.data');
                        return response.data;
                    },
                    function(response){
                        console.log('Server error');
                    });
            },

        };
    
}]);