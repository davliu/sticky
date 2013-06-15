var sticky = sticky || {};


stickyApp.controller('CompanyCtrl', function CompanyCtrl($scope, $routeParams, angularFire) {

  $scope.companyId = $routeParams.companyId;

  $scope.company = angularFire(sticky.firebaseCompanyRef($scope.companyId), $scope, "company");

  console.log($scope.company.then());

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
