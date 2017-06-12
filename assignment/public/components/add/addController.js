angular.module('catalogApp')
    .controller('addController', ['$state','addService', function ($state, addService,taskListService) {
    
    var vm = this;
 
    vm.addTask = function($scope){
   
        var task = {
            name: vm.name,
            earnings:[{
                annualEarnings: vm.earnings.annualEarnings
            }],
        }
        console.log(task.parentCompany);
        addService.addTask(task).then(function(data){
            if(data) {
             $state.go("list", {msg: "Company was added"});    
            }
        })
    }
    
     
}]);
