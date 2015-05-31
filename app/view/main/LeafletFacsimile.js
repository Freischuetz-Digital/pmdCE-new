Ext.define('pmdCE.view.main.LeafletFacsimile', {
		extend: 'Ext.Component',
		alias: 'widget.leafletmapview',
		id: 'leafletfacsimile',
		config:{
			map: null
		},
		afterRender: function(t, eOpts){
			this.callParent(arguments);
 
			var leafletRef = window.L;
			if (leafletRef == null){
				this.update('No leaflet library loaded');
			} else {
				
       var app = pmdCE.getApplication();
        
       var store = app.getFacsimileStore();
       
       // var app = pmdCE.getApplication();
       // var facsimileStore = app.getFacsimileStore();
       // store.getProxy().extraParams.path = Ext.getCmp('pages').getText();
      //  store.load();
       
        
      /*  store.getProxy().extraParams.path = Ext.getCmp('pages').getText();
        store.load();*/
         
         facsimileHeight = 
         //4315;
         store.data.items[0].data.page[0].height;
        facsimileWidth = 
        //3525;
        store.data.items[0].data.page[0].width;
        var originalMaxSize = null;
        
        if(facsimileHeight > facsimileWidth){
            originalMaxSize = facsimileHeight;
        }
        else{
            originalMaxSize = facsimileWidth;
        }
       
          var maxZoomLevel = 0;
		  while(originalMaxSize > 256){
			originalMaxSize = originalMaxSize/2;
			maxZoomLevel++;
		  }
		  console.log("maxZoomLevel :"+maxZoomLevel);  
          
            var map = L.map(this.getId());
				
				map.setView([0, 0], 1);
				
				this.setMap(map);
            
            
           var facsimileTile =  L.tileLayer.facsimileLayer('resources/data/example/{z}-{x}-{y}.jpg', {
                minZoom: 0,
                maxZoom: maxZoomLevel,
		        continuousWorld : true
            }); 
           
           
          /* L.tileLayer.facsimileLayer('http://localhost:8080/exist/apps/controlevents-data/D1849/D1849_p106/{z}-{x}-{y}.jpg', {
                minZoom: 0,
                maxZoom: maxZoomLevel,
		        continuousWorld : true
            });*/ 
              
           facsimileTile.addTo(map);
           
           var selectedPage = Ext.getCmp('pages').getText(); 
            var pageStaffMap = Ext.getCmp('cetoolbar').staffNr;
            var test = pageStaffMap[selectedPage];
            var staffNr = test[test.length-1];
         var pageMeasuresMap = Ext.getCmp('cetoolbar').pageMeasuresMap; 
            var test = pageMeasuresMap[selectedPage];  
            var value = test[0];
           
           var zones = store.data.items[0].data.zones;
           for(i=0; i < zones.length; i++){
               if(zones[i].type === 'measure'){
                   var lrx = zones[i].lrx;
                   var lry = zones[i].uly;
                   var ulx = zones[i].ulx;
                   var uly = 0;
                 facsimileTile.showRectangleCenter(ulx, uly, lrx, lry, zones[i].n);
               }
               if(zones[i].type === 'staff' && zones[i].n <= staffNr && zones[i].id.indexOf(value) > -1){ 
                    var lrx = zones[i].ulx;
                   var lry = zones[i].lry;
                   var ulx = 0;
                  var uly = zones[i].uly;
                 facsimileTile.showRectangleCenter(ulx, uly, lrx, lry, zones[i].n);
               }
           }
           
           
           map.on('click', function(e) {
                  /*  console.log(e.latlng);
                    console.log(e.layerPoint);
                    console.log(e.containerPoint);
                    console.log(e.originalEvent);*/
            });
			
			}
		},
    
		onResize: function(w, h, oW, oH){
		this.callParent(arguments);
		var map = this.getMap();
		if (map){
			map.invalidateSize();
		}
	},
	
	listeners: {
        click : {
            fn: function() {
            
             var app = pmdCE.getApplication();
               var store = app.getFacsimileStore();
                console.log(store);
                console.log(document);
         
         facsimileHeight = store.data.items[0].data.page.height;
        facsimileWidth = store.data.items[0].data.page.width;
       
            },
             element: 'el'
         
        }    
    }
	
	});