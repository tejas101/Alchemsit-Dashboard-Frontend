alchemistAdmin.controller('LoginController', function($scope, $rootScope, $routeParams, $window, $location, LoginService, localStorageService, ChannelService)
{													  	
	console.log('Login Controller loaded');
	
	$scope.init = function() {
		console.log("Login Controller init function invoked");
		
		$scope.errors = [];
		$scope.userLogin = {};
		localStorageService.remove('authData');
		localStorageService.remove('userData');
		
	};
	
	$scope.login = function(){
		var credentials = {};
		var username = $scope.userLogin.userName;
		var password = $scope.userLogin.password;
		console.log("uname :"+ username);
		console.log("password :"+ password);
		//$scope.userLogin.grant_type = "password";
		LoginService.login(username, password, function(data) {
			
			$location.path('/dashboard');
			
		},
		function(data, status) {
			if (status === 400){
				console.log("In error for Bad  Credentials");
				$scope.errors.push("Invalid Login due to Bad  Credentials...!!!");
			}
		});
	};
	
	
});