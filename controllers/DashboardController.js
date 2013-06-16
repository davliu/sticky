stickyApp.controller('DashboardCtrl', function DashboardCtrl($scope, angularFire) {
  $scope.currentIndex = 0;

  $scope.filteredCompetitions = [];
  $scope.selectedIndex = -1;

  angularFire(sticky.firebaseUrl("competitions"), $scope, "competitions").then(function(competitions) {
    angular.forEach(competitions, function(competition, index) {
      if (competition.competitors.indexOf($scope.currentIndex) != -1) {
        $scope.filteredCompetitions.push(competition);
      }
    });

    $scope.selectedIndex = 0;
    $scope.renderCharts(0);
  });

  $scope.renderCharts = function(index) {
    $scope.selectedIndex = index;

    var stats = $scope.filteredCompetitions[index].statistics;

    var chartOptions = {
      scaleOverride: true,
      scaleStartValue: 0,
      scaleSteps: 10,
      scaleStepWidth: 5
    };

    // Age graph
    ['age', 'gender', 'location'].forEach(function(chartName) {
      var statLabels = [];
      var statValues = [];
      var largestValue = 0;
      angular.forEach(stats[chartName], function(value, label) {
        statLabels.push(label);
        statValues.push(value);
        largestValue = Math.max(largestValue, value);
      });

      chartOptions.scaleStepWidth = Math.ceil(largestValue/20);
      chartOptions.scaleSteps = largestValue/chartOptions.scaleStepWidth + 1;

      var barChartData = {
        labels : statLabels,
        datasets : [
          {
            fillColor : "rgba(151,187,205,0.5)",
            strokeColor : "rgba(151,187,205,1)",
            data : statValues
          }
        ]
      }
      var myLine = new Chart(document.getElementById(chartName + "Canvas").getContext("2d")).Bar(barChartData, chartOptions);
    });
  };

});
