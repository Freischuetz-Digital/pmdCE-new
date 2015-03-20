Ext.define('pmdCE.view.main.XMLEditorView', {
extend: 'Ext.form.Panel',
        layout:'absolute',
       region: 'south',
            height: 100,
            minHeight: 75,
            maxHeight: 150,
           
        defaultType: 'textfield',
        
    initComponent: function() {
        this.tbar = [{
            xtype:'label',
            text: 'Panel Absolute'
        }],
        this.callParent()

    }

    });