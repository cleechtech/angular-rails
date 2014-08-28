angular.module('angular-rails', [
	'ui.router',
	'ngAnimate',
	'templates'
])

.config(function($stateProvider, $urlRouterProvider, $locationProvider){

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'home.html',
			controller: 'HomeCtrl'
		});

	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true);
});