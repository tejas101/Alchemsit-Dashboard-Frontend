alchemistAdmin.service('DashboardService', function(HttpCommunicationUtil, $rootScope){
	
	/**
	 * Fetch Access Token
	 */
	this.isLoggedIn = function(successCB, errorCB, forbiddenCB) {
		HttpCommunicationUtil.doGet("rest/network/logged-in", successCB, errorCB, forbiddenCB);
	};
	
	this.stats = function(successCB, errorCB, forbiddenCB) {
		HttpCommunicationUtil.doGet("rest/network/stats", successCB, errorCB, forbiddenCB);
		//HttpCommunicationUtil.doGet("admin/resources/json/networkstats.json", successCB, errorCB, forbiddenCB);
	};
	
});