Ext.define('pmdCE.view.main.VerovioImageStart', {
extend: 'Ext.form.Panel',
        layout:'absolute',
       
      //flex: 1,
      height: 100,
      width: 250,
       border: true,
       margin: '0 10 10 0',
      // title: 'Start',
    // id: 'verovioimagestart',
      
     // me: null,
    /* tileId: null,
     bodyId: null,*/
     renderer: null,
     me: null,
     
 
initComponent: function() {


me = this;
//this.id = 'verovioimagestart_'+Ext.getCmp('hairpinsitem').getTileId(),

this.id = Ext.getCmp('cemain').getEditorId()+'_start';

app = pmdCE.getApplication();
renderer = app.getRenderer();

Ext.Ajax.request({
    url: "resources/verovio/test.mei",
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
    $('#'+Ext.getCmp('cemain').getEditorId()+'_start'+'-body').html(svg);
    
    
    var xmlFile = response.responseXML;
    var meiElements = xmlFile.getElementsByTagName('note');
   
   var elements = document.getElementsByClassName('note');
 
    for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var elId = element.id;
    
    if(elId.indexOf('Start') != -1){ 
        $("#"+elId).on('click',function(e) {
        
        me.handleEvent(elements ,e.currentTarget, meiElements);
        
           /* var note = e.currentTarget;           
            for (var j = 0; j < meiElements.length; j++) {
                var elementXML = meiElements[j];
                var elXMLId = elementXML.getAttribute('xml:id');          
                if(elXMLId === note.id){   
                    if(note.style.fill === '#000000'){
                        var tstamp = elementXML.getAttribute('tstamp');
                        console.log("++++++++++++++++++"); 
                        console.log(elXMLId);
                    console.log(note.id);
                    console.log(elId);
                        console.log("++++++++++++++++++"); 
                        $(note).css('fill','#3adf00');
                        $(note).children().css('stroke','#3adf00');
                    }
                    else if(note.style.fill === '#3adf00'){
                        $(note).css('fill','#000000');
                        $(note).children().css('stroke','#000000');                       
                    }
                }
            }*/
    
   
    /* if(e.shiftKey){
        var win = new pmdCE.view.main.ChoiceDialog();
         win.show();
     }*/
     
     //e.preventDefault();             
        });
    }
   }
  }
});

        this.callParent()

},

handleEvent: function(elements, note, meiElements){

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var elId = element.id;   
    if(elId.indexOf('Start') != -1 && elId === note.id){ 
    for(var j = 0; j < meiElements.length; j++){
        var elementXML = meiElements[j];
                var elXMLId = elementXML.getAttribute('xml:id');          
                if(elXMLId === note.id){   
                    if(note.style.fill === '#000000'){
                        var tstamp = elementXML.getAttribute('tstamp');
                        console.log("++++++++++++++++++"); 
                        console.log(elXMLId);
                    console.log(note.id);
                    console.log(elId);
                        console.log("++++++++++++++++++"); 
                        $(note).css('fill','#3adf00');
                        $(note).children().css('stroke','#3adf00');
                    }
                    else if(note.style.fill === '#3adf00'){
                        $(note).css('fill','#000000');
                        $(note).children().css('stroke','#000000');                       
                    }
                }
        
    }
    
   
    console.log("Richtig");
    console.log(node);
    
    }
    
    }

    
    
}

 });
