var mainApp = angular.module('mainApp',[]);

mainApp.controller('UserInfoCtrl',['$scope',function($scope){
	$scope.userInfo={
		email:'12312312@qq.com',
		password:123456,
		autoLogin:true
	}
	$scope.getFormData = function(){
		console.log($scope.userInfo);
	}
	$scope.setFormData=function(){
		$scope.userInfo={
			email:'760788722@qq.com',
			password:"damoqiongqiu",
			autoLogin:false
		}
	}
	$scope.resetFormData=function(){
		$scope.userInfo={
			email:'',
			password:"",
			autoLogin:false
		}
	}
}])