$(document).on('ready', function(){
	/*var location = new intel.maps.Location();
	location.login({
		client_id: 'd7e566931cb46213cd5f139dd102fde4',
		secret_id: '1b9025f2a02095b5'
	}, function(e){
		console.log(e);
	});*/

	var intelMap;
	var mapPref = {
		//mapTypeId: intel.maps.mapTypeId.SATELLITE,
		navigationControl: false,
		center: new intel.maps.LatLng(37.4102492, -122.0597582),
		zoom: 15,
	};
	intelMap = new intel.maps.Map(document.getElementById("intel-map"), mapPref);

	//intelMap.setCenter(new intel.maps.LatLng(37.4102492, -122.0597582)); // United Kingdom
	//intelMap.setZoom(15);

	console.log(intelMap);

});
