alchemistAdmin.service('ChannelService', function(HttpCommunicationUtil, $rootScope){
	
	/**
	 * Fetch Sorted List
	 */
	this.list = function(data, pageNo, search, successCB, errorCB, forbiddenCB) {
		console.log("In Channel Service for fetching list of channels for page no: "+pageNo + " with search object: ");
		console.log(data);
		
		var size = pagingConstants["channel"];
		
		var uri = apiConstants["channel"]["list"] + "?page=" + pageNo + "&size=" + size;
		
		// Based on the search object construct the search query
		var network = search.network;
		if(network != null) {
			if(network.code != null) {
				uri = uri + "&networkCode=" + network.code;
			}
		}
		
		var channelStatus = search.channelStatus;
		if(channelStatus != null) {
			if(channelStatus.code != null) {
				uri = uri + "&channelStatusCode=" + channelStatus.code;
			}
		}
		
		console.log("Search URI for channer search is: "+uri);
		
		// Make the API call
		HttpCommunicationUtil.doPut(uri, data, successCB, errorCB, forbiddenCB);
	}
	
	/**
	 * Update Status for selected channels
	 * 
	 */
	this.updateStatus = function(statusCode, categoryCode, upadteList, successCB, errorCB, forbiddenCB) {
		
		console.log("In Channel Service for updating statuses for list of channels with status: "+statusCode+" and category is :"+ categoryCode +" with channel list: ");
		//console.log("data in update status: "+data);
		
		var uri = apiConstants["channel"]["updateStatus"];
		
		// Construts status code
		uri = uri + statusCode + "/categoryCode/" + categoryCode ;
		
		// Make the API call
		HttpCommunicationUtil.doPut(uri, upadteList, successCB, errorCB, forbiddenCB);
		
	};
	
	/**
	 * Fetch the counts
	 * 
	 */
	this.fetchCounts = function(successCB, errorCB, forbiddenCB) {
		var uri = apiConstants["channel"]["counts"];
		
		// Make the API call
		HttpCommunicationUtil.doGet(uri, successCB, errorCB, forbiddenCB);
	};
	
	/**
	 * Fetching the Channel list
	 */
	this.fetchList = function(code, startDate, endDate, successCB, errorCB, forbiddenCB) {
		console.log("In Channel Service for fetching the member list");
		var uri = apiConstants["channel"]["counts"];
			
		if(startDate != null && endDate != null && code != null) {
			uri = uri + "?networkCode=" + code;
			uri = uri + "&startDate=" + startDate;
			uri = uri + "&endDate=" + endDate;
		}
		else if(code != null && startDate != null ) {
			uri = uri + "?networkCode=" + code;
			uri = uri + "&startDate=" + startDate;
		}
		else if(code != null && endDate != null ) {
			uri = uri + "?networkCode=" + code;
			uri = uri + "&endDate=" + endDate;
		}
		else if(startDate != null && endDate != null ) {
			uri = uri + "?networkCode=";
			uri = uri + "&startDate=" + startDate;
			uri = uri + "&endDate=" + endDate;
		}
		else if(startDate != null) {
			uri = uri + "?networkCode=";
			uri = uri + "&startDate=" + startDate;
		}
		else if(endDate != null) {
			uri = uri + "?networkCode=";
			uri = uri + "&endDate=" + endDate;
		}
		else if(code != null) {
			uri = uri + "?networkCode=" + code;
		}	
		
		HttpCommunicationUtil.doGet(uri, successCB, errorCB, forbiddenCB);
	};
});