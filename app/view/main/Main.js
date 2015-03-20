/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('pmdCE.view.main.Main', {
    extend: 'Ext.panel.Panel',
  requires: [
        'pmdCE.view.main.MainController',
        'pmdCE.view.main.MainModel',
        'Ext.layout.container.Table'
    ],

    xtype: 'layout-table',
   
    layout: {
        type: 'table',
        columns: 1,
        tableAttrs: {
            style: {
                width: '100%'
            }
        }
    },

    autoScroll: true,
    
    ceToolbar: null,
    
    defaults: {
        //bodyPadding: '15 20',
        border: true
    },
    
   /*  items: [
     ceToolbar = new pmdCE.view.main.CEToolbar(),
     cePanel = new pmdCE.view.main.CEPanelTable()
    ]*/
    
     initComponent: function() {
     
     ceToolbar = new pmdCE.view.main.CEToolbar(),
     
this.items = [
     ceToolbar, 
     cePanel = new pmdCE.view.main.CEPanelTable()
    ],

this.callParent()

 
    }
    
  /*  xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },*/

   /*layout: {
        type: 'border'
    },*/


   /* items: [
      {
   
    
      xtype: 'panel',
        bind: {
            title: '{name}'
        },
        region: 'west',
        html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
        width: 250,
        split: true,
        tbar: [{
            text: 'Button',
            handler: 'onClickButton'
        }]
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'Tab 1',
            html: '<h2>Änderung</h2>'
        }]
    }*/
    
    
 //   ]
    
    
});
