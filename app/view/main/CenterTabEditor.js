Ext.define('pmdCE.view.main.CenterTabEditor', {
    extend: 'Ext.tab.Panel',
    //xtype: 'layout-border',
    id: 'centertabeditor',
    /*requires: [
        'Ext.layout.container.Border'
    ],
    layout: 'border',*/
   
    flex: 1,
    
     collapsible: false,
           region: 'center',

    //bodyBorder: false,
   
    defaults: {
       // collapsible: true,
        split: true
       // bodyPadding: 10
    },
    
    ceEditor: null,
    /*facsimileView: null,
     xmlView: null,*/
    
    
    initComponent: function() {
   
   // ceEditor = new pmdCE.view.main.CEEditor(),
  
    
   
  //  this.items = [
       // ceEditor
       // facsimileView
        /* {
            title: 'Main Content',
            collapsible: false,
            region: 'center',
           // margin: '5 0 0 0',
            html: '<h2>Main Page</h2><p>This is where the main content would go</p>'
        }*/
   // ],
     this.callParent();
   }

  /*  items: [
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
        }
    ]*/

});
