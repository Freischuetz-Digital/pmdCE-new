Ext.define('pmdCE.view.main.AddOrigDialog', {
   extend: 'Ext.window.Window',
   title: 'Add Orig Element',
   flex: 1,
   id: 'obviousdialog',
   //height: 200,
   //width: 500, 
   modal: true,
   bodyPadding: 10,
   layout: 'hbox',
   autoScroll: true,
   
   staffField: null,  
    tstampField: null,
 placeField: null,
  formField: null,
  tstampField2: null,
  satffFieldBetween: null,
  selectedNode: null,
  
  titleForAdd: null,
 createElementButton: null,
 
    initComponent: function() {
    
    selection = Ext.getCmp('cegridpanel').getSelectionModel().getSelection()[0];
	  rootNode = pmdCE.getApplication().getHairpinDataStore().getRootNode();
	  
	  for(var i = 0; i < rootNode.childNodes.length ; i++){
	  if(rootNode.childNodes[i].data.id === selection.data.id
	  && rootNode.childNodes[i].data.name === selection.data.name){
	      selectedNode = rootNode.childNodes[i];	
	      Ext.getCmp('cemain').setStartMeasure(selectedNode.data.measurenr);
	      //Ext.getCmp('cemain').setEndMeasure(selectedNode.data.measurenr);
	      Ext.getCmp('cemain').setStaffNr(selectedNode.childNodes[0].data.staff);
	      break;
	  }	      
	  }    
 
    staffField = this.createTextField('staffField', 'Staff');
    staffField.setValue(selectedNode.childNodes[0].data.staff);
     staffField.setDisabled(true);
    satffFieldBetween = this.createComboBoxStaff('Second staff'); 
    formField = this.createComboBoxForm('Form');
    formField.validate();
    placeField = this.createComboBox('Place');
    placeField.validate();
    tstampField = this.createTextField('tstampFieldObv', 'Tstamp');
    tstampField.validate();
    tstamp2Field = this.createTextField('tstampField2Obv', 'Tstamp2');
    tstamp2Field.validate();

    verovioImageStart = new pmdCE.view.main.VerovioImageStart(),
   //     verovioImageEnd = new pmdCE.view.main.VerovioImageEnd(),

     this.items =  [
      {
        xtype: 'fieldset',
        title: 'Values',
        defaultType: 'textfield',
       
        margin: '0 10 0 0',
        defaults: {
            anchor: '100%'
        },
        
        items: [
            staffField,
            satffFieldBetween,
            placeField,
            formField
        ]
    }, {
        xtype: 'fieldset',
       // defaultType: 'textfield',
         title: 'Start Time',
         margin: '0 10 0 0',
        
        defaults: {
            anchor: '100%'
        },
        
        items: [
                tstampField,
                verovioImageStart
        ]
    }, {
        xtype: 'fieldset',
      //  defaultType: 'textfield',
         title: 'End Time',
         margin: '0 10 0 0',
        
        defaults: {
            anchor: '100%'
        },
        
        items: [
                tstamp2Field
                //verovioImageEnd
        ]
    }
     
            ] , 
   
    createElementButton = this.createNavigationButton('createElement', 'Add', this.createElement);
    this.buttons = [
    createElementButton,
    {
        text: 'Cancel',
        handler: function () { this.up('window').close(); }
    }]
   

this.callParent()
 
    },
    
     createElement: function () {
    
   
        if(selectedNode !== null){
        
           selectedNode.appendChild({
                    icon: 'resources/images/mix_volume.png',
                    staff: staffField.getValue(), 
                    staff2: satffFieldBetween.getValue(), 
                    tstamp: tstampField.getValue(),
                    tstamp2: tstamp2Field.getValue(),
                    place: placeField.getValue(),
                    form: formField.getValue(),
                    name: 'orig',
                    tag: 'orig',
                    leaf: true
        });	
        
        selectedNode.expand();
	  
	  Ext.getCmp('cegridpanel').setSelection(selectedNode);
	
	  Ext.getCmp('cegridpanel').showXMLforSelectedElement(selectedNode);
	  
       Ext.getCmp('saveButton').setDisabled(false);
        
        }
       
            this.up('window').close();
     
    },
    
    setTitleForAdd: function(title){
        this.titleForAdd = title;
        console.log('setTitle');
        console.log(this.titleForAdd);
    },
    
 
      createTextField: function(fieldName, fieldLabel){
        var me = this;
    var ceTextField = Ext.create('Ext.form.field.Text',{
        name: fieldName,
        id: fieldName,
        width: 285,
        allowBlank: false,
        invalidCls: '',
        fieldLabel: fieldLabel,
        listeners: {
        focus: function(e, eOpts ){
           me.handleCreateButton();
        },
        render: function(c) {
            c.getEl().on('keyup', function() {   
          me.handleCreateButton();
            }, c);
        }
        }
   });

return ceTextField;
},

    
        createComboBox: function(fieldName){
    
var states = new Array("above", "below", "between"); 
var me = this;
    var ceTextField = Ext.create('Ext.form.ComboBox', {
    fieldLabel: fieldName,
    store: states,
    queryMode: 'local',
    displayField: 'name',
    editable: false,
     width: 285,
    allowBlank: false,
    invalidCls: '',
    listeners: {
    select: function(combo, record, index) {
    me.handleCreateButton();
    }
  }
  });
return ceTextField;
},

    createComboBoxForm: function(fieldName){
    
    var states = new Array("cres", "dim"); 
    var me = this;
    var ceTextField = Ext.create('Ext.form.ComboBox', {
    fieldLabel: fieldName,
    store: states,
     width: 285,
    queryMode: 'local',
    displayField: 'name',
    editable: false,
       allowBlank: false,
       invalidCls: '',
    listeners: {
    select: function(combo, record, index) {
       me.handleCreateButton();
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
     width: 285,
    editable: true,
    icon: 'resources/images/mix_volume.png',
    listeners: {
    select: function(combo, record, index) {
   
    }
  }
  });
return ceTextField;
},


 handleCreateButton: function(){
      if(placeField.isValid() && formField.isValid() 
          && tstampField.isValid() && tstamp2Field.isValid()){ 
             createElementButton.setDisabled(false); 
          }
          else{
            createElementButton.setDisabled(true);  
          }
    },
    
    createNavigationButton: function(navItemId, navText, navHandler){
 var navButton = Ext.create('Ext.button.Button', {  
                     itemId: navItemId,
            text: navText,
            handler: navHandler,
            disabled: true
                  
          })

return navButton;
}

    
});

    
    
    
     
    