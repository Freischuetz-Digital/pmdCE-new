Ext.define('pmdCE.view.main.VerovioView', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.VBox'
    ],
   // xtype: 'layout-vertical-box',
  //  id: 'verovioview',
   /*width: 300,
     height: 400,*/
     flex: 1,
    region: 'center',
    
  /*  layout: {
        type: 'vbox',
        pack: 'start'
        /\*align: 'stretch'*\/
    },*/
    
    bodyPadding: 10,
   
    verovioImageStart: null,
    verovioImageEnd: null,
    placement: null,
    
    radioGroup: null,
  
    //renderer: null,
    verovioView: null,
    
    isElemenGroupNew: null,
    
    
    initComponent: function() {
    
    //this.radioGroup = null;
    
    verovioView = this;
    Ext.getCmp('cemain').setVerovioView(verovioView);
   
   // this.renderer = new verovio.toolkit(),
   
   // this.id = 'verovioView_'+Ext.getCmp('hairpinsitem').getTileId(),
 //  radioGroup = this.createRadioGroup();
 // verovioImageStart = new pmdCE.view.main.VerovioImageStart(),
  // verovioImageStart.id = this.id +'_start',
 //  verovioImageEnd = new pmdCE.view.main.VerovioImageEnd(),
  // verovioImageEnd.id = this.id +'_end',
 
 placement = this.createComboBox('Placement');

this.items = [

//radioGroup

/*{
            xtype: 'radiogroup',
            //fieldLabel: 'Auto Layout',
            cls: 'x-check-group-alt',
            
            items: [
            {boxLabel: 'Ambigous', name: 'ambigous', inputValue: 1, margin: '0 10 10 0'},
                {boxLabel: 'Obvious', name: 'obvious', inputValue: 2, checked: true, margin: '0 10 10 0'}
                
            ]
        },
*/
//placement,

/*{
        xtype: 'label',
       // forId: 'myFieldId',
        text: 'Add regularization(s) dep. start time',
        margin: '0 10 10 0'
       // margin: '0 0 0 10'
    },*/

//verovioImageStart,
/*{
        xtype: 'label',
       // forId: 'myFieldId',
        text: 'Add regularization(s) dep. end time',
        margin: '0 10 10 0'
       // margin: '0 0 0 10'
    },*/
//verovioImageEnd

        ],
        this.callParent()

},

/*getRenderer: function(){
    return this.renderer;
    },*/

        createComboBox: function(fieldName){
    
    var states = Ext.create('Ext.data.Store', {
    fields: ['abbr', 'name'],
    data : [
        {"abbr":"ambigous", "name":"ambigous"},
        {"abbr":"obvious", "name":"obvious"}
    ]
});
    
    var ceTextField = Ext.create('Ext.form.ComboBox', {
    fieldLabel: fieldName,
    store: states,
    queryMode: 'local',
    displayField: 'name',
    editable: false,
   // margin: '0 0 0 0',
    valueField: 'abbr',
    listeners: {
    select: function(combo, record, index) {
   // Ext.getCmp('cetoolbar').getSaveButton().setDisabled(false);
     // modelTest.set('curvedir', combo.getValue());
    }
  }
});

return ceTextField;
},

   setVerStartView: function(verovioImageStart){
        this.verovioImageStart = verovioImageStart;       
    },
    
    getVerStartView: function(){
        return this.verovioImageStart;
    },
       
     setVerEndView: function(verovioImageEnd){
        this.verovioImageEnd = verovioImageEnd;       
    },
    
    getVerEndView: function(){
        return this.verovioImageEnd;
    },

createRadioGroup: function(){
    var radios = new Ext.form.RadioGroup({
     xtype: 'radiogroup',
            cls: 'x-check-group-alt',
          // id: 'placementradiogroup',
           scale: 'small',
            listeners: {
                change: function (newValue, oldValue, eOpts) {
                   if(verovioView.isElemenGroupNew){
                       verovioView.isElemenGroupNew = false;
                   }
                   else if(!verovioView.isElemenGroupNew && oldValue.Placement === 2){
                        var win = new pmdCE.view.main.ChangeToObDialog();
                       win.show();
                   }
                     else if(!verovioView.isElemenGroupNew && oldValue.Placement === 1){
                        var win = new pmdCE.view.main.ChangeToAmDialog();
                       win.show();
                   }
                
                }
                
            },
           
           
            items: [
            {boxLabel: 'Ambigous', 
            name: 'Placement', 
            inputValue: 1, 
            margin: '0 10 0 10', 
            scale: 'small', 
            id: "Ambigous", 
            disabled: true
            },
            {boxLabel: 'Obvious', 
            name: 'Placement', 
            inputValue: 2, 
            margin: '0 10 0 0', 
            scale: 'small', 
            id: "Obvious", 
            disabled: true
            }              
            ]   
   });
   return radios;    
},

   setRadioGroup: function(radioGroup){
        this.radioGroup = radioGroup;       
    },
    
    getRadioGroup: function(){
        return this.radioGroup;
    },
    
    setNew: function(){
        this.isElemenGroupNew = true;
    }


});