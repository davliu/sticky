stickyApp.controller('VoteCtrl', function VoteCtrl($scope, $routeParams, $location, flash, angularFire) {
  $scope.competitionName = $routeParams.competitionId;
  $scope.flashMessage = "";

  var promise = angularFire(sticky.firebaseUrl("competitions/" + $routeParams.competitionId), $scope, "competition", {});

  promise.then(function(data) {
    if (data.category == "type") {
      //$scope.competitors =
    }
  });

  $scope.submitVote = function() {
    $location.path("/");
    flash.set("Thanks for voting!");
  };
});
