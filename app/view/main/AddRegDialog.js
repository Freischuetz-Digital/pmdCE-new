Ext.define('pmdCE.view.main.AddRegDialog', {
   extend: 'Ext.window.Window',
   title: 'Add Reg Element',
   flex: 1,
   //height: 200,
   //width: 500, 
   modal: true,
   bodyPadding: 10,
   layout: 'hbox',
   
   staffField: null,  
    tstampField: null,
 placeField: null,
  formField: null,
  tstampField2: null,
  satffFieldBetween: null,
  selectedNode: null,
  
  titleForAdd: null,
 
    initComponent: function() {
    
    selection = Ext.getCmp('cegridpanel').getSelectionModel().getSelection()[0];
	  rootNode = pmdCE.getApplication().getHairpinDataStore().getRootNode();
	  
	  for(var i = 0; i < rootNode.childNodes.length ; i++){
	  if(rootNode.childNodes[i].data.id === selection.data.id
	  && rootNode.childNodes[i].data.name === selection.data.name){
	      selectedNode = rootNode.childNodes[i];	
	      Ext.getCmp('cemain').setStartMeasure(selectedNode.data.measurenr);
	      Ext.getCmp('cemain').setEndMeasure(selectedNode.data.measurenr);
	      Ext.getCmp('cemain').setStaffNr(selectedNode.childNodes[0].data.staff);
	      break;
	  }	      
	  }    
 
    staffField = this.createTextField('staffField', 'Staff');
    staffField.setValue(selectedNode.childNodes[0].data.staff);
     staffField.setDisabled(true);
    satffFieldBetween = this.createComboBoxStaff('Second staff'); 
    formField = this.createRadioGroup();
    placeField = this.createComboBox('Place');
    tstampField = this.createTextField('tstampField', 'Tstamp');
    tstamp2Field = this.createTextField('tstampField2', 'Tstamp2');

    verovioImageStart = new pmdCE.view.main.VerovioImageStart(),
        verovioImageEnd = new pmdCE.view.main.VerovioImageEnd(),

     this.items =  [
      {
        xtype: 'fieldset',
        title: 'Values',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },
        
        items: [
            staffField,
            satffFieldBetween,
            placeField,
            formField
        ]
    }, {
        xtype: 'fieldset',
        defaultType: 'textfield',
         title: 'Start Time',
        defaults: {
            anchor: '100%'
        },
        
        items: [
                tstampField,
                verovioImageStart
        ]
    }, {
        xtype: 'fieldset',
        defaultType: 'textfield',
         title: 'End Time',
        defaults: {
            anchor: '100%'
        },
        
        items: [
                tstamp2Field,
                verovioImageEnd
        ]
    }
     
            ] , 
   
    this.buttons = [{
        text:'Create',      
        handler: 
              
        function(){
        
        var formValue = formField.getValue().Form === 2 ? "dim" : 'cres';
        
        if(selectedNode !== null){
        
           selectedNode.appendChild({
                    icon: 'resources/images/mix_volume.png',
                    staff: staffField.getValue(),                   
                    tstamp: tstampField.getValue(),
                    tstamp2: tstamp2Field.getValue(),
                    place: placeField.getValue(),
                    form: formValue,
                    name: 'reg',
                    tag: 'reg',
                    leaf: true
        });	
        
        selectedNode.expand();
	  
	  Ext.getCmp('cegridpanel').setSelection(selectedNode);
	  
	  Ext.getCmp('cegridpanel').showXMLforSelectedElement(selectedNode);
	  
       Ext.getCmp('saveButton').setDisabled(false);
        
        }
       
            this.up('window').close();
           
       }
      
    },{
        text: 'Cancel',
        handler: function () { this.up('window').close(); }
    }]
   

this.callParent()
 
    },
    
    setTitleForAdd: function(title){
        this.titleForAdd = title;
        console.log('setTitle');
        console.log(this.titleForAdd);
    },
    
        createTextField: function(fieldName, fieldLabel){
    var ceTextField = Ext.create('Ext.form.field.Text',{
        name: fieldName,
        fieldLabel: fieldLabel,
      //  allowBlank: false , // requires a non-empty value
        listeners: {'render': function(c) {
            c.getEl().on('keyup', function() {   
           // Ext.getCmp('cetoolbar').getSaveButton().setDisabled(false);
               // modelTest.set('start', startField.value);
            }, c);
        }
  }
   });

return ceTextField;
},
    
        createComboBox: function(fieldName){
    
    var states = Ext.create('Ext.data.Store', {
    fields: ['abbr', 'name'],
    data : [
        {"abbr":"above", "name":"above"},
        {"abbr":"below", "name":"below"},
         {"abbr":"between", "name":"between"}
    ]
});
    
    var ceTextField = Ext.create('Ext.form.ComboBox', {
    fieldLabel: fieldName,
    store: states,
    queryMode: 'local',
    displayField: 'name',
    editable: false,
    valueField: 'abbr',
    listeners: {
    select: function(combo, record, index) {
   // Ext.getCmp('cetoolbar').getSaveButton().setDisabled(false);
     // modelTest.set('curvedir', combo.getValue());
    }
  }
});

return ceTextField;
},

createRadioGroup: function(){
    var radios = new Ext.form.RadioGroup({
     xtype: 'radiogroup',
            fieldLabel: 'Form',
            cls: 'x-check-group-alt',
            
            items: [
                {boxLabel: 'Cres', name: 'cres', inputValue: 1, margin: '0 10 10 0'},
                {boxLabel: 'Dim', name: 'dim', inputValue: 2, checked: true, margin: '0 10 10 0'}
                
            ]
    
    
    /* columns    : 2,
       items: [
             {boxLabel: 'E-Mail', name: 'communication', inputValue: 1},
             {boxLabel: 'Nagios', name: 'communication', inputValue: 2}
        ]*/
   });
   return radios;
    
},

   createComboBoxStaff: function(fieldName){
   
   var pageStaffMap = Ext.getCmp('cetoolbar').staffNr;
   var selectedPage = Ext.getCmp('pages').getText();
   
   var test = pageStaffMap[selectedPage];
  
   var dataMeasureNr = new Array(test.length); 
   var value = test[0];
   for(var i = 0; i < test.length ; i++){
        dataMeasureNr[i] = value++;       
   }
  
    var ceTextField = Ext.create('Ext.form.ComboBox', {
    fieldLabel: fieldName,
    store: dataMeasureNr,
    queryMode: 'local',
    displayField: 'name',
    editable: false,
    icon: 'resources/images/mix_volume.png',
    valueField: 'abbr',
    listeners: {
    select: function(combo, record, index) {
     if(fieldName.indexOf('Second') === -1){
         Ext.getCmp('cemain').setStaffNr(combo.getValue());
     }
       
    //Ext.getCmp('cetoolbar').getSaveButton().setDisabled(false);
     // modelTest.set('curvedir', combo.getValue());
    }
  }
  });
return ceTextField;
}
});

    
    
    
     
    