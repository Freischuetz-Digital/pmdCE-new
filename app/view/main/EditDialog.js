Ext.define('pmdCE.view.main.EditDialog', {
   extend: 'Ext.window.Window',
   title: 'Change Element',
   flex: 1,
   //height: 200,
   //width: 500, 
   modal: true,
   bodyPadding: 10,
   
   staffField: null,  
  placeField: null,
  formField: null,
  tstampField: null,
   tstampField2: null,
  
   modelTest: null,
   
    initComponent: function() {
    
        
staffField = this.createTextField('staffField', 'Staff');
formField = this.createTextField('formField', 'Form');
placeField = this.createComboBox('Place');
tstampField = this.createTextField('tstampField', 'Tstamp');
tstamp2Field = this.createTextField('tstampField2', 'Tstamp2');

     this.items =  [
                staffField,
               tstampField,
                tstamp2Field,
                placeField,
                formField
            ] , 
   
    this.buttons = [{
        text:'Update',
        handler: function(){
         var testId = 'controlcompview_'+Ext.getCmp('hairpinsitem').getTileId();       
         var target = Ext.getCmp(testId).getSelectionModel().getSelection()[0];
         if(staffField.value !== null && typeof staffField.value !== 'undefined'){
             target.set('element', staffField.value);
         }
         console.log('startField.value');
         console.log(startField.value);
          if(startField.getValue() !== ""){
             target.set('start', startField.value);
         }
          if(endField.getValue() !== ""){
             target.set('end', endField.value);
         }
         if(placeField.getValue() !== ""){
              target.set('place', placeField.value);
         }
          if(formField.getValue() !== ""){
               target.set('form', formField.value);
         }
       
             this.up('window').close();
        }
    },{
        text: 'Cancel',
        handler: function(){
             this.up('window').close();
        }
    }],
   

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
    //Ext.getCmp('cetoolbar').getSaveButton().setDisabled(false);
     // modelTest.set('curvedir', combo.getValue());
    }
  }
});

return ceTextField;
}
    
    
});

