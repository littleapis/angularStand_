var bookStoreCtrls = angular.module('bookStoreCtrls',[])

bookStoreCtrls.controller('helloCtrl',['$scope',
    function($scope){
        $scope.greeting = {
            text:"Hello"
        }
    }
]);

bookStoreCtrls.controller('bookListCtrl',['$scope',
    function($scope){
        $scope.books = [
            {title:'<EXT����>',author:"ct"},
            {title:'<EXT����>',author:"ct"},
            {title:'<EXT����>',author:"ct"}
        ]
    }
]);