var sticky = sticky || {};

stickyApp.controller('CompanyCtrl', function CompanyCtrl($scope, $routeParams, angularFire) {
  var promise;

  $scope.companyId = $routeParams.companyId;
  $scope.companyIds = [];

  angularFire(sticky.firebaseCompanyUrl($scope.companyId), $scope, "company", {});

  promise = angularFire(sticky.firebaseCompaniesUrl, $scope, "companies");
  promise.then(function(companies) {
    var id;
    for (id=0; id<companies.length; ++id) {
      $scope.companyIds.push(id);
    }
  });

  $scope.createCompany = function() {
    $scope.companies.push(
    {
      name: "Chef Xiao",
      year: "",
    });
  };
});
