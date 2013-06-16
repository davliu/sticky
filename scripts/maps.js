$(document).on('ready', function(){
	// var location = new intel.maps.Location();
	// location.login({
	// 	client_id: 'd7e566931cb46213cd5f139dd102fde4',
	// 	secret_id: '1b9025f2a02095b5'
	// }, function(e){
	// 	console.log(e);
	// });

	var intelMap;
	var mapPref = {
		//mapTypeId: intel.maps.mapTypeId.SATELLITE,
		navigationControl: false,
		center: new intel.maps.LatLng(37.4102492, -122.0597582),
		zoom: 15,
        login: {

        }
	};
	intelMap = new intel.maps.Map(document.getElementById("intel-map"), mapPref);

    // var marker = new intel.maps.Marker();
    // marker.setPosition(new intel.maps.LatLng(37.4102492, -122.0597582)); // central park, new york, NY
    // marker.setMap(intelMap); // display the marker on the map

    var circle = new intel.maps.Circle({
        map: intelMap,
        center: intelMap.getCenter(),
        radius: 30,
        strokeColor: 'blue',
        fillColor: 'red',
        cursor: 'pointer',
        zIndex: 2
    });


    var options = { // create an InfoWindowOptions object
        content:'Hello New York!',
        type:intel.maps.InfoWindowTypes.INFO1,
        suit:intel.maps.SuitType.MEDIUM_4,
        position:intelMap.getCenter()
        // place the info window in the center of the map
    };
    var info = new intel.maps.InfoWindow(options); // display the info window on the map
    info.open(intelMap);




    // console.log(intelMap);

});