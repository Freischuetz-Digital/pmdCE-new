Ext.define('pmdCE.view.main.CECenterPanel', {
    extend: 'Ext.panel.Panel',
    //xtype: 'layout-border',
    id: 'cecenterpanel',
    requires: [
        'Ext.layout.container.Border'
    ],
    layout: 'border',
   
    flex: 1,
    
     collapsible: false,
           region: 'center',

    bodyBorder: false,
    
    defaults: {
       // collapsible: true,
        split: true,
         bodyPadding: 3
       
    },
    
    ceEditor: null,
    facsimileView: null,
     xmlView: null,
    
    
    initComponent: function() {
   
    ceEditor = new pmdCE.view.main.CenterTabEditor(),
  
    facsimileView = new pmdCE.view.main.FacsimileView(),
   
    this.items = [
        ceEditor,
        facsimileView
    ],
     this.callParent();
   }

});
