Ext.define('pmdCE.view.main.ChoiceTimeStaffCard', {
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
    satffFieldBetweenReg3: null,
    
    staffFieldReg4: null,
    placeFieldReg4: null,
    formFieldReg4: null,
    tstampFieldReg4: null,
    tstamp2FieldReg4: null,
    satffFieldBetweenReg4: null,
    
    staffFieldReg5: null,
    placeFieldReg5: null,
    formFieldReg5: null,
    tstampFieldReg5: null,
    tstamp2FieldReg5: null,
    
    staffFieldReg6: null,
    placeFieldReg6: null,
    formFieldReg6: null,
    tstampFieldReg6: null,
    tstamp2FieldReg6: null,
   
   verovioImageStart: null,
   verovioImageEnd: null,
   
   selectedFieldId:null,
   
   nextButton: null,
   prevButton: null,
   createElementButton: null,
   
      checkBoxReg2: null,
         checkBoxReg4: null,
   
    me: null,
    
         initComponent: function() {
         
         me = this;
         
         staffField= this.createComboBoxStaff('Staff'); 
         staffField.validate();
        staffFieldCopy = this.createTextField('staffFieldCopy', 'Staff');
        staffFieldCopy.setDisabled(true);
        satffFieldBetween = this.createComboBoxStaff('Second staff'); 
        satffFieldBetween.validate();
        startTaktField= this.createComboBoxMeasureNr('Start measure');
        startTaktField.validate();
        endTaktField= this.createComboBoxMeasureNr('End measure');
        endTaktField.validate();
        placeField = this.createComboBox('Place', 'placeorig');
        placeField.validate();
        formField = this.createComboBoxForm('Form');
        formField.validate();
        
    tstampFieldOrig = this.createTextField('tstampFieldOrig', 'Tstamp');
    tstampFieldOrig.validate();
    tstamp2FieldOrig = this.createTextField('tstamp2FieldOrig', 'Tstamp2');
    tstamp2FieldOrig.validate();

        staffFieldReg1= this.createTextField('staffFieldReg1', 'Staff');  
        staffFieldReg1.setDisabled(true);
        satffFieldBetweenReg1= this.createComboBoxStaff('Second staff');
        satffFieldBetweenReg1.setDisabled(true);
        placeFieldReg1 = this.createComboBox('Place', 'placereg1');
        placeFieldReg1.setDisabled(true);
        formFieldReg1 = this.createComboBoxForm('Form');
        formFieldReg1.setDisabled(true);
        tstampFieldReg1 = this.createTextField('tstampFieldReg1', 'Tstamp'); 
        tstampFieldReg1.validate();
        tstamp2FieldReg1 = this.createTextField('tstamp2FieldReg1', 'Tstamp2');
        //tstamp2FieldReg1.setDisabled(true);
        tstamp2FieldReg1.validate();

staffFieldReg2= this.createTextField('staffFieldReg2', 'Staff');  
 staffFieldReg2.setDisabled(true);
 satffFieldBetweenReg2= this.createComboBoxStaff('Second staff');
        satffFieldBetweenReg2.setDisabled(true);
        placeFieldReg2 = this.createComboBox('Place', 'placereg2');
        placeFieldReg2.setDisabled(true);
        formFieldReg2 = this.createComboBoxForm('Form');
        formFieldReg2.setDisabled(true);
tstampFieldReg2 = this.createTextField('tstampFieldReg2', 'Tstamp');
tstampFieldReg2.validate();
tstamp2FieldReg2 = this.createTextField('tstamp2FieldReg2', 'Tstamp2');
//tstamp2FieldReg2.setDisabled(true);
tstamp2FieldReg2.validate();


staffFieldReg3= this.createTextField('staffFieldReg3', 'Staff');  
staffFieldReg3.setDisabled(true);
satffFieldBetweenReg3= this.createComboBoxStaff('Second staff');
        satffFieldBetweenReg3.setDisabled(true);
        placeFieldReg3 = this.createComboBox('Place', 'placereg3');
        placeFieldReg3.setDisabled(true);
        formFieldReg3 = this.createComboBoxForm('Form');
        formFieldReg3.setDisabled(true);
        tstampFieldReg3 = this.createTextField('tstampFieldReg3', 'Tstamp');
       // tstampFieldReg3.setDisabled(true);
        tstampFieldReg3.validate();
        tstamp2FieldReg3 = this.createTextField('tstamp2FieldReg3', 'Tstamp2');
        tstamp2FieldReg3.validate();
        
        staffFieldReg4= this.createTextField('staffFieldReg4', 'Staff'); 
        staffFieldReg4.setDisabled(true);
        satffFieldBetweenReg4= this.createComboBoxStaff('Second staff');
        satffFieldBetweenReg4.setDisabled(true);
        placeFieldReg4 = this.createComboBox('Place', 'placereg4');
        placeFieldReg4.setDisabled(true);
        formFieldReg4 = this.createComboBoxForm('Form');
        formFieldReg4.setDisabled(true);
        tstampFieldReg4 = this.createTextField('tstampFieldReg4', 'Tstamp');
        //tstampFieldReg4.setDisabled(true);
        tstampFieldReg4.validate();
        tstamp2FieldReg4 = this.createTextField('tstamp2FieldReg4', 'Tstamp2');
        tstamp2FieldReg4.validate();
                
        staffFieldReg5= this.createComboBoxStaff('Staff');
        staffFieldReg5.validate();
        placeFieldReg5 = this.createComboBox('Place', 'placereg5');
        placeFieldReg5.validate();
        formFieldReg5 = this.createComboBoxForm('Form');
        formFieldReg5.setDisabled(true);
        tstampFieldReg5 = this.createTextField('tstampFieldReg5', 'Tstamp');
        //tstampFieldReg5.setDisabled(true);
        tstampFieldReg5.validate();
        tstamp2FieldReg5 = this.createTextField('tstamp2FieldReg5', 'Tstamp2');
       // tstamp2FieldReg5.setDisabled(true);
         tstamp2FieldReg5.validate();
        
        staffFieldReg6= this.createComboBoxStaff('Staff');
        staffFieldReg6.validate();
        placeFieldReg6 = this.createComboBox('Place', 'placereg6');
        placeFieldReg6.validate();
        formFieldReg6 = this.createComboBoxForm('Form');
        formFieldReg6.setDisabled(true);
        tstampFieldReg6 = this.createTextField('tstampFieldReg6', 'Tstamp');
       // tstampFieldReg6.setDisabled(true);
        tstampFieldReg6.validate();
        tstamp2FieldReg6 = this.createTextField('tstamp2FieldReg6', 'Tstamp2');
       // tstamp2FieldReg6.setDisabled(true);
        tstamp2FieldReg6.validate();

checkBoxReg2  = this.createCheckBox('Disable reg', 'checkBoxReg2');
checkBoxReg4  = this.createCheckBox('Disable reg', 'checkBoxReg4');

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
                    id: 'reg1',
                    defaultType: 'textfield',
                    margin: '0 10 0 0',
               
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
                    id: 'reg2',
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
                 },
                 {
                    xtype: 'fieldset',
                    title: 'Reg',
                    id: 'reg3',
                    defaultType: 'textfield',
                     margin: '0 10 0 0',
                    defaults: {
                        anchor: '100%'
                    },
        
                    items: [            
                        staffFieldReg3,
                        satffFieldBetweenReg3,
                        placeFieldReg3,
                        formFieldReg3,
                        tstampFieldReg3,
                         tstamp2FieldReg3
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
                    id: 'reg4',
                    defaultType: 'textfield',
                    margin: '0 10 0 0',
               
                    items: [
                    checkBoxReg4,
                        staffFieldReg4,
                        satffFieldBetweenReg4,
                        placeFieldReg4,
                        formFieldReg4,
                        tstampFieldReg4,
                         tstamp2FieldReg4
                    ]
                 },
                 {
                    xtype: 'fieldset',
                    title: 'Reg',
                    id: 'reg5',
                    defaultType: 'textfield',
                     margin: '0 10 0 0',
                    defaults: {
                        anchor: '100%'
                     },
        
                    items: [
                        staffFieldReg5,
                        placeFieldReg5,
                        formFieldReg5,
                        tstampFieldReg5,
                        tstamp2FieldReg5
               
                    ]
                 },
                 {
                    xtype: 'fieldset',
                    title: 'Reg',
                    id: 'reg6',
                    defaultType: 'textfield',
                     margin: '0 10 0 0',
                    defaults: {
                        anchor: '100%'
                    },
        
                    items: [            
                        staffFieldReg6,
                        placeFieldReg6,
                        formFieldReg6,
                        tstampFieldReg6,
                        tstamp2FieldReg6
                    ]
                 }
                
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
          && tstampFieldReg1.isValid() && tstampFieldReg2.isValid()
           && tstampFieldReg3.isValid() && tstampFieldReg4.isValid()
           && tstampFieldReg5.isValid() && tstampFieldReg6.isValid()
          && tstamp2FieldReg3.isValid() && tstamp2FieldReg4.isValid()
          && tstamp2FieldReg1.isValid() && tstamp2FieldReg2.isValid()
          && tstamp2FieldReg5.isValid() && tstamp2FieldReg6.isValid()
          && staffFieldReg5.isValid() && placeFieldReg5.isValid()
          && staffFieldReg6.isValid() && placeFieldReg6.isValid()
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
                    staff: staffField.getValue(),  
                    staff2: satffFieldBetween.getValue(),
                    tstamp: tstampFieldReg3.getValue(),
                    tstamp2: tstamp2FieldReg3.getValue(),
                    place: placeField.getValue(),
                    form: formField.getValue(),
                    name: "reg",
                    tag: "reg",
                    leaf: true
                },
                 {
                    icon: 'resources/images/mix_volume.png',
                    staff: staffFieldReg5.getValue(),                    
                    tstamp: tstampFieldReg5.getValue(),
                    tstamp2: tstamp2FieldReg5.getValue(),
                    place: placeFieldReg5.getValue(),
                    form: formField.getValue(),
                    name: "reg",
                    tag: "reg",
                    leaf: true
                },{
                    icon: 'resources/images/mix_volume.png',
                    staff: staffFieldReg6.getValue(),                    
                    tstamp: tstampFieldReg6.getValue(),
                    tstamp2: tstamp2FieldReg6.getValue(),
                    place: placeFieldReg6.getValue(),
                    form: formField.getValue(),
                    name: "reg",
                    tag: "reg",
                    leaf: true
                }
                ] 
                
                
	    });
	    
	    var root = pmdCE.getApplication().getHairpinDataStore().getRootNode();
	    var parent = root.appendChild(hairpin);
	    
	       if(!tstampFieldReg2.isDisabled()){
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
        if(!tstamp2FieldReg4.isDisabled()){
	    hairpin.appendChild({
	    icon: 'resources/images/mix_volume.png',
                    staff: staffField.getValue(), 
                    staff2: satffFieldBetween.getValue(),
                    tstamp: tstampFieldReg4.getValue(),
                    tstamp2: tstamp2FieldReg4.getValue(),
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
          staffFieldReg3.setValue(staffField.getValue());
          staffFieldReg4.setValue(staffField.getValue());
         
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
              //tstampFieldReg3.setValue(tstampFieldOrig.getValue());
              // tstampFieldReg4.setValue(tstampFieldOrig.getValue());
              // tstampFieldReg5.setValue(tstampFieldOrig.getValue());
               //tstampFieldReg6.setValue(tstampFieldOrig.getValue());
           }
           if(me.selectedFieldId === 'tstamp2FieldOrig'){              
              //  tstamp2FieldReg1.setValue(tstamp2FieldOrig.getValue());
              // tstamp2FieldReg2.setValue(tstamp2FieldOrig.getValue());
              // tstamp2FieldReg5.setValue(tstamp2FieldOrig.getValue());
              // tstamp2FieldReg6.setValue(tstamp2FieldOrig.getValue());
               
           }
            me1.handleCreateButton();
        },
        render: function(c) {
            c.getEl().on('keyup', function() {   
            me.selectedFieldId = fieldName;
           if(me.selectedFieldId === 'tstampFieldOrig'){
              //tstampFieldReg3.setValue(tstampFieldOrig.getValue());
              // tstampFieldReg4.setValue(tstampFieldOrig.getValue());
              // tstampFieldReg5.setValue(tstampFieldOrig.getValue());
              // tstampFieldReg6.setValue(tstampFieldOrig.getValue());
           }
           if(me.selectedFieldId === 'tstamp2FieldOrig'){              
              //  tstamp2FieldReg1.setValue(tstamp2FieldOrig.getValue());
             //  tstamp2FieldReg2.setValue(tstamp2FieldOrig.getValue());
             //  tstamp2FieldReg5.setValue(tstamp2FieldOrig.getValue());
              // tstamp2FieldReg6.setValue(tstamp2FieldOrig.getValue());
               
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
       placeFieldReg3.setValue(combo.getValue());
       placeFieldReg4.setValue(combo.getValue());
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
       formFieldReg5.setValue(combo.getValue());
       formFieldReg6.setValue(combo.getValue());
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
           satffFieldBetweenReg3.setValue(combo.getValue());
           satffFieldBetweenReg4.setValue(combo.getValue());
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
            tstampFieldReg2.setDisabled(checked);
        }
        else if(cb.id === 'checkBoxReg4'){
            tstamp2FieldReg4.setDisabled(checked);
        }
        
         me9.handleCreateButton();
        
 }
        }
     
   });

return ceCheckBox;
}



});

