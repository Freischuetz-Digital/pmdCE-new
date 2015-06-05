Ext.define('pmdCE.view.main.EditDialog', {
   extend: 'Ext.window.Window',
   title: 'Edit Values',
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
   rend: null,
 
    selection: null,
    selectedNode: null,
    parentNode: null,
    vordRend: null,
    vordStaff: null,
    vordStaff2: null,
	vordForm: null,
	vordPlace: null,
	vordTStamp: null,
	vordTStamp2: null,
	vordStartMeasure: null,
	vordEndMeasure: null,
   
    initComponent: function() {
    
    if(Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1){
        selection = Ext.getCmp('cegridpanel').getSelectionModel().getSelection()[0];
    }
    else if(Ext.getCmp('cemain').getComponentType().indexOf('Dynam') > -1){
         selection = Ext.getCmp('dynamsgridpanel').getSelectionModel().getSelection()[0];
    }
    else if(Ext.getCmp('cemain').getComponentType().indexOf('Dir') > -1){
         selection = Ext.getCmp('dirsgridpanel').getSelectionModel().getSelection()[0];
    }
    	  
       if(selection.data.depth === 1){
       selectedNode = selection;
       
       vordStaff = selectedNode.data.staff;
	      vordStaff2 = selectedNode.data.staff2;
	      vordStartMeasure = selectedNode.data.measurenr;
	      vordForm = selectedNode.data.form ;
	      vordPlace = selectedNode.data.place;
	      vordTStamp = selectedNode.data.tstamp;
	      vordTStamp2 = selectedNode.data.tstamp2;
	      Ext.getCmp('cemain').setStartMeasure(selectedNode.data.measurenr);
	      Ext.getCmp('cemain').setStaffNr(vordStaff);
	      
	       if(typeof vordTStamp2 !== 'undefined' && typeof vordStartMeasure !== 'undefined'){
	          var prefix = vordTStamp2.substring(0, 1);
	          if(prefix !== 'm'){
	              vordEndMeasure = parseInt(vordStartMeasure) + parseInt(prefix);
	          }else{
	              vordEndMeasure = parseInt(vordStartMeasure) + 1;
	          }
	          Ext.getCmp('cemain').setEndMeasure(vordEndMeasure);
	      }	
	      
	      if(Ext.getCmp('cemain').getComponentType().indexOf('Dynam') > -1){
	           vordRend = selectedNode.data.rend;
	      }
	      else if(Ext.getCmp('cemain').getComponentType().indexOf('Dir') > -1){
	           vordRend = selectedNode.data.rend;
	      }
	      
	      var movement = Ext.getCmp('movement').getText();
	      Ext.getCmp('cemain').setMeasureId(movement+"_measure"+vordStartMeasure);
       }
       else if(selection.data.depth === 2){
       selectedNode = selection;
       parentNode = selection.parentNode;
	           vordStartMeasure = parentNode.data.measurenr;
	           Ext.getCmp('cemain').setStartMeasure(parentNode.data.measurenr);
	           var movement = Ext.getCmp('movement').getText();
	           Ext.getCmp('cemain').setMeasureId(movement+"_measure"+vordStartMeasure);
	           if(typeof vordTStamp2 !== 'undefined' && typeof vordStartMeasure !== 'undefined'){
	                       var prefix = vordTStamp2.substring(0, 1);
	                       if(prefix !== 'm'){
	                           vordEndMeasure = parseInt(vordStartMeasure) + parseInt(prefix);
	                       }else{
	                           vordEndMeasure = parseInt(vordStartMeasure) + 1;
	                       }
	                       Ext.getCmp('cemain').setEndMeasure(vordEndMeasure);
	            }	
	                      
	           vordStaff = selectedNode.data.staff;
	           Ext.getCmp('cemain').setStaffNr(vordStaff);
	                   vordStaff2 = selectedNode.data.staff2;
	      
	                   vordForm = selectedNode.data.form ;
	                   vordPlace = selectedNode.data.place;
	                   vordTStamp = selectedNode.data.tstamp;
	                   vordTStamp2 = selectedNode.data.tstamp2;
	                   
	                   if(Ext.getCmp('cemain').getComponentType().indexOf('Dynam') > -1){
	           vordRend = selectedNode.data.rend;
	      }
	         else if(Ext.getCmp('cemain').getComponentType().indexOf('Dir') > -1){
	           vordRend = selectedNode.data.rend;
	      }
	      
	           
    }
	  
    
        // common
staffField = this.createTextField('staffField', 'Staff');
 staffField.setValue(vordStaff);
        
staffField2 = this.createTextField('secondStaffField', 'Second staff');
staffField2.setValue(vordStaff2);
placeField = this.createComboBox('Place');
placeField.setValue(vordPlace);
tstampField = this.createTextField('tstampField', 'Tstamp');
tstampField.setValue(vordTStamp);

// hairpin
         if(Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1){
             formField = this.createComboBoxForm('Form'); 
             tstampField2 = this.createTextField('tstampField2Obv', 'Tstamp2');
         }
         // dynams
         else{
             formField = this.createTextField('formOrig', 'Form'); 
             tstampField2 = this.createTextFieldTstamp2('tstampField2', 'Tstamp2');
             rend = this.createTextFieldTstamp2('rendOrig', 'Rend');
             rend.setValue(vordRend);
         }
         tstampField2.setValue(vordTStamp2);
         formField.setValue(vordForm);
         this.items = Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1 ? [
             staffField,
                staffField2,
               tstampField,
                tstampField2,
                placeField,
                formField
                               
                    ] : [
                         staffField,
                staffField2,
               tstampField,
                tstampField2,
                placeField,
                formField,
                       rend               
                    ]
   
    this.buttons = [{
        text:'Update',
        handler: function(){
        
        if(typeof parentNode !== 'undefined'){
             parentNode.set('operation', 'change');
	           parentNode.set('measureid', Ext.getCmp('cemain').getMeasureId());
        }
        else{
           selectedNode.set('operation', 'change');
	   selectedNode.set('measureid', Ext.getCmp('cemain').getMeasureId());
        
            
        }
     	 
          if(staffField.getValue() !== ""){
             selectedNode.set('staff', staffField.getValue());
           
         }
         //if(staffField2.getValue() !== ""){
             selectedNode.set('staff2', staffField2.getValue());
            
         //}
         
          if(tstampField.getValue() !== ""){
             selectedNode.set('tstamp', tstampField.value);
         
         }
         if(Ext.getCmp('cemain').getComponentType().indexOf('Dynam') > -1 || tstampField2.getValue() !== " 
            || Ext.getCmp('cemain').getComponentType().indexOf('Dir') > -1){
             selectedNode.set('tstamp2', tstampField2.getValue());
         }
        
         if(placeField.getValue() !== null){
              selectedNode.set('place', placeField.getValue());
            
         }       
         if(formField.getValue() !== null){
               selectedNode.set('form', formField.getValue());
        
         }
         if(typeof rend !== 'undefined'){
             selectedNode.set('rend', rend.getValue());
         }
         
         if(typeof parentNode !== 'undefined'){
         parentNode.expand();
         
         if(Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1){
         Ext.getCmp('cegridpanel').setSelection(parentNode);	
	       Ext.getCmp('cegridpanel').showXMLforSelectedElement(parentNode);
	       Ext.getCmp('addelementbutton').setDisabled(false);
        }
        else if(Ext.getCmp('cemain').getComponentType().indexOf('Dynam') > -1){
            Ext.getCmp('dynamsgridpanel').setSelection(parentNode);
            Ext.getCmp('addelementbutton_1').setDisabled(false);
	        Ext.getCmp('dynamsgridpanel').showXMLforSelectedElement(parentNode);
        }
         else if(Ext.getCmp('cemain').getComponentType().indexOf('Dir') > -1){
            Ext.getCmp('dirsgridpanel').setSelection(parentNode);
            Ext.getCmp('addelementbutton_2').setDisabled(false);
	        Ext.getCmp('dirsgridpanel').showXMLforSelectedElement(parentNode);
        }
	  
	   
         }
else{
     
     if(Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1){
         Ext.getCmp('cegridpanel').setSelection(selectedNode);	
	       Ext.getCmp('cegridpanel').showXMLforSelectedElement(selectedNode);
	       
        }
        else if(Ext.getCmp('cemain').getComponentType().indexOf('Dynam') > -1){
            Ext.getCmp('dynamsgridpanel').setSelection(selectedNode);
            Ext.getCmp('dynamsgridpanel').showXMLforSelectedElement(selectedNode);
        }
        else if(Ext.getCmp('cemain').getComponentType().indexOf('Dir') > -1){
            Ext.getCmp('dirsgridpanel').setSelection(selectedNode);
            Ext.getCmp('dirsgridpanel').showXMLforSelectedElement(selectedNode);
        }
}
         
	  
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
        width: 285,
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

createTextFieldTstamp2: function(fieldName, fieldLabel){
       
    var ceTextField = Ext.create('Ext.form.field.Text',{
        name: fieldName,
        id: fieldName,
        width: 285,
        fieldLabel: fieldLabel,
        listeners: {
        focus: function(e, eOpts ){
          
        },
         render: function(c) {
            c.getEl().on('keyup', function() {   
           
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
    width: 285,
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

createComboBoxForm: function(fieldName){
    
    var states = new Array("cres", "dim"); 
    var me = this;
    var ceTextField = Ext.create('Ext.form.ComboBox', {
    fieldLabel: fieldName,
    store: states,
    width: 285,
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

