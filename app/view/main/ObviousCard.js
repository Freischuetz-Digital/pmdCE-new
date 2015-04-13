Ext.define('pmdCE.view.main.ObviousCard', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.Card'
    ],
    //xtype: 'layout-card',
    layout: 'card',
   // width: 500,
   // height: 400,

    bodyPadding: 15,
    
    defaults: {
        border:false
    },

    defaultListenerScope: true,
    
    staffField: null,  
    startTaktField: null,
    endTaktField: null,
    placeField: null,
    formField: null,
    
      tstampField: null,
      tstampField2: null,
      
      verovioView: null,
  
    
         initComponent: function() {
         
         staffField= this.createComboBox('Staff');  
        startTaktField= this.createComboBox('Start measure');
        endTaktField= this.createComboBox('End measure');
        placeField = this.createComboBox('Place');
        formField = this.createRadioGroup();
        
        tstampField = this.createTextField('tstampField', 'Tstamp');
        tstamp2Field = this.createTextField('tstampField2', 'Tstamp2');
        
        // TODO:setid
        
        // verovioView = new pmdCE.view.main.VerovioView();
         
          this.items  = [
        {
            id: 'card-0',
            //html: '<h2>Welcome to the Demo Wizard!</h2><p>Step 1 of 3</p><p>Please click the "Next" button to continue...</p>'
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
           // html: '<p>Step 2 of 3</p><p>Almost there.  Please click the "Next" button to continue...</p>'
           items: [
                 tstampField,
                tstamp2Field
                //verovioView
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

