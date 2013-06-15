var sticky = sticky || {};


stickyApp.controller('CompanyCtrl', function CompanyCtrl($scope, angularFireCollection) {

  $scope.createCompany = function() {
    sticky.firebaseCompany.set(
      {
        name: "Chef Xiao",
        year: "",
      });
  }  
});
