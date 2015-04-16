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
      renderer: null,
      
      me2: null,
     currId2: null,
     
        
initComponent: function() {

me2 = this;
currId2 = this.id;

app = pmdCE.getApplication();
renderer = app.getRenderer();

Ext.Ajax.request({
    url: "resources/verovio/testEnd.mei",
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
    //$('#'+Ext.getCmp('cemain').getEditorId()+'_end'+'-body').html(svg);
    $('#'+currId2+'-body').html(svg);
    
    var xmlFile = response.responseXML;
    var meiElements = xmlFile.getElementsByTagName('note');
   
   var elements = document.getElementsByClassName('note');
 
    for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var elId = element.id;
    if(elId.indexOf('End') != -1){ 
        $("#"+elId).on('click',function(e) {        
         // two notes were selected
        if(e.shiftKey){
            me2.handleEventForTwoNotes(elements ,e.currentTarget, meiElements);
        }
        // one note was selected
        else {      
            me2.handleEventForOneNote(elements ,e.currentTarget, meiElements);
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
       
    if(elId.indexOf('End') != -1 && elId === note.id){ 
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
    if(elId.indexOf('End') != -1 && elId === note.id){ 
        for(var j = 0; j < meiElements.length; j++){
            var elementXML = meiElements[j];
            var elXMLId = elementXML.getAttribute('xml:id');
            if(elXMLId === note.id){
            // set color           
                if(note.style.fill === '#000000'){
                        // TODO: set tstamp field
                        var tstamp = elementXML.getAttribute('tstamp');                         
                        if(Ext.getCmp('tstampField2Obv') !== 'undefined'){
                            Ext.getCmp('tstampField2Obv').setValue(tstamp);
                        }
                      /*  else if(Ext.getCmp('tstampFieldObv') !== 'undefined'){
                            
                        }*/
                        $(note).css('fill','#3adf00');
                        $(note).children().css('stroke','#3adf00');
                 }
                 // set color back after second note click
                 else if(note.style.fill === '#3adf00'){
                        if(Ext.getCmp('tstampField2Obv') !== 'undefined'){
                            Ext.getCmp('tstampField2Obv').setValue('');
                        }
                        $(note).css('fill','#000000');
                        $(note).children().css('stroke','#000000');                       
                 }
             }
        }
    } 
    // other note was clicked: set color back
    else if(elId.indexOf('End') != -1){
          $(element).css('fill','#000000');
          $(element).children().css('stroke','#000000');  
    }
    
  } 
}

    });