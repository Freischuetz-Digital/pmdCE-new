Ext.define('pmdCE.view.main.AddDialog', {
   extend: 'Ext.window.Window',
   title: 'Add Hairpin',
   flex: 1,
   //height: 200,
   //width: 500, 
   modal: true,
   bodyPadding: 10,
   
   staffField: null,  
    tstampField: null,
 placeField: null,
  formField: null,
  tstampField2: null,
 
    initComponent: function() {
    
    staffField = this.createTextField('staffField', 'Staff');
formField = this.createRadioGroup();
placeField = this.createComboBox('Place');
tstampField = this.createTextField('tstampField', 'Tstamp');
tstamp2Field = this.createTextField('tstampField2', 'Tstamp2');

     this.items =  [
                staffField,
                tstampField,
                tstamp2Field,
                placeField,
                formField
              /*  {
            xtype: 'radiogroup',
            fieldLabel: 'Form',
            cls: 'x-check-group-alt',
            
            items: [
                {boxLabel: 'Cres', name: 'cres', inputValue: 1, margin: '0 10 10 0'},
                {boxLabel: 'Dim', name: 'dim', inputValue: 2, checked: true, margin: '0 10 10 0'}
                
            ]
        }*/
            ] , 
   
    this.buttons = [{
        text:'Create',
       
        handler: 
        
        
        function(){
        
       // var testId =  'controlcompview_'+Ext.getCmp('hairpinsitem').getTileId();
        
        
        // var target = Ext.getCmp('hairpinsitem').getSelectionModel().getSelection()[0];
        
      // var target = Ext.getCmp(testId).getSelectionModel().getSelection()[0];
       //Ext.getCmp(testId).selModel.getSelection()[0] || Ext.getCmp(testId).getRootNode();
       //  var selectedEl = target.get('element');
       
       
       var ceEditor = new pmdCE.view.main.CEEditor();
                Ext.getCmp('centertabeditor').add(ceEditor);
                Ext.getCmp('centertabeditor').setActiveItem(ceEditor);
         
var hairpin = Ext.create('pmdCE.model.Hairpins', { 
                    id: 'test',
                    staff: staffField.value,
                    tstamp: tstampField.value,
                    tstamp2: tstamp2Field.value,
                    place: placeField.value,
                    form: formField.value,
                    placement: 'obvious' 
	    });
	   // this.isNewRecord = true;
	   // this.newRecordId = newCar.get('id');
	   // var grid = this.lookupReference('modelCarsGrid');
	    // pmdCE.getApplication().getHairpinsDataStore().insert(target.get('depth'), newCar);	    
	    //target.appendChild(newCar);
	    
	    
	    var app = pmdCE.getApplication();
         var store = app.getHairpinsStore();
	    store.insert(0, hairpin);
	    
	   
	   
	   
	  // var rootNode = Ext.getCmp('hairpinsitem').getSelectionModel().getSelection()[0];
	   //Ext.getCmp(testId).selModel.getSelection()[0];
	    
       // rootNode.appendChild(hairpin);
	     	     
	    // rootNode.getChildAt(1).appendChild(newCar);	     
	    // pmdCE.getApplication().getHairpinsDataStore().add(newCar);
            // record.remove(true);
            // store.sync();
	   // grid.getPlugin('modelCarsRowEditingPlugin').startEdit(newCar);
	   
	   
	 	  
            this.up('window').close();
           
       }
      
    },{
        text: 'Cancel',
        handler: function () { this.up('window').close(); }
    }]
   

this.callParent()
 
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
    
}
});

    
    
    
     
    