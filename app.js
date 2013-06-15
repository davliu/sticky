var stickyApp = angular.module('stickyApp', ['firebase']);

stickyApp.config(function($routeProvider) {
  $routeProvider. 
  when("/", {controller: "HomeCtrl", templateUrl: "home.html"}).
  when("/profile", {controller: "ProfileCtrl", templateUrl: "profile.html"}).
  when("/dashboard", {controller: "DashboardCtrl", templateUrl: "dashboard.html"});
});
