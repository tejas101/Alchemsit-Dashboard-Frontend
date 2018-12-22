/*******************************************************************************
 *All rights reserved.
 ******************************************************************************/

var alchemistAdmin = angular.module('alchemistAdmin', ['ngRoute', 'ui.filters', 'mwl.confirm', 'ui.bootstrap', 'nvd3','LocalStorageModule','ngTouch', 'ui.grid', 'ui.grid.selection', 'ui.grid.resizeColumns', 'ui.grid.moveColumns', 'ui.grid.pagination', 'ngAnimate']);

/**
 * App Config Block
 */
alchemistAdmin.config(['$routeProvider', '$httpProvider', 'localStorageServiceProvider', function($routeProvider, $httpProvider, localStorageServiceProvider) {
    console.log("Starting Alchemist Admin config. Mapping the URLs to the controllers and the templates");

    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    console.log($httpProvider.defaults.headers);
    $httpProvider.defaults.headers.common["Content-Type"] = 'application/json';
    $httpProvider.defaults.headers.common["Accept"] = 'application/json';
    
    // Local Storage Configuration
	localStorageServiceProvider.setPrefix('alchemistAdmin');
	localStorageServiceProvider.setStorageType('localStorage');
    
    $routeProvider
		    .when('/dashboard', {
                controller: 'DashboardController',
                templateUrl: 'admin/resources/views/dashboard.html'
            })
            .when('/channels', {
            	controller: 'ChannelController',
            	templateUrl: 'admin/resources/views/channel.html'
            })
            .when('/channel-stats', {
            	controller: 'ChannelStatsController',
            	templateUrl: 'admin/resources/views/channel-stats.html'
            })
            .when('/details', {
            	controller: 'DetailsController',
            	templateUrl: 'admin/resources/views/details.html'
            })
            .when('/testGrid', {
            	controller: 'TestGridController',
            	templateUrl: 'admin/resources/views/testGrid.html'
            })
            .when('/', {
            	controller: 'LoginController',
            	templateUrl: 'admin/resources/views/login.html'
            });
    return alchemistAdmin;
}]);

/**
 * App Run Blocks
 * 
 */
alchemistAdmin.run(function($route, $rootScope, localStorageService) {
	
});

/**
 * Root controller for generic tasks
 */
alchemistAdmin.controller('RootController', function($scope, $rootScope, $location) {
	console.log("Root Controller Loaded");
	$scope.isNavActive = function (viewLocation) { 
		
        return viewLocation === $location.path();
        
    };
    
    $scope.isSubNavActive = function (viewLocationArray) {
    	return $rootScope.containsInHaystack($location.path(), viewLocationArray);
    };
    
    $rootScope.containsInHaystack = function(needle, haystack) {
    	for(var i in haystack) {
    		if(needle == haystack[i]) {
    			return true;
    		}
    	}
    	return false;
    };
    
});