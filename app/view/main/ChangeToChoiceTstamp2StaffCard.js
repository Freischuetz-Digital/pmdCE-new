Ext.define('pmdCE.view.main.ChangeToChoiceTstamp2StaffCard', {
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
   
    tstampFieldOrig: null,
    tstamp2FieldOrig: null,
 
    staffFieldReg1: null,
    placeFieldReg1: null,
    formFieldReg1: null,
    tstampFieldReg1: null,
    tstamp2FieldReg1: null,
    satffFieldBetweenReg1: null,

    staffFieldReg2: null,
    placeFieldReg2: null,
    formFieldReg2: null,
    tstampFieldReg2: null,
    tstamp2FieldReg2: null,
    satffFieldBetweenReg2: null,
    
    staffFieldReg3: null,
    placeFieldReg3: null,
    formFieldReg3: null,
    tstampFieldReg3: null,
    tstamp2FieldReg3: null,
    
    staffFieldReg4: null,
    placeFieldReg4: null,
    formFieldReg4: null,
    tstampFieldReg4: null,
    tstamp2FieldReg4: null,
   
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
   
   checkBoxReg2: null,
   
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
	      
	      break;
	  }	      
	  }    
         
         staffField= this.createComboBoxStaff('Staff'); 
         staffField.setValue(vordStaff);
         staffField.validate();
        staffFieldCopy = this.createTextField('staffFieldCopy', 'Staff');
        staffFieldCopy.setDisabled(true);
        satffFieldBetween = this.createComboBoxStaff('Second staff');
        satffFieldBetween.validate();
        startTaktField= this.createComboBoxMeasureNr('Start measure');
        startTaktField.setValue(vordStartMeasure);
        startTaktField.validate();
        endTaktField= this.createComboBoxMeasureNr('End measure');
        endTaktField.setValue(vordEndMeasure);
        endTaktField.validate();
        placeField = this.createComboBox('Place','placeorig');
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
        satffFieldBetweenReg1= this.createComboBoxStaff('Second staff');
        satffFieldBetweenReg1.setDisabled(true);
        placeFieldReg1 = this.createComboBox('Place','placereg1');
        placeFieldReg1.setDisabled(true);
        formFieldReg1 = this.createComboBoxForm('Form');
        formFieldReg1.setValue(vordForm);
        formFieldReg1.setDisabled(true);
        tstampFieldReg1 = this.createTextField('tstampFieldReg1', 'Tstamp');
        tstampFieldReg1.setValue(vordTStamp);
        //tstampFieldReg1.setDisabled(true);
        tstampFieldReg1.validate();
        tstamp2FieldReg1 = this.createTextField('tstamp2FieldReg1', 'Tstamp2');
        tstamp2FieldReg1.validate();
        

staffFieldReg2= this.createTextField('staffFieldReg2', 'Staff');  
 staffFieldReg2.setDisabled(true);
 satffFieldBetweenReg2= this.createComboBoxStaff('Second staff');
        satffFieldBetweenReg2.setDisabled(true);
        placeFieldReg2 = this.createComboBox('Place','placereg2');
        placeFieldReg2.setDisabled(true);
        formFieldReg2 = this.createComboBoxForm('Form');
        formFieldReg2.setValue(vordForm);
        formFieldReg2.setDisabled(true);
tstampFieldReg2 = this.createTextField('tstampFieldReg2', 'Tstamp');
 tstampFieldReg2.setValue(vordTStamp);
 tstampFieldReg2.validate();
//tstampFieldReg2.setDisabled(true);
tstamp2FieldReg2 = this.createTextField('tstamp2FieldReg2', 'Tstamp2');
 tstamp2FieldReg2.validate();


staffFieldReg3= this.createComboBoxStaff('Staff');
staffFieldReg3.validate();
        placeFieldReg3 = this.createComboBox('Place','placereg3');
        placeFieldReg3.validate();
        formFieldReg3 = this.createComboBoxForm('Form');
        formFieldReg3.setValue(vordForm);
        formFieldReg3.setDisabled(true);
        tstampFieldReg3 = this.createTextField('tstampFieldReg3', 'Tstamp');
         tstampFieldReg3.setValue(vordTStamp);
         tstampFieldReg3.validate();
        //tstampFieldReg3.setDisabled(true);
        tstamp2FieldReg3 = this.createTextField('tstamp2FieldReg3', 'Tstamp2');
        tstamp2FieldReg3.setValue(vordTStamp2);
        tstamp2FieldReg3.validate();
       // tstamp2FieldReg3.setDisabled(true);
        
        
        staffFieldReg4= this.createComboBoxStaff('Staff');
        staffFieldReg4.validate();
        placeFieldReg4 = this.createComboBox('Place','placereg4');
        placeFieldReg4.validate();
        formFieldReg4 = this.createComboBoxForm('Form');
        formFieldReg4.setValue(vordForm);
        formFieldReg4.setDisabled(true);
        tstampFieldReg4 = this.createTextField('tstampFieldReg4', 'Tstamp');
         tstampFieldReg4.setValue(vordTStamp);
        //tstampFieldReg4.setDisabled(true);
        tstampFieldReg4.validate();
        tstamp2FieldReg4 = this.createTextField('tstamp2FieldReg4', 'Tstamp2');
        tstamp2FieldReg4.setValue(vordTStamp2);
        //tstamp2FieldReg4.setDisabled(true);
        tstamp2FieldReg4.validate();
        
        checkBoxReg2  = this.createCheckBox('Disable reg', 'checkBoxReg2');


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
                        satffFieldBetween,
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
                        satffFieldBetweenReg1,
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
                    checkBoxReg2,
                        staffFieldReg2,
                        satffFieldBetweenReg2,
                        placeFieldReg2,
                        formFieldReg2,
                        tstampFieldReg2,
                        tstamp2FieldReg2
                    ]
                 }
                
        ] // end card-1 items
           
        }, 
         {
           id: 'card-12',
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
                    title: 'Reg',
                    id: 'orig1',
                    defaultType: 'textfield',
                    margin: '0 10 0 0',
               
                    items: [
                        staffFieldReg3,
                        placeFieldReg3,
                        formFieldReg3,
                        tstampFieldReg3,
                         tstamp2FieldReg3
                    ]
                 },
                 {
                    xtype: 'fieldset',
                    title: 'Reg',
                    id: 'starttime1',
                    defaultType: 'textfield',
                     margin: '0 10 0 0',
                    defaults: {
                        anchor: '100%'
                     },
        
                    items: [
                        staffFieldReg4,
                        placeFieldReg4,
                        formFieldReg4,
                        tstampFieldReg4,
                         tstamp2FieldReg4
               
                    ]
                 }
                 /*{
                    xtype: 'fieldset',
                    title: 'Reg',
                    id: 'endtime1',
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
                 }*/
                
        ] // end card-1 items
           },
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
          && satffFieldBetween.isValid()
        && tstampFieldReg1.isValid() && tstampFieldReg2.isValid()
        && tstamp2FieldReg1.isValid() && tstamp2FieldReg2.isValid()
        && tstampFieldReg3.isValid() && tstampFieldReg4.isValid()
        && tstamp2FieldReg3.isValid() && tstamp2FieldReg4.isValid()
        && staffFieldReg3.isValid() && placeFieldReg3.isValid()
         && staffFieldReg4.isValid() && placeFieldReg4.isValid()
        ){ 
             createElementButton.setDisabled(false); 
          }
          else{
            createElementButton.setDisabled(true);  
          }
    },
       
    createElement: function () {
      if(selectedNode !== null){
	 
	  selectedNode.data.name = 'choice_m'+startTaktField.getValue();
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
                    staff2: satffFieldBetween.getValue(), 
                    tstamp: tstampFieldReg1.getValue(),
                    tstamp2: tstamp2FieldReg1.getValue(),
                    place: placeFieldReg1.getValue(),
                    form: formFieldReg1.getValue(),
                    name: "reg",
                    tag: "reg",
                    leaf: true
        });
        if(!tstamp2FieldReg2.isDisabled()){
        selectedNode.appendChild({
                    icon: 'resources/images/mix_volume.png',
                    staff: staffFieldReg2.getValue(), 
                    staff2: satffFieldBetween.getValue(), 
                    tstamp: tstampFieldReg2.getValue(),
                    tstamp2: tstamp2FieldReg2.getValue(),
                    place: placeFieldReg2.getValue(),
                    form: formFieldReg2.getValue(),
                    name: "reg",
                    tag: "reg",
                    leaf: true
        });	
        }
        selectedNode.appendChild({
                    icon: 'resources/images/mix_volume.png',
                    staff: staffFieldReg3.getValue(),  
                    tstamp: tstampFieldReg3.getValue(),
                    tstamp2: tstamp2FieldReg3.getValue(),
                    place: placeFieldReg3.getValue(),
                    form: formFieldReg3.getValue(),
                    name: "reg",
                    tag: "reg",
                    leaf: true
        });
        selectedNode.appendChild({
                    icon: 'resources/images/mix_volume.png',
                    staff: staffFieldReg4.getValue(),                  
                    tstamp: tstampFieldReg4.getValue(),
                    tstamp2: tstamp2FieldReg4.getValue(),
                    place: placeFieldReg4.getValue(),
                    form: formFieldReg4.getValue(),
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
        
        // TODO
        /*if(l.activeItem.id === 'card-1'){
            Ext.getCmp('createItem').setDisabled(false);
        }*/
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
               // tstampFieldReg1.setValue(tstampFieldOrig.getValue());
               //tstampFieldReg2.setValue(tstampFieldOrig.getValue());
              //tstampFieldReg3.setValue(tstampFieldOrig.getValue());
               //tstampFieldReg4.setValue(tstampFieldOrig.getValue());
           }
           if(me.selectedFieldId === 'tstamp2FieldOrig'){              
               //tstamp2FieldReg3.setValue(tstamp2FieldOrig.getValue());
               //tstamp2FieldReg4.setValue(tstamp2FieldOrig.getValue());
               
           }
           me1.handleCreateButton();
        },
        render: function(c) {
            c.getEl().on('keyup', function() {   
          me.selectedFieldId = fieldName;
           if(me.selectedFieldId === 'tstampFieldOrig'){
              //  tstampFieldReg1.setValue(tstampFieldOrig.getValue());
              // tstampFieldReg2.setValue(tstampFieldOrig.getValue());
              //tstampFieldReg3.setValue(tstampFieldOrig.getValue());
              // tstampFieldReg4.setValue(tstampFieldOrig.getValue());
           }
           if(me.selectedFieldId === 'tstamp2FieldOrig'){              
               //tstamp2FieldReg3.setValue(tstamp2FieldOrig.getValue());
               //tstamp2FieldReg4.setValue(tstamp2FieldOrig.getValue());
               
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

    createComboBox: function(fieldName, fieldId){
    
    var states = new Array("above", "below", "between"); 
    var me2 = this;
    var ceTextField = Ext.create('Ext.form.ComboBox', {
    fieldLabel: fieldName,
    store: states,
    id: fieldId,
    queryMode: 'local',
    displayField: 'name',
    editable: false,
    allowBlank: false,
    invalidCls: '',
    listeners: {
    select: function(combo, record, index) { 
        if(combo.id === 'placeorig'){
         placeFieldReg1.setValue(combo.getValue());
       placeFieldReg2.setValue(combo.getValue());
    }
   me2.handleCreateButton();
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
       formFieldReg3.setValue(combo.getValue());
       formFieldReg4.setValue(combo.getValue());
    me3.handleCreateButton();
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
        else{
           satffFieldBetweenReg1.setValue(combo.getValue());
           satffFieldBetweenReg2.setValue(combo.getValue());
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

createNavigationButton: function(navItemId, navText, navHandler){
 var navButton = Ext.create('Ext.button.Button', {  
                     itemId: navItemId,
            text: navText,
            handler: navHandler,
            disabled: true
                  
          })

return navButton;
},

      createCheckBox: function(fieldName, filedid){
       var me9 = this;
       
    var ceCheckBox = Ext.create('Ext.form.field.Checkbox',{
        fieldLabel: fieldName,
        id: filedid,
     
        listeners: {
        change: function(cb, checked) {
        if(cb.id === 'checkBoxReg2'){
            tstamp2FieldReg2.setDisabled(checked);
        }
        
         me9.handleCreateButton();
        
 }
        }
     
   });

return ceCheckBox;
}



});

