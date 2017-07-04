angular.module('catalogApp')
/*.filter('startsWithLetter', function () {
    return function (items, letter) {
        let filtered = [];
       
        for (let i in items) {
            let item = items[i];
            if (item._id!==letter.ob_id) {
              filtered.push(item);
             }
        }
        
        return filtered;
    };
})*/
  /*console.log(item.name);
                console.log(letter.name);*/
  
/*   console.log(item.name);
            console.log(item.childCompanies);*/
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