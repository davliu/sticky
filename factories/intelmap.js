stickyApp.factory("intelMap", function() {
  
  var
    mapInstance,
    markers,
    initMap = function(){
      $('#main-content>div').css('height', $('body').height());
      var location = new intel.maps.Location();
      location.login({
        client_id: 'd7e566931cb46213cd5f139dd102fde4',
        secret_id: '1b9025f2a02095b5'
      }, function(e){ console.log(e); });
      
      mapInstance = new intel.maps.Map(
        document.getElementById("intel-map"),
        {
          navigationControl: false,
          center: new intel.maps.LatLng(37.4102492, -122.0597582),
          zoom: 15
        }
      );
      return mapInstance;
    },
    addMarker = function(){

    };

  return {
    initMap : initMap,
    addMarker : addMarker
  };
});
