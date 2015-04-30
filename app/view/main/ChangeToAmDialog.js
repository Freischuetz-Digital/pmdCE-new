Ext.define('pmdCE.view.main.ChangeToAmDialog', {
   extend: 'Ext.window.Window',
   title: 'Change to Ambiguous Element',
   id: "changetoamdialog",
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
    
    selection: null,
    rootNode: null,
    selectedNode: null,
    vordStaff: null,
	vordForm: null,
	vordPlace: null,
	vordTStamp: null,
	vordTStamp2: null,
    
    layout: 'hbox',
    
    selectedFieldId:null,
   
    me: null,
  
    initComponent: function() {
    
    me = this;
    
      selection = Ext.getCmp('cegridpanel').getSelectionModel().getSelection()[0];
	  rootNode = pmdCE.getApplication().getHairpinDataStore().getRootNode();
	  
	  for(var i = 0; i < rootNode.childNodes.length ; i++){
	  if(rootNode.childNodes[i].data.id === selection.data.id){
	      selectedNode = rootNode.childNodes[i];	
	      vordStaff = selectedNode.data.staff;
	      vordForm = selectedNode.data.form ;
	      vordPlace = selectedNode.data.place;
	      vordTStamp = selectedNode.data.tstamp;
	      vordTStamp2 = selectedNode.data.tstamp2;
	      Ext.getCmp('cemain').setStartMeasure(selectedNode.data.measurenr);
	      Ext.getCmp('cemain').setEndMeasure(selectedNode.data.measurenr);
	      Ext.getCmp('cemain').setStaffNr(vordStaff);
	      break;
	  }	      
	  }    
    
    staffFieldOrig = this.createComboBoxStaff('Staff'); 
    staffFieldOrig.setValue(vordStaff);
    staffFieldOrig.setDisabled(true);
    placeFieldOrig = this.createComboBox('Place');
    placeFieldOrig.setValue(vordPlace);
    formFieldOrig = this.createRadioGroup();
    if(vordForm === 'dim'){
        formFieldOrig.items.items[1].setValue(true);
    }
    else{
        formFieldOrig.items.items[0].setValue(true);
    }
    staffFieldReg1 = this.createComboBoxStaff('Staff'); 
    staffFieldReg1.setValue(vordStaff);
     staffFieldReg1.setDisabled(true);
    placeFieldReg1 = this.createComboBox('Place');
    placeFieldReg1.setValue(vordPlace);
    formFieldReg1 = this.createRadioGroup();
     if(vordForm === 'dim'){
        formFieldReg1.items.items[1].setValue(true);
    }
    else{
        formFieldReg1.items.items[0].setValue(true);
    }
    
    staffFieldReg2 = this.createComboBoxStaff('Staff'); 
    staffFieldReg2.setValue(vordStaff);
    staffFieldReg2.setDisabled(true);
    placeFieldReg2 = this.createComboBox('Place');
    placeFieldReg2.setValue(vordPlace);
    placeFieldReg2.setDisabled(true);
    formFieldReg2 = this.createRadioGroup();
    formFieldReg2.setDisabled(true);
    if(vordForm === 'dim'){
        formFieldReg2.items.items[1].setValue(true);
    }
    else{
        formFieldReg2.items.items[0].setValue(true);
    }
    tstampFieldReg2 = this.createTextField('tstampFieldReg2', 'Tstamp reg2');
    tstampFieldReg2.setDisabled(true);
    tstampFieldReg2.setValue(vordTStamp);
    tstampField2Reg2 = this.createTextField('tstampField2Reg2', 'Tstamp2 reg2');
    tstampField2Reg2.setDisabled(true);
    tstampField2Reg2.setValue(vordTStamp2);
    
    tstampFieldReg1 = this.createTextField('tstampFieldReg1', 'Tstamp reg1');
    tstamp2FieldReg1 = this.createTextField('tstamp2FieldReg1', 'Tstamp2 reg1');

     tstampFieldOrig = this.createTextField('tstampFieldOrig', 'Tstamp orig');
    tstamp2FieldOrig = this.createTextField('tstamp2FieldOrig', 'Tstamp2 orig');
    
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
      
        var formValueOrig = formFieldOrig.getValue().Form === 2 ? "dim" : 'cres';
        var formValueReg1= formFieldReg1.getValue().Form === 2 ? "dim" : 'cres';
      
	  if(selectedNode !== null){
	 
	  selectedNode.data.name = vordForm+'_'+vordStaff+'_'+vordPlace+'_ambiguous';
	  selectedNode.data.obvious = false;
         selectedNode.data.ambiguous = true;
         selectedNode.data.staff = null;
          selectedNode.data.tstamp = null;
           selectedNode.data.tstamp2 = null;
            selectedNode.data.form = null;
             selectedNode.data.place = null;
             selectedNode.data.operation =  'update',
             
	     // selectedNode.removeChild(nodeToDelete);
	         selectedNode.appendChild({
                    icon: 'resources/images/details-xml.png',
                    staff: staffFieldOrig.getValue(),                   
                    tstamp: tstampFieldOrig.getValue(),
                    tstamp2: tstamp2FieldOrig.getValue(),
                    place: placeFieldOrig.getValue(),
                    form: formValueOrig,
                    tag: "orig",
                    leaf: true
        });	
        selectedNode.appendChild({
                    icon: 'resources/images/details-xml.png',
                    staff: staffFieldReg1.getValue(),                   
                    tstamp: tstampFieldReg1.getValue(),
                    tstamp2: tstamp2FieldReg1.getValue(),
                    place: placeFieldReg1.getValue(),
                    form: formValueReg1,
                    tag: "reg",
                    leaf: true
        });
        selectedNode.appendChild({
                    icon: 'resources/images/details-xml.png',
                    staff: vordStaff,                   
                    tstamp: vordTStamp,
                    tstamp2: vordTStamp2,
                    place: vordPlace,
                    form: vordForm,
                    tag: "reg",
                    leaf: true
        });	
	  }
	  selectedNode.expand();
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
   // valueField: 'abbr',
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
        id: fieldName,
      //  allowBlank: false , // requires a non-empty value
        listeners: {
        focus: function(e, eOpts ){
           me.selectedFieldId = fieldName;
        }
  }
   });

return ceTextField;
},

getSelectedFieldId: function(){  
    return me.selectedFieldId;
}
    

});