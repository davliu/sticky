var sticky = sticky || {};

stickyApp.controller('MapCtrl', function MapCtrl($scope, angularFireCollection, intelMap) {
  $scope.mapInstance = intelMap.initMap();

  // $scope.createItem = function(companyId) {
  //   sticky.firebase.companyRef(companyId).push(
  //     {
  //       name: "Mapo Tofu",
  //       price: 12,
  //       votes: 0
  //     });
  // }

  
});
