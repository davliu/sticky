function logout () {
    intel.auth.logout(
        successCallback = function() {
            console.log("logout succeed")
        },
        errorCallback = function () {
            console.log("logout fail")
        }
    );
    window.close();
};

