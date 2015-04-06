Ext.define('pmdCE.view.main.CEPanelTable', {
    extend: 'Ext.panel.Panel',
   // xtype: 'layout-border',
    id: 'cepaneltable',
    requires: [
        'Ext.layout.container.Border'
    ],
    layout: 'border',
    flex: 1,

    //bodyBorder: false,
   
    defaults: {
       // collapsible: true,
        split: true
       // bodyPadding: 10
    },
    
    ceTabView: null,
    editorView: null,
    
    
    initComponent: function() {
   
    ceTabView = new pmdCE.view.main.CETabEditor(),
    editorView = new pmdCE.view.main.CECenterPanel(),
   
    this.items = [
        ceTabView,
        editorView
    ],
     this.callParent();
   }

});

