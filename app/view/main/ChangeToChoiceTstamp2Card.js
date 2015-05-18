Ext.define('pmdCE.view.main.ChangeToChoiceTstamp2Card', {
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
   
    tstampFieldOrig: null,
    tstamp2FieldOrig: null,
 
    staffFieldReg1: null,
    placeFieldReg1: null,
    formFieldReg1: null,
    tstampFieldReg1: null,
    tstamp2FieldReg1: null,

    staffFieldReg2: null,
    placeFieldReg2: null,
    formFieldReg2: null,
    tstampFieldReg2: null,
    tstamp2FieldReg2: null,
   
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
   
    nextButton: null,
   prevButton: null,
   createElementButton: null,
   
    me: null,
    
         initComponent: function() {
         
         me = this;
         
          selection = Ext.getCmp('cegridpanel').getSelectionModel().getSelection()[0];
	  rootNode = pmdCE.getApplication().getHairpinDataStore().getRootNode();
	  
	  for(var i = 0; i < rootNode.childNodes.length ; i++){
	  if(rootNode.childNodes[i].data.id === selection.data.id){
	      selectedNode = rootNode.childNodes[i];	
	      vordStaff = selectedNode.data.staff;
	      vordStartMeasure = selectedNode.data.measurenr;
	       vordEndMeasure = selectedNode.data.measurenr;
	      vordForm = selectedNode.data.form ;
	      vordPlace = selectedNode.data.place;
	      vordTStamp = selectedNode.data.tstamp;
	      vordTStamp2 = selectedNode.data.tstamp2;
	      Ext.getCmp('cemain').setStartMeasure(selectedNode.data.measurenr);
	      // TODO richtige takt
	      Ext.getCmp('cemain').setEndMeasure(selectedNode.data.measurenr);
	      Ext.getCmp('cemain').setStaffNr(vordStaff);
	      break;
	  }	      
	  }    
         
         staffField= this.createComboBoxStaff('Staff'); 
         staffField.setValue(vordStaff);
         staffField.validate();
        staffFieldCopy = this.createTextField('staffFieldCopy', 'Staff');
        staffFieldCopy.setDisabled(true);
        startTaktField= this.createComboBoxMeasureNr('Start measure');
        startTaktField.setValue(vordStartMeasure);
        startTaktField.validate();
        endTaktField= this.createComboBoxMeasureNr('End measure');
        endTaktField.setValue(vordEndMeasure);
        endTaktField.validate();
        placeField = this.createComboBox('Place');
        placeField.setValue(vordPlace);
        placeField.validate();
        formField = this.createComboBoxForm('Form');
        formField.setValue(vordForm);
        formField.validate();
        
    tstampFieldOrig = this.createTextField('tstampFieldOrig', 'Tstamp');
    tstampFieldOrig.setValue(vordTStamp);
    tstampFieldOrig.validate();
    tstamp2FieldOrig = this.createTextField('tstamp2FieldOrig', 'Tstamp2');
     tstamp2FieldOrig.setValue(vordTStamp2);
    tstamp2FieldOrig.validate();

        staffFieldReg1= this.createTextField('staffFieldReg1', 'Staff');  
        staffFieldReg1.setDisabled(true);
        placeFieldReg1 = this.createComboBox('Place');
         placeFieldReg1.setValue(vordPlace);
        placeFieldReg1.setDisabled(true);
        formFieldReg1 = this.createComboBoxForm('Form');
        formFieldReg1.setValue(vordForm);
        formFieldReg1.setDisabled(true);
        tstampFieldReg1 = this.createTextField('tstampFieldReg1', 'Tstamp');
        tstampFieldReg1.setValue(vordTStamp);
        tstampFieldReg1.setDisabled(true);
        tstamp2FieldReg1 = this.createTextField('tstamp2FieldReg1', 'Tstamp2');
        tstamp2FieldReg1.validate();
        

staffFieldReg2= this.createTextField('staffFieldReg2', 'Staff');  
 staffFieldReg2.setDisabled(true);
        placeFieldReg2 = this.createComboBox('Place');
        placeFieldReg2.setValue(vordPlace);
        placeFieldReg2.setDisabled(true);
        formFieldReg2 = this.createComboBoxForm('Form');
        formFieldReg2.setValue(vordForm);
        formFieldReg2.setDisabled(true);
tstampFieldReg2 = this.createTextField('tstampFieldReg2', 'Tstamp');
 tstampFieldReg2.setValue(vordTStamp);
tstampFieldReg2.setDisabled(true);
tstamp2FieldReg2 = this.createTextField('tstamp2FieldReg2', 'Tstamp2');
tstamp2FieldReg2.validate();

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
               
                    items: [
                        staffFieldCopy,
                        placeField,
                        formField,
                        tstampFieldOrig,
                        tstamp2FieldOrig
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
        
                    items: [
                        staffFieldReg1,
                        placeFieldReg1,
                        formFieldReg1,
                        tstampFieldReg1,
                         tstamp2FieldReg1
               
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
        
                    items: [            
                        staffFieldReg2,
                        placeFieldReg2,
                        formFieldReg2,
                        tstampFieldReg2,
                        tstamp2FieldReg2
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
      if(staffField.isValid() && startTaktField.isValid() && endTaktField.isValid()
      ){
        nextButton.setDisabled(false); 
      }
      else{
          nextButton.setDisabled(true);
          
      }       
    },
    
    handleCreateButton: function(){
     if(placeField.isValid() && formField.isValid() 
          && tstampFieldOrig.isValid() && tstamp2FieldOrig.isValid()
          && tstamp2FieldReg1.isValid() && tstamp2FieldReg2.isValid()){ 
             createElementButton.setDisabled(false); 
          }
          else{
            createElementButton.setDisabled(true); 
            
          }
        
    },
       
    createElement: function () {
     if(selectedNode !== null){
	 
	  selectedNode.data.name = 'choice_m'+selectedNode.data.measurenr;
	  selectedNode.data.obvious = false;
         selectedNode.data.ambiguous = true;
         selectedNode.data.staff = null;
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
                    staff: staffField.getValue(),                   
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
	  
	  Ext.getCmp('cegridpanel').setSelection(selectedNode);
	  
	  Ext.getCmp('cegridpanel').showXMLforSelectedElement(selectedNode);
	  
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
         staffFieldReg1.setValue(staffField.getValue());
         staffFieldReg2.setValue(staffField.getValue());
       
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
           if(me.selectedFieldId === 'tstampFieldOrig'){
               tstampFieldReg1.setValue(tstampFieldOrig.getValue());
               tstampFieldReg2.setValue(tstampFieldOrig.getValue());
           }
            me1.handleCreateButton();
        },
        render: function(c) {
            c.getEl().on('keyup', function() {   
          me.selectedFieldId = fieldName;
           if(me.selectedFieldId === 'tstampFieldOrig'){
               tstampFieldReg1.setValue(tstampFieldOrig.getValue());
               tstampFieldReg2.setValue(tstampFieldOrig.getValue());
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
    
    var states = new Array("above", "below"); 
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
       placeFieldReg1.setValue(combo.getValue());
       placeFieldReg2.setValue(combo.getValue());
        me2.handleCreateButton();
    }
  }
  });

return ceTextField;
},


   createComboBoxStaff: function(fieldName){
  
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
    if(fieldName.indexOf('Second') === -1){
        Ext.getCmp('cemain').setStaffNr(combo.getValue());
        }
        me.handleNavigationButtons();
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

