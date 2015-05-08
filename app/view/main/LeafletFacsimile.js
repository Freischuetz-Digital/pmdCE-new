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
				var map = L.map(this.getId());
				//map.setView([42.3583, -71.0603], 13);
				
				map.setView([51.505, -0.09], 13);
				
				this.setMap(map);
				
				L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
			
			}
		}
		
		/*onResize: function(w, h, oW, oH){
		this.callParent(arguments);
		var map = this.getMap();
		if (map){
			map.invalidateSize();
		}
	}*/
	});