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
   
  
    selection: null,
    rootNode: null,
    selectedNode: null,
    parentNode: null,
    
    vordStaff: null,
    vordStaff2: null,
	vordForm: null,
	vordPlace: null,
	vordTStamp: null,
	vordTStamp2: null,
	vordStartMeasure: null,
	vordEndMeasure: null,
   
    initComponent: function() {
    
    selection = Ext.getCmp('cegridpanel').getSelectionModel().getSelection()[0];
	  rootNode = pmdCE.getApplication().getHairpinDataStore().getRootNode();
       console.log("selection");
       console.log(rootNode);
       console.log(selection);
       if(selection.data.depth === 1){
           for(var i = 0; i < rootNode.childNodes.length ; i++){
	       if(rootNode.childNodes[i].data.id === selection.data.id){
	           selectedNode = rootNode.childNodes[i];
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
	      
	      var movement = Ext.getCmp('movement').getText();
	      Ext.getCmp('cemain').setMeasureId(movement+"_measure"+vordStartMeasure);
	      break;
	      }
	  }    
       }
       else if(selection.data.depth === 2){
       selectedNode = selection;
       parentNode = selection.parentNode;
       //parentNode = rootNode.childNodes[i];
	           vordStartMeasure = parentNode.data.measurenr;
	           Ext.getCmp('cemain').setStartMeasure(parentNode.data.measurenr);
	           var movement = Ext.getCmp('movement').getText();
	           Ext.getCmp('cemain').setMeasureId(movement+"_measure"+vordStartMeasure);
	           vordStaff = selectedNode.data.staff;
	                   vordStaff2 = selectedNode.data.staff2;
	      
	                   vordForm = selectedNode.data.form ;
	                   vordPlace = selectedNode.data.place;
	                   vordTStamp = selectedNode.data.tstamp;
	                   vordTStamp2 = selectedNode.data.tstamp2;
	      
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
       
          /* for(var i = 0; i < rootNode.childNodes.length ; i++){
	       if(rootNode.childNodes[i].data.id === selection.data.parentId){
	           parentNode = rootNode.childNodes[i];
	           vordStartMeasure = parentNode.data.measurenr;
	           Ext.getCmp('cemain').setStartMeasure(parentNode.data.measurenr);
	           var movement = Ext.getCmp('movement').getText();
	           Ext.getCmp('cemain').setMeasureId(movement+"_measure"+vordStartMeasure);
	           
	           console.log(rootNode.childNodes);
	           
	           for(var j= 0; j< rootNode.childNodes.childNodes.length; j++){
	           console.log(rootNode.childNodes[i].childNodes[j].data.id);
	           console.log(selection.data.id);
	           
	               if(rootNode.childNodes[i].childNodes[j].data.id === selection.data.id){
	                   selectedNode = rootNode.childNodes[i].childNodes[j];
	                   console.log(selectedNode);
	                   vordStaff = selectedNode.data.staff;
	                   vordStaff2 = selectedNode.data.staff2;
	      
	                   vordForm = selectedNode.data.form ;
	                   vordPlace = selectedNode.data.place;
	                   vordTStamp = selectedNode.data.tstamp;
	                   vordTStamp2 = selectedNode.data.tstamp2;
	      
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
	                   break;	      
	               }
	           }	     
	           break;	     
	      }
	  }*/    
    }
	  
    
        
staffField = this.createTextField('staffField', 'Staff');
 staffField.setValue(vordStaff);
        
staffField2 = this.createTextField('secondStaffField', 'Second staff');
staffField2.setValue(vordStaff2);
formField = this.createComboBoxForm('Form');
formField.setValue(vordForm);
placeField = this.createComboBox('Place');
placeField.setValue(vordPlace);
tstampField = this.createTextField('tstampField', 'Tstamp');
tstampField.setValue(vordTStamp);
tstamp2Field = this.createTextField('tstampField2', 'Tstamp2');
tstamp2Field.setValue(vordTStamp2);

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
         if(staffField2.getValue() !== ""){
             selectedNode.set('staff2', staffField2.getValue());
            
         }
         
          if(tstampField.getValue() !== ""){
             selectedNode.set('tstamp', tstampField.value);
         
         }
          if(tstamp2Field.getValue() !== ""){
             selectedNode.set('tstamp2', tstamp2Field.getValue());
          
         }
         if(placeField.getValue() !== null){
              selectedNode.set('place', placeField.getValue());
            
         }       
         if(formField.getValue() !== null){
               selectedNode.set('form', formField.getValue());
        
         }
         
         if(typeof parentNode !== 'undefined'){
         parentNode.expand();
	  
	  Ext.getCmp('cegridpanel').setSelection(parentNode);
	  
	  Ext.getCmp('cegridpanel').showXMLforSelectedElement(parentNode);
         }
else{
     
	  Ext.getCmp('cegridpanel').setSelection(selectedNode);
	  
	  Ext.getCmp('cegridpanel').showXMLforSelectedElement(selectedNode);
}
         
	  
       Ext.getCmp('saveButton').setDisabled(false);
       Ext.getCmp('addelementbutton').setDisabled(false);
     
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

