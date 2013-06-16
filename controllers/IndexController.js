var loggedIn = false;

function IndexCtrl($scope) {
    $scope.getIdStatus = function () {
        return loggedIn?"out":"in";
    };
}

function login() {
    var token = null;
    intel.auth.init(
        {
            client_id: '0aea680f877fa6f6beeb5e0024ab805e',
            secret_id: 'ca9d0b745b17be46',
            scope: "user:details"
        },
        successCallback = function (data) {
            console.log("init succeed");
        },
        errorCallback = function (data) {
            console.log("init error");
        }
    );
    intel.auth.login({
        provider : "",
        name: "myLoginWindow",
        specs: "location=1,status=1,scrollbars=1,width=10,height=10",
        redirectUri: "http://localhost:8000/WebstormProjects/sticky/login.html",
        locale: "en"
    }, function(data) {
        console.log("login succeeded");
    }, function(error) {
        console.log("login failed");
    });
}

function logout () {
    intel.auth.logout(
        successCallback = function() {
            console.log("logout succeed")
        },
        errorCallback = function () {
            console.log("logout fail")
        }
    );
};

function switchIdStatus () {
    if (loggedIn) {
        logout();
        loggedIn = false;
    }
    else {
        login();
        loggedIn = true;
    }
};
