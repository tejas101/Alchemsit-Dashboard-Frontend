var HttpCommunicationUtil = function($http, $rootScope, $location, localStorageService) {
	var factory = {};
	
	/**
	 * Fetching the base URL based on the $location
	 */
	factory.fetchBaseUrl = function() {
		var serverLocation = $location.host();
		console.log("Server Location Host: "+serverLocation);
		console.log($location);
		if(serverLocation == 'localhost') {
			return webConstants["baseUrl"]["local"];
		} else if(serverLocation == 'ui.alchemist.rocks') {
			return webConstants["baseUrl"]["production"];
		}
		
		return "";
	};
	
	var baseUrl = factory.fetchBaseUrl();

	//$http.defaults.useXDomain = true;
	
	function setHeader()
	{
		authData = localStorageService.get('authData');
		if(authData) 
		{
			$http.defaults.headers.common.Authorization = "Bearer " + authData.access_token;
			$http.defaults.headers.common["Content-Type"] = "application/json";
		}
	}
	
	function setOAuthHeader()
	{
		//var client_id = "restClient";
		//var client_secret = "restClientSecret";
		//var encoded = $base64.encode(client_id+":"+client_secret);
		
		//$http.defaults.headers.post["Content-Type"] = 'application/json';
	    $http.defaults.headers.post["Authorization"] = "Basic QUtJQUk3UDNTT1RERVdLTlIzSUE6aUhGZ29pSVlJblFZdHo5UjV4RkhWM3NOMWRuZGZlZGhoaWwxRWdzRQ==";  
	}
	
	 function refreshAccessToken(successCallbackFunction, errorCallbackFunction, forbiddenCallbackFunction)
	{
		var refresh_token = authData.refresh_token;
		var url = baseUrl + "rest/oauth/token?refresh_token=" + refresh_token + "&grant_type=refresh_token";
		
		setOAuthHeader();
		
		$http.post(url)
		.success(function(data, status, headers, config)
		{
			localStorageService.set('authData', data);
			//setHeader();
			if(processData.methodName === "doGet" || processData.methodName === "doDelete")
			{
				factory[processData.methodName](processData.url, successCallbackFunction, errorCallbackFunction, forbiddenCallbackFunction);
			}
			else
			{
				factory[processData.methodName](processData.url, processData.data, successCallbackFunction, errorCallbackFunction, forbiddenCallbackFunction);
			}
		})
		.error(function(data, status, headers, config) {
			console.log("Error callback called for url: "+processData.url+" with status: "+status+" and data: ");
			console.log(data);
			$location.path('/');
		});
	}
	
	factory.doPostOAuth = function(url, successCallbackFunction, errorCallbackFunction, forbiddenCallbackFunction){
		setOAuthHeader();  
		
		$http.post(baseUrl + url)
		.success(function(data, status, headers, config){
			console.log("Data in the doPostOAuth is :");
			console.log(data);
			localStorageService.set('authData', data);
			successCallbackFunction(data, status, headers, config);
		})
		.error(function(data, status, headers, config){
			console.log("Error callback called for url: "+url+" with POST method with status: "+status+" and data: ");
			console.log(data);
			
			//errorCallbackFunction(data, status, headers, config);
		});
	},
	
	factory.doPost = function(url, data, successCallbackFunction, errorCallbackFunction, forbiddenCallbackFunction){
		setHeader();
		$http.post(baseUrl + url, data)
		.success(function(data, status, headers, config){
			successCallbackFunction(data, status, headers, config);
		})
		.error(function(data, status, headers, config){
			console.log("Error callback called for url: "+url+" with POST method with status: "+status+" and data: ");
			console.log(data);
			
			errorCallbackFunction(data, status, headers, config);
		});
	},
	
	/*factory.doPostLogin = function(url, successCallbackFunction, errorCallbackFunction, forbiddenCallbackFunction){
		$http.defaults.headers.post["Authorization"] = 'Basic QUtJQUk3UDNTT1RERVdLTlIzSUE6aUhGZ29pSVlJblFZdHo5UjV4RkhWM3NOMWRuZGZlZGhoaWwxRWdzRQ==';
		$http.post(baseUrl + url)
		.success(function(data, status, headers, config){
			successCallbackFunction(data, status, headers, config);
		})
		.error(function(data, status, headers, config){
			console.log("Error callback called for url: "+url+" with POST method with status: "+status+" and data: ");
			console.log(data);
			
			errorCallbackFunction(data, status, headers, config);
		});
	},*/
	
	factory.doPut = function(url, data, successCallbackFunction, errorCallbackFunction, forbiddenCallbackFunction){
		setHeader();
		$http.defaults.headers.put["Content-Type"] = 'application/json';
	    $http.defaults.headers.put["Accept"] = 'application/json';
		$http.put(baseUrl + url, data)
		.success(function(data, status, headers, config){
			successCallbackFunction(data, status, headers, config);
		})
		.error(function(data, status, headers, config){
			console.log("Error callback called for url: "+url+" with PUT method with status: "+status+" and data: ");
			console.log(data);
			
			errorCallbackFunction(data, status, headers, config);
		});
	},
	
	factory.doGet = function(url, successCallbackFunction, errorCallbackFunction, forbiddenCallbackFunction){
		setHeader();
		var config = {headers:  {
	        	"Content-Type": "application/json"
	    	}
		};
		$http.get(baseUrl + url,config)
		.success(function(data, status, headers, config){
			successCallbackFunction(data, status, headers, config);
		})
		.error(function(data, status, headers, config){
			console.log("Error callback called for url: "+url+" with method GET with status: "+status+" and data: ");
			console.log(data);
			
			errorCallbackFunction(data, status, headers, config);
		});
	};

	factory.doDelete = function(url, successCallbackFunction, errorCallbackFunction, forbiddenCallbackFunction){
		setHeader();
		$http.delete(baseUrl + url)
		.success(function(data, status, headers, config){
			successCallbackFunction(data, status, headers, config);
		})
		.error(function(data, status, headers, config){
			console.log("Error callback called for url: "+url+" with method DELETE with status: "+status+" and data: ");
			console.log(data);
			
			errorCallbackFunction(data, status, headers, config);
		});
	};
	
	return factory;
};

if(typeof alchemistAdmin !== 'undefined') {
	alchemistAdmin.factory('HttpCommunicationUtil', HttpCommunicationUtil);
}