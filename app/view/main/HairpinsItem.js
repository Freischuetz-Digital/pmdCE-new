Ext.define('pmdCE.view.main.HairpinsItem', {
extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.HBox'
    ],
    xtype: 'layout-horizontal-box',
   // width: 500,
   // height: 400,
    flex:1,
    
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },
    
   // bodyPadding: 10,
    
    defaults: {
        frame: true,
        autoScroll: true
       // bodyPadding: 10
    },
    title: 'Hairpins',
    id: 'hairpinsitem',
    icon: 'resources/images/mix_volume.png',
    
    autoScroll: true,
   
    xmlView: null,
    verovioView: null,
    controllsView: null,
    
    initComponent: function () {
  
        this.items = [
    
        ];

        this.callParent();
    }

});
