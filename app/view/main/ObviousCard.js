Ext.define('pmdCE.view.main.ObviousCard', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.Card'
    ],
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
    startTaktField: null,
    endTaktField: null,
    placeField: null,
    formField: null,
    
      tstampField: null,
      tstampField2: null,
      
      verovioImageStart: null,
      verovioImageEnd: null,
  
    
         initComponent: function() {
         
         this.id = "obviousCard";
         Ext.getCmp('cemain').setEditorId(this.id);
         
         staffField= this.createComboBoxStaff('Staff');  
        startTaktField= this.createComboBoxMeasureNr('Start measure');
        endTaktField= this.createComboBoxMeasureNr('End measure');
        placeField = this.createComboBox('Place');
        formField = this.createRadioGroup();
        
        tstampField = this.createTextField('tstampField', 'Tstamp');
        tstamp2Field = this.createTextField('tstampField2', 'Tstamp2');
       
        verovioImageStart = new pmdCE.view.main.VerovioImageStart(), 
        verovioImageEnd = new pmdCE.view.main.VerovioImageEnd()
         
         
          this.items  = [
        {
            id: 'card-0',
             bodyPadding: 5,
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
            bodyPadding: 5,
           // margin: '0 10 10 0',
           items: [
           {
        xtype: 'fieldset',
        title: 'Start time',
        defaultType: 'textfield',
        
        defaults: {
            anchor: '100%'
        },
        
        items: [
                tstampField,
                verovioImageStart
        ]
    },
          {
        xtype: 'fieldset',
        title: 'End time',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },
        
        items: [
                tstamp2Field,
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
    
    
    /* columns    : 2,
       items: [
             {boxLabel: 'E-Mail', name: 'communication', inputValue: 1},
             {boxLabel: 'Nagios', name: 'communication', inputValue: 2}
        ]*/
   });
   return radios;
    
}

});

