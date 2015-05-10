Ext.define('pmdCE.view.main.LeafletFacsimile', {
		extend: 'Ext.Component',
		alias: 'widget.leafletmapview',
		
		config:{
			map: null
		},
		afterRender: function(t, eOpts){
			this.callParent(arguments);
 
			var leafletRef = window.L;
			if (leafletRef == null){
				this.update('No leaflet library loaded');
			} else {
				/*var map = L.map(this.getId());
				
				map.setView([51.505, -0.09], 13);
				
				this.setMap(map);
				
				L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);*/



           var originalMaxSize = 1200;
          var maxZoomLevel = 0;
		  while(originalMaxSize > 256){
			originalMaxSize = originalMaxSize/2;
			maxZoomLevel++;
		  }
		  console.log("maxZoomLevel :"+maxZoomLevel);  
          
            var map = L.map(this.getId());
				
				map.setView([0, 0], 0);
				
				this.setMap(map);
            
            
           var facsimileTile =  L.tileLayer.facsimileLayer('resources/data/example/{z}-{x}-{y}.jpg', {
                minZoom: 0,
                maxZoom: maxZoomLevel,
		        continuousWorld : true
            }); 
             console.log("create");  
           facsimileTile.addTo(map);
            console.log("add"); 
			
			}
		},
		
		onResize: function(w, h, oW, oH){
		this.callParent(arguments);
		var map = this.getMap();
		if (map){
			map.invalidateSize();
		}
	}
	});