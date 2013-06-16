var stickyApp = angular.module('stickyApp', ['firebase']);
var sticky = sticky || {};
sticky.firebase = new Firebase("stickyapp.firebaseIO.com");
sticky.firebaseCompaniesUrl = "https://stickyapp.firebaseIO.com/companies";
sticky.coupons = new Firebase("https://stickyapp.firebaseIO.com/coupons");
sticky.firebaseUrl = function(rsrc) {
	return "https://stickyapp.firebaseIO.com/" + rsrc;
}

sticky.postYammerMessage = function(message) {
  yam.request({
    url: "https://www.yammer.com/api/v1/messages.json",
    method: "POST",
    data: {
      "body": message
    },
    success: function (user) {
      alert("Finish Sharing to Yammer!");
    },
    error: function (user) {
      alert("There was an error with the request.");
    }
  });
};

stickyApp.config(function($routeProvider) {
  $routeProvider.
  when("/", {controller: "HomeCtrl", templateUrl: "home.html"}).
  when("/maps", {controller: "MapCtrl", templateUrl: "maps.html"}).
  when("/coupon", {controller: "CouponCtrl", templateUrl: "coupon.html"}).
  when("/dashboard", {controller: "DashboardCtrl", templateUrl: "dashboard.html"}).
  when("/company/create", {controller: "CompanyCtrl", templateUrl: "company/company_create.html"}).
  when('/company/:companyId', {controller: "CompanyCtrl", templateUrl: "company/company_show.html"}).
  when("/companies", {controller: "CompanyCtrl", templateUrl: "company/company_show_all.html"}).
  when("/trending", {controller: "TrendingCtrl", templateUrl: "trending.html"}).
  when("/vote/:competitionId", {controller: "VoteCtrl", templateUrl: "vote.html"});
});
