var sticky = sticky || {};


stickyApp.controller('CompanyCtrl', function CompanyCtrl($scope, $routeParams, angularFire) {
  $scope.companyId = $routeParams.companyId;

  angularFire(sticky.firebaseCompanyUrl($scope.companyId), $scope, "company", {});

  $scope.createCompany = function() {
    sticky.firebaseCompany.push(
      {
        name: "Chef Xiao",
        year: "",
      });
  };

  $scope.createItem = function() {
    if ($scope.companyId) {
      sticky.firebase.companyRef($scope.companyId).push(
        {
          name: "Mapo Tofu",
          price: 12,
          votes: 0
        });
    }
  };
});
