var sticky = sticky || {};

stickyApp.controller('CompanyCtrl', function CompanyCtrl($scope, $routeParams, angularFire) {
  $scope.companyId = parseInt($routeParams.companyId, 10);
  $scope.competitionInfo = [];
  $scope.companyIds = [];
  $scope.competitions = [];

  angularFire(sticky.firebaseUrl("companies/" + $scope.companyId), $scope, "company", {});

  angularFire(sticky.firebaseUrl("companies"), $scope, "companies").then(function(companies) {
    var id;
    for (id=0; id<companies.length; ++id) {
      $scope.companyIds.push(id);
    }
  });

  angularFire(sticky.firebaseUrl("competitions"), $scope, "competitions").then(function(competitions) {
    var competition;
    var i;

    for (i=0; i<competitions.length; ++i) {
      competition = competitions[i];

      if (competition.type === "company" &&
          competition.competitors.indexOf($scope.companyId) !== -1) {
        $scope.competitionInfo.push({competition: competition,
                                     id: i,
                                     info: getCompanyCompetitionInfo(competition, $scope.companyId)});
      }
      else if (competition.type === 'items' &&
               competition.competitors.length > 0) {
        (function() {
          var j = i;
          var itemId = getWinningItemId(competition);
          var tmpCompetition = competition;
          angularFire(sticky.firebaseUrl("items/" + itemId), $scope, "item", {}).then(function(item) {
            if (item.company === $scope.companyId) {
              $scope.competitionInfo.push({competition: tmpCompetition,
                                           id: j,
                                           info: getItemCompetitionInfo(tmpCompetition, itemId, item)});
            }
          });
        })();
      }
    }
  });

  function getCompanyCompetitionInfo(competition, companyId) {
    var index = competition.competitors.indexOf(companyId);
    var votes = competition.votes[index];
    var rank = 1;
    var i;

    for (i=0; i<competition.votes.length; ++i) {
      if (i == index) continue;
      if (competition.votes[i] > votes) ++rank
    }

    return {rank: rank, votes: votes};
  }

  function getItemCompetitionInfo(competition, winningItemId, winningItem) {
    var index = competition.competitors.indexOf(winningItemId);
    return {itemName: winningItem.name, votes: competition.votes[index]};
  }

  function getWinningItemId(competition) {
    var winningItemId;
    var votes;
    var i;

    if (competition.length <= 0) {
      return null;
    }

    winningItemId = competition.competitors[0];
    votes = competition.votes[0];

    for (i=1; i<competition.competitors.length; ++i) {
      if (competition.votes[i] > votes) {
        winningItemId = competition.competitors[i];
        votes = competition.votes[i];
      }
    }

    return winningItemId;
  }

  // $scope.$on('$viewContentLoaded', function(){
  //   console.log($('.company-box').width());
  //   $('.company-box').css('height', $('.company-box').width()+25+'px');
  // });
});
