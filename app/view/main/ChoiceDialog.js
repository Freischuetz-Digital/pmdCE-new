Ext.define('pmdCE.view.main.ChoiceDialog', {
   extend: 'Ext.window.Window',
   requires: [
        'Ext.layout.container.HBox'
    ],
    
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
   title: 'Create Choice Statement',
   flex: 1,
   //height: 200,
   //width: 500, 
   modal: true,
   bodyPadding: 10,
   
   staffFieldOrig: null,  
  startFieldOrig: null,
  endFieldOrig: null,
  placeFieldOrig: null,
  formFieldOrig: null,
  tstampFieldOrig: null,
   tstampField2Orig: null,
    durFieldOrig: null,
  
  staffFieldReg1: null,  
  startFieldReg1: null,
  endFieldReg1: null,
  placeFieldReg1: null,
  formFieldReg1: null,
  tstampFieldReg1: null,
   tstampField2Reg1: null,
    durFieldReg1: null,
    
   staffFieldReg2: null,  
  startFieldReg2: null,
  endFieldReg2: null,
  placeFieldReg2: null,
  formFieldReg2: null,
  tstampFieldReg2: null,
   tstampField2Reg2: null,
    durFieldReg2: null,
   
    initComponent: function() {
 
staffFieldOrig = this.createTextField('staffField', 'Staff');
formFieldOrig = this.createTextField('formField', 'Form');
startFieldOrig = this.createTextField('startField', 'StartId');
endFieldOrig = this.createTextField('endField', 'EndId');
placeFieldOrig = this.createComboBox('Place');
tstampFieldOrig = this.createTextField('tstampField', 'Tstamp');
tstamp2FieldOrig = this.createTextField('tstampField2', 'Tstamp2');
durFieldOrig = this.createTextField('durField', 'Duration');

staffFieldReg1 = this.createTextField('staffField', 'Staff');
formFieldReg1 = this.createTextField('formField', 'Form');
startFieldReg1 = this.createTextField('startField', 'StartId');
endFieldReg1 = this.createTextField('endField', 'EndId');
placeFieldReg1 = this.createComboBox('Place');
tstampFieldReg1 = this.createTextField('tstampField', 'Tstamp');
tstamp2FieldReg1 = this.createTextField('tstampField2', 'Tstamp2');
durFieldReg1 = this.createTextField('durField', 'Duration');

staffFieldReg2 = this.createTextField('staffField', 'Staff');
formFieldReg2 = this.createTextField('formField', 'Form');
startFieldReg2 = this.createTextField('startField', 'StartId');
endFieldReg2 = this.createTextField('endField', 'EndId');
placeFieldReg2 = this.createComboBox('Place');
tstampFieldReg2 = this.createTextField('tstampField', 'Tstamp');
tstamp2FieldReg2 = this.createTextField('tstampField2', 'Tstamp2');
durFieldReg2 = this.createTextField('durField', 'Duration');

     this.items =  [
     
     {
        xtype: 'fieldset',
        title: 'Original',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },
        
        items: [
                staffFieldOrig,
                startFieldOrig,
                tstampFieldOrig,
                endFieldOrig,
                tstamp2FieldOrig,
                durFieldOrig,
                placeFieldOrig,
                formFieldOrig
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
                startFieldReg1,
                tstampFieldReg1,
                endFieldReg1,
                tstamp2FieldReg1,
                durFieldReg1,
                placeFieldReg1,
                formFieldReg1
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
                startFieldReg2,
                tstampFieldReg2,
                endFieldReg2,
                 tstamp2FieldReg2,
                durFieldReg2,
                placeFieldReg2,
                formFieldReg2
        ]
    }
            ] , 
    
    
    
   
  /*this.items = new Ext.TabPanel({
        applyTo: 'hello-tabs',
        autoTabs:true,
        activeTab:0,
        deferredRender:false,
        border:false
    }),*/
    
    
    
    this.buttons = [{
        text:'Create',
       
        handler: 
        
        
        function(){
        
        var testId = 'controlcompview_'+Ext.getCmp('hairpinsitem').getTileId();
        
       var target = Ext.getCmp(testId).getSelectionModel().getSelection()[0];
       //Ext.getCmp(testId).selModel.getSelection()[0] || Ext.getCmp(testId).getRootNode();
         var selectedEl = target.get('element');
         
         
       // function(item, evt) {
        /* console.log("record");
            console.log(record);
            console.log("rowIndex");
            console.log(rowIndex);
             console.log("grid");
            console.log(grid);*/
            console.log("***************");
            console.log(target);
   console.log(target.get('element') );
   
var newCar = Ext.create('pmdCE.model.Task', { 
                    element: staffField.value,
                    start: startField.value,
                    end: endField.value,
                    place: placeField.value,
                    form: formField.value,
                    leaf: true 
	    });
	   // this.isNewRecord = true;
	   // this.newRecordId = newCar.get('id');
	   // var grid = this.lookupReference('modelCarsGrid');
	    // pmdCE.getApplication().getHairpinsDataStore().insert(target.get('depth'), newCar);
	    
	    //target.appendChild(newCar);
	    
	    // pmdCE.getApplication().getHairpinsDataStore()
	    
	    
	   var rootNode = Ext.getCmp(testId).getSelectionModel().getSelection()[0];
	   //Ext.getCmp(testId).selModel.getSelection()[0];
	    
        rootNode.appendChild(newCar);
	     
	     
	    // rootNode.getChildAt(1).appendChild(newCar);
	     
	    // pmdCE.getApplication().getHairpinsDataStore().add(newCar);
            // record.remove(true);
             pmdCE.getApplication().getHairpinsDataStore().sync();
	   // grid.getPlugin('modelCarsRowEditingPlugin').startEdit(newCar);
	   
	  
            this.up('window').close();
           /* record.create("element": "Original",
            "children": [
                {
                    "element": "10",
                    "start": 2,
                    "end": "0m+3.875",
                    "place": "below",
                    "form": "cres",
                    "leaf": true
                }
            ]);*/
           
        
       }
      
    },{
        text: 'Cancel',
        handler: function () { this.up('window').close(); }
    }]
   

this.callParent()

 
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
}


});
