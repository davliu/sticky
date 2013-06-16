var sticky = sticky || {};

stickyApp.controller('ItemCtrl', function ItemCtrl($scope, angularFireCollection) {

  $scope.createItem = function(companyId) {
    sticky.firebase.companyRef(companyId).push(
      {
        name: "Mapo Tofu",
        price: 12,
        votes: 0
      });
  }

  
});
