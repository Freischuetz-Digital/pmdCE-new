Ext.define('pmdCE.view.main.ObviousCard', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.Card',
        'pmdCE.model.Hairpin'
    ],
    id: "obviouscard",
    //xtype: 'layout-card',
    layout: 'card',
   // width: 500,
   // height: 400,

    bodyPadding: 10,
    
    defaults: {
        border:false
    },

    defaultListenerScope: true,
    
    staffField: null,
    //satffFieldBetween: null,
    staffFieldCopy: null,
    startTaktField: null,
    endTaktField: null,
    placeField: null,
    formField: null,
    
      tstampField: null,
      tstampField2: null,
      
      verovioImageStart: null,
      verovioImageEnd: null,
      
      //me: null,
  
    
         initComponent: function() {
         
        // me = this;
         
        staffField = this.createComboBoxStaff('Staff'); 
        //satffFieldBetween = this.createComboBoxStaff('Second staff'); 
        staffFieldCopy = this.createTextField('staffFieldCopy', 'staffFieldCopy', 'Staff');
        staffFieldCopy.setDisabled(true);
        
        startTaktField = this.createComboBoxMeasureNr('Start measure');
        endTaktField = this.createComboBoxMeasureNr('End measure');
        placeField = this.createComboBox('Place');
        formField = this.createRadioGroup();
        
        tstampField = this.createTextField('tstampFieldObv', 'tstampField', 'Tstamp');
        tstamp2Field = this.createTextField('tstampField2Obv', 'tstampField2', 'Tstamp2');
       
          this.items  = [
        {
            id: 'card-0',
             bodyPadding: 5,
             text: 'Fields for verovio load',
            items: [
            
            
          /*  {
            xtype: 'fieldcontainer',
            fieldLabel: 'Phone',
            combineErrors: true,
            layout: 'hbox',
            msgTarget: 'under',
            defaults: {
                hideLabel: true,
                anchor: '100%'
            },
            items: [
                {icon: 'resources/images/Mandatory.gif'},
                {xtype: 'textfield',    fieldLabel: 'Phone 1', name: 'phone-1', width: 45, allowBlank: false},
                {xtype: 'displayfield', value: ')'},
                {xtype: 'textfield',    fieldLabel: 'Phone 2', name: 'phone-2', width: 45, allowBlank: false, margin: '0 5 0 0'},
                {xtype: 'displayfield', value: '-'},
                {xtype: 'textfield',    fieldLabel: 'Phone 3', name: 'phone-3', width: 60, allowBlank: false}
            ]
        },*/
        
        
        
            staffField,
            startTaktField,
            endTaktField
           
        ]
        },
        {
            id: 'card-1',
            layout: 'hbox',
            bodyPadding: 5,
           // margin: '0 10 10 0',
           items: [
            {
            xtype: 'fieldset',
            title: 'Values',
            id: 'values',
            defaultType: 'textfield',        
                defaults: {
                    anchor: '100%'
                },        
                items: [
                staffFieldCopy,
               // satffFieldBetween,
                 placeField,
                formField
                ]
            },
            {
            xtype: 'fieldset',
            title: 'Start time',
            id: 'starttime',
            defaultType: 'textfield',        
                defaults: {
                    anchor: '100%'
                },        
                items: [
                    tstampField
                ]
            },
            {
            xtype: 'fieldset',
            title: 'End time',
            id: 'endtime',
            defaultType: 'textfield',
                defaults: {
                    anchor: '100%'
                },       
                items: [
                
                    tstamp2Field
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
        // TODO
       /* disabled: true,
        handler: function(){
	       if(staffField.getValue() !== '' && 
    startTaktField.getValue() !== '' &&
    endTaktField.getValue() !== '' &&
    placeField.getValue() !== '' &&
    formField.getValue() !== ''){
	           this.setDisabled(false);
	           
	       }
	       else this.setDisabled(true);
           
       },*/
        handler: 
        function(){
        
        var hairId = 'hairpin_' + 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);return v.toString(16);});
       
        var formValue = formField.getValue().Form === 2 ? "dim" : 'cresc';
        
       // var staffValue = staffField.getValue() + (satffFieldBetween.getValue() !== null ? " "+satffFieldBetween.getValue() : '')
	 
        var hairpin = Ext.create('pmdCE.model.Hairpin', {      
                    id: hairId,
                    name: formValue+'_s'+staffField.getValue()+'_m'+staffField.getValue()+'_'+placeField.getValue(),
                    icon: 'resources/images/mix_volume.png',
                    obvious: true,
                    ambiguous: false,
                    operation: 'create',
                    staff: staffField.getValue(), 
                    tstamp: tstampField.getValue(),
                    tstamp2: tstamp2Field.getValue(),
                    place: placeField.getValue(),
                    form: formValue,
                    measureid: Ext.getCmp('cemain').getMeasureId(),
                    measurenr: startTaktField.getValue(), 
                    tag: "",
                    leaf: true                
	    });
	  
	    var store = pmdCE.getApplication().getHairpinDataStore();
	    var root = store.getRootNode();
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
            Ext.getCmp('starttime').removeAll(true);
        }
        if(typeof Ext.getCmp('cemain').getVerEndId() != 'undefined'){
             Ext.getCmp('endtime').removeAll(true);
        }
                                   
             tstampField = this.createTextField('tstampFieldObv', 'tstampField', 'Tstamp');
            tstamp2Field = this.createTextField('tstampField2Obv', 'tstampField2', 'Tstamp2');
            Ext.getCmp('starttime').add(tstampField);
            Ext.getCmp('endtime').add(tstamp2Field);
            
             verovioImageStart = new pmdCE.view.main.VerovioImageStart();
            Ext.getCmp('starttime').add(verovioImageStart);
         
             verovioImageEnd = new pmdCE.view.main.VerovioImageEnd();
             Ext.getCmp('endtime').add(verovioImageEnd);
                   
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
        
       console.log("active item");
       console.log(l.activeItem);
        
        // TODO
        /*if(l.activeItem.id === 'card-1'){
            Ext.getCmp('createItem').setDisabled(false);
        }*/
    },
    
        createTextField: function(fieldId, fieldName, fieldLabel){
    var ceTextField = Ext.create('Ext.form.field.Text',{
        id: fieldId,
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
    
var states = new Array("above", "below"); 

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
    //icon: 'resources/images/mix_volume.png',
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

