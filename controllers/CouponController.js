var sticky = sticky || {};

stickyApp.controller('CouponCtrl', function CouponCtrl($scope, $routeParams, angularFire) {
  
  angularFire(sticky.coupons, $scope, "coupons").then(function(coupons) {
    $scope.coupons = coupons;
  });

});
