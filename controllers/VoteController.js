stickyApp.controller('VoteCtrl', function VoteCtrl($scope, $routeParams, $location, flash, angularFire) {
  $scope.competitors = [];
  $scope.flashMessage = "";

  var promise = angularFire(sticky.firebaseUrl("competitions/" + $routeParams.competitionId), $scope, "competition", {});


  promise.then(function(competition) {
    if (competition.type == "company") {
      var competitorPromise = angularFire(sticky.firebaseUrl("companies"), $scope, "competitors");
    } else {
      var competitorPromise = angularFire(sticky.firebaseUrl("items"), $scope, "competitors");
    }

    competitorPromise.then(function(competitors) {
      $scope.competitors = [];
      angular.forEach($scope.competition.competitors, function(competitorId) {
        console.log(competitorId);
        $scope.competitors.push(competitors[competitorId]);
      });
    });
  });

  $scope.submitVote = function() {
    $location.path("/");
    flash.set("Thanks for voting!");
  };
});
