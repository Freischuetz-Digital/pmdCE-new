Ext.define('pmdCE.view.main.HairpinsItem', {
extend: 'Ext.panel.Panel',
//xtype: 'layout-border',
    requires: [
        'Ext.layout.container.Border'
    ],
    layout: 'border',
 //   width: 500,
 //   height: 400,

    bodyBorder: false,
    
    defaults: {
        //collapsible: true,
        split: true
       // bodyPadding: 10
    },
    
    
    title: 'Hairpins',


   /* extend: 'Ext.grid.Panel',
    
     requires: [
        'Ext.layout.container.Border'
    ],
     flex: 1,
    // region: 'center',
    id:'hairpinsitem',
   layout: 'border',
   autoScroll: true,
     
  collapsible: false,
     
    //bodyBorder: false,
   
    defaults: {
       // collapsible: true,
        split: true
       // bodyPadding: 10
    },
    title: 'Hairpins',*/
    xmlView: null,
    verovioView: null,
    controllsView: null,
    
    initComponent: function () {
    
    this.id = 'hairpinsitem',
    
   // this.title = Ext.getCmp('hairpinsitem').getTileId(),
    
  //  this.id = 'ceeditor_'+Ext.getCmp('hairpinsitem').getTileId(),
  
   // verovioView = new pmdCE.view.main.VerovioView(),
   
    //     controllsView = new pmdCE.view.main.CEGridPanel(),
        
     //      xmlView = new pmdCE.view.main.XMLEditorView(),
           
    
        this.items = [
     //   controllsView, 
      //     verovioView,
       //    xmlView 
          /* {
            title: 'Footer',
            region: 'south',
            height: 100,
            minHeight: 75,
            maxHeight: 150,
            html: '<p>Footer content</p>'
        },
        {
            title: 'Navigation',
            region:'west',
            floatable: false,
            margin: '5 0 0 0',
            width: 125,
            minWidth: 100,
            maxWidth: 250,
            html: '<p>Secondary content like navigation links could go here</p>'
        },
        {
            title: 'Main Content',
            collapsible: false,
            region: 'center',
            margin: '5 0 0 0',
            html: '<h2>Main Page</h2><p>This is where the main content would go</p>'
        }*/
        ];

        this.callParent();
    }

});
