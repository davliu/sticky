stickyApp.controller('VoteCtrl', function VoteCtrl($scope, $routeParams, $location) {
  $scope.competitionName = $routeParams.competitionName;
  $scope.flashMessage = "";

  $scope.submitVote = function() {
    $scope.flashMessage = "Thanks for voting!";
    $location.path("/");
  };
});
