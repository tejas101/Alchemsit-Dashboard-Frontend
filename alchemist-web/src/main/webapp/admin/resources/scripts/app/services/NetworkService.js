alchemistAdmin.service('NetworkService', function(HttpCommunicationUtil, $rootScope) {
	
	/**
	 * Fetch List
	 */
	this.list = function(successCB, errorCB, forbiddenCB) {
		console.log("In Network Service for fetching the network list");
		HttpCommunicationUtil.doGet(apiConstants["network"]["list"], successCB, errorCB, forbiddenCB);
	};
	
});