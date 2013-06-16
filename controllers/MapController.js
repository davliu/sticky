var sticky = sticky || {};

stickyApp.controller('MapCtrl', function MapCtrl($scope, angularFire, intelMap) {
  $scope.mapInstance = intelMap.initialize();
  $scope.allCompanies;
  $scope.filteredCompanies;

  // Initialize
  var companiesPromise = angularFire(sticky.firebaseUrl("companies"), $scope, "companies");
  companiesPromise.then(function(companies) {
    //console.log(companies);
    $scope.allCompanies = companies;
    for(var i=0; i<companies.length; ++i){
      if(companies[i].geodata){
        intelMap.addMarker(i, companies[i].name, companies[i].geodata);
      }
    }   
  });
  
});
