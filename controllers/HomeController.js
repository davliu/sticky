var sticky = sticky || {};

stickyApp.controller('HomeCtrl', function HomeCtrl($scope, angularFire) {
  angularFire(sticky.firebaseUrl("competitions"), $scope, "competitions");
});
