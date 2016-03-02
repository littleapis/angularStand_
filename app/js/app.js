var mainApp = angular.module('mainApp',[]);

mainApp.controller('UserInfoCtrl',['$scope',function($scope){
	$scope.userInfo={
		email:'12312312@qq.com',
		password:123456,
		autoLogin:true
	}
}])