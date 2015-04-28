Ext.define('pmdCE.view.main.ChangeToObDialog', {
   extend: 'Ext.window.Window',
   title: 'Change to Obvious Element',
   flex: 1,
   modal: true,
   id: "changetoamdialog",
 
    staffField: null,
    placeField: null,
    formField: null,  
    tstampField: null,
    tstampField2: null,
    
    layout: 'hbox',
  
    initComponent: function() {
    
    staffField = this.createComboBoxStaff('Staff');  
    placeField = this.createComboBox('Place');
    formField = this.createRadioGroup();
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
            placeField,
            formField
        ]
    },
     {
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
    },
    {
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
        
       var selectedNode = null;
        selection = Ext.getCmp('cegridpanel').getSelectionModel().getSelection()[0];
	  rootNode = pmdCE.getApplication().getHairpinDataStore().getRootNode();
	  
	  for(var i = 0; i < rootNode.childNodes.length ; i++){
	  if(rootNode.childNodes[i].data.id === selection.data.id){
	      selectedNode = rootNode.childNodes[i];	
	      
	      break;
	  }	      
	  }    
  
        var formValue = formField.getValue().Form === 2 ? "dim" : 'cresc';
	 
        selectedNode.data.name = formValue+'_'+staffField.getValue()+'_'+placeField.getValue()+'_obvious';
	  selectedNode.data.obvious = true;
         selectedNode.data.ambiguous = false;
         selectedNode.data.staff = staffField.getValue();
          selectedNode.data.tstamp = tstampField.getValue();
           selectedNode.data.tstamp2 = tstamp2Field.getValue();
            selectedNode.data.form = formValue;
             selectedNode.data.place = placeField.getValue();
             selectedNode.data.operation =  'update';
             selectedNode.data.leaf = true;
             selectedNode.data.tag = "";
             
             selectedNode.removeAll();
             
             console.log(selectedNode);
    
        Ext.getCmp('saveButton').setDisabled(false);
      
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