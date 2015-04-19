Ext.define('pmdCE.view.main.AmbiguousCard', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.Card'
    ],
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
      
         initComponent: function() {
         
         this.id = "ambiguouscard";
         Ext.getCmp('cemain').setEditorId(this.id);
         
       /*  if(Ext.getCmp('cemain').getVerovioView().getVerStartView() !== null){
             Ext.getCmp('cemain').getVerovioView().remove(Ext.getCmp('cemain').getVerovioView().getVerStartView(), true);
         }
         if(Ext.getCmp('cemain').getVerovioView().getVerEndView() !== null){
            Ext.getCmp('cemain').getVerovioView().remove(Ext.getCmp('cemain').getVerovioView().getVerEndView(), true);
         }
         if(Ext.getCmp('cemain').getVerovioView().getRadioGroup() !== null){
            Ext.getCmp('cemain').getVerovioView().remove(Ext.getCmp('cemain').getVerovioView().getRadioGroup(), true);
         }*/
         
         staffField= this.createComboBoxStaff('Staff');  
        startTaktField= this.createComboBoxMeasureNr('Start measure');
        endTaktField= this.createComboBoxMeasureNr('End measure');
        placeField = this.createComboBox('Place');
        formField = this.createRadioGroup();
        
    tstampFieldOrig = this.createTextField('tstampFieldOrig', 'Tstamp orig');
    tstamp2FieldOrig = this.createTextField('tstampField2Orig', 'Tstamp2 orig');

tstampFieldReg1 = this.createTextField('tstampFieldReg1', 'Tstamp reg1');
tstamp2FieldReg1 = this.createTextField('tstampField2Reg1', 'Tstamp2 reg1');

tstampFieldReg2 = this.createTextField('tstampFieldReg2', 'Tstamp reg2');
tstamp2FieldReg2 = this.createTextField('tstampField2Reg2', 'Tstamp2 reg2');

verovioImageStart = new pmdCE.view.main.VerovioImageStart(),
        verovioImageEnd = new pmdCE.view.main.VerovioImageEnd(),
        
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
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },
        
        items: [
                tstampFieldOrig,
                tstampFieldReg1,
                tstampFieldReg2,
                verovioImageStart 
        ]
    },
     {
        xtype: 'fieldset',
        title: 'End Time',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },
        
        items: [            
                tstamp2FieldOrig,
                tstamp2FieldReg1,
                tstamp2FieldReg2,
                verovioImageEnd  
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
            //TODO: generate Id
             var formValue = formField.getValue().Form === 2 ? "dim" : 'cresc';
        
	        var hairpin = Ext.create('pmdCE.model.Hairpin', {
	               name: formValue+'_'+staffField.getValue()+'_'+placeField.getValue()+'_ambigous',
                    icon: 'resources/images/mix_volume.png',
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
        fieldLabel: fieldLabel,
      //  allowBlank: false , // requires a non-empty value
        listeners: {'render': function(c) {
            c.getEl().on('keyup', function() {   
           // Ext.getCmp('cetoolbar').getSaveButton().setDisabled(false);
               // modelTest.set('start', startField.value);
            }, c);
        }
  }
   });

return ceTextField;
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
   
   var staffNrCurrent = Ext.getCmp('cetoolbar').staffNr;
  
   var dataStaffNr = new Array(staffNrCurrent);  
   for(var i = 0; i < staffNrCurrent ; i++){
   dataStaffNr[i] = i+1;       
   }
  
    var ceTextField = Ext.create('Ext.form.ComboBox', {
    fieldLabel: fieldName,
    store: dataStaffNr,
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
   
   var staffNrCurrent = Ext.getCmp('cetoolbar').staffNr;
   var pageMeasuresMap = Ext.getCmp('cetoolbar').pageMeasuresMap;
   var selectedPage = Ext.getCmp('pages').getText();
   
   var test = pageMeasuresMap[selectedPage];
   var nr = test[1] - test[0]+1;
   
   var dataMeasureNr = new Array(nr); 
  // dataMeasureNr[0] = test[0];
   var value = test[0];
   for(var i = 0; i < nr ; i++){
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

