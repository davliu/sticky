function IndexCtrl($scope) {
    $scope.idStatus = false;
    $scope.getIdStatus = function () {
        return $scope.idStatus?"in/up":"out";
    };

    $scope.init = function () {
        var token = null;
        intel.auth.init({
                client_id: '0aea680f877fa6f6beeb5e0024ab805e',
                secret_id: 'ca9d0b745b17be46',
                scope: "user:details"
            },
            successCallback = function (data) {
                token = data.access_token;
                data.access_token.intel.auth.setAccessToken(data.access_token, onSetTokenSuccessCallback, onSetTokenErrorCallback);
                console.log("init succeeded");
            },
            errorCallback = function (error) {
                console.log("init failed");
                console.log(error);
            }
        );
    };

    $scope.login = function () {
        intel.auth.login({
//        provider : "",
//        name: "myLoginWindow",
//        specs: "location=1,status=1,scrollbars=1,width=900,height=600",
            redirectUri: "http://localhost:8000/WebstormProjects/sticky/#/",
            locale: "en"
        }, function(data) {
            console.log("login succeeded");
            console.log(data);
        }, function(error) {
            console.log("login failed");
            console.log(error);
        });
    };

    $scope.logout = function () {
        intel.auth.logout(
            successCallback = function() {
                console.log("logout succeed")
            },
            errorCallback = function () {
                console.log("logout fail")
            }
        );
    };

    $scope.switchIdStatus = function () {
        if ($scope.idStatus) {
            $scope.logout();
            $scope.idStatus = false;
        }
        else {
            $scope.login();
            $scope.idStatus = true;
        }
    };
}
