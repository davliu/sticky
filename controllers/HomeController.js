var sticky = sticky || {};

stickyApp.controller('HomeCtrl', function HomeCtrl($scope, angularFire, flash) {
  angularFire(sticky.firebaseUrl("competitions"), $scope, "competitions").then(function() {
    window.onload = function() {
      var wall = new Masonry(document.getElementById('competitions'));
    };
  });;
  $scope.flash = flash;
});
