var sticky = sticky || {};

stickyApp.controller('CompanyCtrl', function CompanyCtrl($scope, $routeParams, angularFire) {
  $scope.companyId = $routeParams.companyId;

  angularFire(sticky.firebaseCompanyUrl($scope.companyId), $scope, "company");
  angularFire(sticky.firebaseCompaniesUrl, $scope, "companies");

  $scope.createCompany = function() {
    $scope.companies.push(
    {
      name: "Chef Xiao",
      year: "",
    });
  };
});
