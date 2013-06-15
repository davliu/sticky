var stickyApp = angular.module('stickyApp', ['firebase']);
var sticky = sticky || {};
sticky.firebase = new Firebase("stickyapp.firebaseIO.com");
sticky.firebaseCompany = new Firebase("stickyapp.firebaseIO.com/companies");

stickyApp.config(function($routeProvider) {
  $routeProvider. 
  when("/", {controller: "HomeCtrl", templateUrl: "home.html"}).
  when("/profile", {controller: "ProfileCtrl", templateUrl: "profile.html"}).
  when("/dashboard", {controller: "DashboardCtrl", templateUrl: "dashboard.html"}).
  when("/company_create", {controller: "CompanyCtrl", templateUrl: "company.html"});
});
