alchemistAdmin.controller('DashboardController', function($scope, $rootScope, DashboardService)
{
	console.log("Dashboard Controller Loaded");
	NProgress.configure({ showSpinner: false  });

	 $scope.init = function() {
		 //Starting of Progress Bar
		 NProgress.start();
		
		 DashboardService.isLoggedIn(function(data){
			 $rootScope.networkName = data.name;
			 $rootScope.logoURL = data.logoURL;
				//console.log("Network Logged-In is:" + $rootScope.networkName);
				//console.log("Image url is:" + $rootScope.logoURL);
		 },function(data, status){
			 console.log("In Error..!!");
		 },function(data, status){
			 console.log("In forbidden..!!");
		 });
		
		 // Fetch the stats
		 DashboardService.stats(function(data){
			 //console.log(data);
			 $scope.setGraphData(data);
		 },function(data, status){
			 console.log("In Error..!!");
		 },function(data, status){
			 console.log("In forbidden..!!");
		 });
		 
		 $scope.options = {
				 chart: {
					 type: 'linePlusBarChart',
					 height: 400,
					 margin: {
						 top: 30,
						 right: 60,
						 bottom: 50,
						 left: 75
					 },
					 /*bars: {
						 forceY: [0]
					 },
					 bars2: {
						 forceY: [0]
					 },*/
					 color: ['#55B7D5', 'darkred', 'orange'],
					 x: function(d,i) { return i },
					 xAxis: {
						 axisLabel: 'X Axis',
						 tickFormat: function(d) {
							 var dx = $scope.data[0].values[d] && $scope.data[0].values[d].x;
							 if (dx > 0) {
								 return d3.time.format('%x')(new Date(dx))
							 }
							 return null;
						 }
					 },
					 x2Axis: {
						 tickFormat: function(d) {
							 var dx = $scope.data[0].values[d] && $scope.data[0].values[d].x || 0;
							 return d3.time.format('%b-%Y')(new Date(dx))
						 },
						 showMaxMin: false
					 }
					 /*y1Axis: {
						 axisLabel: 'Y1 Axis',
						 tickFormat: function(d){
							 return d3.format(',f')(d);
						 },
						 axisLabelDistance: 12
					 },
					 y2Axis: {
						 axisLabel: 'Y2 Axis',
						 tickFormat: function(d) {
							 return '$' + d3.format(',.2f')(d)
						 }
					 },
					 y3Axis: {
						 tickFormat: function(d){
							 return d3.format(',f')(d);
						 }
					 },
					 y4Axis: {
						 tickFormat: function(d) {
							 return '$' + d3.format(',.2f')(d)
						 }
					 }*/
				 }
		 	};

		 	
	 }
	 
	 $scope.setGraphData = function(stats) {
		 
		 var views = [];
		 var earnings = [];
		 var revenue = [];
		 
		 // loop through the stats
		 for (var j = 0; j < stats.length; j++){
			 //[ 1136005200000 , 71.89];
			 var date = stats[j]["date"];
			 
			 var vArray = [];
			 vArray.push(date);
			 vArray.push(stats[j]["views"]);
			 views.push(vArray);
			 
			 var eArray = [];
			 eArray.push(date);
			 eArray.push(stats[j]["earnings"]);
			 earnings.push(eArray);
			 
			 var rArray = [];
			 rArray.push(date);
			 rArray.push(stats[j]["grossRevenue"]);
			 revenue.push(rArray);
			 
		 }
		 
		// Set the data
	 	$scope.data = [
        {
     	   "key" : "Views",
     	   "bar": true,
     	   "values" : views
        },
        {
     	   "key" : "Earnings" ,
     	   "values" : earnings
        },
        {
     	   "key" : "Revenue" ,
     	   "values" : revenue
        }
        ].map(function(series) {
     	   series.values = series.values.map(function(d) { return {x: d[0], y: d[1] } });
     	   return series;
        });
	 	NProgress.done();
	 };
	 
});