var sticky = sticky || {};

stickyApp.controller('HomeCtrl', function HomeCtrl($scope, flash) {
  console.log("home");

  $scope.flash = flash;
});
