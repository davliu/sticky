stickyApp.controller('VoteCtrl', function VoteCtrl($scope, $routeParams, $location, flash, angularFire) {
  $scope.competitors = [];
  $scope.flashMessage = "";
  $scope.selectedIndex = -1;
  $scope.voteError = false;

  var promise = angularFire(sticky.firebaseUrl("competitions/" + $routeParams.competitionId), $scope, "competition", {});

  promise.then(function(competition) {
    if (competition.type == "company") {
      var competitorPromise = angularFire(sticky.firebaseUrl("companies"), $scope, "competitors");
    } else {
      var competitorPromise = angularFire(sticky.firebaseUrl("items"), $scope, "competitors");
    }

    $scope.filteredCompetitors = [];
    competitorPromise.then(function(competitors) {
      angular.forEach($scope.competition.competitors, function(competitorId) {
        $scope.filteredCompetitors.push({name: competitors[competitorId].name, photo: competitors[competitorId].photo, originalId: competitorId, selectedClass: "panel callout"});
      });
    });
  });

  $scope.selectCompetitor = function(index) {
    $scope.selectedIndex = index;
  };

  $scope.submitVote = function() {
    if ($scope.selectedIndex == -1) {
      $scope.voteError = true;
      return;
    }

    var voteCount = $scope.competition.votes[$scope.selectedIndex];
    $scope.competition.votes[$scope.selectedIndex] = voteCount + 1;

    $location.path("/");
    flash.set("Thanks for voting for " + $scope.competition.name + " !");
  };
});
