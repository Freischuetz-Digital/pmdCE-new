Ext.define('pmdCE.view.main.ChangeToAmDialog', {
   extend: 'Ext.window.Window',
   title: 'Change to Ambiguous Element',
   flex: 1,
   modal: true,
 
    staffFieldOrig: null,
    placeFieldOrig: null,
    formFieldOrig: null,
    
    staffFieldReg1: null,
    placeFieldReg1: null,
    formFieldReg1: null,
    
    staffFieldReg2: null,
    placeFieldReg2: null,
    formFieldReg2: null,
    tstampFieldReg2: null,
    tstampField2Reg2: null,
    
    tstampFieldOrig: null,
    tstampField2Orig: null,
 
    tstampFieldReg1: null,
    tstampField2Reg1: null,
    
    verovioImageStart: null,
    verovioImageEnd: null,
    
    layout: 'hbox',
  
    initComponent: function() {
    
    this.id = "changetoamdialog";
         Ext.getCmp('cemain').setEditorId(this.id);
         
         if(Ext.getCmp('cemain').getVerovioView().getVerStartView() !== null){
             Ext.getCmp('cemain').getVerovioView().remove(Ext.getCmp('cemain').getVerovioView().getVerStartView(), true);
         }
         if(Ext.getCmp('cemain').getVerovioView().getVerEndView() !== null){
            Ext.getCmp('cemain').getVerovioView().remove(Ext.getCmp('cemain').getVerovioView().getVerEndView(), true);
         }
         if(Ext.getCmp('cemain').getVerovioView().getRadioGroup() !== null){
            Ext.getCmp('cemain').getVerovioView().remove(Ext.getCmp('cemain').getVerovioView().getRadioGroup(), true);
         }
    
    staffFieldOrig = this.createComboBoxStaff('Staff');  
    placeFieldOrig = this.createComboBox('Place');
    formFieldOrig = this.createRadioGroup();
    
    staffFieldReg1 = this.createComboBoxStaff('Staff');  
    placeFieldReg1 = this.createComboBox('Place');
    formFieldReg1 = this.createRadioGroup();
    
    staffFieldReg2 = this.createComboBoxStaff('Staff'); 
    staffFieldReg2.setDisabled(true);
    placeFieldReg2 = this.createComboBox('Place');
    placeFieldReg2.setDisabled(true);
    formFieldReg2 = this.createRadioGroup();
    formFieldReg2.setDisabled(true);
    tstampFieldReg2 = this.createTextField('tstampFieldReg2', 'Tstamp reg2');
    tstampFieldReg2.setDisabled(true);
    tstampField2Reg2 = this.createTextField('tstampField2Reg2', 'Tstamp2 reg2');
    tstampField2Reg2.setDisabled(true);
    
    tstampFieldReg1 = this.createTextField('tstampFieldReg1', 'Tstamp reg1');
    tstamp2FieldReg1 = this.createTextField('tstampField2Reg1', 'Tstamp2 reg1');

     tstampFieldOrig = this.createTextField('tstampFieldOrig', 'Tstamp orig');
    tstamp2FieldOrig = this.createTextField('tstampField2Orig', 'Tstamp2 orig');
    
    verovioImageStart = new pmdCE.view.main.VerovioImageStart(),
        verovioImageEnd = new pmdCE.view.main.VerovioImageEnd(),
    
    this.items =  [
     
     {
        xtype: 'fieldset',
        border: false,
        //layout: 'vbox',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },
        
        items: [{
        xtype: 'fieldset',
        title: 'Orig Values',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },
        
        items: [       
            staffFieldOrig,
            placeFieldOrig,
            formFieldOrig
        ]
    },
    {
        xtype: 'fieldset',
        title: 'Reg1 Values',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },
        
        items: [
            staffFieldReg1,
            placeFieldReg1,
            formFieldReg1
        ]
    },
     {
        xtype: 'fieldset',
        title: 'Reg2',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },
        
        items: [       
            staffFieldReg2,
            tstampFieldReg2,
            tstampField2Reg2,
            placeFieldReg2,
            formFieldReg2           
        ]
    }
    
        ]
    },
     {
        xtype: 'fieldset',
        defaultType: 'textfield',
         border: false,
        defaults: {
            anchor: '100%'
        },
        
        items: [
        {
        xtype: 'fieldset',
        title: 'Start Time',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },
        
        items: [
                tstampFieldOrig,
                tstampFieldReg1,
                verovioImageStart
        ]
    },
     {
        xtype: 'fieldset',
        title: 'End Time',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },
        
        items: [            
                 tstamp2FieldOrig,
                tstamp2FieldReg1,
                verovioImageEnd   
        ]
    }       
        ]
    }
   
            ] , 
            
             this.bbar = ['->',
     {
        text:'Create', 
        itemId: 'createItem',
        // TODO
       /* disabled: true,
        handler: function(){
	       if(staffField.getValue() !== '' && 
    startTaktField.getValue() !== '' &&
    endTaktField.getValue() !== '' &&
    placeField.getValue() !== '' &&
    formField.getValue() !== ''){
	           this.setDisabled(false);
	           
	       }
	       else this.setDisabled(true);
           
       },*/
        handler: 
        function(){
      
            this.up('window').close();
           
       }
      
    },{
        text: 'Cancel',
        handler: function () { this.up('window').close(); }
    }      
    ],

this.callParent()
 
    },
    
    
       createComboBoxStaff: function(fieldName){
   
   var staffNrCurrent = Ext.getCmp('cetoolbar').staffNr;
  
   var dataStaffNr = new Array(staffNrCurrent);  
   for(var i = 0; i < staffNrCurrent ; i++){
   dataStaffNr[i] = i+1;       
   }
  
    var ceTextField = Ext.create('Ext.form.ComboBox', {
    fieldLabel: fieldName,
    store: dataStaffNr,
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
},

    createComboBox: function(fieldName){
    
var states = new Array("above", "below", "between"); 

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
}
    

});