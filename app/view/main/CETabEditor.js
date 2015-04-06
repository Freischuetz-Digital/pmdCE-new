Ext.define('pmdCE.view.main.CETabEditor', {
    extend: 'Ext.tab.Panel',
    
    requires: [
        'Ext.layout.container.Card'
    ],
    xtype: 'layout-cardtabs',

    //style: 'background-color:#dfe8f6; ',
    //width: 500,
    //height: 400,
    
     region:'west',
            floatable: false,
           // margin: '5 0 0 0',
            width: 280,
            minWidth: 200,
            maxWidth: 300,

    /*defaults: {
        bodyPadding: 8
    },*/

    

    //slursItem: null,

    initComponent: function() {
   // slursItem = new pmdCE.view.main.SlursItem(),
   // slursItem.title = 'Slurs',
    hairpinsItems = new pmdCE.view.main.HairpinsItem(),
    hairpinsItems.title = 'Hairpins',
  //  dynamsItems = new pmdCE.view.main.DynamsItem(),
 //   dynamsItems.title = 'Dynams',
 //   dirsItems = new pmdCE.view.main.DirsItem(),
 //   dirsItems.title = 'Dirs',
    this.items = [  
        // slursItem, 
       hairpinsItems
       // dynamsItems,
       // dirsItems
  
     
    ]
          this.callParent()
    }

});