alchemistAdmin.service('ChannelStatusService', function(HttpCommunicationUtil, $rootScope){
	
	/**
	 * Fetch List
	 */
	this.list = function(successCB, errorCB, forbiddenCB) {
		console.log("In Channel Status Service for fetching the channel status list");
		HttpCommunicationUtil.doGet(apiConstants["channelStatus"]["list"], successCB, errorCB, forbiddenCB);
	};
	
	/**
	 * Fetching the Channel list
	 */
	this.fetchList = function(code, startDate, endDate, successCB, errorCB, forbiddenCB) {
		console.log("In Channel Service status for fetching the member list");
		var uri = apiConstants["channelStatus"]["list"];
		
		if(startDate != null && endDate != null) {
			uri = uri + "?networkCode"+code;
			uri = uri + "&startDate="+startDate;
			uri = uri + "&endDate="+endDate;
		}
		
		HttpCommunicationUtil.doGet(uri, successCB, errorCB, forbiddenCB);
	};
});