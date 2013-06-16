stickyApp.factory("flash", function($rootScope) {
  var queue = [], currentMessage = '';
  
  $rootScope.$on('$routeChangeSuccess', function() {
    if (queue.length > 0) 
      currentMessage = queue.shift();
    else
      currentMessage = '';
  });
  
  return {
    set: function(message) {
      console.log("setting");
      queue.push(message);
    },
    get: function(message) {
      console.log("getting");
      return currentMessage;
    }
  };
});
