var sticky = sticky || {};

stickyApp.controller('CompanyCtrl', function CompanyCtrl($scope, $routeParams, angularFire) {
  $scope.companyId = parseInt($routeParams.companyId, 10);
  $scope.joinedCompetitions = [];
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
        $scope.joinedCompetitions.push(competition);
      }
      else if (competition.type === 'items' &&
                 competition.competitors.length > 0) {
        (function() {
          var itemId = competition.competitors[0];
          var tmpCompetition = competition;
          angularFire(sticky.firebaseUrl("items/" + itemId), $scope, "item", {}).then(function(item) {
            if (item.company === $scope.companyId) {
              $scope.joinedCompetitions.push(tmpCompetition);
            }
          });
        })();
      }
    }
  });

  /*
  $scope.createCompany = function() {
    $scope.companies.push(
    {
      name: "Chef Xiao",
      year: "",
    });
  };
  */
});
