angular.module('catalogApp')
    .controller('fullListController', ['tasks', function (tasks) {

        var vm = this;
        vm.tasks = tasks;
        console.log(tasks);
        //vm.childCompanies= tasks.childCompanies;

        vm.getEarnings = function (earnings) {
            const result = earnings + " K$";
            return result.toString();
        }
//console.log(tasks);
        vm.getChildren = function (childCompanies) {
            //console.log(childCompanies.earnings);
            return childCompanies ? childCompanies.name : '-';
        }


        


}]);
