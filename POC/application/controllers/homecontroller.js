(function(){
	var app = angular.module('ang-sample');
	app.controller('homecontroller', ['$scope', '$location','homeservice',
	    function($scope, $location, homeservice) {	
		
			$scope.users = homeservice.getData("users");
			$scope.adduser = function(){
				homeservice.storeParams("userid", "");
				$location.path("/details")
			};
			$scope.editUser = function(id){
				homeservice.storeParams("userid", id);
				$location.path("/details");
				
			};
	}]);
})();