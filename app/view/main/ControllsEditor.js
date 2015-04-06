Ext.define('pmdCE.view.main.ControllsEditor', {
extend: 'Ext.form.Panel',
       //layout:'absolute',
       
       
     // flex: 1,
     width: 300,
      
      buttonTest: null,
  startField: null,
  endField: null,
  modelTest: null,
  staffField: null,
        
initComponent: function() {
  var states = Ext.create('Ext.data.Store', {
    fields: ['abbr', 'name'],
    data : [
        {"abbr":"above", "name":"above"},
        {"abbr":"below", "name":"below"}
    ]
});

// Create the combo box, attached to the states data store
buttonTest = Ext.create('Ext.form.ComboBox', {
    fieldLabel: 'Curvedir',
    store: states,
    queryMode: 'local',
    displayField: 'name',
    editable: false,
    valueField: 'abbr',
    listeners: {
    select: function(combo, record, index) {
    Ext.getCmp('cetoolbar').getSaveButton().setDisabled(false);
     // modelTest.set('curvedir', combo.getValue());
    }
  }
});


startField = Ext.create('Ext.form.field.Text',{
        name: 'tStampField',
       
        fieldLabel: 'Tstamp',
      //  allowBlank: false , // requires a non-empty value
        listeners: {'render': function(c) {
            c.getEl().on('keyup', function() {   
            Ext.getCmp('cetoolbar').getSaveButton().setDisabled(false);
               // modelTest.set('start', startField.value);
            }, c);
        }
  }
   });

 
endField = Ext.create('Ext.form.field.Text',{
        name: 'durationField',
        fieldLabel: 'Duration',
        
       // allowBlank: false,  // requires a non-empty value
         listeners: {'render': function(c) {
            c.getEl().on('keyup', function() {    
             Ext.getCmp('cetoolbar').getSaveButton().setDisabled(false);
               // modelTest.set('end', endField.value);
            }, c);
        }
        }
   });
   
   staffField = Ext.create('Ext.form.field.Text',{
        name: 'staffField',
        fieldLabel: 'Staff',
        
       // allowBlank: false,  // requires a non-empty value
         listeners: {'render': function(c) {
            c.getEl().on('keyup', function() {    
             Ext.getCmp('cetoolbar').getSaveButton().setDisabled(false);
               // modelTest.set('end', endField.value);
            }, c);
        }
        }
   });


this.items = [
                staffField,
                startField,
                endField,
                buttonTest
            ],
            
        this.callParent()

}

    });