var sticky = sticky || {};

stickyApp.controller('CouponCtrl', function CouponCtrl($scope, $routeParams, angularFire, $http, flash) {
  
  $scope.flash = flash;

  angularFire(sticky.coupons, $scope, "coupons").then(function(coupons) {
    $scope.coupons = coupons;
  });

  $scope.sendToEverNote = function(coupon) {
    var url = "http://ec2-184-169-238-194.us-west-1.compute.amazonaws.com:3000/post_note?title=Coupon from " + coupon.provider + "&url=" + coupon.photo;
    $http({
        method: "GET",
        url: url,
        withCredentials: true
      }).success(function() {
        alert("Finish Saving Coupon to EverNote");
    });
  };
});
