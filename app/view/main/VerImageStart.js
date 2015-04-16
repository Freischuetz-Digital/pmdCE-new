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
     currId: null,
     
 
initComponent: function() {

me = this;

//me.id = Ext.getCmp('cemain').getEditorId()+'_start';
//id = this.id;
currId = this.id;

app = pmdCE.getApplication();
renderer = app.getRenderer();

Ext.Ajax.request({
    url: "resources/verovio/test.mei",
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
   //var svg = renderer.renderData( text, options );
    
    //$('#'+Ext.getCmp('cemain').getEditorId()+'_start'+'-body').html(svg);
    $('#'+currId+'-body').html(svg);
   
    var xmlFile = response.responseXML;
    var meiElements = xmlFile.getElementsByTagName('note');
   
   var elements = document.getElementsByClassName('note');
  
    for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var elId = element.id;
    
    if(elId.indexOf('Start') != -1){ 
   
        $("#"+elId).on('click',function(e) {        
         // two notes were selected
         console.log(e.shiftKey);
        if(e.shiftKey){
            me.handleEventForTwoNotes(elements ,e.currentTarget, meiElements);
        }
        // one note was selected
        else {         
            me.handleEventForOneNote(elements ,e.currentTarget, meiElements);
        }            
       });
    }
   }
  }
});

        this.callParent()

},

handleEventForTwoNotes: function(elements, note, meiElements){
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var elId = element.id;     
    if(elId.indexOf('Start') != -1 && elId === note.id){ 
        for(var j = 0; j < meiElements.length; j++){
            var elementXML = meiElements[j];
            var elXMLId = elementXML.getAttribute('xml:id');
            if(elXMLId === note.id){  
                if(note.style.fill === '#000000'){
                        // TODO: set tstamp field
                        var tstamp = elementXML.getAttribute('tstamp');                        
                        $(note).css('fill','#3adf00');
                        $(note).children().css('stroke','#3adf00');
                 }
             }
        }
    } 
  } 
},

handleEventForOneNote: function(elements, note, meiElements){
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var elId = element.id;     
    if(elId.indexOf('Start') != -1 && elId === note.id){ 
        for(var j = 0; j < meiElements.length; j++){
            var elementXML = meiElements[j];
            var elXMLId = elementXML.getAttribute('xml:id');
            if(elXMLId === note.id){
            // set color           
                if(note.style.fill === '#000000'){
                        // TODO: set tstamp field
                        var tstamp = elementXML.getAttribute('tstamp'); 
                        if(Ext.getCmp('tstampFieldObv') !== 'undefined'){
                            Ext.getCmp('tstampFieldObv').setValue(tstamp);
                        }
                      /*  else if(Ext.getCmp('tstampFieldObv') !== 'undefined'){
                            
                        }*/
                        
                        $(note).css('fill','#3adf00');
                        $(note).children().css('stroke','#3adf00');
                 }
                 // set color back after second note click
                 else if(note.style.fill === '#3adf00'){
                        if(Ext.getCmp('tstampFieldObv') !== 'undefined'){
                            Ext.getCmp('tstampFieldObv').setValue('');
                        }
                        $(note).css('fill','#000000');
                        $(note).children().css('stroke','#000000');                       
                 }
             }
        }
    } 
    // other note was clicked: set color back
    else if(elId.indexOf('Start') != -1){
          $(element).css('fill','#000000');
          $(element).children().css('stroke','#000000');  
    }
    
  } 
}

 });
