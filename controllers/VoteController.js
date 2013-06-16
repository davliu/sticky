stickyApp.controller('VoteCtrl', function VoteCtrl($scope, $routeParams, $location, flash) {
  $scope.competitionName = $routeParams.competitionName;
  $scope.flashMessage = "";

  $scope.submitVote = function() {
    $location.path("/");
    flash.set("Thanks for voting!");
  };
});
