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
         
        staffField= this.createComboBoxStaff('Staff');  
        startTaktField= this.createComboBoxMeasureNr('Start measure');
        endTaktField= this.createComboBoxMeasureNr('End measure');
        placeField = this.createComboBox('Place');
        formField = this.createRadioGroup();
        
        tstampField = this.createTextField('tstampFieldObv', 'tstampField', 'Tstamp');
        tstamp2Field = this.createTextField('tstampField2Obv', 'tstampField2', 'Tstamp2');
       
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
            //verovioImageStart
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
            id: 'starttime',
            defaultType: 'textfield',        
                defaults: {
                    anchor: '100%'
                },        
                items: [
                    tstampField
                   // verovioImageStart
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
                  //  verovioImageEnd
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
        
        //TODO: generate Id
        var formValue = formField.getValue().Form === 2 ? "dim" : 'cresc';
	 
        var hairpin = Ext.create('pmdCE.model.Hairpin', {      
                    id: 'ELENA',
                    name: formValue+'_'+staffField.getValue()+'_'+placeField.getValue()+'_obvious',
                    icon: 'resources/images/mix_volume.png',
                    obvious: true,
                    ambiguous: false,
                    staff: staffField.getValue(),                   
                    tstamp: tstampField.getValue(),
                    tstamp2: tstamp2Field.getValue(),
                    place: placeField.getValue(),
                    form: formValue,
                    tag: "",
                    leaf: true                
	    });
	  
	    var store = pmdCE.getApplication().getHairpinDataStore();
	    var root = store.getRootNode();
	    var parent = root.appendChild(hairpin);
        parent.expand();
        
       // hairpin.save();
       // store.sync();
       
        /*var target = Ext.getCmp('cegridpanel').getSelectionModel();
        console.log("getSelectionModel");
        console.log(target);*/
    
   // var root = Ext.getCmp('cegridpanel').getRootNode();
    
   /* var newPerson = Ext.create('pmdCE.model.Hairpin', {
     
            name: 'ELENA', 
            id: 'elena_test', 
              icon: 'resources/images/mix_volume.png',
             obvious: true,
             ambiguous: false,
             expanded: true
            
             });*/
             
  //   var store = Ext.getCmp('cegridpanel').store;
     
//     store.getNodeById('A_mov6_measure75_ce1').set('tstamp', '33+el');
  
 /*   var newPerson1 = Ext.create('pmdCE.model.Hairpin', {staff: '1',
                    icon: 'resources/images/details-xml.png',
                    tstamp: "33",
                    tstamp2: "m+6.5",
                    place: "below",
                    form: "cres",
                    leaf: true});

 store.getNodeById('A_mov6_measure75_ce1').appendChild(newPerson1);*/
 
 //store.sync();
 
 //store.update();
 
      /*  console.log("create");
        console.log(store);*/
        
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
    console.log(combo);
        Ext.getCmp('cemain').setStaffNr(combo.getValue());
    
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

