angular.module('catalogApp')
    .factory('editService', ['$http', function($http) {
        return {
            getTaskById : function(taskId) {
                return $http.get('/companies/' + taskId)
                    .then((response)=>{
                    console.log(response.data);
                        return response.data;
                    },
                    function(response){
                        console.log('Server error');
                    });
            },
            editTask : function(task) {
                return $http.put('/companies/' + task.id, task)
                    .then((response)=>{
                        return response.data;
                    },
                    function(response){
                        console.log('Server error');
                    });
            },
            deleteTask : function(taskId) {
                return $http.delete('/companies/' + taskId)
                    .then((response)=>{
                        return response.data;
                    },
                    function(response){
                        console.log('Server error');
                    });
            }
        };
    
}]);