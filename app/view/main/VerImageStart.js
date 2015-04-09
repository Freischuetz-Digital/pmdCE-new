Ext.define('pmdCE.view.main.VerovioImageStart', {
extend: 'Ext.form.Panel',
        layout:'absolute',
       
      //flex: 1,
      height: 100,
      width: 250,
       border: true,
       margin: '0 10 10 0',
      // title: 'Start',
     
      
     // me: null,
    /* tileId: null,
     bodyId: null,*/
 
initComponent: function() {

this.id = 'verovioimagestart_'+Ext.getCmp('hairpinsitem').getTileId(),


app = pmdCE.getApplication();
renderer = app.getRenderer();

test = $.get( "resources/verovio/test.mei", function( data ) {
    var options = JSON.stringify({
	pageHeight: 450,
	pageWidth: 800,
//	ignoreLayout: 5,
	border: 10,
	scale: 30
    });
    renderer.setOptions(options);
    renderer.loadData(data);
    var svg = renderer.renderPage( 1, options );
    $('#verovioimagestart_'+Ext.getCmp('hairpinsitem').getTileId()+'-body').html(svg);
  
    var elements = document.getElementsByClassName('note');
    
    

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var elId = element.id;
    //console.log(elId);
    if(elId.indexOf('Start') != -1){ 
    
    
     $("#"+elId).on('click',function(e) {
     
     var note = e.currentTarget;
     
      $(note).css('fill','#3adf00');
      $(note).children().css('stroke','#3adf00');
     
     if(e.shiftKey){
        var win = new pmdCE.view.main.ChoiceDialog();
         win.show();
     }
     
     //e.preventDefault();
              
                    
    });
     }
}

  }),
  
 
        this.callParent()

}

 });
