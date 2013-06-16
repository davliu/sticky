var sticky = sticky || {};

stickyApp.controller('CouponCtrl', function CouponCtrl($scope, $routeParams, angularFire, $http, flash) {
  
  $scope.flash = flash;
  $scope.email = "";
  $scope.username = "";
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
    $scope.initialize1 = function () {
//        var initOptions = {
//            client_id: '0aea680f877fa6f6beeb5e0024ab805e',
//            secret_id: 'ca9d0b745b17be46',
//            scope: "user:details user:scope profile:full profile:full:write"
//        };
    //        intel.auth.init(initOptions,
    //                initSuccessCallback,
    //                errorCallback
    //        );
    intel.auth.init({
        client_id: '0aea680f877fa6f6beeb5e0024ab805e',
        secret_id: 'ca9d0b745b17be46',
        scope:     "user:details user:scope profile:full profile:full:write"
        },
    success = function ()
                {
                    console.log("init ok");
                    },
    error = function() {
        console.log("init error");
        }

    );

    intel.auth.login({
        redirect_uri: "urn:intel:identity:oauth:oob:async",
//            redirect_uri: "http://localhost:8000/WebstormProjects/sticky/index.html#/",
        provider: "",
        name: "myLoginWindow"
//            specs: "location=1,status=1,scrollbars=1,width=700,height=400"
        },
    success = function (userDetails)
                {
                    intel.user.getDetails(
                        successCallback1= function(userDetails)
                        {
                            console.log(userDetails.emails[0]);
                            $scope.email = userDetails.emails[0];
                            console.log(userDetails.accounts[0].userName);
                            $scope.username = userDetails.accounts[0].userName;
                        },
    errorCallback1 = function(userdetails)
                    {
                        alert("failed getting data");
                        });


    },
    error = function() {
        console.log("login error");
        }

    );
    }

    $scope.initialize1();

});



