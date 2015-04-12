Ext.define('pmdCE.view.main.CETabPanel', {
    extend: 'Ext.tab.Panel',
    
    
    //xtype: 'basic-tabs',
    //controller: 'tab-view',
    
   // width: 400,
   // height: 300,
    defaults: {
        //bodyPadding: 10,
        autoScroll: true
    },
    
   /* requires: [
        'Ext.layout.container.Card'
    ],*/
    id: 'cetabpanel',
   // xtype: 'layout-cardtabs',
     /*requires: [
        'Ext.layout.container.Border'
    ],
    layout: 'border',
    xtype: 'layout-border',*/
   
   flex:1,
    
     collapsible: false,
     region: 'center',

   // bodyBorder: false,
    
    
    /*defaults: {
       // collapsible: true,
        split: true
     //    bodyPadding: 3
       
    },*/
    
    hairpinsItems: null,
    


    //style: 'background-color:#dfe8f6; ',
    //width: 500,
    //height: 400,
    
   //  region:'west',
     //       floatable: false,
           // margin: '5 0 0 0',
      //      width: 280,
      //      minWidth: 200,
      //      maxWidth: 300,

/*items: Ext.create('Ext.button.Button', {   
      //  cls: ceCls,
        icon: '../../../resources/images/drop-add.gif',
       // scale: 'medium',
        handler: this.sourceOnItemClick
}),*/
           // icon: '../../../resources/images/drop-add.gif',
    

        

    initComponent: function() {
   
   // slursItem = new pmdCE.view.main.SlursItem(),
   // slursItem.title = 'Slurs',
    hairpinsItems = new pmdCE.view.main.HairpinsItem(),
   // hairpinsItems.title = 'Hairpins',
  //  dynamsItems = new pmdCE.view.main.DynamsItem(),
 //   dynamsItems.title = 'Dynams',
 //   dirsItems = new pmdCE.view.main.DirsItem(),
 //   dirsItems.title = 'Dirs',
   this.items = [  
        // slursItem, 
       hairpinsItems
       // dynamsItems,
       // dirsItems
  
     
    ],
    
   /* this.items = [{
        title: 'Active Tab',
        html: "test1",
        flex: 1,
        region: 'west'
    }, {
        title: 'Inactive Tab',
        html: "test2",
        flex: 1,
        region: 'center'
    }, {
        title: 'Disabled Tab',
        disabled: true,
        flex: 1,
        region: 'east'
    }],*/

    
    
    
          this.callParent()
    }
    
 

});