angular.module('catalogApp', ['ui.router']).
config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/list');
    
    $stateProvider
         .state('list', {
            url: '/list',
            params: { msg: null },
            views: {
                '': { 
                    templateUrl: 'partials/list/list.html',
                    controllerAs: "lst",
                    controller: 'listController'
                },
                'columnOne@list': { 
                    templateUrl: 'partials/list/full-list.html',
                    controllerAs: "fl",
                    controller: 'fullListController'
                },
                
                'columnTwo@list': { 
                    templateUrl: 'partials/list/categoryTree.html',
                    controllerAs: "fl",
                    controller: 'fullListController'
                }
            },
            resolve: {
                tasks: ['taskListService', function (taskListService) {
                    return taskListService.getTaskList();
                }]
            }
            
        })
    
        .state('add', {
            url: '/add',
            templateUrl: 'partials/add/add.html',
            controllerAs: "add",
            controller: 'addController',
            resolve: {
                tasks: ['taskListService', function (taskListService) {
                    return taskListService.getTaskList();
                }]
            }})
    
        .state('edit', {
            url: '/edit/:id',
            templateUrl: 'partials/edit/edit.html',
            controllerAs: "edit",
            controller: 'editController',
            resolve: {
                tasks: ['taskListService', function (taskListService) {
                    return taskListService.getTaskList();
                }]
            }})




});