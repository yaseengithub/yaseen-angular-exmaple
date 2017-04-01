(function(){
	var app = angular.module('ang-sample');
	app.factory('homeservice',['$q','$http', 
	   function( $q, $http){
		var data = {
				glbparams:{},
				users:[{
					id:1,
					name:"Bucky",
					os:"windows",
					browser:"IE8"
				},{
					id:2,
					name:"Joby",
					os:"ios",
					browser:"Safari"
				}]
		};
	    return {
	        getData: function(name){
	        	return data[name];
	        },
	        setData: function(user){
	        	if(user.id){
	        		data.users[user.id-1] = user;
	        	}else{
	        		user.id = data.users.length;
	        		data.users.push(user);
	        	}
	        },
	        getUser: function(id){
	        	return data.users[id];
	        },
	        storeParams: function(param, value){
	        	data.glbparams[param] = value;
	        },
	        getParams: function(){
	        	return data.glbparams;
	        },
	        ajaxPost : function(path, data ){
	        	
	        },
	        ajaxGet : function(path){
	        	
	        }
	    }               
	}]);
})();