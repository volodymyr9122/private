angular.module('catalogApp')
    .controller('editController', ['$state','editService', function ($state, editService) {
    
    var vm = this;
    var taskId = null;
        
    editService.getTaskById($state.params.id).then(function(data){
            if(data) {
                taskId = data._id;
                vm.name = data.name,
                vm.earnings= data.earnings.map((element)=>element.annualEarnings)
            }
        });
    
    vm.editTask = function(){
        var task = {
            id: taskId,
            name: vm.name,
            earnings:[{
                annualEarnings:vm.earnings
            }]
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
            if( childCompanies){
            vm.childCompanies  = data.childCompanies.name;
            }
        }
        editService.deleteTask(taskId).then(function(data){
            if(data) {
             $state.go("list", {msg: "Company was deleted"});    
            }
        });
    }
}]);