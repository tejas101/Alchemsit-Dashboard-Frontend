alchemistAdmin.service('ChannelCategoryService', function(HttpCommunicationUtil, $rootScope){
	
	/**
	 * Fetch List
	 */
	this.list = function(successCB, errorCB, forbiddenCB) {
		console.log("In Channel Status Service for fetching the channel status list");
		HttpCommunicationUtil.doGet(apiConstants["channelCategory"]["list"], successCB, errorCB, forbiddenCB);
	};
	
});