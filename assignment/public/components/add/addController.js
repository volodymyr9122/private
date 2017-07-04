angular.module('catalogApp')
     .controller('addController', ['$state','tasks','addService', function ($state,tasks, addService) {

        var vm = this;
        vm.tasks = tasks;
 
vm.addTask = function($scope){
   
        var task = {
            name: vm.name,
            earnings:vm.earnings,
            childCompanies:vm.childCompanies
        }
       
        addService.addTask(task).then(function(data){
            if(data) {
             $state.go("list", {msg: "Company was added"});    
            }
        })
    }   

}]);


 /*vm.addTask = function($scope){
   
        var task = {
            name: vm.name,
            earnings:vm.earnings
        }
        console.log(task.parentCompany);
        addService.addTask(task).then(function(data){
            if(data) {
             $state.go("list", {msg: "Company was added"});    
            }
        })
    }
*/