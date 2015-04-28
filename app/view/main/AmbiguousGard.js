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
    
     autoScroll: true,
    
    staffField: null,  
    startTaktField: null,
    endTaktField: null,
    placeField: null,
    formField: null,
   
    tstampFieldOrig: null,
    tstampField2Orig: null,
 
    tstampFieldReg1: null,
    tstampField2Reg1: null,

    tstampFieldReg2: null,
    tstampField2Reg2: null,
   
   verovioImageStart: null,
   verovioImageEnd: null,
   
   selectedFieldId:null,
   
    me: null,
    
         initComponent: function() {
         
         me = this;
         
         staffField= this.createComboBoxStaff('Staff');  
        startTaktField= this.createComboBoxMeasureNr('Start measure');
        endTaktField= this.createComboBoxMeasureNr('End measure');
        placeField = this.createComboBox('Place');
        formField = this.createRadioGroup();
        
    tstampFieldOrig = this.createTextField('tstampFieldOrig', 'Tstamp orig');
    tstamp2FieldOrig = this.createTextField('tstamp2FieldOrig', 'Tstamp2 orig');

tstampFieldReg1 = this.createTextField('tstampFieldReg1', 'Tstamp reg1');
tstamp2FieldReg1 = this.createTextField('tstamp2FieldReg1', 'Tstamp2 reg1');

tstampFieldReg2 = this.createTextField('tstampFieldReg2', 'Tstamp reg2');
tstamp2FieldReg2 = this.createTextField('tstamp2FieldReg2', 'Tstamp2 reg2');

          this.items  = [
        {
            id: 'card-0',
            items: [
            staffField,
            startTaktField,
            endTaktField,
            placeField,
            formField
        ]
        },
        {
           id: 'card-1',
           layout: 'hbox',
           items: [
                 {
        xtype: 'fieldset',
        title: 'Start Time',
        id: 'starttime',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },
        
        items: [
                tstampFieldOrig,
                tstampFieldReg1,
                tstampFieldReg2
        ]
    },
     {
        xtype: 'fieldset',
        title: 'End Time',
        id: 'endtime',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },
        
        items: [            
                tstamp2FieldOrig,
                tstamp2FieldReg1,
                tstamp2FieldReg2
        ]
    }
        ]
           
        }
    ],
         
     
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
        
	        var hairpin = Ext.create('pmdCE.model.Hairpin', {
	               id: hairId,
	               name: formValue+'_'+staffField.getValue()+'_'+placeField.getValue()+'_ambigous',
                    icon: 'resources/images/mix_volume.png',
                    measureId: Ext.getCmp('cemain').getMeasureId(),
                    operation: 'create',
                    obvious: false,
                    ambiguous: true,
                     children: [
                {
                    icon: 'resources/images/details-xml.png',
                    staff: staffField.getValue(),                  
                    tstamp: tstampFieldOrig.getValue(),
                    tstamp2: tstamp2FieldOrig.getValue(),
                    place: placeField.getValue(),
                    form: formValue,
                    tag: "orig",
                    leaf: true
                },
                {
                    icon: 'resources/images/details-xml.png',
                    staff: staffField.getValue(),                    
                    tstamp: tstampFieldReg1.getValue(),
                    tstamp2: tstamp2FieldReg1.getValue(),
                    place: placeField.getValue(),
                    form: formValue,
                    tag: "reg",
                    leaf: true
                },
                {
                    icon: 'resources/images/details-xml.png',
                    staff: staffField.getValue(),                    
                    tstamp: tstampFieldReg2.getValue(),
                    tstamp2: tstamp2FieldReg2.getValue(),
                    place: placeField.getValue(),
                    form: formValue,
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
        
         verovioImageStart = new pmdCE.view.main.VerovioImageStart();
         Ext.getCmp('starttime').add(verovioImageStart);
         
          verovioImageEnd = new pmdCE.view.main.VerovioImageEnd();
         Ext.getCmp('endtime').add(verovioImageEnd);
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
    //Ext.getCmp('cetoolbar').getSaveButton().setDisabled(false);
     // modelTest.set('curvedir', combo.getValue());
    }
  }
  });
return ceTextField;
},

createRadioGroup: function(){
    var radios = new Ext.form.RadioGroup({
     xtype: 'radiogroup',
            fieldLabel: 'Form',
            cls: 'x-check-group-alt',
            
            items: [
                {boxLabel: 'Cres', name: 'Form', inputValue: 1, margin: '0 10 10 0'},
                {boxLabel: 'Dim', name: 'Form', inputValue: 2, margin: '0 10 10 0'}
                
            ]
   });
   return radios;
    
}

});

