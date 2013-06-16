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
  });

  $scope.renderCharts = function(index) {
    $scope.selectedIndex = index;

    var stats = $scope.filteredCompetitions[index].statistics;

    // Age graph
    var statLabels = [];
    var statValues = [];
    angular.forEach(stats.age, function(value, label) {
      statLabels.push(label);
      statValues.push(value);
    });

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
    var myLine = new Chart(document.getElementById("ageCanvas").getContext("2d")).Bar(barChartData);

    // Gender graph
    var statLabels = [];
    var statValues = [];
    angular.forEach(stats.gender, function(value, label) {
      statLabels.push(label);
      statValues.push(value);
    });

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
    console.log(statLabels);
    console.log(statValues);
    var myLine = new Chart(document.getElementById("genderCanvas").getContext("2d")).Bar(barChartData);

    // Location graph
    var statLabels = [];
    var statValues = [];
    angular.forEach(stats.location, function(value, label) {
      statLabels.push(label);
      statValues.push(value);
    });

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
    var myLine = new Chart(document.getElementById("locationCanvas").getContext("2d")).Bar(barChartData);
  };

});
