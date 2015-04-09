Ext.define('pmdCE.view.main.VerovioImageEnd', {
extend: 'Ext.form.Panel',
        layout:'absolute',
       
      //flex: 1,
       height: 100,
       width: 250,
     // id: 'verovioimageend',
       border: true,
      // title: 'End',
      tileId: null,
      bodyId: null,
      margin: '0 10 10 0',
     
        
initComponent: function() {

this.id = 'verovioimageend_'+Ext.getCmp('hairpinsitem').getTileId(),

app = pmdCE.getApplication();
renderer = app.getRenderer();

test = $.get( "resources/verovio/testEnd.mei", function( data ) {
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
    $('#verovioimageend_'+Ext.getCmp('hairpinsitem').getTileId()+'-body').html(svg);
    
  }),

        this.callParent()

}

    });