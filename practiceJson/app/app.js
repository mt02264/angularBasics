var demoApp = angular.module('demoApp', ['ngRoute']);

demoApp.config(function ($routeProvider){
$routeProvider.when('/view2',
  {
    controller: 'simpleController2',
    templateUrl: 'app/template/temp2.html'
  }).when('/view1',
  {
    controller: 'simpleController',
    templateUrl: 'app/template/view1.html'
  }).when('/phones',
  {
  	controller: 'phonesController',
  	templateUrl: 'app/template/phones.html'
  }).otherwise({redirectTo: '/view2'});
});
