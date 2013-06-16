var sticky = sticky || {};

stickyApp.controller('HomeCtrl', function HomeCtrl($scope, angularFire, flash) {
  angularFire(sticky.firebaseUrl("competitions"), $scope, "competitions");
  $scope.flash = flash;
});
