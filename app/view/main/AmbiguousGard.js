Ext.define('pmdCE.view.main.AmbiguousCard', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.Card'
    ],
    id: "ambiguouscard",
  //  xtype: 'layout-card',
    layout: 'card',
  //  width: 500,
    

    bodyPadding: 15,
    
    defaults: {
        border:false,
        autoScroll: true
    },

    defaultListenerScope: true,
    border:false,
    
     autoScroll: true,
    
    staffField: null,  
    satffFieldBetween: null,
    staffFieldCopy: null,
    startTaktField: null,
    endTaktField: null,
    placeField: null,
    formField: null,
   
    tstampFieldOrig: null,
    tstampField2Orig: null,
 
    staffFieldReg1: null,
    satffFieldBetweenReg1: null,
    placeFieldReg1: null,
    formFieldReg1: null,
    tstampFieldReg1: null,
    tstampField2Reg1: null,

    staffFieldReg2: null,
    satffFieldBetweenReg2: null,
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
         satffFieldBetween = this.createComboBoxStaff('Second staff'); 
        staffFieldCopy = this.createTextField('staffFieldCopy', 'Staff');
        staffFieldCopy.setDisabled(true);
        startTaktField= this.createComboBoxMeasureNr('Start measure');
        endTaktField= this.createComboBoxMeasureNr('End measure');
        placeField = this.createComboBox('Place');
        formField = this.createRadioGroup('radioorig');
        
    tstampFieldOrig = this.createTextField('tstampFieldOrig', 'Tstamp orig');
    tstamp2FieldOrig = this.createTextField('tstamp2FieldOrig', 'Tstamp2 orig');

        staffFieldReg1= this.createComboBoxStaff('Staff');  
         satffFieldBetweenReg1 = this.createComboBoxStaff('Second staff'); 
        placeFieldReg1 = this.createComboBox('Place');
        formFieldReg1 = this.createRadioGroup('radioreg1');
        tstampFieldReg1 = this.createTextField('tstampFieldReg1', 'Tstamp reg1');
        tstamp2FieldReg1 = this.createTextField('tstamp2FieldReg1', 'Tstamp2 reg1');

staffFieldReg2= this.createComboBoxStaff('Staff');  
         satffFieldBetweenReg2 = this.createComboBoxStaff('Second staff'); 
        placeFieldReg2 = this.createComboBox('Place');
        formFieldReg2 = this.createRadioGroup('radioreg2');
tstampFieldReg2 = this.createTextField('tstampFieldReg2', 'Tstamp reg2');
tstamp2FieldReg2 = this.createTextField('tstamp2FieldReg2', 'Tstamp2 reg2');

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
           layout: 'hbox',
           border:false,
           items: [
                {
                    xtype: 'fieldset',
                    title: 'Orig',
                    id: 'orig',
                    defaultType: 'textfield',
                    defaults: {
                        anchor: '100%'
                    },
        
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
                    title: 'Reg1',
                    id: 'starttime',
                    defaultType: 'textfield',
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
                    title: 'Reg2',
                    id: 'endtime',
                    defaultType: 'textfield',
                    defaults: {
                        anchor: '100%'
                    },
        
                    items: [            
                        staffFieldReg2,
                        satffFieldBetweenReg2,
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
                    border:false,
                    width: 415,
                    defaultType: 'textfield',
                    defaults: {
                        anchor: '100%'
                    },
        
                    items: [            
                
                    ]
                },
                 {
                    xtype: 'fieldset',
                    title: 'End Time (tstamp2)',
                    id: 'verovio2',
                    border:false,
                    width: 415,
                    defaultType: 'textfield',
                    defaults: {
                        anchor: '100%'
                    },
        
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

             var formValue = formField.getValue().Form === 2 ? "dim" : 'cresc';
              var formValueReg1 = formFieldReg1.getValue().Form === 2 ? "dim" : 'cresc';
               var formValueReg2 = formFieldReg2.getValue().Form === 2 ? "dim" : 'cresc';
             
             var staffValue = staffField.getValue() + (satffFieldBetween.getValue() !== null ? " "+satffFieldBetween.getValue() : '');
             
             var staffValueReg1 = staffFieldReg1.getValue() + (satffFieldBetweenReg1.getValue() !== null ? " "+satffFieldBetweenReg1.getValue() : '');
        
	        var staffValueReg2 = staffFieldReg2.getValue() + (satffFieldBetweenReg2.getValue() !== null ? " "+satffFieldBetweenReg2.getValue() : '');
	        
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
                    staff: staffValue,                  
                    tstamp: tstampFieldOrig.getValue(),
                    tstamp2: tstamp2FieldOrig.getValue(),
                    place: placeField.getValue(),
                    form: formValue,
                    name: "orig",
                    tag: "orig",
                    leaf: true
                },
                {
                    icon: 'resources/images/mix_volume.png',
                    staff: staffValueReg1,                    
                    tstamp: tstampFieldReg1.getValue(),
                    tstamp2: tstamp2FieldReg1.getValue(),
                    place: placeFieldReg1.getValue(),
                    form: formValueReg1,
                    name: "reg",
                    tag: "reg",
                    leaf: true
                },
                {
                    icon: 'resources/images/mix_volume.png',
                    staff: staffValueReg2,                    
                    tstamp: tstampFieldReg2.getValue(),
                    tstamp2: tstamp2FieldReg2.getValue(),
                    place: placeFieldReg1.getValue(),
                    form: formValueReg2,
                    name: "reg",
                    tag: "reg",
                    leaf: true
                }
                ] 
                
                
	    });
	    
	    var root = pmdCE.getApplication().getHairpinDataStore().getRootNode();
	    var parent = root.appendChild(hairpin);
	    parent.expand();
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
    valueField: 'abbr',
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

createRadioGroup: function(radioid){
    var radios = new Ext.form.RadioGroup({
     xtype: 'radiogroup',
     id: radioid,
            fieldLabel: 'Form',
            cls: 'x-check-group-alt',
            
            items: [
                {boxLabel: 'Cres', name: 'Form', inputValue: 1, margin: '0 10 10 0', id:radioid+'cres'},
                {boxLabel: 'Dim', name: 'Form', inputValue: 2, margin: '0 10 10 0', id:radioid+'dim'}
                
            ]
   });
   return radios;
    
}

});

