angular.module('catalogApp')
    .controller('fullListController', ['tasks', function (tasks) {

        var vm = this;
        vm.tasks = tasks;

        vm.getEarnings = function (earnings) {
            const result = earnings.map(ear => (' ' + ear.annualEarnings + "K$"));
            return result.toString();
        }

        vm.getChildren = function (childCompanies) {
            return childCompanies ? childCompanies.name : '-';
        }


        


}]);
