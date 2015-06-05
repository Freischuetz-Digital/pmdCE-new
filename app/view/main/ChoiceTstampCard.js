Ext.define('pmdCE.view.main.ChoiceTstampCard', {
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
   
   nextButton: null,
   prevButton: null,
   createElementButton: null,
   checkBoxReg2: null,
   
   expertCheckBox: null,
   
    me: null,
    
         initComponent: function() {
         
         me = this;
         
         // create orig fields
         // common 
         staffField= this.createComboBoxStaff('Staff');  
         staffField.validate();
        staffFieldCopy = this.createTextField('staffFieldCopy', 'Staff');
        staffFieldCopy.setDisabled(true);
        startTaktField= this.createComboBoxMeasureNr('Start measure');
        startTaktField.validate();
        endTaktField= this.createComboBoxMeasureNr('End measure');
        endTaktField.validate();
        placeField = this.createComboBox('Place');
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
        placeFieldReg1 = this.createComboBox('Place');
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
        placeFieldReg2 = this.createComboBox('Place');
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
                   // id: 'orig',
                    defaultType: 'textfield',
                    margin: '0 10 0 0',
                    
                    items : Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1 ? [
                    staffFieldCopy,
                        placeField,
                        formField,
                        tstampFieldOrig,
                        tstamp2FieldOrig
                               
                    ] : [
                        staffFieldCopy,
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
                   // id: 'starttime',
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
                  //  id: 'endtime',
                    defaultType: 'textfield',
                     margin: '0 10 0 0',
                    defaults: {
                        anchor: '100%'
                    },
        
                items : Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1 ? [
                                  checkBoxReg2,
                        staffFieldReg2,
                        placeFieldReg2,
                        formFieldReg2,
                        tstampFieldReg2,
                        tstamp2FieldReg2         
                    ] : [
                    checkBoxReg2,
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
    ]; // end this items
    
    
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
          && tstampFieldReg1.isValid() && tstampFieldReg2.isValid()
          && tstamp2FieldReg1.isValid() && tstamp2FieldReg2.isValid()){ 
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
    else{
        modelPath = 'pmdCE.model.Dynam';
         prefix = 'dynam_';
         elType = 'dynam';
    }
    
        var hairId = prefix + 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);return v.toString(16);});

	        var hairpin = Ext.create(modelPath, {
	               id: hairId,
	               name: 'choice_m'+startTaktField.getValue(),
	               type : elType,
                    icon: 'resources/images/details-xml.png',
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
                    staff: staffField.getValue(), 
                    type : elType,
                    tstamp: tstampFieldReg1.getValue(),
                    tstamp2: tstamp2FieldReg1.getValue(),
                    place: placeField.getValue(),
                    form: formField.getValue(),
                    rend: typeof rendReg1!== 'undefined' ? rendReg1.getValue() : null,
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
	    else{
	        root = pmdCE.getApplication().getDynamDataStore().getRootNode();
	    }
	    var parent = root.appendChild(hairpin);
	    
	     if(!tstampFieldReg2.isDisabled()){
	    hairpin.appendChild({
	    icon: 'resources/images/mix_volume.png',
	    type : elType,
                    staff: staffField.getValue(),                    
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
	    
	    
	    parent.expand();
	    
	     if(Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1){
            Ext.getCmp('cegridpanel').setSelection(hairpin);
        }
        else{
            Ext.getCmp('dynamsgridpanel').setSelection(hairpin);
            
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
        allowBlank: false,
        invalidCls: '',
        fieldLabel: fieldLabel,
        listeners: {
        focus: function(e, eOpts ){
           me.selectedFieldId = fieldName;
           if(me.selectedFieldId === 'tstamp2FieldOrig' && !expertCheckBox.getValue()){
               tstamp2FieldReg1.setValue(tstamp2FieldOrig.getValue());
               tstamp2FieldReg2.setValue(tstamp2FieldOrig.getValue());
           }
           if(me.selectedFieldId === 'formOrig' && !expertCheckBox.getValue()){
             formFieldReg1.setValue(formField.getValue());
                formFieldReg2.setValue(formField.getValue());
           }
           me1.handleCreateButton();
        },
         render: function(c) {
            c.getEl().on('keyup', function() {   
           me.selectedFieldId = fieldName;
           if(me.selectedFieldId === 'tstamp2FieldOrig' && !expertCheckBox.getValue()){
               tstamp2FieldReg1.setValue(tstamp2FieldOrig.getValue());
               tstamp2FieldReg2.setValue(tstamp2FieldOrig.getValue());
           }
            if(me.selectedFieldId === 'formOrig' && !expertCheckBox.getValue()){
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
           if(me.selectedFieldId === 'tstamp2FieldOrig' && !expertCheckBox.getValue()){
               tstamp2FieldReg1.setValue(tstamp2FieldOrig.getValue());
               tstamp2FieldReg2.setValue(tstamp2FieldOrig.getValue());
           }
           if(me.selectedFieldId === 'rendOrig' && !expertCheckBox.getValue()){
               rendReg1.setValue(rend.getValue());
               rendReg2.setValue(rend.getValue());
           }
           
           me1.handleCreateButton();
        },
         render: function(c) {
            c.getEl().on('keyup', function() {   
           me.selectedFieldId = fieldName;
           if(me.selectedFieldId === 'tstamp2FieldOrig' && !expertCheckBox.getValue()){
               tstamp2FieldReg1.setValue(tstamp2FieldOrig.getValue());
               tstamp2FieldReg2.setValue(tstamp2FieldOrig.getValue());
           }
           if(me.selectedFieldId === 'rendOrig' && !expertCheckBox.getValue()){
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
    
    var states = new Array("above", "below"); 
    var me2 = this;
    
    var ceTextField = Ext.create('Ext.form.ComboBox', {
    fieldLabel: fieldName,
    store: states,
    allowBlank: false,
    invalidCls: '',
    queryMode: 'local',
    displayField: 'name',
    editable: false,
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
    
    
    
    if(fieldName.indexOf('Second') === -1){
        Ext.getCmp('cemain').setStaffNr(combo.getValue());       
        }
        me10.handleNavigationButtons();
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
           
        }
        else if(!checked && expertCheckBox.getValue()){
            tstampFieldReg2.setDisabled(false);            
            tstamp2FieldReg2.setDisabled(false);
           
        }
        else if(!checked && !expertCheckBox.getValue()){
             tstampFieldReg2.setDisabled(false);            
            tstamp2FieldReg2.setDisabled(true);
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
        if(checked && !checkBoxReg2.getValue()){  
            tstampFieldReg1.setDisabled(false);
            tstampFieldReg1.validate();
            tstamp2FieldReg1.setDisabled(false);
            tstamp2FieldReg1.validate();
            tstampFieldReg2.setDisabled(false);
            tstampFieldReg2.validate();
            tstamp2FieldReg2.setDisabled(false);
            tstamp2FieldReg2.validate();
        }
        else if(checked && checkBoxReg2.getValue()){
            tstampFieldReg2.setDisabled(true);
            tstampFieldReg2.validate();
            tstamp2FieldReg2.setDisabled(true);
            tstamp2FieldReg2.validate();
           
            tstampFieldReg1.setDisabled(false);
            tstampFieldReg1.validate();
            tstamp2FieldReg1.setDisabled(false);
            tstamp2FieldReg1.validate();
        }
        else if(!checked && !checkBoxReg2.getValue()){
            tstampFieldReg1.setDisabled(false);
            tstampFieldReg1.validate();
            tstamp2FieldReg1.setDisabled(true);
            if(tstamp2FieldReg1.getValue() === ""){
             tstamp2FieldReg1.setValue(tstamp2FieldOrig.getValue());
          
         }
            tstamp2FieldReg1.validate();
           
            tstampFieldReg2.setDisabled(false);
            tstampFieldReg2.validate();
            tstamp2FieldReg2.setDisabled(true);
            tstamp2FieldReg2.validate();
            if(tstamp2FieldReg2.getValue() === ""){
             tstamp2FieldReg2.setValue(tstamp2FieldOrig.getValue());
          
         }
        }
        else if(!checked && checkBoxReg2.getValue()){
            tstampFieldReg1.setDisabled(false);
            tstampFieldReg1.validate();
            tstamp2FieldReg1.setDisabled(true);
            tstamp2FieldReg1.validate();
           
            tstampFieldReg2.setDisabled(true);
            tstampFieldReg2.validate();
            tstamp2FieldReg2.setDisabled(true);
            tstamp2FieldReg2.validate();
        }
        me9.handleCreateButton();
       
        
 }
        }
     
   });

return ceCheckBox;
}

});