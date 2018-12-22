alchemistAdmin.service('LoginService', function(HttpCommunicationUtil){
	/**
	 * Login
	 */
	this.login = function(username, password, successCB, errorCB, forbiddenCB) {
		console.log("In Login Service : ");
		console.log("User Name is: " + username);
		console.log("Password is: " +password);
		var oAuthUri = "rest/oauth/token?username=" + username + "&password=" + password + "&grant_type=password";
		HttpCommunicationUtil.doPostOAuth(oAuthUri, successCB, errorCB, forbiddenCB);
	};
});