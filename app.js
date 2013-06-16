var stickyApp = angular.module('stickyApp', ['firebase']);
var sticky = sticky || {};
sticky.firebase = new Firebase("stickyapp.firebaseIO.com");
sticky.firebaseCompany = new Firebase("stickyapp.firebaseIO.com/companies");
sticky.firebaseCompanyUrl = function(companyId) {
	return "https://stickyapp.firebaseIO.com/companies/" + companyId;
}

stickyApp.config(function($routeProvider) {
  $routeProvider. 
  when("/", {controller: "HomeCtrl", templateUrl: "home.html"}).
  when("/profile", {controller: "ProfileCtrl", templateUrl: "profile.html"}).
  when("/dashboard", {controller: "DashboardCtrl", templateUrl: "dashboard.html"}).
  when("/company/create", {controller: "CompanyCtrl", templateUrl: "company/company_create.html"}).
  when('/company/:companyId', {controller: "CompanyCtrl", templateUrl: "company/company_show.html"}).
  when("/vote/:competitionName", {controller: "VoteCtrl", templateUrl: "vote.html"});
});
