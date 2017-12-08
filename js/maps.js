// JavaScript Documentfunction initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 3,
          center: {lat: 60, lng: 94}
        });

        setMarkers(map);
      }

      // Data for the markers consisting of a name, a LatLng and a zIndex for the
      // order in which these markers should display on top of each other.
      var points = [
        ['Baikal', 53.5587, 108.164996, 4, 'baikal.html'],
        ['Siberia', 61.01371, 99.196656, 5, 'siberia.html'],
        ['Kamchatka', 56.357369, 160.758435, 3, 'kamchatka.html'], 
        ['Saint Petersburg', 59.93428, 30.335099, 2, 'piter.html'],
        ['Moscow', 55.755826, 37.6173, 1, 'moscow.html'],
		['Sochy', 43.672776, 40.294654, 6, 'skiing.html'],
		['Elbrus', 43.349953, 42.446312, 7, 'skiing.html'],
		['Dombay', 43.289402, 41.623506, 8, 'skiing.html'],
		['Oymyakon', 63.464138, 142.773727, 9, 'http://oymyakon.ru']
		/*['Salehard', 66.550073, 66.602811, 10, 'www.google.com']*/
		  ];
		/*['Sochy', 43.672776,40.294654,6]
       ['Elbrus', 43.349953,42.446312,7]
		['Dombay', 43.289402,41.623506,8]
		['Oymyakon', 63.464138,142.773727,9]
		['Salehard',66.550073,66.602811,10];*/
	
      function setMarkers(map) {
       
        // Origins, anchor positions and coordinates of the marker increase in the X
        // direction to the right and in the Y direction down.	  
     
       var shape = {
          coords: [1, 1, 1, 20, 18, 20, 18, 1],
          type: 'poly'
        };		  
		  
       for (var i = 0; i < points.length; i++) {
          var point = points[i];
          var marker = new google.maps.Marker({
            position: {lat: point[1], lng: point[2]},
            map: map,            
            shape: shape,
            title: point[0],
            zIndex: point[3],
			url: point[4]
		  });
			
		  google.maps.event.addListener(marker, 'click', function() {
    		window.location.href = this.url;
          });
      	}
	  }
 
   
   