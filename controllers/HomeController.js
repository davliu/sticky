stickyApp.controller('HomeCtrl', function HomeCtrl($scope, angularFireCollection) {
  console.log("home");
  var url = "companies.firebaseIO.com";
  $scope.companies = angularFireCollection(new Firebase(url).limit(50));
  // $scope.companies.add({name: "Jack in the Box"});
});
