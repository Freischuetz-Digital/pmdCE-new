Ext.define('pmdCE.view.main.VerovioImageEnd', {
extend: 'Ext.form.Panel',
        layout:'absolute',
       
      //flex: 1,
       height: 100,
       width: 250,
     // id: 'verovioimageend',
       border: false,
      // title: 'End',
      tileId: null,
      bodyId: null,
      margin: '0 0 0 35',
      renderer: null,
      
      me2: null,
     currId2: null,
     // var for compute av. value
     tstampShift1: null,
     
        
initComponent: function() {

me2 = this;
currId2 = this.id;
Ext.getCmp('cemain').setVerEndId(currId2);

app = pmdCE.getApplication();
renderer = app.getRenderer();

var pageNr = Ext.getCmp('pages').getText();
var measureid = Ext.getCmp('cemain').getEndMeasure();
var staffNr = Ext.getCmp('cemain').getStaffNr();
var movement = Ext.getCmp('movement').getText();
var measurePath = movement+"_measure"+measureid+"_s"+staffNr;

Ext.Ajax.request({
url: "resources/verovio/testEnd.mei",
  // url: "resources/xql/getExtendedStaff.xql",
    method: 'GET',
    params:{ 
        path: pageNr, 
       staffID: measurePath, 
       id_prefix: 'hairpinEnd___',
       endPageName: pageNr
            },
    success: function(response){
        var text = response.responseText;
        
        var options = JSON.stringify({
	pageHeight: 450,
	pageWidth: 850,
	ignoreLayout: 25,
	border: 0,
	scale: 33
    });
    renderer.setOptions(options);
                  renderer.loadData(text);
    var svg = renderer.renderPage( 1, options );
    //$('#'+Ext.getCmp('cemain').getEditorId()+'_end'+'-body').html(svg);
    $('#'+currId2+'-body').html(svg);
    
    var xmlFile = jQuery.parseXML(text);
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
        var tstamp = null
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
                 if(tstamp !== null && this.tstampShift1 !== null){
                  if(typeof Ext.getCmp('tstampFieldObv') !== 'undefined'){
                  
                            var tstampInt = parseFloat(tstamp);
                             var tstampShift1Int = parseFloat(this.tstampShift1);
                  
                            var avValue = (tstampInt+tstampShift1Int)/2;
                            Ext.getCmp('tstampField2Obv').setValue("m+"+avValue);
                            Ext.getCmp('tstampField2Obv').focus();
                            break;
                        } 
                        else if(typeof Ext.getCmp('ambiguouscard').getSelectedFieldId() !== 'undefined' 
                        && Ext.getCmp('ambiguouscard').getSelectedFieldId() !== null 
                       && Ext.getCmp('ambiguouscard').getSelectedFieldId().indexOf('tstamp2') > -1
                        ){
                            var tstampInt = parseFloat(tstamp);
                             var tstampShift1Int = parseFloat(this.tstampShift1);
                            
                            var avValue = (tstampInt+tstampShift1Int)/2;
                            var selectedId = Ext.getCmp('ambiguouscard').getSelectedFieldId();
                            Ext.getCmp(selectedId).setValue("m+"+avValue);
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
    if(elId.indexOf('End') != -1 && elId === note.id){ 
        for(var j = 0; j < meiElements.length; j++){
            var elementXML = meiElements[j];
            var elXMLId = elementXML.getAttribute('xml:id');
            if(elXMLId === note.id){
            // set color           
                if(note.style.fill === '#000000'){
                        // TODO: set tstamp field
                        var tstamp = elementXML.getAttribute('tstamp');  
                         this.tstampShift1 = elementXML.getAttribute('tstamp');
                        if(typeof Ext.getCmp('tstampField2Obv') !== 'undefined'){
                            Ext.getCmp('tstampField2Obv').setValue("m+"+tstamp);
                             Ext.getCmp('tstampField2Obv').focus();
                        }
                       else if(typeof Ext.getCmp('ambiguouscard').getSelectedFieldId() !== 'undefined' 
                       && Ext.getCmp('ambiguouscard').getSelectedFieldId() !== null 
                       && Ext.getCmp('ambiguouscard').getSelectedFieldId().indexOf('tstamp2') > -1
                        ){
                        console.log(Ext.getCmp('ambiguouscard').getSelectedFieldId());
                            var selectedId = Ext.getCmp('ambiguouscard').getSelectedFieldId();
                            Ext.getCmp(selectedId).setValue("m+"+tstamp);
                            Ext.getCmp(selectedId).focus();
                        }
                        $(note).css('fill','#3adf00');
                        $(note).children().css('stroke','#3adf00');
                 }
                 // set color back after second note click
                 else if(note.style.fill === '#3adf00'){
                    tstampShift1 = null;
                        if(typeof Ext.getCmp('tstampField2Obv') !== 'undefined'){
                            Ext.getCmp('tstampField2Obv').setValue('');
                             Ext.getCmp('tstampField2Obv').focus();
                        }
                         else if(typeof Ext.getCmp('ambiguouscard').getSelectedFieldId() !== 'undefined'
                         && Ext.getCmp('ambiguouscard').getSelectedFieldId() !== null 
                         && Ext.getCmp('ambiguouscard').getSelectedFieldId().indexOf('tstamp2') > -1
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
    else if(elId.indexOf('End') != -1){
        tstampShift1 = null;
          $(element).css('fill','#000000');
          $(element).children().css('stroke','#000000');  
    }
    
  } 
}

    });