alchemistAdmin.controller('ChannelStatsController', function($scope, $rootScope, $filter, ChannelService, ChannelCategoryService, ChannelStatusService, NetworkService)
{
	console.log("Channel Stats Controller Loaded");
	
	
	$scope.channelStatuses = [];
	$scope.channelCategories = [];
	$scope.channelStatus = {};
	$scope.channelCategory = {};
	$scope.submittedupdate = false;
	
	$scope.channelCodes = []; 
	$scope.channels = [];
	$scope.networks = [];
	$scope.network = {};
	
	$scope.search = {};
	$scope.searchData = {};
	$scope.searchChannel = {};
	
	$scope.options = {
		chart: {
			type: 'pieChart',
			height: 500,
			x: function(d){return d.key + "("+d.y+")";},
			y: function(d){return d.y;},
			showLabels: true,
			duration: 500,
			labelThreshold: 0.01,
			labelSunbeamLayout: true,
			legend: {
				margin: {
					top: 5,
					right: 35,
					bottom: 5,
					left: 0
				}
			}
		}
	
	};
	
	$scope.data = [];
	$scope.init = function() {
		
		$scope.channels = [];
		$scope.networks = [];
		$scope.network = {};
		
		$scope.channelStatuses = [];
		$scope.channelCategories = [];
		$scope.channelStatus = {};
		$scope.channelCategory = {};
		$scope.submittedupdate = false;
		
		
		$scope.networks = [];
		
		$scope.submittedupdate = false;
		
		$scope.searchData = {};
		
		$scope.data = [];
		
		$scope.initData();
		
	};
	
	
	$scope.initData = function() {
		// Fetch channel data
		$scope.fetchStats();
		
		// Fetch channel statuses
		$scope.fetchChannelStatuses();
		
		// Fetch channel categories
		$scope.fetchChannelCategories();
		
		// Fetch networks
		$scope.fetchNetworks();
	}
	/**
	 * Fetch all the channel statuses
	 * 
	 */
	$scope.fetchChannelStatuses = function() {
		ChannelStatusService.list(function(data){
			console.log("In Fetch channel statuses");
			$scope.channelStatuses = data;
			$scope.channelStatus = $scope.channelStatuses[0];
		},function(data, status){
			console.log("In Error..!!");
		},function(data, status){
			cosole.log("In forbidden..!!");
		});
	};
	
	/**
	 * Fetch all the channel categories
	 * 
	 */
	$scope.fetchChannelCategories = function() {
		ChannelCategoryService.list(function(data){
			console.log("In Fetch channel statuses");
			$scope.channelCategories = data;
			$scope.channelCategory = $scope.channelCategories[0];
		},function(data, status){
			console.log("In Error..!!");
		},function(data, status){
			cosole.log("In forbidden..!!");
		});
	};
	
	/**
	 * Search, Sort, Pagination of channels
	 * 
	 */
	$scope.fetchStats = function() {
		
		ChannelService.fetchCounts(function(data) {
			// Loop through the map and set the data
			for(var key in data) {
				var obj = {};
				obj["key"] = key;
				obj["y"] = data[key];
				$scope.data.push(obj);
			}
		},function(data, status){
			console.log("In Error..!!");
		},function(data, status){
			cosole.log("In forbidden..!!");
		});
	}
	
	/**
	 * Date picker
	 * 
	 */
	$scope.opened = [];
	$scope.openDatePicker = function($event, index) {
    	$event.preventDefault();
    	$event.stopPropagation();
    	console.log("In Date picker");
    	$scope.opened[index] = true;
	};
	
	/**
	 * Fetching networks
	 * 
	 */
	$scope.fetchNetworks = function() {
		NetworkService.list(function(data){
			console.log("In Fetch Network");
			$scope.networks = data;
			$scope.network = $scope.networks[0];
		},function(data, status){
			console.log("In Error..!!");
		},function(data, status){
			cosole.log("In forbidden..!!");
		});
	};
	
	/**
	 * Fetch channel list
	 */
	$scope.fetchList = function() {
		console.log("Fetching Channel List");
		
		
		var code = "";
		if($scope.searchChannel.networkCode != undefined) {
			code = $scope.searchChannel.networkCode.code;
		}
		var startDatePost = $filter('date')($scope.search.startDate, 'dd/MM/yyyy');
		var endDatePost = $filter('date')($scope.search.endDate, 'dd/MM/yyyy')

		ChannelService.fetchList(code, startDatePost, endDatePost, function(data) {
			//$scope.networkCodes = data;
			$scope.data = [];
			for(var key in data) {
				var obj = {};
				obj["key"] = key;
				obj["y"] = data[key];
				$scope.data.push(obj);
			}
		}, function(data, status) {
			console.log("In error for fetching event list");
		}, function(data, status) {
			console.log("In forbidden for fetching event list");
		});
	}
});