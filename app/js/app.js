var mainApp = angular.module('mainApp',['ngRoute','bookStoreCtrls']);

mainApp.config(function($routeProvider){
    $routeProvider.when('/hello',function(){
        templateUrl: 'tpls/hello.html';
        controller : 'helloCtrl';
    }).when('/list',function(){
        templateUrl: 'tpls/bookList.html';
        controller : 'bookListCtrl';
    }).otherwise({
        redirectTo:'/hello'
    })
});
