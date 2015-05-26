Ext.define('pmdCE.view.main.CETabPanel', {
    extend: 'Ext.tab.Panel',
  
    defaults: {
        autoScroll: true
    },
   
    id: 'cetabpanel',
  
   flex:1,
    
     collapsible: false,
     region: 'center',

    slursItem: null,
    hairpinsItems: null,
    dynamsItems: null,
    dirsItems: null,
   
    initComponent: function() {
   
    slursItem =  new pmdCE.view.main.ControlEventsItem({
         title: 'Slurs',
         id: 'slursitem'
        // icon: 'resources/images/mix_volume.png'
     }    
     ),
    
     hairpinsItems = new pmdCE.view.main.ControlEventsItem({
         title: 'Hairpins',
         id: 'hairpinsitem',
         icon: 'resources/images/mix_volume.png'
     }    
     ),
     
     dynamsItems =  new pmdCE.view.main.ControlEventsItem({
         title: 'Dynams',
         id: 'dynamsitem'
        // icon: 'resources/images/mix_volume.png'
     }    
     ),
     
      dirsItems =  new pmdCE.view.main.ControlEventsItem({
         title: 'Dirs',
         id: 'dirsitem'
        // icon: 'resources/images/mix_volume.png'
     }    
     ),
   this.items = [  
       slursItem, 
       hairpinsItems, 
       dynamsItems,
       dirsItems
    ],
  
          this.callParent()
    }
    
});