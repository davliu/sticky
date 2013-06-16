function IndexCtrl($scope) {
    $scope.idStatus = false;
    $scope.getIdStatus = function () {
        return $scope.idStatus?"in/up":"out";
    };
}