Ext.define('pmdCE.view.main.ChangeToChoiceStaffCard', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.Card'
    ],
    id: "ambiguouscard",
   // title: "Add Choce for Tstamp",
  //  xtype: 'layout-card',
    layout: 'card',
  //  width: 500,
    

   // bodyPadding: 10,
    
    defaults: {
        border:false,
        autoScroll: true,
        bodyPadding: 10
    },

    defaultListenerScope: true,
    border:false,
    
     autoScroll: true,
    
    staffField: null,  
    staffFieldCopy: null,
    startTaktField: null,
    endTaktField: null,
    placeField: null,
    formField: null,
    satffFieldBetween: null,
   rend: null,
    tstampFieldOrig: null,
    tstamp2FieldOrig: null,
 
    staffFieldReg1: null,
    placeFieldReg1: null,
    formFieldReg1: null,
    tstampFieldReg1: null,
    tstamp2FieldReg1: null,
    rendReg1: null,

    staffFieldReg2: null,
    placeFieldReg2: null,
    formFieldReg2: null,
    tstampFieldReg2: null,
    tstamp2FieldReg2: null,
     rendReg2: null,
   
   verovioImageStart: null,
   verovioImageEnd: null,
   
   selectedFieldId:null,
   
    selection: null,
    rootNode: null,
    selectedNode: null,
    vordStaff: null,
	vordForm: null,
	vordPlace: null,
	vordTStamp: null,
	vordTStamp2: null,
	vordStartMeasure: null,
	vordEndMeasure: null,
	vordRend: null,
   
   nextButton: null,
   prevButton: null,
   createElementButton: null,
   
    me: null,
    
         initComponent: function() {
         
         me = this;
         
      if(Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1){
         selection = Ext.getCmp('cegridpanel').getSelectionModel().getSelection()[0];
	  rootNode = pmdCE.getApplication().getHairpinDataStore().getRootNode();
	  }
	  else if(Ext.getCmp('cemain').getComponentType().indexOf('Dynam') > -1){
	      selection = Ext.getCmp('dynamsgridpanel').getSelectionModel().getSelection()[0];
	  rootNode = pmdCE.getApplication().getDynamDataStore().getRootNode();
	  }
	   else if(Ext.getCmp('cemain').getComponentType().indexOf('Dir') > -1){
	      selection = Ext.getCmp('dirsgridpanel').getSelectionModel().getSelection()[0];
	  rootNode = pmdCE.getApplication().getDirDataStore().getRootNode();
	  }
     
	  for(var i = 0; i < rootNode.childNodes.length ; i++){
	  if(rootNode.childNodes[i].data.id === selection.data.id){
	      selectedNode = rootNode.childNodes[i];	
	      vordStaff = selectedNode.data.staff;
	      vordStartMeasure = selectedNode.data.measurenr;
	      vordForm = selectedNode.data.form ;
	      vordPlace = selectedNode.data.place;
	      vordTStamp = selectedNode.data.tstamp;
	      vordTStamp2 = selectedNode.data.tstamp2;
	      vordRend = selectedNode.data.rend;
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
	      break;
	  }	      
	  }    
         // create orig fields
         // common
         staffField= this.createComboBoxStaff('Staff', "stafforig");
         staffField.setValue(vordStaff);
         staffField.validate();
        staffFieldCopy = this.createTextField('staffFieldCopy', 'Staff');
        staffFieldCopy.setDisabled(true);
        satffFieldBetween = this.createComboBoxStaff('Second staff' , "secorig"); 
        satffFieldBetween.validate();
        startTaktField= this.createComboBoxMeasureNr('Start measure');
        startTaktField.setValue(vordStartMeasure);
        startTaktField.validate();
        endTaktField= this.createComboBoxMeasureNr('End measure');
         endTaktField.setValue(vordEndMeasure);
        endTaktField.validate();
        placeField = this.createComboBox('Place');
        placeField.validate();     
    tstampFieldOrig = this.createTextField('tstampFieldOrig', 'Tstamp');
    tstampFieldOrig.setValue(vordTStamp);
    tstampFieldOrig.validate();
    // hairpin
         if(Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1){
             formField = this.createComboBoxForm('Form'); 
             tstamp2FieldOrig = this.createTextField('tstamp2FieldOrig', 'Tstamp2');
             tstamp2FieldOrig.validate(); 
         }
         // dynams
         else{
             formField = this.createTextField('formOrig', 'Form'); 
             tstamp2FieldOrig = this.createTextFieldTstamp2('tstamp2FieldOrig', 'Tstamp2');
             rend = this.createTextFieldTstamp2('rendOrig', 'Rend');
             rend.setValue(vordRend);
         }
         tstamp2FieldOrig.setValue(vordTStamp2);
         formField.setValue(vordForm);
         formField.validate();

        // reg1 fields
        // common
        staffFieldReg1= this.createComboBoxStaff('Staff', "sreg1");  
        staffFieldReg1.validate();      
        placeFieldReg1 = this.createComboBox('Place');
        placeFieldReg1.validate();       
        tstampFieldReg1 = this.createTextField('tstampFieldReg1', 'Tstamp');
        tstampFieldReg1.setValue(vordTStamp);
        tstampFieldReg1.validate();
        //tstampFieldReg1.setDisabled(true);
        //tstamp2FieldReg1.setDisabled(true);
        // hairpin
        if(Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1){
             formFieldReg1 = this.createComboBoxForm('Form'); 
              tstamp2FieldReg1 = this.createTextField('tstamp2FieldReg1', 'Tstamp2');      
             tstamp2FieldReg1.validate(); 
         }  
        // dynams
        else{
        formFieldReg1 = this.createTextField('formReg1', 'Form'); 
         tstamp2FieldReg1 = this.createTextFieldTstamp2('tstamp2FieldReg1', 'Tstamp2');
          rendReg1 = this.createTextFieldTstamp2('rendReg1', 'Rend');
          rendReg1.setDisabled(true);
        }
        formFieldReg1.setDisabled(true);
        formField.validate();
        formFieldReg1.setValue(vordForm);
       // tstamp2FieldReg1.setDisabled(true);
        tstamp2FieldReg1.setValue(vordTStamp2);

    // reg2 fields
    // common
    staffFieldReg2= this.createComboBoxStaff('Staff', "sreg2");  
    staffFieldReg2.validate();
        placeFieldReg2 = this.createComboBox('Place');
        placeFieldReg2.validate();       
tstampFieldReg2 = this.createTextField('tstampFieldReg2', 'Tstamp');
tstampFieldReg2.setValue(vordTStamp);
tstampFieldReg2.validate();
//tstampFieldReg2.setDisabled(true);
// hairpin
    if(Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1){
        formFieldReg2 = this.createComboBoxForm('Form');
        tstamp2FieldReg2 = this.createTextField('tstamp2FieldReg2', 'Tstamp2');
        tstamp2FieldReg2.validate();
    }
    // dynams
    else{
        formFieldReg2 = this.createTextField('formReg2', 'Form'); 
        tstamp2FieldReg2 = this.createTextFieldTstamp2('tstamp2FieldReg2', 'Tstamp2');
        rendReg2 = this.createTextFieldTstamp2('rendReg2', 'Rend');
        rendReg2.setDisabled(true);
        rendReg2.setValue(vordRend);
    }
    formFieldReg2.setValue(vordForm);
    formFieldReg2.setDisabled(true);
    tstamp2FieldReg2.setValue(vordTStamp2);
   // tstamp2FieldReg2.setDisabled(true);


          this.items  = [
        {
            id: 'card-0',
            
            items: [
            staffField,
            startTaktField,
            endTaktField
            
        ]
        },
        {
           id: 'card-1',
           layout: 'vbox',
           border:false,
        
           items: [
        {
           id: 'card-11',
           layout: {
                type: 'hbox',
                pack: 'start',
                align: 'stretch'
            },
    
            bodyPadding: 10,
    
            defaults: {
                frame: true,
                bodyPadding: 10
            },
       
           border:false,
           
           items: [
                {
                    xtype: 'fieldset',
                    title: 'Orig',
                    id: 'orig',
                    defaultType: 'textfield',
                    margin: '0 10 0 0',
                    
                       items : Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1 ? [
                        staffFieldCopy,
                        satffFieldBetween,
                        placeField,
                        formField,
                        tstampFieldOrig,
                        tstamp2FieldOrig     
                    ] : [
                        staffFieldCopy,
                        satffFieldBetween,
                        placeField,
                        formField,
                        tstampFieldOrig,
                        tstamp2FieldOrig,
                       rend              
                    ]
          
                 },
                 {
                    xtype: 'fieldset',
                    title: 'Reg',
                    id: 'starttime',
                    defaultType: 'textfield',
                     margin: '0 10 0 0',
                    defaults: {
                        anchor: '100%'
                     },
                     
                       items : Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1 ? [
                        staffFieldReg1,
                        placeFieldReg1,
                        formFieldReg1,
                        tstampFieldReg1,
                         tstamp2FieldReg1         
                    ] : [
                        staffFieldReg1,
                        placeFieldReg1,
                        formFieldReg1,
                        tstampFieldReg1,
                         tstamp2FieldReg1,
                       rendReg1           
                    ]
        
                 },
                 {
                    xtype: 'fieldset',
                    title: 'Reg',
                    id: 'endtime',
                    defaultType: 'textfield',
                     margin: '0 10 0 0',
                    defaults: {
                        anchor: '100%'
                    },
                    
                    items : Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1 ? [
                        staffFieldReg2,
                        placeFieldReg2,
                        formFieldReg2,
                        tstampFieldReg2,
                        tstamp2FieldReg2           
                    ] : [
                        staffFieldReg2,
                        placeFieldReg2,
                        formFieldReg2,
                        tstampFieldReg2,
                        tstamp2FieldReg2,
                       rendReg2         
                    ]
        
                 }
                
        ] // end card-1 items
           
        }, // end card-1
        {
           id: 'card-111',
           layout: 'hbox',
           border:false,
           items: [
        {
                    xtype: 'fieldset',
                    title: 'Start Time (tstamp)',
                    id: 'verovio1',
                    border:true,
                    width: 415,
                    defaultType: 'textfield',
                    defaults: {
                        anchor: '100%'
                    },
                    margin: '0 10 0 10',
                    items: [            
                
                    ]
                },
                 {
                    xtype: 'fieldset',
                    title: 'End Time (tstamp2)',
                    id: 'verovio2',
                    border:true,
                    width: 415,
                    defaultType: 'textfield',
                    defaults: {
                        anchor: '100%'
                    },
                    margin: '0 10 0 10',
                    items: [            
                
                    ]
                }
        
         ] // end card-1 items
           
        } // end card-1
         ] // end card-1 items
           
        } // end card-1
    ], // end this irems
         
      prevButton = this.createNavigationButton('card-prev', '&laquo; Previous', 'showPrevious');
    nextButton = this.createNavigationButton('card-next', 'Next &raquo;', 'showNext');
    createElementButton = this.createNavigationButton('createElement', 'Change', 'createElement');
    this.handleNavigationButtons();
    
     this.bbar = ['->',
       prevButton,
        nextButton,
        createElementButton,
    {
        text: 'Cancel',
        handler: function () { this.up('window').close(); }
    }      
    ],

    this.callParent()
 
    },

 handleNavigationButtons: function(){
      if(staffField.isValid() && startTaktField.isValid() && endTaktField.isValid()){
        nextButton.setDisabled(false);
      }
      else{
          nextButton.setDisabled(true);
          
      }       
    },
    
    handleCreateButton: function(){
      if(placeField.isValid() && formField.isValid() 
          && tstampFieldOrig.isValid() && tstamp2FieldOrig.isValid()
          && staffFieldReg1.isValid() && placeFieldReg1.isValid()
          && satffFieldBetween.isValid()
          && staffFieldReg2.isValid() && placeFieldReg2.isValid()
          && tstampFieldReg1.isValid() && tstamp2FieldReg1.isValid()
          && tstampFieldReg2.isValid() && tstamp2FieldReg2.isValid()){ 
             createElementButton.setDisabled(false); 
          }
          else{
            createElementButton.setDisabled(true);  
          }
    },
       
    createElement: function () {
    if(selectedNode !== null){
    
     var elType = null;
     if(Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1){
        elType = 'hairpin';
    }
    else if(Ext.getCmp('cemain').getComponentType().indexOf('Dynam') > -1){
         elType = 'dynam';
    }
    else if(Ext.getCmp('cemain').getComponentType().indexOf('Dir') > -1){
         elType = 'dir';
    }
	 
	  selectedNode.data.name = 'choice_m'+selectedNode.data.measurenr;
	  selectedNode.data.obvious = false;
         selectedNode.data.ambiguous = true;
         selectedNode.data.staff = null;
         selectedNode.data.type = elType;
          selectedNode.data.measureid = Ext.getCmp('cemain').getMeasureId();
          selectedNode.data.measurenr = startTaktField.getValue();
          selectedNode.data.tstamp = null;
           selectedNode.data.tstamp2 = null;
            selectedNode.data.form = null;
             selectedNode.data.place = null;
             selectedNode.data.operation =  'change',
             selectedNode.data.icon = 'resources/images/details-xml.png',
             
	     // selectedNode.removeChild(nodeToDelete);
	         selectedNode.appendChild({
                    icon: 'resources/images/mix_volume.png',
                    rend: typeof rend!== 'undefined' ? rend.getValue() : null,
                    staff: staffField.getValue(), 
                    staff2: satffFieldBetween.getValue(), 
                    tstamp: tstampFieldOrig.getValue(),
                    tstamp2: tstamp2FieldOrig.getValue(),
                    place: placeField.getValue(),
                    form: formField.getValue(),
                    name: "orig",
                    tag: "orig",
                    leaf: true
        });	
        selectedNode.appendChild({
                    icon: 'resources/images/mix_volume.png',
                    rend: typeof rend!== 'undefined' ? rend.getValue() : null,
                    staff: staffFieldReg1.getValue(),                   
                    tstamp: tstampFieldReg1.getValue(),
                    tstamp2: tstamp2FieldReg1.getValue(),
                    place: placeFieldReg1.getValue(),
                    form: formFieldReg1.getValue(),
                    name: "reg",
                    tag: "reg",
                    leaf: true
        });
        selectedNode.appendChild({
                    icon: 'resources/images/mix_volume.png',
                    rend: typeof rend!== 'undefined' ? rend.getValue() : null,
                    staff: staffFieldReg2.getValue(),                    
                    tstamp: tstampFieldReg2.getValue(),
                    tstamp2: tstamp2FieldReg2.getValue(),
                    place: placeFieldReg2.getValue(),
                    form: formFieldReg2.getValue(),
                    name: "reg",
                    tag: "reg",
                    leaf: true
        });	
        
        selectedNode.expand();
        
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
	  
       Ext.getCmp('saveButton').setDisabled(false);
       Ext.getCmp('addelementbutton').setDisabled(false);
       }
       
     this.up('window').close();
           
    },
    
    showNext: function () {
        this.doCardNavigation(1);
        
         if( typeof Ext.getCmp('cemain').getVerStartId() != 'undefined'){
            Ext.getCmp('verovio1').removeAll(true);
        }
        if(typeof Ext.getCmp('cemain').getVerEndId() != 'undefined'){
             Ext.getCmp('verovio2').removeAll(true);
        }
           
        
                
                 verovioImageStart = new pmdCE.view.main.VerovioImageStart();
            Ext.getCmp('verovio1').add(verovioImageStart);
           
             verovioImageEnd = new pmdCE.view.main.VerovioImageEnd();
             Ext.getCmp('verovio2').add(verovioImageEnd);
                          
          
         staffFieldCopy.setValue(staffField.getValue());
        
    },

    showPrevious: function (btn) {
        this.doCardNavigation(-1);
    },

    doCardNavigation: function (incr) {
        var me = this;
        var l = me.getLayout();
        var i = l.activeItem.id.split('card-')[1];
        var next = parseInt(i, 10) + incr;
        l.setActiveItem(next);

        me.down('#card-prev').setDisabled(next===0);
        me.down('#card-next').setDisabled(next===1);
    },
    
        createTextField: function(fieldName, fieldLabel){
         var me1 = this;
    var ceTextField = Ext.create('Ext.form.field.Text',{
        name: fieldName,
        id: fieldName,
        fieldLabel: fieldLabel,
      allowBlank: false,
        invalidCls: '',
        listeners: {
        focus: function(e, eOpts ){
           me.selectedFieldId = fieldName;
            if(me.selectedFieldId === 'tstamp2FieldOrig'){
               //tstamp2FieldReg1.setValue(tstamp2FieldOrig.getValue());
              // tstamp2FieldReg2.setValue(tstamp2FieldOrig.getValue());
           }
            if(me.selectedFieldId === 'tstampFieldOrig'){
              // tstampFieldReg1.setValue(tstampFieldOrig.getValue());
               //tstampFieldReg2.setValue(tstampFieldOrig.getValue());
           }
            if(me.selectedFieldId === 'formOrig'){
             formFieldReg1.setValue(formField.getValue());
                formFieldReg2.setValue(formField.getValue());
           }
            me1.handleCreateButton();
        },
        render: function(c) {
            c.getEl().on('keyup', function() {   
           me.selectedFieldId = fieldName;
            if(me.selectedFieldId === 'tstamp2FieldOrig'){
              // tstamp2FieldReg1.setValue(tstamp2FieldOrig.getValue());
              // tstamp2FieldReg2.setValue(tstamp2FieldOrig.getValue());
           }
            if(me.selectedFieldId === 'tstampFieldOrig'){
               //tstampFieldReg1.setValue(tstampFieldOrig.getValue());
               //tstampFieldReg2.setValue(tstampFieldOrig.getValue());
           }
            if(me.selectedFieldId === 'formOrig'){
             formFieldReg1.setValue(formField.getValue());
                formFieldReg2.setValue(formField.getValue());
           }
            me1.handleCreateButton();
            }, c);
        }
        }
     
   });

return ceTextField;
},

createTextFieldTstamp2: function(fieldName, fieldLabel){
        var me1 = this;
    var ceTextField = Ext.create('Ext.form.field.Text',{
        name: fieldName,
        id: fieldName,
        fieldLabel: fieldLabel,
        listeners: {
        focus: function(e, eOpts ){
           me.selectedFieldId = fieldName;
            if(me.selectedFieldId === 'tstamp2FieldOrig'){
               //tstamp2FieldReg1.setValue(tstamp2FieldOrig.getValue());
              // tstamp2FieldReg2.setValue(tstamp2FieldOrig.getValue());
           }
            if(me.selectedFieldId === 'tstampFieldOrig'){
              // tstampFieldReg1.setValue(tstampFieldOrig.getValue());
               //tstampFieldReg2.setValue(tstampFieldOrig.getValue());
           }
           if(me.selectedFieldId === 'rendOrig'){
               rendReg1.setValue(rend.getValue());
               rendReg2.setValue(rend.getValue());
           }
           
           me1.handleCreateButton();
        },
         render: function(c) {
            c.getEl().on('keyup', function() {   
           me.selectedFieldId = fieldName;
            if(me.selectedFieldId === 'tstamp2FieldOrig'){
               //tstamp2FieldReg1.setValue(tstamp2FieldOrig.getValue());
              // tstamp2FieldReg2.setValue(tstamp2FieldOrig.getValue());
           }
            if(me.selectedFieldId === 'tstampFieldOrig'){
              // tstampFieldReg1.setValue(tstampFieldOrig.getValue());
               //tstampFieldReg2.setValue(tstampFieldOrig.getValue());
           }
           if(me.selectedFieldId === 'rendOrig'){
               rendReg1.setValue(rend.getValue());
               rendReg2.setValue(rend.getValue());
           }
          
           me1.handleCreateButton();
            }, c);
        }
        }
   });

return ceTextField;
},

getSelectedFieldId: function(){  
    return me.selectedFieldId;
},

    createComboBox: function(fieldName){
    
    var states = new Array("above", "below", "between"); 
    var me2 = this;
    var ceTextField = Ext.create('Ext.form.ComboBox', {
    fieldLabel: fieldName,
    store: states,
    queryMode: 'local',
    displayField: 'name',
    editable: false,
   allowBlank: false,
    invalidCls: '',
    listeners: {
    select: function(combo, record, index) {
    me2.handleCreateButton();
    }
  }
  });

return ceTextField;
},


   createComboBoxStaff: function(fieldName,  fieldId){
   
   var me10 = this;
  
   var pageStaffMap = Ext.getCmp('cetoolbar').staffNr;
   var selectedPage = Ext.getCmp('pages').getText();
   
   var test = pageStaffMap[selectedPage];
  
   var dataMeasureNr = new Array(test.length); 
   var value = test[0];
   for(var i = 0; i < test.length ; i++){
        dataMeasureNr[i] = value++;       
   }
   
    var ceTextField = Ext.create('Ext.form.ComboBox', {
    fieldLabel: fieldName,
    store: dataMeasureNr,
    queryMode: 'local',
    displayField: 'name',
    editable: false,
    allowBlank: false,
    invalidCls: '',
    listeners: {
    select: function(combo, record, index) {
     if(fieldName.indexOf('Second') === -1  && fieldId.indexOf('reg') === -1){
        Ext.getCmp('cemain').setStaffNr(combo.getValue());
        me10.handleNavigationButtons();
        }
        else{
           me10.handleCreateButton();
        }
    }
  }
  });
return ceTextField;
},

 createComboBoxMeasureNr: function(fieldName){
   
   var pageMeasuresMap = Ext.getCmp('cetoolbar').pageMeasuresMap;
   var selectedPage = Ext.getCmp('pages').getText();
   
   var test = pageMeasuresMap[selectedPage];
  
   var dataMeasureNr = new Array(test.length); 
   var value = test[0];
   for(var i = 0; i < test.length ; i++){
        dataMeasureNr[i] = value++;       
   }
    var ceTextField = Ext.create('Ext.form.ComboBox', {
    fieldLabel: fieldName,
    store: dataMeasureNr,
    queryMode: 'local',
    displayField: 'name',
    editable: false,
    allowBlank: false,
    invalidCls: '',
    listeners: {
       select: function(combo, record, index) {
    if(fieldName.indexOf('Start') > -1){
        Ext.getCmp('cemain').setStartMeasure(combo.getValue());
        
    }
    if(fieldName.indexOf('End') > -1){
        Ext.getCmp('cemain').setEndMeasure(combo.getValue());
        
    }
    me.handleNavigationButtons();
    }
  }
  });
return ceTextField;
},

    createComboBoxForm: function(fieldName){
    
    var states = new Array("cres", "dim"); 
     var me3 = this;
    var ceTextField = Ext.create('Ext.form.ComboBox', {
    fieldLabel: fieldName,
    store: states,
    queryMode: 'local',
    displayField: 'name',
    editable: false,
    allowBlank: false,
       invalidCls: '',
    listeners: {
    select: function(combo, record, index) {
       formFieldReg1.setValue(combo.getValue());
       formFieldReg2.setValue(combo.getValue());
    me3.handleCreateButton();
    }
  }
  });

return ceTextField;
},

createNavigationButton: function(navItemId, navText, navHandler){
 var navButton = Ext.create('Ext.button.Button', {  
                     itemId: navItemId,
            text: navText,
            handler: navHandler,
            disabled: true
                  
          })

return navButton;
}

});

