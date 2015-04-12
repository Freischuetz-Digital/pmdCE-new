Ext.define('pmdCE.view.main.CEPanel', {
    extend: 'Ext.panel.Panel',
   // xtype: 'layout-border',
    id: 'cepanel',
    requires: [
        'Ext.layout.container.Border'
    ],
    layout: 'border',
    flex: 1,
   // collapsible: false,
    
    bodyBorder: false,
   // bodyPadding: 5,
    
    defaults: {
    split: true
     /* frame: true,
        border: true,
        bodyPadding: 1*/
       //bodyPadding: 3
    },

    //bodyBorder: false,
   
  /*  defaults: {
       // collapsible: true,
        split: true
    },*/
    
    ceTabView: null,
    //editorView: null,
    facsimileView: null,
    
    
    initComponent: function() {
   
    ceTabView = new pmdCE.view.main.CETabPanel(),
    //editorView = new pmdCE.view.main.CECenterPanel(),
    facsimileView = new pmdCE.view.main.FacsimileView(),
   
    this.items = [
        ceTabView,
       // editorView
       facsimileView
    ],
     this.callParent();
   }

});

