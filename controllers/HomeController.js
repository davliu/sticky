var sticky = sticky || {};

stickyApp.controller('HomeCtrl', function HomeCtrl($scope, angularFire, flash) {
  angularFire(sticky.firebaseUrl("competitions"), $scope, "competitions");
  $scope.flash = flash;

  $scope.yammerCompetition = function(competitionId) {
  	sticky.postYammerMessage("Guys, heads up! Vote the Competition here and Win coupons at http://davliu.github.io/sticky#/vote/" + competitionId);
  }
});
