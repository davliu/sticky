stickyApp.controller('DashboardCtrl', function DashboardCtrl($scope) {
  var promise = angularFire(sticky.firebaseUrl("competitions/" + $routeParams.competitionId), $scope, "competition", {});
  promise.then(function(data) {
    console.log(data);
  });

  var barChartData = {
    labels : ["January","February","March","April","May","June","July"],
    datasets : [
      {
        fillColor : "rgba(220,220,220,0.5)",
        strokeColor : "rgba(220,220,220,1)",
        data : [65,59,90,81,56,55,40]
      },
      {
        fillColor : "rgba(151,187,205,0.5)",
        strokeColor : "rgba(151,187,205,1)",
        data : [28,48,40,19,96,27,100]
      }
    ]

  }

  var myLine = new Chart(document.getElementById("canvas").getContext("2d")).Bar(barChartData);
});
