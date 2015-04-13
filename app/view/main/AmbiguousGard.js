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
   
         staffFieldOrig: null,  
  placeFieldOrig: null,
  formFieldOrig: null,
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
   
      verovioView1: null,
      //verovioView2: null,
     // verovioView3: null,
  
    
         initComponent: function() {
         
         staffField= this.createComboBox('Staff');  
        startTaktField= this.createComboBox('Start measure');
        endTaktField= this.createComboBox('End measure');
        placeField = this.createComboBox('Place');
        formField = this.createRadioGroup();
        
        staffFieldOrig = this.createTextField('staffField', 'Staff');
formFieldOrig = this.createRadioGroup();
placeFieldOrig = this.createComboBox('Place');
tstampFieldOrig = this.createTextField('tstampField', 'Tstamp');
tstamp2FieldOrig = this.createTextField('tstampField2', 'Tstamp2');

staffFieldReg1 = this.createTextField('staffField', 'Staff');
formFieldReg1 = this.createRadioGroup();
placeFieldReg1 = this.createComboBox('Place');
tstampFieldReg1 = this.createTextField('tstampField', 'Tstamp');
tstamp2FieldReg1 = this.createTextField('tstampField2', 'Tstamp2');

staffFieldReg2 = this.createTextField('staffField', 'Staff');
formFieldReg2 = this.createRadioGroup();
placeFieldReg2 = this.createComboBox('Place');
tstampFieldReg2 = this.createTextField('tstampField', 'Tstamp');
tstamp2FieldReg2 = this.createTextField('tstampField2', 'Tstamp2');


     // TODO: set id
        // verovioView1 = new pmdCE.view.main.VerovioView();
        // verovioView2 = new pmdCE.view.main.VerovioView();
        // verovioView3 = new pmdCE.view.main.VerovioView();
         
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
           height: 400,
           items: [
                 {
        xtype: 'fieldset',
        title: 'Original',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },
        
        items: [
                staffFieldOrig,
                tstampFieldOrig,
                tstamp2FieldOrig,
                placeFieldOrig,
                formFieldOrig
               // verovioView1
                
        ]
    },
     {
        xtype: 'fieldset',
        title: 'Regulation',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },
        
        items: [
            staffFieldReg1,
                tstampFieldReg1,
                tstamp2FieldReg1,
                placeFieldReg1,
                formFieldReg1
               // verovioView1
        ]
    },
     {
        xtype: 'fieldset',
        title: 'Regulation',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },
        
        items: [
           staffFieldReg2,
               tstampFieldReg2,
                 tstamp2FieldReg2,
                placeFieldReg2,
                formFieldReg2
                //verovioView1
        ]
    }
        ]
           
        }
       /* ,
        {
            id: 'card-2',
            html: '<h1>Congratulations!</h1><p>Step 3 of 3 - Complete</p>'
        }*/
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
        disabled: true,
        handler: 
        function(){
	       // TODO
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
    
    var states = Ext.create('Ext.data.Store', {
    fields: ['abbr', 'name'],
    data : [
        {"abbr":"above", "name":"above"},
        {"abbr":"below", "name":"below"},
         {"abbr":"between", "name":"between"}
    ]
});
    
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

createRadioGroup: function(){
    var radios = new Ext.form.RadioGroup({
     xtype: 'radiogroup',
            fieldLabel: 'Form',
            cls: 'x-check-group-alt',
            
            items: [
                {boxLabel: 'Cres', name: 'Form', inputValue: 1, margin: '0 10 10 0'},
                {boxLabel: 'Dim', name: 'Form', inputValue: 2, checked: true, margin: '0 10 10 0'}
                
            ]
    
    
    /* columns    : 2,
       items: [
             {boxLabel: 'E-Mail', name: 'communication', inputValue: 1},
             {boxLabel: 'Nagios', name: 'communication', inputValue: 2}
        ]*/
   });
   return radios;
    
}

});

