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
   rend: null,
    tstampFieldOrig: null,
    tstamp2FieldOrig: null,
 
    staffFieldReg1: null,
    placeFieldReg1: null,
    formFieldReg1: null,
    tstampFieldReg1: null,
    tstamp2FieldReg1: null,
    satffFieldBetweenReg1: null,
    rendReg1: null,

    staffFieldReg2: null,
    placeFieldReg2: null,
    formFieldReg2: null,
    tstampFieldReg2: null,
    tstamp2FieldReg2: null,
    satffFieldBetweenReg2: null,
    rendReg2: null,
    
    staffFieldReg3: null,
    placeFieldReg3: null,
    formFieldReg3: null,
    tstampFieldReg3: null,
    tstamp2FieldReg3: null,
    satffFieldBetweenReg3: null,
    rendReg3: null,
    
    staffFieldReg4: null,
    placeFieldReg4: null,
    formFieldReg4: null,
    tstampFieldReg4: null,
    tstamp2FieldReg4: null,
    satffFieldBetweenReg4: null,
    rendReg4: null,
    
    staffFieldReg5: null,
    placeFieldReg5: null,
    formFieldReg5: null,
    tstampFieldReg5: null,
    tstamp2FieldReg5: null,
    rendReg5: null,
    
    staffFieldReg6: null,
    placeFieldReg6: null,
    formFieldReg6: null,
    tstampFieldReg6: null,
    tstamp2FieldReg6: null,
    rendReg6: null,
   
   verovioImageStart: null,
   verovioImageEnd: null,
   
   selectedFieldId:null,
   
   nextButton: null,
   prevButton: null,
   createElementButton: null,
   
      checkBoxReg2: null,
         checkBoxReg4: null,
         
         expertCheckBox: null,
   
    me: null,
    
         initComponent: function() {
         
         me = this;
         
         // create orig fields
         // common 
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
        placeField = this.createComboBox('Place', 'placeorig');
        placeField.validate();      
    tstampFieldOrig = this.createTextField('tstampFieldOrig', 'Tstamp');
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
         }
         formField.validate();

        // reg1 fields
        // common
        staffFieldReg1= this.createTextField('staffFieldReg1', 'Staff');  
        staffFieldReg1.setDisabled(true);
        satffFieldBetweenReg1= this.createComboBoxStaff('Second staff', "beet1");
        satffFieldBetweenReg1.setDisabled(true);
        placeFieldReg1 = this.createComboBox('Place', 'placereg1');
        placeFieldReg1.setDisabled(true);
        tstampFieldReg1 = this.createTextField('tstampFieldReg1', 'Tstamp'); 
        tstampFieldReg1.validate();
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
    formFieldReg1.validate();
    tstamp2FieldReg1.setDisabled(true);

// reg2 fields
    // common
staffFieldReg2= this.createTextField('staffFieldReg2', 'Staff');  
 staffFieldReg2.setDisabled(true);
 satffFieldBetweenReg2= this.createComboBoxStaff('Second staff', "beet2");
        satffFieldBetweenReg2.setDisabled(true);
        placeFieldReg2 = this.createComboBox('Place', 'placereg2');
        placeFieldReg2.setDisabled(true);
tstampFieldReg2 = this.createTextField('tstampFieldReg2', 'Tstamp');
tstampFieldReg2.validate();
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
    }
    formFieldReg2.setDisabled(true);
    tstamp2FieldReg2.setDisabled(true);
    
     // reg3 fields
    // common
staffFieldReg3= this.createTextField('staffFieldReg3', 'Staff');  
staffFieldReg3.setDisabled(true);
satffFieldBetweenReg3= this.createComboBoxStaff('Second staff', "sreg3");
        satffFieldBetweenReg3.setDisabled(true);
        placeFieldReg3 = this.createComboBox('Place', 'placereg3');
        placeFieldReg3.setDisabled(true);
        tstampFieldReg3 = this.createTextField('tstampFieldReg3', 'Tstamp');
        tstampFieldReg3.setDisabled(true);
        tstampFieldReg3.validate();
         // hairpin
    if(Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1){
        formFieldReg3 = this.createComboBoxForm('Form');
        tstamp2FieldReg3 = this.createTextField('tstamp2FieldReg3', 'Tstamp2');
        tstamp2FieldReg3.validate();
    }
    // dynams
    else{
        formFieldReg3 = this.createTextField('formReg3', 'Form'); 
        tstamp2FieldReg3 = this.createTextFieldTstamp2('tstamp2FieldReg3', 'Tstamp2');
        rendReg3 = this.createTextFieldTstamp2('rendReg3', 'Rend');
        rendReg3.setDisabled(true);
    }
    formFieldReg3.setDisabled(true);
    
        // reg4 fields
        // common 
        staffFieldReg4= this.createTextField('staffFieldReg4', 'Staff'); 
        staffFieldReg4.setDisabled(true);
        satffFieldBetweenReg4= this.createComboBoxStaff('Second staff', "sreg4");
        satffFieldBetweenReg4.setDisabled(true);
        placeFieldReg4 = this.createComboBox('Place', 'placereg4');
        placeFieldReg4.setDisabled(true);
        tstampFieldReg4 = this.createTextField('tstampFieldReg4', 'Tstamp');
        tstampFieldReg4.setDisabled(true);
        tstampFieldReg4.validate();
                   // hairpin
    if(Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1){
        formFieldReg4 = this.createComboBoxForm('Form');
        tstamp2FieldReg4 = this.createTextField('tstamp2FieldReg4', 'Tstamp2');
        tstamp2FieldReg4.validate();
    }
    // dynams
    else{
        formFieldReg4 = this.createTextField('formReg4', 'Form'); 
        tstamp2FieldReg4 = this.createTextFieldTstamp2('tstamp2FieldReg4', 'Tstamp2');
        rendReg4 = this.createTextFieldTstamp2('rendReg4', 'Rend');
        rendReg4.setDisabled(true);
    }
    formFieldReg4.setDisabled(true);
   
            // reg5 fields
        // common      
        staffFieldReg5= this.createComboBoxStaff('Staff', "sreg5");
        staffFieldReg5.validate();
        placeFieldReg5 = this.createComboBox('Place', 'placereg5');
        placeFieldReg5.validate();
        tstampFieldReg5 = this.createTextField('tstampFieldReg5', 'Tstamp');
        tstampFieldReg5.setDisabled(true);
        tstampFieldReg5.validate();
           // hairpin
    if(Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1){
        formFieldReg5 = this.createComboBoxForm('Form');
        tstamp2FieldReg5 = this.createTextField('tstamp2FieldReg5', 'Tstamp2');
        tstamp2FieldReg5.validate();
    }
    // dynams
    else{
        formFieldReg5 = this.createTextField('formReg5', 'Form'); 
        tstamp2FieldReg5 = this.createTextFieldTstamp2('tstamp2FieldReg5', 'Tstamp2');
        rendReg5 = this.createTextFieldTstamp2('rendReg5', 'Rend');
        rendReg5.setDisabled(true);
    }
    formFieldReg5.setDisabled(true);
    tstamp2FieldReg5.setDisabled(true);
        
          // reg6 fields
        // common  
        staffFieldReg6= this.createComboBoxStaff('Staff', "sreg6");
        staffFieldReg6.validate();
        placeFieldReg6 = this.createComboBox('Place', 'placereg6');
        placeFieldReg6.validate();
        tstampFieldReg6 = this.createTextField('tstampFieldReg6', 'Tstamp');
        tstampFieldReg6.setDisabled(true);
        tstampFieldReg6.validate();
         // hairpin
    if(Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1){
        formFieldReg6 = this.createComboBoxForm('Form');
        tstamp2FieldReg6 = this.createTextField('tstamp2FieldReg6', 'Tstamp2');
        tstamp2FieldReg6.validate();
    }
    // dynams
    else{
        formFieldReg6 = this.createTextField('formReg6', 'Form'); 
        tstamp2FieldReg6 = this.createTextFieldTstamp2('tstamp2FieldReg6', 'Tstamp2');
        rendReg6 = this.createTextFieldTstamp2('rendReg6', 'Rend');
        rendReg6.setDisabled(true);
    }
    formFieldReg6.setDisabled(true);
    tstamp2FieldReg6.setDisabled(true);

checkBoxReg2  = this.createCheckBox('Disable reg', 'checkBoxReg2');
checkBoxReg4  = this.createCheckBox('Disable reg', 'checkBoxReg4');

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
                    id: 'reg1',
                    defaultType: 'textfield',
                    margin: '0 10 0 0',
                    
                     items : Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1 ? [
                        staffFieldReg1,
                        satffFieldBetweenReg1,
                        placeFieldReg1,
                        formFieldReg1,
                        tstampFieldReg1,
                         tstamp2FieldReg1          
                    ] : [
                        staffFieldReg1,
                        satffFieldBetweenReg1,
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
                    id: 'reg2',
                    defaultType: 'textfield',
                     margin: '0 10 0 0',
                    defaults: {
                        anchor: '100%'
                     },
                     
                     items : Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1 ? [
                        checkBoxReg2,
                        staffFieldReg2,
                        satffFieldBetweenReg2,
                        placeFieldReg2,
                        formFieldReg2,
                        tstampFieldReg2,
                        tstamp2FieldReg2       
                    ] : [
                        checkBoxReg2,
                        staffFieldReg2,
                        satffFieldBetweenReg2,
                        placeFieldReg2,
                        formFieldReg2,
                        tstampFieldReg2,
                        tstamp2FieldReg2,
                       rendReg2           
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
                    
                    items : Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1 ? [
                        staffFieldReg3,
                        satffFieldBetweenReg3,
                        placeFieldReg3,
                        formFieldReg3,
                        tstampFieldReg3,
                         tstamp2FieldReg3  
                    ] : [
                        staffFieldReg3,
                        satffFieldBetweenReg3,
                        placeFieldReg3,
                        formFieldReg3,
                        tstampFieldReg3,
                         tstamp2FieldReg3,
                       rendReg3           
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
                    
                    items : Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1 ? [
                        checkBoxReg4,
                        staffFieldReg4,
                        satffFieldBetweenReg4,
                        placeFieldReg4,
                        formFieldReg4,
                        tstampFieldReg4,
                         tstamp2FieldReg4 
                    ] : [
                        checkBoxReg4,
                        staffFieldReg4,
                        satffFieldBetweenReg4,
                        placeFieldReg4,
                        formFieldReg4,
                        tstampFieldReg4,
                         tstamp2FieldReg4,
                       rendReg4          
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
                     
                     items : Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1 ? [
                        staffFieldReg5,
                        placeFieldReg5,
                        formFieldReg5,
                        tstampFieldReg5,
                        tstamp2FieldReg5
                    ] : [
                        staffFieldReg5,
                        placeFieldReg5,
                        formFieldReg5,
                        tstampFieldReg5,
                        tstamp2FieldReg5,
                       rendReg5          
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
                    
                    items : Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1 ? [
                        staffFieldReg6,
                        placeFieldReg6,
                        formFieldReg6,
                        tstampFieldReg6,
                        tstamp2FieldReg6
                    ] : [
                        staffFieldReg6,
                        placeFieldReg6,
                        formFieldReg6,
                        tstampFieldReg6,
                        tstamp2FieldReg6,
                       rendReg6         
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
    
    var modelPath = null;
    var prefix = null;
     var elType = null;
     if(Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1){
    modelPath = 'pmdCE.model.Hairpin';
    prefix = 'hairpin_';
        elType = 'hairpin';
    }
    else if(Ext.getCmp('cemain').getComponentType().indexOf('Dynam') > -1){
        modelPath = 'pmdCE.model.Dynam';
         prefix = 'dynam_';
         elType = 'dynam';
    }
    else if(Ext.getCmp('cemain').getComponentType().indexOf('Dir') > -1){
        modelPath = 'pmdCE.model.Dir';
         prefix = 'dir_';
         elType = 'dir';
    }
    
    var hairId = prefix + 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);return v.toString(16);});

	        var hairpin = Ext.create(modelPath, {
	               id: hairId,
	               name: 'choice_m'+startTaktField.getValue(),
                    icon: 'resources/images/details-xml.png',
                    type : elType,
                    measureid: Ext.getCmp('cemain').getMeasureId(),
                    measurenr: startTaktField.getValue(), 
                    operation: 'create',
                    obvious: false,
                    ambiguous: true,
                     children: [
                {
                    icon: 'resources/images/mix_volume.png',
                    type : elType,
                    staff: staffField.getValue(),  
                    staff2: satffFieldBetween.getValue(), 
                    tstamp: tstampFieldOrig.getValue(),
                    tstamp2: tstamp2FieldOrig.getValue(),
                    place: placeField.getValue(),
                    form: formField.getValue(),
                    rend: typeof rend!== 'undefined' ? rend.getValue() : null,
                    name: "orig",
                    tag: "orig",
                    leaf: true
                },
                {
                    icon: 'resources/images/mix_volume.png',
                    type : elType,
                    staff: staffField.getValue(), 
                    staff2: satffFieldBetween.getValue(),
                    tstamp: tstampFieldReg1.getValue(),
                    tstamp2: tstamp2FieldReg1.getValue(),
                    place: placeField.getValue(),
                    form: formField.getValue(),
                    rend: typeof rendReg1!== 'undefined' ? rendReg1.getValue() : null,
                    name: "reg",
                    tag: "reg",
                    leaf: true
                },
                 {
                    icon: 'resources/images/mix_volume.png',
                    type : elType,
                    staff: staffField.getValue(),  
                    staff2: satffFieldBetween.getValue(),
                    tstamp: tstampFieldReg3.getValue(),
                    tstamp2: tstamp2FieldReg3.getValue(),
                    place: placeField.getValue(),
                    form: formField.getValue(),
                    rend: typeof rendReg3!== 'undefined' ? rendReg3.getValue() : null,
                    name: "reg",
                    tag: "reg",
                    leaf: true
                },
                 {
                    icon: 'resources/images/mix_volume.png',
                    type : elType,
                    staff: staffFieldReg5.getValue(),                    
                    tstamp: tstampFieldReg5.getValue(),
                    tstamp2: tstamp2FieldReg5.getValue(),
                    place: placeFieldReg5.getValue(),
                    form: formField.getValue(),
                    rend: typeof rendReg5!== 'undefined' ? rendReg5.getValue() : null,
                    name: "reg",
                    tag: "reg",
                    leaf: true
                },{
                    icon: 'resources/images/mix_volume.png',
                    type : elType,
                    staff: staffFieldReg6.getValue(),                    
                    tstamp: tstampFieldReg6.getValue(),
                    tstamp2: tstamp2FieldReg6.getValue(),
                    place: placeFieldReg6.getValue(),
                    form: formField.getValue(),
                    rend: typeof rendReg6!== 'undefined' ? rendReg6.getValue() : null,
                    name: "reg",
                    tag: "reg",
                    leaf: true
                }
                ] 
                
                
	    });
	   
	    var root = null;
	    if(Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1){
	        root = pmdCE.getApplication().getHairpinDataStore().getRootNode();
	    
	    }
	    else if(Ext.getCmp('cemain').getComponentType().indexOf('Dynam') > -1){
	        root = pmdCE.getApplication().getDynamDataStore().getRootNode();
	    }
	     else if(Ext.getCmp('cemain').getComponentType().indexOf('Dir') > -1){
	        root = pmdCE.getApplication().getDirDataStore().getRootNode();
	    }
	    var parent = root.appendChild(hairpin);
	    
	       if(!tstampFieldReg2.isDisabled()){
	    hairpin.appendChild({
	   icon: 'resources/images/mix_volume.png',
	   type : elType,
                    staff: staffField.getValue(),   
                    staff2: satffFieldBetween.getValue(),
                    tstamp: tstampFieldReg2.getValue(),
                    tstamp2: tstamp2FieldReg2.getValue(),
                    place: placeField.getValue(),
                    form: formField.getValue(),
                    rend: typeof rendReg2!== 'undefined' ? rendReg2.getValue() : null,
                    name: "reg",
                    tag: "reg",
                    leaf: true  
        });	
        }
        if(!tstamp2FieldReg4.isDisabled()){
	    hairpin.appendChild({
	    icon: 'resources/images/mix_volume.png',
	    type : elType,
                    staff: staffField.getValue(), 
                    staff2: satffFieldBetween.getValue(),
                    tstamp: tstampFieldReg4.getValue(),
                    tstamp2: tstamp2FieldReg4.getValue(),
                    place: placeField.getValue(),
                    form: formField.getValue(),
                    rend: typeof rendReg4!== 'undefined' ? rendReg4.getValue() : null,
                    name: "reg",
                    tag: "reg",
                    leaf: true
        });	
        }
        
	    parent.expand();
	    
	     if(Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1){
            Ext.getCmp('cegridpanel').setSelection(hairpin);
        }
        else if(Ext.getCmp('cemain').getComponentType().indexOf('Dynam') > -1){
            Ext.getCmp('dynamsgridpanel').setSelection(hairpin);
            
        }
        else if(Ext.getCmp('cemain').getComponentType().indexOf('Dir') > -1){
            Ext.getCmp('dirsgridpanel').setSelection(hairpin);
            
        }
	    
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
           if(me.selectedFieldId === 'tstampFieldOrig' && !expertCheckBox.getValue()){
              tstampFieldReg3.setValue(tstampFieldOrig.getValue());
               tstampFieldReg4.setValue(tstampFieldOrig.getValue());
               tstampFieldReg5.setValue(tstampFieldOrig.getValue());
               tstampFieldReg6.setValue(tstampFieldOrig.getValue());
           }
           if(me.selectedFieldId === 'tstamp2FieldOrig' && !expertCheckBox.getValue()){              
                tstamp2FieldReg1.setValue(tstamp2FieldOrig.getValue());
               tstamp2FieldReg2.setValue(tstamp2FieldOrig.getValue());
               tstamp2FieldReg5.setValue(tstamp2FieldOrig.getValue());
               tstamp2FieldReg6.setValue(tstamp2FieldOrig.getValue());
               
           }
             if(me.selectedFieldId === 'formOrig' && !expertCheckBox.getValue()){
             formFieldReg1.setValue(formField.getValue());
                formFieldReg2.setValue(formField.getValue());
                formFieldReg3.setValue(formField.getValue());
                formFieldReg4.setValue(formField.getValue());
                formFieldReg5.setValue(formField.getValue());
                formFieldReg6.setValue(formField.getValue());
           }
            me1.handleCreateButton();
        },
        render: function(c) {
            c.getEl().on('keyup', function() {   
            me.selectedFieldId = fieldName;
           if(me.selectedFieldId === 'tstampFieldOrig' && !expertCheckBox.getValue()){
              tstampFieldReg3.setValue(tstampFieldOrig.getValue());
               tstampFieldReg4.setValue(tstampFieldOrig.getValue());
               tstampFieldReg5.setValue(tstampFieldOrig.getValue());
               tstampFieldReg6.setValue(tstampFieldOrig.getValue());
           }
           if(me.selectedFieldId === 'tstamp2FieldOrig' && !expertCheckBox.getValue()){              
                tstamp2FieldReg1.setValue(tstamp2FieldOrig.getValue());
               tstamp2FieldReg2.setValue(tstamp2FieldOrig.getValue());
               tstamp2FieldReg5.setValue(tstamp2FieldOrig.getValue());
               tstamp2FieldReg6.setValue(tstamp2FieldOrig.getValue());
               
           }
           if(me.selectedFieldId === 'formOrig' && !expertCheckBox.getValue()){
             formFieldReg1.setValue(formField.getValue());
                formFieldReg2.setValue(formField.getValue());
                formFieldReg3.setValue(formField.getValue());
                formFieldReg4.setValue(formField.getValue());
                formFieldReg5.setValue(formField.getValue());
                formFieldReg6.setValue(formField.getValue());
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
            if(me.selectedFieldId === 'tstampFieldOrig' && !expertCheckBox.getValue()){
              tstampFieldReg3.setValue(tstampFieldOrig.getValue());
               tstampFieldReg4.setValue(tstampFieldOrig.getValue());
               tstampFieldReg5.setValue(tstampFieldOrig.getValue());
               tstampFieldReg6.setValue(tstampFieldOrig.getValue());
           }
           if(me.selectedFieldId === 'tstamp2FieldOrig' && !expertCheckBox.getValue()){              
                tstamp2FieldReg1.setValue(tstamp2FieldOrig.getValue());
               tstamp2FieldReg2.setValue(tstamp2FieldOrig.getValue());
               tstamp2FieldReg5.setValue(tstamp2FieldOrig.getValue());
               tstamp2FieldReg6.setValue(tstamp2FieldOrig.getValue());
               
           }
            if(me.selectedFieldId === 'rendOrig' && !expertCheckBox.getValue()){
               rendReg1.setValue(rend.getValue());
               rendReg2.setValue(rend.getValue());
               rendReg3.setValue(rend.getValue());
               rendReg4.setValue(rend.getValue());
               rendReg5.setValue(rend.getValue());
               rendReg6.setValue(rend.getValue());
           }    
           
           me1.handleCreateButton();
        },
         render: function(c) {
            c.getEl().on('keyup', function() {   
           me.selectedFieldId = fieldName;
            if(me.selectedFieldId === 'tstampFieldOrig' && !expertCheckBox.getValue()){
              tstampFieldReg3.setValue(tstampFieldOrig.getValue());
               tstampFieldReg4.setValue(tstampFieldOrig.getValue());
               tstampFieldReg5.setValue(tstampFieldOrig.getValue());
               tstampFieldReg6.setValue(tstampFieldOrig.getValue());
           }
           if(me.selectedFieldId === 'tstamp2FieldOrig' && !expertCheckBox.getValue()){              
                tstamp2FieldReg1.setValue(tstamp2FieldOrig.getValue());
               tstamp2FieldReg2.setValue(tstamp2FieldOrig.getValue());
               tstamp2FieldReg5.setValue(tstamp2FieldOrig.getValue());
               tstamp2FieldReg6.setValue(tstamp2FieldOrig.getValue());
               
           }
             if(me.selectedFieldId === 'rendOrig' && !expertCheckBox.getValue()){
               rendReg1.setValue(rend.getValue());
               rendReg2.setValue(rend.getValue());
               rendReg3.setValue(rend.getValue());
               rendReg4.setValue(rend.getValue());
               rendReg5.setValue(rend.getValue());
               rendReg6.setValue(rend.getValue());
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
     if(combo.id === 'placeorig' && !expertCheckBox.getValue()){
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
           satffFieldBetweenReg3.setValue(combo.getValue());
           satffFieldBetweenReg4.setValue(combo.getValue());
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
            if(checked){
            tstampFieldReg2.setDisabled(true);            
            tstamp2FieldReg2.setDisabled(true);
            placeFieldReg2.setDisabled(true);
            satffFieldBetweenReg2.setDisabled(true);
            }
            else{
                if(!checked && expertCheckBox.getValue()){
                    tstampFieldReg2.setDisabled(false);            
                tstamp2FieldReg2.setDisabled(false);
                placeFieldReg2.setDisabled(false);
                satffFieldBetweenReg2.setDisabled(false);
                }
                else if(!checked && !expertCheckBox.getValue()){
                tstampFieldReg2.setDisabled(false);            
                tstamp2FieldReg2.setDisabled(true);
                placeFieldReg2.setDisabled(true);
                satffFieldBetweenReg2.setDisabled(true);
            }
            }        
        }
        else if(cb.id === 'checkBoxReg4'){
        if(checked){
            tstampFieldReg4.setDisabled(true);            
            tstamp2FieldReg4.setDisabled(true);
            placeFieldReg4.setDisabled(true);
            satffFieldBetweenReg4.setDisabled(true);
            }
            else{
                if(!checked && expertCheckBox.getValue()){
                    tstampFieldReg4.setDisabled(false);            
                tstamp2FieldReg4.setDisabled(false);
                placeFieldReg4.setDisabled(false); 
                satffFieldBetweenReg4.setDisabled(false);
                }
                else if(!checked && !expertCheckBox.getValue()){
                tstampFieldReg4.setDisabled(true);            
                tstamp2FieldReg4.setDisabled(false);
                placeFieldReg4.setDisabled(true);
                satffFieldBetweenReg4.setDisabled(true);
            }
            }           
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
            
            satffFieldBetweenReg3.setDisabled(false);
             satffFieldBetweenReg3.validate();
            placeFieldReg3.setDisabled(false);
            placeFieldReg3.validate();
            tstampFieldReg3.setDisabled(false);
            tstampFieldReg3.validate();
            tstamp2FieldReg3.setDisabled(false);
            tstamp2FieldReg3.validate();  
            
            staffFieldReg5.setDisabled(false);
             staffFieldReg5.validate();
            placeFieldReg5.setDisabled(false);
            placeFieldReg5.validate();
            tstampFieldReg5.setDisabled(false);
            tstampFieldReg5.validate();
            tstamp2FieldReg5.setDisabled(false);
            tstamp2FieldReg5.validate(); 
                       
            staffFieldReg6.setDisabled(false);
             staffFieldReg6.validate();
            placeFieldReg6.setDisabled(false);
            placeFieldReg6.validate();
            tstampFieldReg6.setDisabled(false);
            tstampFieldReg6.validate();
            tstamp2FieldReg6.setDisabled(false);
            tstamp2FieldReg6.validate();  
          
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
            
             if(checkBoxReg4.getValue() ){
            satffFieldBetweenReg4.setDisabled(true);
             satffFieldBetweenReg4.validate();
                placeFieldReg4.setDisabled(true);
            placeFieldReg4.validate();
            tstampFieldReg4.setDisabled(true);
            tstampFieldReg4.validate();
            tstamp2FieldReg4.setDisabled(true);
            tstamp2FieldReg4.validate();
            }
            else{
                satffFieldBetweenReg4.setDisabled(false);
             satffFieldBetweenReg4.validate();
                placeFieldReg4.setDisabled(false);
            placeFieldReg4.validate();
            tstampFieldReg4.setDisabled(false);
            tstampFieldReg4.validate();
            tstamp2FieldReg4.setDisabled(false);
            tstamp2FieldReg4.validate();
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
            tstampFieldReg1.setDisabled(false);
            tstampFieldReg1.validate();
            tstamp2FieldReg1.setDisabled(true);
            if(tstamp2FieldReg1.getValue() === "" || tstamp2FieldReg1.getValue() === null){
             tstamp2FieldReg1.setValue(tstamp2FieldOrig.getValue());
          
         }
            tstamp2FieldReg1.validate();
            
            
            satffFieldBetweenReg3.setDisabled(true);
            if(satffFieldBetweenReg3.getValue() === "" || satffFieldBetweenReg3.getValue() === null){
             satffFieldBetweenReg3.setValue(satffFieldBetween.getValue());
          
         }
             satffFieldBetweenReg3.validate();
            placeFieldReg3.setDisabled(true);
            if(placeFieldReg3.getValue() === "" || placeFieldReg3.getValue() === null){
             placeFieldReg3.setValue(placeField.getValue());
          
         }
            placeFieldReg3.validate();
            tstampFieldReg3.setDisabled(true);
            if(tstampFieldReg3.getValue() === "" || tstampFieldReg3.getValue() === null){
             tstampFieldReg3.setValue(tstampFieldOrig.getValue());
          
         }
            tstampFieldReg3.validate();
            tstamp2FieldReg3.setDisabled(false);
            tstamp2FieldReg3.validate();
            
            staffFieldReg5.setDisabled(false);
             staffFieldReg5.validate();
            placeFieldReg5.setDisabled(false);
            placeFieldReg5.validate();
            tstampFieldReg5.setDisabled(true);
            if(tstampFieldReg5.getValue() === "" || tstampFieldReg5.getValue() === null){
             tstampFieldReg5.setValue(tstampFieldOrig.getValue());
          
         }
            tstampFieldReg5.validate();
            tstamp2FieldReg5.setDisabled(true);
            if(tstamp2FieldReg5.getValue() === "" || tstamp2FieldReg5.getValue() === null){
             tstamp2FieldReg5.setValue(tstamp2FieldOrig.getValue());
          
         }
            tstamp2FieldReg5.validate(); 
            
            staffFieldReg6.setDisabled(false);
             staffFieldReg6.validate();
            placeFieldReg6.setDisabled(false);
            placeFieldReg6.validate();
            tstampFieldReg6.setDisabled(true);
              if(tstampFieldReg6.getValue() === "" || tstampFieldReg6.getValue() === null){
             tstampFieldReg6.setValue(tstampFieldOrig.getValue());
          
         }
            tstampFieldReg6.validate();
            tstamp2FieldReg6.setDisabled(true);
             if(tstamp2FieldReg6.getValue() === "" || tstamp2FieldReg6.getValue() === null){
             tstamp2FieldReg6.setValue(tstamp2FieldOrig.getValue());
          
         }
            tstamp2FieldReg6.validate(); 

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
            tstampFieldReg2.setDisabled(false);
            tstampFieldReg2.validate();
            tstamp2FieldReg2.setDisabled(true);
             if(tstamp2FieldReg2.getValue() === "" || tstamp2FieldReg2.getValue() === null){
             tstamp2FieldReg2.setValue(tstamp2FieldOrig.getValue());
          
         }
            tstamp2FieldReg2.validate();
            }
            
            if(checkBoxReg4.getValue() ){
            satffFieldBetweenReg4.setDisabled(true);
             satffFieldBetweenReg4.validate();
                placeFieldReg4.setDisabled(true);
            placeFieldReg4.validate();
            tstampFieldReg4.setDisabled(true);
            tstampFieldReg4.validate();
            tstamp2FieldReg4.setDisabled(true);
            tstamp2FieldReg4.validate();
            }
            else{
            satffFieldBetweenReg4.setDisabled(true);
            if(satffFieldBetweenReg4.getValue() === "" || satffFieldBetweenReg4.getValue() === null){
             satffFieldBetweenReg4.setValue(satffFieldBetween.getValue());
          
         }
             satffFieldBetweenReg4.validate();
                placeFieldReg4.setDisabled(true);
                if(placeFieldReg4.getValue() === "" || placeFieldReg4.getValue() === null){
             placeFieldReg4.setValue(placeField.getValue());
          
         }
            placeFieldReg4.validate();
            tstampFieldReg4.setDisabled(true);
              if(tstampFieldReg4.getValue() === "" || tstampFieldReg4.getValue() === null){
             tstampFieldReg4.setValue(tstampFieldOrig.getValue());
          
         }
            tstampFieldReg4.validate();
            tstamp2FieldReg4.setDisabled(false);
            tstamp2FieldReg4.validate();
            }
            
        }
        me9.handleCreateButton();
       
        
 }
        }
     
   });

return ceCheckBox;
}



});

