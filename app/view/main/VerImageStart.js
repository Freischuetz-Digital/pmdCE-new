Ext.define('pmdCE.view.main.VerovioImageStart', {
extend: 'Ext.form.Panel',
        layout:'absolute',
       
      //flex: 1,
      height: 100,
      width: 250,
       border: false,
       margin: '0 0 0 35',
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
     currId: null,
      
initComponent: function() {

me = this;
currId = this.id;
Ext.getCmp('cemain').setVerStartId(currId);

app = pmdCE.getApplication();
renderer = app.getRenderer();

var pageNr = Ext.getCmp('pages').getText();
var measureid = Ext.getCmp('cemain').getStartMeasure();
var staffNr = Ext.getCmp('cemain').getStaffNr();
var movement = Ext.getCmp('movement').getText();
var measurePath = movement+"_measure"+measureid+"_s"+staffNr;

Ext.getCmp('cemain').setMeasureId(movement+"_measure"+measureid);

Ext.Ajax.request({
    url: "resources/verovio/test.mei",
   // url: "resources/xql/getExtendedStaff.xql",
    method: 'GET',
    params:{ 
       path: pageNr, 
       staffID: measurePath, 
       id_prefix: 'hairpinStart___',
       endPageName: pageNr
            },
    success: function(response){
    
        var text = response.responseText;
        
        var options = JSON.stringify({
	pageHeight: 450,
	pageWidth: 850,
	ignoreLayout: 25,
	border: 0,
	scale: 35
    });
    renderer.setOptions(options);
    renderer.loadData(text);
   // var svg = renderer.renderPage( 1, options );
   var svg = renderer.renderData( text, options );
   
    $('#'+currId+'-body').html(svg);
    var xmlFile = jQuery.parseXML(text);
   // console.log("*******VERSTART********");
   // console.log(xmlFile);
   
    var meiElements = xmlFile.getElementsByTagName('note');
     
   var elements = document.getElementsByClassName('note');
  // console.log(elements);
    
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
                            Ext.getCmp('tstampFieldObv').focus();
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
                            Ext.getCmp(selectedId).focus();
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
                            Ext.getCmp('tstampFieldObv').focus();
                        }
                       else if(typeof Ext.getCmp('ambiguouscard').getSelectedFieldId() !== 'undefined' 
                       && Ext.getCmp('ambiguouscard').getSelectedFieldId() !== null 
                       && !(Ext.getCmp('ambiguouscard').getSelectedFieldId().indexOf('tstamp2')> -1)
                        ){
                            var selectedId = Ext.getCmp('ambiguouscard').getSelectedFieldId();
                            Ext.getCmp(selectedId).setValue(tstamp);
                            Ext.getCmp(selectedId).focus();
                        }
                        
                        $(note).css('fill','#3adf00');
                        $(note).children().css('stroke','#3adf00');
                 }
                 // set color back after second note click
                 else if(note.style.fill === '#3adf00'){
                        tstampShift1 = null;
                        if(typeof Ext.getCmp('tstampFieldObv') !== 'undefined'){
                            Ext.getCmp('tstampFieldObv').setValue('');
                            Ext.getCmp('tstampFieldObv').focus();
                        }
                        else if(typeof Ext.getCmp('ambiguouscard').getSelectedFieldId() !== 'undefined' 
                        && Ext.getCmp('ambiguouscard').getSelectedFieldId() !== null 
                        && !(Ext.getCmp('ambiguouscard').getSelectedFieldId().indexOf('tstamp2') > -1)
                        ){
                            var selectedId = Ext.getCmp('ambiguouscard').getSelectedFieldId();
                            Ext.getCmp(selectedId).setValue('');
                            Ext.getCmp(selectedId).focus();
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
