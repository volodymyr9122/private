angular.module('catalogApp')
    .factory('taskListService', ['$http',function($http) {
    
        return {
            getTaskList : function() {
                return $http.get('/companies')
                    .then((response)=>{
                        return response.data;
                    },
                    function(response){
                        console.log('Same error');
                    });
            }
        };
    
}]);