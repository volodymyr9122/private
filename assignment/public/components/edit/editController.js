angular.module('catalogApp')
    .controller('editController', ['$state','editService','tasks', function ($state, editService,tasks) {
    
    var vm = this;
    var taskId = null;
     vm.tasks = tasks;    
      console.log(tasks); 
 
        
    editService.getTaskById($state.params.id).then(function(data){
            if(data) {
                taskId = data._id;
                vm.ob_id = data._id,
                vm.name = data.name,
                vm.earnings = data.earnings,
                vm.childCompanies = data.childCompanies
            }
        });
    
    vm.editTask = function(){
        var task = {
            id: taskId,
            name: vm.name,
            earnings:vm.earnings,
            childCompanies:vm.childCompanies
        }
     editService.editTask(task).then(function(data){
            if(data){
             $state.go("list", {msg: "Company was corrected"});    
            }
        });
    },
    
    vm.deleteTask = function(){
        var task = {
            id: taskId,
            name : vm.name,
            earnings:vm.earnings,
           childCompanies:vm.childCompanies
        }
        editService.deleteTask(taskId).then(function(data){
            if(data) {
             $state.go("list", {msg: "Company was deleted"});    
            }
        });
    }
}]);