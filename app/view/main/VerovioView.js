Ext.define('pmdCE.view.main.VerovioView', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.VBox'
    ],
   // xtype: 'layout-vertical-box',
 //   id: 'verovioview',
   /*width: 300,
     height: 400,*/
     flex: 1,
    region: 'east',
    
  /*  layout: {
        type: 'vbox',
        pack: 'start'
        /\*align: 'stretch'*\/
    },*/
    
    bodyPadding: 10,
   
    verovioImageStart: null,
    verovioImageEnd: null,
    placement: null,
    
    
    initComponent: function() {
   
    this.id = 'verovioView_'+Ext.getCmp('hairpinsitem').getTileId(),
    
    
  
   verovioImageStart = new pmdCE.view.main.VerovioImageStart(),
  // verovioImageStart.id = 'verovioimagestart_'+tileId,
   verovioImageEnd = new pmdCE.view.main.VerovioImageEnd(),
 //  verovioImageEnd.id = 'verovioimageend_'+tileId,
 
 placement = this.createComboBox('Placement');

this.items = [

{
            xtype: 'radiogroup',
            //fieldLabel: 'Auto Layout',
            cls: 'x-check-group-alt',
            
            items: [
            {boxLabel: 'Ambigous', name: 'ambigous', inputValue: 1, margin: '0 10 10 0'},
                {boxLabel: 'Obvious', name: 'obvious', inputValue: 2, checked: true, margin: '0 10 10 0'}
                
            ]
        },

//placement,

{
        xtype: 'label',
       // forId: 'myFieldId',
        text: 'Add regularization(s) dep. start time',
        margin: '0 10 10 0'
       // margin: '0 0 0 10'
    },

verovioImageStart,
{
        xtype: 'label',
       // forId: 'myFieldId',
        text: 'Add regularization(s) dep. end time',
        margin: '0 10 10 0'
       // margin: '0 0 0 10'
    },
verovioImageEnd

        ],
        this.callParent()

},

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
}


  

});