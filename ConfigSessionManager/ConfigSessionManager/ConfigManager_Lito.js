Ext.define('Ext.ux.ConfigManager', {
	singleton:  		true,
	root:				'/~lilianadiaz',
	server:				'http://' + window.location.host,
    appname:            '/LanistaTrainerBrowser2.0_LinkPlanId',
	
	constructor: function(config) {
		this.callParent();
 	},
 	
 	getRoot: function() {
 		return this.root;
 	},
 	
 	getServer: function() {
 		return this.server;
 	},
    
    getAppname: function() {
 		return this.appname;
 	}

 	
});