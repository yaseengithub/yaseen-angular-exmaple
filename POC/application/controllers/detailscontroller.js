(function(){
	var app = angular.module('ang-sample');
	app.controller('detailscontroller', ['$scope', '$location','homeservice',
	    function($scope, $location, homeservice) {	
			var id = homeservice.getParams().userid;
			if(id)
				$scope.user = homeservice.getUser(id);
			
			$scope.sumbitdetails = function(){
				homeservice.setData($scope.user);
				$location.path("/home");
			}
	}]);
})();