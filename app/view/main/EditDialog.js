Ext.define('pmdCE.view.main.EditDialog', {
   extend: 'Ext.window.Window',
   title: 'Change Element',
   flex: 1,
   //height: 200,
   //width: 500, 
   modal: true,
   bodyPadding: 10,
   
   staffField: null, 
   staffField2: null, 
  placeField: null,
  formField: null,
  tstampField: null,
   tstampField2: null,
  
   modelTest: null,
   
    initComponent: function() {
    
        
staffField = this.createTextField('staffField', 'Staff');
staffField2 = this.createTextField('secondStaffField', 'Second staff');
formField = this.createComboBoxForm('Form');
placeField = this.createComboBox('Place');
tstampField = this.createTextField('tstampField', 'Tstamp');
tstamp2Field = this.createTextField('tstampField2', 'Tstamp2');

     this.items =  [
                staffField,
                staffField2,
               tstampField,
                tstamp2Field,
                placeField,
                formField
            ] , 
   
    this.buttons = [{
        text:'Update',
        handler: function(){
       
          var target = Ext.getCmp('cegridpanel').getSelectionModel().getSelection()[0];
          var store = pmdCE.getApplication().getHairpinDataStore();
       
         if(staffField.getValue() !== ""){
             target.set('staff', staffField.getValue());
         }
         if(staffField2.getValue() !== ""){
             target.set('staff2', staffField2.getValue());
         }
          if(tstampField.getValue() !== ""){
             target.set('tstamp', tstampField.value);
         }
          if(tstamp2Field.getValue() !== ""){
             target.set('tstamp2', tstamp2Field.getValue());
         }
         if(placeField.getValue() !== null){
              target.set('place', placeField.getValue());
         }       
         if(formField.getValue() !== null){
               target.set('form', formField.getValue());
         }
 
         Ext.getCmp('cegridpanel').setSelection(target);
         
    Ext.getCmp('saveButton').setDisabled(false);
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
        
        var states = new Array("above", "below", "between"); 
    
    var ceTextField = Ext.create('Ext.form.ComboBox', {
    fieldLabel: fieldName,
    store: states,
    queryMode: 'local',
    displayField: 'name',
    editable: false,
    //valueField: 'abbr',
    listeners: {
    select: function(combo, record, index) {
    //Ext.getCmp('cetoolbar').getSaveButton().setDisabled(false);
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
                {boxLabel: 'Cres', name: 'Form', inputValue: 1, margin: '0 10 10 0'},
                {boxLabel: 'Dim', name: 'Form', inputValue: 2, margin: '0 10 10 0'}
                
            ]
   
   });
   return radios;
    
},

createComboBoxForm: function(fieldName){
    
    var states = new Array("cres", "dim"); 
    var me = this;
    var ceTextField = Ext.create('Ext.form.ComboBox', {
    fieldLabel: fieldName,
    store: states,
    queryMode: 'local',
    displayField: 'name',
    editable: false,
    listeners: {
    select: function(combo, record, index) {
       
    }
  }
  });

return ceTextField;
}
    
    
});

