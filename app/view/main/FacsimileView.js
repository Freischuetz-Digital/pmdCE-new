Ext.define('pmdCE.view.main.FacsimileView', {
extend: 'Ext.form.Panel',
        layout:'absolute',
        region:'west',
            floatable: false,
            margin: '5 0 0 0',
            width: 700,
            minWidth: 600,
            maxWidth: 900,
      
        defaultType: 'textfield',
        
initComponent: function() {
this.tbar = [{
            xtype:'label',
            text: 'Panel Absolute'
        }],
        this.callParent()

}

    });