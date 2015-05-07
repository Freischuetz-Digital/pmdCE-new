Ext.define('pmdCE.view.main.ChoiceStaffCard', {
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
    tstampField2Orig: null,
 
    staffFieldReg1: null,
    placeFieldReg1: null,
    formFieldReg1: null,
    tstampFieldReg1: null,
    tstampField2Reg1: null,

    staffFieldReg2: null,
    placeFieldReg2: null,
    formFieldReg2: null,
    tstampFieldReg2: null,
    tstampField2Reg2: null,
   
   verovioImageStart: null,
   verovioImageEnd: null,
   
   selectedFieldId:null,
   
    me: null,
    
         initComponent: function() {
         
         me = this;
         
         staffField= this.createComboBoxStaff('Staff');  
        staffFieldCopy = this.createTextField('staffFieldCopy', 'Staff');
        staffFieldCopy.setDisabled(true);
        satffFieldBetween = this.createComboBoxStaff('Second staff'); 
        startTaktField= this.createComboBoxMeasureNr('Start measure');
        endTaktField= this.createComboBoxMeasureNr('End measure');
        placeField = this.createComboBox('Place');
        formField = this.createComboBoxForm('Form');
        
    tstampFieldOrig = this.createTextField('tstampFieldOrig', 'Tstamp');
    tstamp2FieldOrig = this.createTextField('tstamp2FieldOrig', 'Tstamp2');

        staffFieldReg1= this.createComboBoxStaff('Staff');  
       
        placeFieldReg1 = this.createComboBox('Place');
        
        formFieldReg1 = this.createComboBoxForm('Form');
        formFieldReg1.setDisabled(true);
        tstampFieldReg1 = this.createTextField('tstampFieldReg1', 'Tstamp');
        tstampFieldReg1.setDisabled(true);
        tstamp2FieldReg1 = this.createTextField('tstamp2FieldReg1', 'Tstamp2');
        tstamp2FieldReg1.setDisabled(true);

staffFieldReg2= this.createComboBoxStaff('Staff');  

        placeFieldReg2 = this.createComboBox('Place');
        
        formFieldReg2 = this.createComboBoxForm('Form');
        formFieldReg2.setDisabled(true);
tstampFieldReg2 = this.createTextField('tstampFieldReg2', 'Tstamp');
tstampFieldReg2.setDisabled(true);
tstamp2FieldReg2 = this.createTextField('tstamp2FieldReg2', 'Tstamp2');
tstamp2FieldReg2.setDisabled(true);

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
         
     
     this.bbar = ['->',
     
     {
            itemId: 'card-prev',
            text: '&laquo; Previous',
            handler: 'showPrevious',
            disabled: true
        },
        {
            itemId: 'card-next',
            text: 'Next &raquo;',
            handler: 'showNext'
        },
     
     {
        text:'Create', 
        itemId: 'createItem',
        // TODO: handle
       // disabled: true,
        handler: 
        function(){
        
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
                    place: placeFieldReg2.getValue(),
                    form: formField.getValue(),
                    name: "orig",
                    tag: "orig",
                    leaf: true
                },
                {
                    icon: 'resources/images/mix_volume.png',
                    staff: staffFieldReg1.getValue(),                    
                    tstamp: tstampFieldOrig.getValue(),
                    tstamp2: tstamp2FieldOrig.getValue(),
                    place: placeField.getValue(),
                    form: formField.getValue(),
                    name: "reg",
                    tag: "reg",
                    leaf: true
                },
                {
                    icon: 'resources/images/mix_volume.png',
                    staff: staffFieldReg2.getValue(),                    
                    tstamp: tstampFieldOrig.getValue(),
                    tstamp2: tstamp2FieldOrig.getValue(),
                    place: placeFieldReg1.getValue(),
                    form: formField.getValue(),
                    name: "reg",
                    tag: "reg",
                    leaf: true
                }
                ] 
                
                
	    });
	    
	    var root = pmdCE.getApplication().getHairpinDataStore().getRootNode();
	    var parent = root.appendChild(hairpin);
	    parent.expand();
	    
	    Ext.getCmp('cegridpanel').setSelection(hairpin);
	    
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
    var ceTextField = Ext.create('Ext.form.field.Text',{
        name: fieldName,
        id: fieldName,
        fieldLabel: fieldLabel,
      //  allowBlank: false , // requires a non-empty value
        listeners: {
        focus: function(e, eOpts ){
           me.selectedFieldId = fieldName;
           if(fieldName.indexOf('tstamp2') === -1){
               tstamp2FieldReg1.setValue(tstamp2FielOrig.getValue());
               tstamp2FieldReg2.setValue(tstamp2FielOrig.getValue());
           }
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
    valueField: 'abbr',
    listeners: {
    select: function(combo, record, index) {
    if(fieldName.indexOf('Second') === -1){
        Ext.getCmp('cemain').setStaffNr(combo.getValue());
        }
    
    //Ext.getCmp('cetoolbar').getSaveButton().setDisabled(false);
     // modelTest.set('curvedir', combo.getValue());
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
    valueField: 'abbr',
    listeners: {
       select: function(combo, record, index) {
    if(fieldName.indexOf('Start') > -1){
        Ext.getCmp('cemain').setStartMeasure(combo.getValue());
        
    }
    if(fieldName.indexOf('End') > -1){
        Ext.getCmp('cemain').setEndMeasure(combo.getValue());
        
    }
    }
  }
  });
return ceTextField;
},

    createComboBoxForm: function(fieldName){
    
    var states = new Array("cres", "dim"); 
    
    var ceTextField = Ext.create('Ext.form.ComboBox', {
    fieldLabel: fieldName,
    store: states,
    queryMode: 'local',
    displayField: 'name',
    editable: false,
   // valueField: 'abbr',
    listeners: {
    select: function(combo, record, index) {
       formFieldReg1.setValue(combo.getValue());
       formFieldReg2.setValue(combo.getValue());
    //Ext.getCmp('cetoolbar').getSaveButton().setDisabled(false);
     // modelTest.set('curvedir', combo.getValue());
    }
  }
  });

return ceTextField;
}

});

