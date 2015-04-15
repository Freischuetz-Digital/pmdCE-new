Ext.define('pmdCE.view.main.VerovioImageEnd', {
extend: 'Ext.form.Panel',
        layout:'absolute',
       
      //flex: 1,
       height: 100,
       width: 250,
      id: 'verovioimageend',
       border: true,
      // title: 'End',
      tileId: null,
      bodyId: null,
      margin: '0 10 10 0',
      renderer: null,
     
        
initComponent: function() {

this.id = Ext.getCmp('cemain').getEditorId()+'_end';

//this.id = 'verovioimageend_'+Ext.getCmp('hairpinsitem').getTileId(),
app = pmdCE.getApplication();
renderer = app.getRenderer();

//renderer = Ext.getCmp('verovioview').renderer,
//renderer = new verovio.toolkit();

/*app = pmdCE.getApplication();
renderer = app.getRenderer();*/



Ext.Ajax.request({
    url: "resources/verovio/testEnd.mei",
   /* params: {
        id: 1
    },*/
    success: function(response){
        var text = response.responseText;
        
        var options = JSON.stringify({
	pageHeight: 450,
	pageWidth: 800,
	//ignoreLayout: 5,
	border: 10,
	scale: 30
    });
    renderer.setOptions(options);
                  renderer.loadData(text);
    var svg = renderer.renderPage( 1, options );
    $('#'+Ext.getCmp('cemain').getEditorId()+'_end'+'-body').html(svg);
    
    /*var xml = response.responseXML;
    var users = xml.getElementsById("measure");
    console.log(users);*/
       
        // process server response here
    }
});

/*test = $.get( "resources/verovio/testEnd.mei", function( data ) {
//renderer = new verovio.toolkit();
    var options = JSON.stringify({
	pageHeight: 450,
	pageWidth: 800,
	//ignoreLayout: 5,
	border: 10,
	scale: 30
    });
    renderer.setOptions(options);
                  renderer.loadData(data);
    var svg = renderer.renderPage( 1, options );
    $('#verovioimageend-body').html(svg);
   // $('#verovioimageend_'+Ext.getCmp('hairpinsitem').id+'-body').html(svg);
    
  }),*/

        this.callParent()

}

    });