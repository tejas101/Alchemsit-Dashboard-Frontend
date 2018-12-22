/**
 *  Constants pertaining to API
 */
var apiConstants = {
	"channel" : {
		"list" : "rest/channel/search",
		"updateStatus": "rest/channel/statusCode/",
		"counts": "rest/channel/stats/status/count"
	},
	"channelStatus": {
		"list": "rest/channel-status"
	},
	"channelCategory": {
		"list": "rest/channel-category"
	},
	"network" : {
		"list" : "rest/network"
	}
};

/**
 * Paging constants
 */
var pagingConstants = {
	"channel": 100
};

/**
 * Web constants
 */
var webConstants = {
	"baseUrl": {
		"local": "http://localhost:9095/alchemist-service/",
		"production": "http://api.alchemist.rocks/alchemist-service/"
	}
};