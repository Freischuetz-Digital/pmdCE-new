Ext.define('pmdCE.view.main.ChoiceTstamp2StaffCard', {
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
   
    nextButton: null,
   prevButton: null,
   createElementButton: null,
   
   checkBoxReg2: null,
   
   expertCheckBox: null,
   
    me: null,
    
         initComponent: function() {
         
         me = this;
         
         staffField= this.createComboBoxStaff('Staff', "stafforig"); 
         staffField.validate();
        staffFieldCopy = this.createTextField('staffFieldCopy', 'Staff');
        staffFieldCopy.setDisabled(true);
        satffFieldBetween = this.createComboBoxStaff('Second staff' , "secorig");
        satffFieldBetween.validate();
        startTaktField= this.createComboBoxMeasureNr('Start measure');
        startTaktField.validate();
        endTaktField= this.createComboBoxMeasureNr('End measure');
        endTaktField.validate();
        placeField = this.createComboBox('Place','placeorig');
        placeField.validate();
        formField = this.createComboBoxForm('Form');
        formField.validate();
        
    tstampFieldOrig = this.createTextField('tstampFieldOrig', 'Tstamp');
    tstampFieldOrig.validate();
    tstamp2FieldOrig = this.createTextField('tstamp2FieldOrig', 'Tstamp2');
    tstamp2FieldOrig.validate();

        staffFieldReg1= this.createTextField('staffFieldReg1', 'Staff');  
        staffFieldReg1.setDisabled(true);
        satffFieldBetweenReg1= this.createComboBoxStaff('Second staff', "beet1");
        satffFieldBetweenReg1.setDisabled(true);
        placeFieldReg1 = this.createComboBox('Place','placereg1');
        placeFieldReg1.setDisabled(true);
        formFieldReg1 = this.createComboBoxForm('Form');
        formFieldReg1.setDisabled(true);
        tstampFieldReg1 = this.createTextField('tstampFieldReg1', 'Tstamp');
        tstampFieldReg1.validate();
        tstampFieldReg1.setDisabled(true);
        tstamp2FieldReg1 = this.createTextField('tstamp2FieldReg1', 'Tstamp2');
        tstamp2FieldReg1.validate();
        

staffFieldReg2= this.createTextField('staffFieldReg2', 'Staff');  
 staffFieldReg2.setDisabled(true);
 satffFieldBetweenReg2= this.createComboBoxStaff('Second staff', "beet2");
        satffFieldBetweenReg2.setDisabled(true);
        placeFieldReg2 = this.createComboBox('Place','placereg2');
        placeFieldReg2.setDisabled(true);
        formFieldReg2 = this.createComboBoxForm('Form');
        formFieldReg2.setDisabled(true);
tstampFieldReg2 = this.createTextField('tstampFieldReg2', 'Tstamp');
tstampFieldReg2.validate();
tstampFieldReg2.setDisabled(true);
tstamp2FieldReg2 = this.createTextField('tstamp2FieldReg2', 'Tstamp2');
 tstamp2FieldReg2.validate();


staffFieldReg3= this.createComboBoxStaff('Staff', "reg3");
staffFieldReg3.validate();
        placeFieldReg3 = this.createComboBox('Place','placereg3');
        placeFieldReg3.validate();
        formFieldReg3 = this.createComboBoxForm('Form');
        formFieldReg3.setDisabled(true);
        tstampFieldReg3 = this.createTextField('tstampFieldReg3', 'Tstamp');
        tstampFieldReg3.validate();
        tstampFieldReg3.setDisabled(true);
        tstamp2FieldReg3 = this.createTextField('tstamp2FieldReg3', 'Tstamp2');
        tstamp2FieldReg3.setDisabled(true);
        tstamp2FieldReg3.validate();
        
        
        staffFieldReg4= this.createComboBoxStaff('Staff', "reg4");
        staffFieldReg4.validate();
        placeFieldReg4 = this.createComboBox('Place','placereg4');
        placeFieldReg4.validate();
        formFieldReg4 = this.createComboBoxForm('Form');
        formFieldReg4.setDisabled(true);
        tstampFieldReg4 = this.createTextField('tstampFieldReg4', 'Tstamp');
        tstampFieldReg4.setDisabled(true);
        tstampFieldReg4.validate();
        tstamp2FieldReg4 = this.createTextField('tstamp2FieldReg4', 'Tstamp2');
        tstamp2FieldReg4.setDisabled(true);
        tstamp2FieldReg4.validate();
        
        checkBoxReg2  = this.createCheckBox('Disable reg', 'checkBoxReg2');
        
         expertCheckBox = this.createCheckBox1('Set fields editable', 'expert');

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
           expertCheckBox,
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
    createElementButton = this.createNavigationButton('createElement', 'Create', 'createElement');
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
        && tstamp2FieldReg1.isValid() && tstamp2FieldReg2.isValid()
        && tstampFieldReg1.isValid() && tstampFieldReg2.isValid()
        && tstampFieldReg3.isValid() && tstamp2FieldReg3.isValid()
         && tstampFieldReg4.isValid() && tstamp2FieldReg4.isValid()
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
     var hairId = 'hairpin_' + 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);return v.toString(16);});

	        var hairpin = Ext.create('pmdCE.model.Hairpin', {
	               id: hairId,
	               name: 'choice_m'+startTaktField.getValue(),
                    icon: 'resources/images/details-xml.png',
                    measureid: Ext.getCmp('cemain').getMeasureId(),
                    measurenr: startTaktField.getValue(), 
                    operation: 'create',
                    obvious: false,
                    ambiguous: true,
                     children: [
                {
                    icon: 'resources/images/mix_volume.png',
                    staff: staffField.getValue(),  
                    staff2: satffFieldBetween.getValue(), 
                    tstamp: tstampFieldOrig.getValue(),
                    tstamp2: tstamp2FieldOrig.getValue(),
                    place: placeField.getValue(),
                    form: formField.getValue(),
                    name: "orig",
                    tag: "orig",
                    leaf: true
                },
                {
                    icon: 'resources/images/mix_volume.png',
                    staff: staffField.getValue(), 
                    staff2: satffFieldBetween.getValue(),
                    tstamp: tstampFieldReg1.getValue(),
                    tstamp2: tstamp2FieldReg1.getValue(),
                    place: placeField.getValue(),
                    form: formField.getValue(),
                    name: "reg",
                    tag: "reg",
                    leaf: true
                },
                 {
                    icon: 'resources/images/mix_volume.png',
                    staff: staffFieldReg3.getValue(),                    
                    tstamp: tstampFieldReg3.getValue(),
                    tstamp2: tstamp2FieldReg3.getValue(),
                    place: placeFieldReg3.getValue(),
                    form: formField.getValue(),
                    name: "reg",
                    tag: "reg",
                    leaf: true
                },
                 {
                    icon: 'resources/images/mix_volume.png',
                    staff: staffFieldReg4.getValue(),                    
                    tstamp: tstampFieldReg4.getValue(),
                    tstamp2: tstamp2FieldReg4.getValue(),
                    place: placeFieldReg4.getValue(),
                    form: formField.getValue(),
                    name: "reg",
                    tag: "reg",
                    leaf: true
                }
                ]               
	    });
	    
	    var root = pmdCE.getApplication().getHairpinDataStore().getRootNode();
	    var parent = root.appendChild(hairpin);
	    
	    if(!tstamp2FieldReg2.isDisabled()){
	    hairpin.appendChild({
	   icon: 'resources/images/mix_volume.png',
                    staff: staffField.getValue(),   
                    staff2: satffFieldBetween.getValue(),
                    tstamp: tstampFieldReg2.getValue(),
                    tstamp2: tstamp2FieldReg2.getValue(),
                    place: placeField.getValue(),
                    form: formField.getValue(),
                    name: "reg",
                    tag: "reg",
                    leaf: true
        });	
        }
	    
	    parent.expand();
	    
	    Ext.getCmp('cegridpanel').setSelection(hairpin);
	    
	    Ext.getCmp('saveButton').setDisabled(false);
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
           if(me.selectedFieldId === 'tstampFieldOrig' && !expertCheckBox.getValue()){
                tstampFieldReg1.setValue(tstampFieldOrig.getValue());
               tstampFieldReg2.setValue(tstampFieldOrig.getValue());
              tstampFieldReg3.setValue(tstampFieldOrig.getValue());
               tstampFieldReg4.setValue(tstampFieldOrig.getValue());
           }
           if(me.selectedFieldId === 'tstamp2FieldOrig' && !expertCheckBox.getValue()){              
               tstamp2FieldReg3.setValue(tstamp2FieldOrig.getValue());
               tstamp2FieldReg4.setValue(tstamp2FieldOrig.getValue());
               
           }
           me1.handleCreateButton();
        },
        render: function(c) {
            c.getEl().on('keyup', function() {   
            me.selectedFieldId = fieldName;
           if(me.selectedFieldId === 'tstampFieldOrig' && !expertCheckBox.getValue()){
                tstampFieldReg1.setValue(tstampFieldOrig.getValue());
               tstampFieldReg2.setValue(tstampFieldOrig.getValue());
              tstampFieldReg3.setValue(tstampFieldOrig.getValue());
               tstampFieldReg4.setValue(tstampFieldOrig.getValue());
           }
           if(me.selectedFieldId === 'tstamp2FieldOrig' && !expertCheckBox.getValue()){              
               tstamp2FieldReg3.setValue(tstamp2FieldOrig.getValue());
               tstamp2FieldReg4.setValue(tstamp2FieldOrig.getValue());
               
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
        if(combo.id === 'placeorig'  && !expertCheckBox.getValue()){
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
    id: fieldId,
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
           satffFieldBetweenReg1.setValue(combo.getValue());
           satffFieldBetweenReg2.setValue(combo.getValue());
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
},

createCheckBox1: function(fieldName, filedid){
       var me9 = this;
       
    var ceCheckBox = Ext.create('Ext.form.field.Checkbox',{
        fieldLabel: fieldName,
        id: filedid,
     
        listeners: {
        change: function(cb, checked) {
        if(checked){
            satffFieldBetweenReg1.setDisabled(false);
             satffFieldBetweenReg1.validate();
            placeFieldReg1.setDisabled(false);
            placeFieldReg1.validate();
            tstampFieldReg1.setDisabled(false);
            tstampFieldReg1.validate();
            tstamp2FieldReg1.setDisabled(false);
            tstamp2FieldReg1.validate();
            
            staffFieldReg3.setDisabled(false);
             staffFieldReg3.validate();
            placeFieldReg3.setDisabled(false);
            placeFieldReg3.validate();
            tstampFieldReg3.setDisabled(false);
            tstampFieldReg3.validate();
            tstamp2FieldReg3.setDisabled(false);
            tstamp2FieldReg3.validate();   
            
            staffFieldReg4.setDisabled(false);
             staffFieldReg4.validate();
            placeFieldReg4.setDisabled(false);
            placeFieldReg4.validate();
            tstampFieldReg4.setDisabled(false);
            tstampFieldReg4.validate();
            tstamp2FieldReg4.setDisabled(false);
            tstamp2FieldReg4.validate();      
        
            if(checkBoxReg2.getValue() ){
            satffFieldBetweenReg2.setDisabled(true);
             satffFieldBetweenReg2.validate();
                placeFieldReg2.setDisabled(true);
            placeFieldReg2.validate();
            tstampFieldReg2.setDisabled(true);
            tstampFieldReg2.validate();
            tstamp2FieldReg2.setDisabled(true);
            tstamp2FieldReg2.validate();
            }
            else{
                satffFieldBetweenReg2.setDisabled(false);
             satffFieldBetweenReg2.validate();
                placeFieldReg2.setDisabled(false);
            placeFieldReg2.validate();
            tstampFieldReg2.setDisabled(false);
            tstampFieldReg2.validate();
            tstamp2FieldReg2.setDisabled(false);
            tstamp2FieldReg2.validate();
            }
        }
        // !checked
        else{
            satffFieldBetweenReg1.setDisabled(true);
            if(satffFieldBetweenReg1.getValue() === "" || satffFieldBetweenReg1.getValue() === null){
             satffFieldBetweenReg1.setValue(satffFieldBetween.getValue());
          
         }
             satffFieldBetweenReg1.validate();
            placeFieldReg1.setDisabled(true);
            if(placeFieldReg1.getValue() === "" || placeFieldReg1.getValue() === null){
             placeFieldReg1.setValue(placeField.getValue());
          
         }
            placeFieldReg1.validate();
            tstampFieldReg1.setDisabled(true);
             if(tstampFieldReg1.getValue() === "" || tstampFieldReg1.getValue() === null){
             tstampFieldReg1.setValue(tstampFieldOrig.getValue());
          
         }
            tstampFieldReg1.validate();
            tstamp2FieldReg1.setDisabled(false);
            tstamp2FieldReg1.validate();
            
            
            staffFieldReg3.setDisabled(false);
             staffFieldReg3.validate();
            placeFieldReg3.setDisabled(false);
            placeFieldReg3.validate();
            tstampFieldReg3.setDisabled(true);
             if(tstampFieldReg3.getValue() === "" || tstampFieldReg3.getValue() === null){
             tstampFieldReg3.setValue(tstampFieldOrig.getValue());
          
         }
            tstampFieldReg3.validate();
            tstamp2FieldReg3.setDisabled(true);
             if(tstamp2FieldReg3.getValue() === "" || tstamp2FieldReg3.getValue() === null){
             tstamp2FieldReg3.setValue(tstamp2FieldOrig.getValue());
          
         }
            tstamp2FieldReg3.validate(); 

            staffFieldReg4.setDisabled(false);
             staffFieldReg4.validate();
            placeFieldReg4.setDisabled(false);
            placeFieldReg4.validate();
            tstampFieldReg4.setDisabled(true);
            if(tstampFieldReg4.getValue() === "" || tstampFieldReg4.getValue() === null){
             tstampFieldReg4.setValue(tstampFieldOrig.getValue());
          
         }
            tstampFieldReg4.validate();
            tstamp2FieldReg4.setDisabled(true);
            if(tstamp2FieldReg4.getValue() === "" || tstamp2FieldReg4.getValue() === null){
             tstamp2FieldReg4.setValue(tstamp2FieldOrig.getValue());
          
         }
            tstamp2FieldReg4.validate(); 
            
            if(checkBoxReg2.getValue() ){
            satffFieldBetweenReg2.setDisabled(true);
             satffFieldBetweenReg2.validate();
                placeFieldReg2.setDisabled(true);
            placeFieldReg2.validate();
            tstampFieldReg2.setDisabled(true);
            tstampFieldReg2.validate();
            tstamp2FieldReg2.setDisabled(true);
            tstamp2FieldReg2.validate();
            }
            else{
            satffFieldBetweenReg2.setDisabled(true);
             if(satffFieldBetweenReg2.getValue() === "" || satffFieldBetweenReg2.getValue() === null){
             satffFieldBetweenReg2.setValue(satffFieldBetween.getValue());
          
         }
             satffFieldBetweenReg2.validate();
                placeFieldReg2.setDisabled(true);
                if(placeFieldReg2.getValue() === "" || placeFieldReg2.getValue() === null){
             placeFieldReg2.setValue(placeField.getValue());
          
         }
            placeFieldReg2.validate();
            tstampFieldReg2.setDisabled(true);
             if(tstampFieldReg2.getValue() === "" || tstampFieldReg2.getValue() === null){
             tstampFieldReg2.setValue(tstampFieldOrig.getValue());
          
         }
            tstampFieldReg2.validate();
            tstamp2FieldReg2.setDisabled(false);
            tstamp2FieldReg2.validate();
            }
            
        }
        me9.handleCreateButton();
       
        
 }
        }
     
   });

return ceCheckBox;
}



});

