Ext.define('pmdCE.view.main.AddDialog', {
   extend: 'Ext.window.Window',
   title: 'Add Element',
   flex: 1,
   //height: 200,
   //width: 500, 
   modal: true,
   bodyPadding: 10,
   
   staffField: null,  
  startField: null,
  tstampField: null,
  endField: null,
  placeField: null,
  formField: null,
  tstampField2: null,
  durField: null,
  
    initComponent: function() {
    
    staffField = this.createTextField('staffField', 'Staff');
formField = this.createTextField('formField', 'Form');
startField = this.createTextField('startField', 'StartId');
endField = this.createTextField('endField', 'EndId');
placeField = this.createComboBox('Place');
tstampField = this.createTextField('tstampField', 'Tstamp');
tstamp2Field = this.createTextField('tstampField2', 'Tstamp2');
durField = this.createTextField('durField', 'Duration');
    
     this.items =  [
                staffField,
                startField,
                tstampField,
                endField,
                tstamp2Field,
                durField,
                placeField,
                formField
            ] , 
   
    this.buttons = [{
        text:'Create',
       
        handler: 
        
        
        function(){
        
        var testId = 'controlcompview_'+Ext.getCmp('hairpinsitem').getTileId();
        
       var target = Ext.getCmp(testId).getSelectionModel().getSelection()[0];
       //Ext.getCmp(testId).selModel.getSelection()[0] || Ext.getCmp(testId).getRootNode();
         var selectedEl = target.get('element');
         
var hairpin = Ext.create('pmdCE.model.Task', { 
                    element: staffField.value,
                    start: startField.value,
                    end: endField.value,
                    place: placeField.value,
                    form: formField.value,
                    leaf: true 
	    });
	   // this.isNewRecord = true;
	   // this.newRecordId = newCar.get('id');
	   // var grid = this.lookupReference('modelCarsGrid');
	    // pmdCE.getApplication().getHairpinsDataStore().insert(target.get('depth'), newCar);	    
	    //target.appendChild(newCar);
	   var rootNode = Ext.getCmp(testId).getSelectionModel().getSelection()[0];
	   //Ext.getCmp(testId).selModel.getSelection()[0];
	    
        rootNode.appendChild(hairpin);
	     	     
	    // rootNode.getChildAt(1).appendChild(newCar);	     
	    // pmdCE.getApplication().getHairpinsDataStore().add(newCar);
            // record.remove(true);
             pmdCE.getApplication().getHairpinsDataStore().sync();
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
}
});

    
    
    
     
    