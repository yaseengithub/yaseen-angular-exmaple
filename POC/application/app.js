(function(){
	var app = angular.module('ang-sample', ['ui.router']);
	app.config(['$stateProvider', '$urlRouterProvider',
	    function($stateProvider, $urlRouterProvider) {
		
		 $urlRouterProvider
	     .otherwise('/home');		 
		 $stateProvider.state("home", {
	         url: "/home",
	         controller : 'homecontroller',
	         templateUrl: 'application/views/home.html'
	     }).state("details", {
	         url: "/details",
	         controller : 'detailscontroller',
	         templateUrl: 'application/views/details.html'
	     });
	}]);
})();