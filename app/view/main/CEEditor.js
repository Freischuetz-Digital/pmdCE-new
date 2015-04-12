Ext.define('pmdCE.view.main.CEEditor', {
   // extend: 'Ext.tab.Panel',
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.Border'
    ],
  //  id:'ceeditor',
    /* width: 500,
    height: 400,*/
  flex: 1,
  //title: "XML ID",
  region: 'center',
   layout: 'border',
 // region: 'north',
 //closable: true,
  
   // xtype: 'layout-horizontal-box',
 
    autoScroll: true,
     
  collapsible: false,
     
    //bodyBorder: false,
   
    defaults: {
       // collapsible: true,
        split: true
       // bodyPadding: 10
    },
    
  //   bodyPadding: 10,
    
    
  /* defaults: {
         border: true,
        bodyPadding: 10
    },*/
 
    xmlView: null,
    verovioView: null,
    controllsView: null,
  
    initComponent: function () {
    
    this.title = Ext.getCmp('hairpinsitem').getTileId(),
    
    this.id = 'ceeditor_'+Ext.getCmp('hairpinsitem').getTileId(),
  
    verovioView = new pmdCE.view.main.VerovioView(),
   
         controllsView = new pmdCE.view.main.ControlComponentsTree(),
        
           xmlView = new pmdCE.view.main.XMLEditorView(),
           
    
        this.items = [
        controllsView, 
           verovioView,
           xmlView                    
        ];

        this.callParent();
    }

});

