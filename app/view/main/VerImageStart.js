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
     // var for compute av. value
     tstampShift1: null,
     
 
initComponent: function() {

me = this;

//me.id = Ext.getCmp('cemain').getEditorId()+'_start';
//id = this.id;
currId = this.id;

app = pmdCE.getApplication();
renderer = app.getRenderer();

var pageNr = Ext.getCmp('pages').getText();
var measureId = Ext.getCmp('cemain').getStartMeasure();
var staffNr = Ext.getCmp('cemain').getStaffNr();
var movement = Ext.getCmp('movement').getText();
var measurePath = movement+"_measure"+measureId+"_s"+staffNr;

Ext.Ajax.request({
    url: "resources/xql/getExtendedStaff.xql",
    params:{ 
       path: pageNr, 
       staffID: measurePath, 
       id_prefix: 'slurStart___'
            },
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
    var tstamp1 = null;
        for(var j = 0; j < meiElements.length; j++){
            var elementXML = meiElements[j];
            var elXMLId = elementXML.getAttribute('xml:id');
           
            if(elXMLId === note.id){  
                if(note.style.fill === '#000000'){
                        tstamp1 = elementXML.getAttribute('tstamp');                        
                        $(note).css('fill','#3adf00');
                        $(note).children().css('stroke','#3adf00');
                        
                 }
                 if(tstamp1 !== null && this.tstampShift1 !== null){
                  if(typeof Ext.getCmp('tstampFieldObv') !== 'undefined'){
                            
                             var tstamp1Int = parseFloat(tstamp1);
                             var tstampShift1Int = parseFloat(this.tstampShift1);
                            
                            var avValue = (tstamp1Int+tstampShift1Int)/2;
                            Ext.getCmp('tstampFieldObv').setValue(avValue);
                            break;
                        }
                        else if(typeof Ext.getCmp('ambiguouscard').getSelectedFieldId() !== 'undefined' 
                        && Ext.getCmp('ambiguouscard').getSelectedFieldId() !== null 
                        && !(Ext.getCmp('ambiguouscard').getSelectedFieldId().indexOf('tstamp2') > -1)
                        ){                        
                            var tstamp1Int = parseFloat(tstamp1);
                             var tstampShift1Int = parseFloat(this.tstampShift1);
                             
                            var avValue = (tstamp1Int+tstampShift1Int)/2;
                            var selectedId = Ext.getCmp('ambiguouscard').getSelectedFieldId();
                            Ext.getCmp(selectedId).setValue(avValue);
                            break;
                        }
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
                        var tstamp = elementXML.getAttribute('tstamp'); 
                        // for av. case
                        this.tstampShift1 = elementXML.getAttribute('tstamp'); 
                        if(typeof Ext.getCmp('tstampFieldObv') !== 'undefined'){
                            Ext.getCmp('tstampFieldObv').setValue(tstamp);
                        }
                       else if(typeof Ext.getCmp('ambiguouscard').getSelectedFieldId() !== 'undefined' 
                       && Ext.getCmp('ambiguouscard').getSelectedFieldId() !== null 
                       && !(Ext.getCmp('ambiguouscard').getSelectedFieldId().indexOf('tstamp2')> -1)
                        ){
                            var selectedId = Ext.getCmp('ambiguouscard').getSelectedFieldId();
                            Ext.getCmp(selectedId).setValue(tstamp);
                        }
                        
                        $(note).css('fill','#3adf00');
                        $(note).children().css('stroke','#3adf00');
                 }
                 // set color back after second note click
                 else if(note.style.fill === '#3adf00'){
                        tstampShift1 = null;
                        if(typeof Ext.getCmp('tstampFieldObv') !== 'undefined'){
                            Ext.getCmp('tstampFieldObv').setValue('');
                        }
                        else if(typeof Ext.getCmp('ambiguouscard').getSelectedFieldId() !== 'undefined' 
                        && Ext.getCmp('ambiguouscard').getSelectedFieldId() !== null 
                        && !(Ext.getCmp('ambiguouscard').getSelectedFieldId().indexOf('tstamp2') > -1)
                        ){
                            var selectedId = Ext.getCmp('ambiguouscard').getSelectedFieldId();
                            Ext.getCmp(selectedId).setValue('');
                        }
                        $(note).css('fill','#000000');
                        $(note).children().css('stroke','#000000');                       
                 }
             }
        }
    } 
    // other note was clicked: set color back
    else if(elId.indexOf('Start') != -1){
          tstampShift1 = null;
          $(element).css('fill','#000000');
          $(element).children().css('stroke','#000000');  
    }
    
  } 
}

 });
