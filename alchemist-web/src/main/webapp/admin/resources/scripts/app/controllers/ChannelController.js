alchemistAdmin.controller('ChannelController', function($scope, $rootScope, ChannelService, uiGridConstants, ChannelStatusService, NetworkService, $modal)
{
	console.log("Channel Controller Loaded");
	
	$scope.channelStatuses = [];
	$scope.channelCategories = [];
	$scope.channelCategory = {};
	$scope.channelStatus = {};
	$scope.submittedupdate = false;
	
	$scope.channels = [];
	$scope.networks = [];
	$scope.network = {};
	
	$scope.searchData = {};
	$scope.searchChannel = {};
	
	// Pagination data
	$scope.totalPages = 0;
	$scope.last = false;
	$scope.first = false;
	$scope.number = 0;
	
	$scope.updateList = [];
	
	
	  var paginationOptions = {
			  pageNumber: 1,
			  pageSize: pagingConstants["channel"]
	  };
	
	  $scope.init = function() {
		  
		$scope.channels = [];
		$scope.networks = [];
		$scope.network = {};
		
		$scope.channelStatuses = [];
		$scope.channelCategories = [];
		$scope.channelCategory = {};
		$scope.channelStatus = {};
		$scope.submittedupdate = false;
		
		// Initialize page number
		$scope.pageNumber = 0;
		
		// Initialize search data
		$scope.searchData = {};
		$scope.searchChannel = {};
		
		$scope.initData();
		
		// Pagination data
		$scope.totalPages = 0;
		$scope.last = false;
		$scope.first = false;
		$scope.number = 0;
		
		$scope.updateList = [];
		
	};
	
	$scope.initData = function() {
		
		// Fetch channel data
		$scope.search('');
		
		// Fetch channel statuses
		$scope.fetchChannelStatuses();
		
		// Fetch networks
		$scope.fetchNetworks();
		    
	}
	
	$scope.highlightFilteredHeader = function( row, rowRenderIndex, col, colRenderIndex ) {
	    if( col.filters[0].term ){
	      return 'header-filtered';
	    } else {
	      return '';
	    }
	  };
	 
	$scope.gridOptions = {
			
			enableSorting: true,
			useExternalSorting: true,
			multiSelect: true,
		    enableRowSelection: true,
		    enableSelectAll: true,
		    selectionRowHeaderWidth: 35,
		    rowHeight: 35,
		    //showGridFooter:true,
		    
		    enableFiltering: true,
		    onRegisterApi: function(gridApi){
		      $scope.gridApi = gridApi;
		    },
		    
		    paginationPageSizes: [pagingConstants["channel"]],
		    paginationPageSize: pagingConstants["channel"],
		    useExternalPagination: true,

		    
			columnDefs: [{ field: 'id', visible: false},
			             { field: 'youtubeId', displayName: 'Youtube ID', headerTooltip: "Youtube ID",
		         			cellTemplate:'<div>' +
		         			'<a href="https://www.youtube.com/channel/{{COL_FIELD }}" target="_blank">{{COL_FIELD }}</a>' +
                 			'</div>', headerCellClass: $scope.highlightFilteredHeader},
	                     { field: 'name', displayName: 'Name', headerTooltip: "Name", headerCellClass: $scope.highlightFilteredHeader,
             				cellTemplate: "<a ng-click=\"grid.appScope.viewChannelDetail(grid.appScope.gridOptions.data[grid.renderContainers.body.visibleRowCache.indexOf(row)])\">{{COL_FIELD}}</a>"},
	                     { field: 'fullName', displayName: 'Full Name', headerTooltip: "Full Name", headerCellClass: $scope.highlightFilteredHeader},
	                     { field: 'email', displayName: 'Email', headerTooltip: "Email", headerCellClass: $scope.highlightFilteredHeader},
	                     { field: 'recruiterCode', displayName: 'Recruiter', headerTooltip: "Recruiter", headerCellClass: $scope.highlightFilteredHeader},
	                     { field: 'statusCode', displayName: 'Status', headerTooltip: "Status Code", headerCellClass: $scope.highlightFilteredHeader, 
	                    	 cellTemplate: "<a ng-click=\"grid.appScope.viewStatusHistory(grid.appScope.gridOptions.data[grid.renderContainers.body.visibleRowCache.indexOf(row)].statusUpdateHistoryList)\">{{COL_FIELD}}</a>"},
	                     { field: 'communityGuidelines', displayName: 'Community Guideline', cellTemplate: "<div style=\"text-align: center;\">" +
	                   		"<i class=\"fa fa-check\" style=\"color: green;\" ng-if=\"grid.getCellValue(row, col) === true\" />" +
	                   		"<i class=\"fa fa-times\" style=\"color: red;\" ng-if=\"grid.getCellValue(row, col) === false\" />" +
	                   		"<i class=\"fa fa-exclamation\" style=\"color: orange;\" ng-if=\"grid.getCellValue(row, col) === null\" />" +
	                   		"</div>", headerTooltip: "Community Guidelines", width:50, enableFiltering: false},
	                   	 { field: 'contentIdStanding', displayName: 'Content ID Standing', cellTemplate: "<div style=\"text-align: center;\">" +
	                   		"<i class=\"fa fa-check\" style=\"color: green;\" ng-if=\"grid.getCellValue(row, col) === true\" />" +
	                   		"<i class=\"fa fa-times\" style=\"color: red;\" ng-if=\"grid.getCellValue(row, col) === false\" />" +
	                   		"<i class=\"fa fa-exclamation\" style=\"color: orange;\" ng-if=\"grid.getCellValue(row, col) === null\" />" +
                   			"</div>", headerTooltip: "Content ID Standing", width:50, enableFiltering: false},
                   		 { field: 'copyrightStanding', displayName: 'Copyright Standing', cellTemplate: "<div style=\"text-align: center;\">" +
    	                   	"<i class=\"fa fa-check\" style=\"color: green;\" ng-if=\"grid.getCellValue(row, col) === true\" />" +
    	                   	"<i class=\"fa fa-times\" style=\"color: red;\" ng-if=\"grid.getCellValue(row, col) === false\" />" +
    	                   	"<i class=\"fa fa-exclamation\" style=\"color: orange;\" ng-if=\"grid.getCellValue(row, col) === null\" />" +
                       		"</div>", headerTooltip: "Copyright Standings", width:50, enableFiltering: false},
                   		 { field: 'overallGoodStanding', displayName: 'Overall Good Standing', cellTemplate: "<div style=\"text-align: center;\">" +
    	                   	"<i class=\"fa fa-check\" style=\"color: green;\" ng-if=\"grid.getCellValue(row, col) === true\" />" +
    	                   	"<i class=\"fa fa-times\" style=\"color: red;\" ng-if=\"grid.getCellValue(row, col) === false\" />" +
    	                   	"<i class=\"fa fa-exclamation\" style=\"color: orange;\" ng-if=\"grid.getCellValue(row, col) === null\" />" +
                       		"</div>", headerTooltip: "Overall Good Standing", width:50, enableFiltering: false},
                   		 { field: 'created', displayName: 'Created Date', headerTooltip: "Created Date",cellFilter: 'date:\'dd-MM-yyyy\'', width:90, enableFiltering: false}],
		  onRegisterApi: function( gridApi ) {
			  $scope.gridApi = gridApi;
			  
			  // Multi Select
			  $scope.gridApi.selection.on.rowSelectionChanged($scope,function(row){
				  console.log($scope.gridApi.selection.getSelectedRows());
			  });
			  
			  $scope.gridApi.selection.on.rowSelectionChangedBatch($scope,function(rows){
				  console.log($scope.gridApi.selection.getSelectedRows());
			  });
			  
			  // Sort
			  $scope.gridApi.core.on.sortChanged( $scope, $scope.sortChanged );
			  $scope.sortChanged($scope.gridApi.grid, [ $scope.gridOptions.columnDefs[1] ] );
			  
			  console.log($scope.gridApi);
			  $scope.gridApi.pagination.on.paginationChanged($scope, function (newPage, pageSize) {
				  paginationOptions.pageNumber = newPage;
				  paginationOptions.pageSize = pageSize;
				  $scope.search(paginationOptions.pageNumber);
			  });
			    
		  }
		
		
	  };
	 
	$scope.gridOptions.enableHorizontalScrollbar = uiGridConstants.scrollbars.NEVER;
	//$scope.gridOptions.enableVerticalScrollbar = uiGridConstants.scrollbars.NEVER;
  
	
	/**
	 * To calculate dynamic height 
	 * 
	 */
	/*$scope.getTableHeight = function() {
	       var rowHeight = 30; // your row height
	       var headerHeight = 100; // your header height
	       var newHeight = $scope.gridOptions.data.length * rowHeight + headerHeight ;
	       return {
	          height: (newHeight) + "px"
	       };
	};*/
	
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
	 * Search, Sort, Pagination of channels
	 * 
	 */
	$scope.search = function(pageNo) {
		
		if(pageNo == '') {
			//$scope.pageNumber = 0;
		} else  {
			$scope.pageNumber = pageNo - 1;
		}
		
		ChannelService.list($scope.searchData, $scope.pageNumber, $scope.searchChannel, function(data) {
			
			$scope.channels = data.content;
			$scope.gridOptions.data = $scope.channels;
			
			$scope.totalPages = data.totalPages;
			$scope.last = data.last;
			$scope.first = data.first;
			$scope.number = data.number;
			$scope.gridOptions.totalItems = data.totalElements;
			
		},function(data, status){
			console.log("In Error..!!");
		},function(data, status){
			cosole.log("In forbidden..!!");
		});
	}
	
	$scope.sortChanged = function ( grid, sortColumns ) {
		
		$scope.searchData = {};
		
		if( sortColumns.length === 0) {
			$scope.search('');
		} else {
			console.log("IN here");
			for (var j = 0; j < sortColumns.length; j++) {
				if(sortColumns[j].sort != undefined) {
					console.log("Column: "+sortColumns[j].field+", Direction: "+sortColumns[j].sort.direction);
					$scope.searchData[sortColumns[j].field] = sortColumns[j].sort.direction.toUpperCase();
				}
			}
			$scope.search('');
		}
		NProgress.done();
	};
	
	/**
	 * Function to check whether the update status button should be enabled / disabled
	 * 
	 */
	$scope.checkUpdateStatusApplicable = function() {
		
		// Fetch Selected rows
		var selectedChannels = $scope.fetchSelectedRows();
		if(selectedChannels.length == 0) {
			return false;
		}
		
		return true;
	};
	
	/**
	 * Fetch selected rows
	 */
	$scope.fetchSelectedRows = function() {
		var selectedChannels = [];
		
		for(var c = 0 ; c < $scope.gridApi.selection.getSelectedRows().length ; c++) {
			selectedChannels.push($scope.gridApi.selection.getSelectedRows()[c].youtubeId);
		}
		
		return selectedChannels;
	};
	
	/**
	 * Fetch channel list
	 */
	$scope.fetchList = function() {
		console.log("Fetching Channel List");

		var code = $scope.searchChannel.networkCode.code;
		var startDatePost = $filter('date')($scope.search.startDate, 'dd/MM/yyyy');
		var endDatePost = $filter('date')($scope.search.endDate, 'dd/MM/yyyy')
		console.log("Start date"+startDatePost);
		console.log("End date"+endDatePost);
		console.log("Code"+code);
		
		ChannelService.fetchList(code, startDatePost, endDatePost, function(data) {
			$scope.networkCodes = data;
		}, function(data, status) {
			console.log("In error for fetching event list");
		}, function(data, status) {
			console.log("In forbidden for fetching event list");
		});
	}
	
	
	/**
	 * Update button clicked
	 * 
	 */
	$scope.updateStatus = function() {
		
		//var statusCode = $scope.channelStatus.code;
		
		var selectedChannels = $scope.fetchSelectedRows();
		
		$scope.updateList = selectedChannels;
		
		var modalInstance = $modal.open({
			animation: $scope.animationsEnabled,
			templateUrl: 'admin/resources/views/channel-status-update.html',
			controller: 'ChannelStatusController',
			size: 'lg',
			resolve: {
				updateList: function () {
					return $scope.updateList;
				}
			}
		});

		modalInstance.result.then(function (selectedItem) {
			$scope.selected = selectedItem;
		}, function () {
			$scope.search('');
			console.log('Modal dismissed at: ' + new Date());
		});

		modalInstance.result.finally(function (selectedItem) {
			$scope.search('');
		});
	};
	
	
	/**
	 * Status History
	 * 
	 */
	$scope.viewStatusHistory = function(statusHistory) {
	
		var modalInstance = $modal.open({
			animation: $scope.animationsEnabled,
			templateUrl: 'admin/resources/views/channel-status-history.html',
			controller: 'ChannelStatusHistoryController',
			size: 'lg',
			resolve: {
				statusHistory: function () {
					return statusHistory;
				}
			}
		});

		modalInstance.result.then(function (selectedItem) {
			$scope.selected = selectedItem;
		}, function () {
			console.log('Modal dismissed at: ' + new Date());
		});

		modalInstance.result.finally(function (selectedItem) {
			
		});
	};
	
	/**
	 * Channel Details
	 * 
	 */
	
	$scope.viewChannelDetail = function(channelDetail) {
		
		var modalInstance = $modal.open({
			animation: $scope.animationsEnabled,
			templateUrl: 'admin/resources/views/channel-details.html',
			controller: 'ChannelDetailController',
			size: 'lg',
			resolve: {
				channelDetail: function () {
					return channelDetail;
				}
			}
		});

		modalInstance.result.then(function (selectedItem) {
			$scope.selected = selectedItem;
		}, function () {
			console.log('Modal dismissed at: ' + new Date());
		});

		modalInstance.result.finally(function (selectedItem) {

		});
	};
});


/**
 * Manage (Add / Update) Country controller
 * 
 */
alchemistAdmin.controller('ChannelStatusController', function($scope, $rootScope, $routeParams, updateList, ChannelService, $modalInstance, ChannelStatusService, ChannelCategoryService) {
	console.log('Manage Country Controller loaded');
	
	$scope.channelStatuses = [];
	$scope.channelStatus = {};
	
	$scope.channelCategories = [];
	$scope.channelCategory = {};
	
	$scope.errors = [];
	
	$scope.termsChecked = {
			noAdultContent: false,
			copyrightVerified: false
	};
	
	$scope.updateList = updateList;
	
	$scope.init = function() {
		console.log("Channel Status Controller init function invoked");
		
		$scope.channelStatuses = [];
		$scope.channelStatus = {};
		
		$scope.channelCategories = [];
		$scope.channelCategory = {};
		
		$scope.errors = [];

		$scope.initData();

	};
	
	/**
	* Loading initial data
	*/
	$scope.initData = function() {
		console.log("Initialize the data for channel status");
		
		$scope.fetchChannelStatuses();
		
		$scope.fetchChannelCategories();
	};
	
	
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
			console.log("In Fetch channel categories");
			$scope.channelCategories = data;
			$scope.channelCategory = $scope.channelCategories[0];
		},function(data, status){
			console.log("In Error..!!");
		},function(data, status){
			cosole.log("In forbidden..!!");
		});
	};
	
	/**
	 * Update Selected Channel Status
	 * 
	 */
	$scope.update = function() {
		var statusCode = $scope.channelStatus.code;
		var categoryCode = $scope.channelCategory.code;
		console.log("Status code is :"+statusCode);
		console.log("Category Code is :"+categoryCode);
		
		if(!$scope.termsChecked.noAdultContent || !$scope.termsChecked.copyrightVerified) {
			$scope.errors.push("Please select the checkboxes before changing the status");
			return;
		}
		
		ChannelService.updateStatus(statusCode, categoryCode, $scope.updateList, function(data){
			$scope.close();
		},function(data, status){
			console.log("In Error..!!");
		},function(data, status){
			console.log("In forbidden..!!");
		});
	};
		
	
	$scope.close = function () {
    	$modalInstance.close();
  	};

});

/**
 * Displaying Channel Status History
 * 
 */
alchemistAdmin.controller('ChannelStatusHistoryController', function($scope, $rootScope, $routeParams, statusHistory, ChannelService, $modalInstance, ChannelStatusService) {
	$scope.statusHistory = statusHistory;
});

/**
 * Displaying Channel Details
 * 
 */
alchemistAdmin.controller('ChannelDetailController', function($scope, $rootScope, $routeParams, channelDetail, ChannelService, $modalInstance, ChannelStatusService) {
	$scope.channelDetail = channelDetail;
});