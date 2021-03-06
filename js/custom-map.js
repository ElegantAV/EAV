jQuery(document).ready(function() {
//Google Map					
	var latlng = new google.maps.LatLng(28.627043197917633, 77.10107106116814);
	var settings = {
		zoom: 14,
		center: new google.maps.LatLng(28.627043197917633, 77.10107106116814), 
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: false,
		scrollwheel: false,
		draggable: true,
		navigationControl: false
		};
		
	var map = new google.maps.Map(document.getElementById("google_map"), settings);
	
	google.maps.event.addDomListener(window, "resize", function() {
		var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center);
	});
	
	var contentString = '<div class="map-tooltip">'+
		'<h6>Elegant AV</h6>'+
		'<p>Now that you visited our website, how about <br/> checking out our office too?</p>'+
		'</div>';
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});
	
	var companyImage = new google.maps.MarkerImage('images/map-pin.png',
		new google.maps.Size(40,70),<!-- Width and height of the marker -->
		new google.maps.Point(0,0),
		new google.maps.Point(20,55)<!-- Position of the marker -->
	);
	
	var companyPos = new google.maps.LatLng(28.627043197917633, 77.10107106116814);
	
	var companyMarker = new google.maps.Marker({
		position: companyPos,
		map: map,
		icon: companyImage, 
		zIndex: 3});	
	
	google.maps.event.addListener(companyMarker, 'click', function() {
		infowindow.open(map,companyMarker);
	});
	
	
//Google Map click Show/Hide	
    $('.button-map').click(function() {
        $('#map').slideToggle(300, function(){
                google.maps.event.trigger(map, "resize"); // resize map
                map.setCenter(latlng); // set the center
            }); // slide it down
        $(this).toggleClass('close-map show-map');
    });

});		