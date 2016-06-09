(function () {
    'use strict';

// Declare app level module which depends on views, and components
    angular.module('incubadoras', [
        "oc.lazyLoad",
        'ngRoute',
        'ngAnimate',
        'angular-storage',
        'angular-jwt',
        'auth0',
        'acUtils',
        'acAnimate',
        'acAutocomplete'
    ]).config(['$routeProvider', 'authProvider', function ($routeProvider, authProvider) {
            //authProvider.init({
            //    domain: 'ac-desarrollos.auth0.com',
            //    clientID: 'su5JUmdUk52EWhfK5xxZJtnw6W3IK9c1',
            //    loginUrl: '/ingreso'
            //});
            $routeProvider.otherwise('/main');

            $routeProvider.when('/main', {
                templateUrl: 'main/main.html',
                controller: 'MainController',
                data: {requiresLogin: false},
                resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load('main/main.js');
                    }]
                }
            });

            $routeProvider.when('/empresas', {
                templateUrl: 'empresas/empresas.html',
                controller: 'EmpresasController',
                data: {requiresLogin: false},
                resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load('empresas/empresas.js');
                    }]
                }
            });

            $routeProvider.when('/inversores', {
                templateUrl: 'inversores/inversores.html',
                controller: 'InversoresController',
                data: {requiresLogin: false},
                resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load('inversores/inversores.js');
                    }]
                }
            });

            $routeProvider.when('/quienessomos', {
                templateUrl: 'quienessomos/quienessomos.html',
                controller: 'QuienessomosController',
                data: {requiresLogin: false},
                resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load('quienessomos/quienessomos.js');
                    }]
                }
            });
        }])
        .controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['$rootScope'];
    function AppCtrl($rootScope) {
        var vm = this;
        vm.hideLoader = true;
        vm.display_menu = true;
        vm.display_header = true;

        ////////// NAVEGACION //////////
        $rootScope.$on('$routeChangeSuccess', function (event, next, current) {
            vm.menu = (next.$$route == undefined) ? current.$$route.originalPath.split('/')[1] : next.$$route.originalPath.split('/')[1];
            vm.sub_menu = next.params.id;
        });
        ////////// NAVEGACION //////////
    }

})();
