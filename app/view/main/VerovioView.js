Ext.define('pmdCE.view.main.VerovioView', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.VBox'
    ],
   // xtype: 'layout-vertical-box',
 //   id: 'verovioview',
   /*width: 300,
     height: 400,*/
     flex: 1,
    region: 'east',
    
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },
    
   // bodyPadding: 10,

  /* defaults: {
        frame: true,
        bodyPadding: 10
    },
    */
   
    verovioImageStart: null,
    verovioImageEnd: null,
    
    
    initComponent: function() {
   
    this.id = 'verovioView_'+Ext.getCmp('hairpinsitem').getTileId(),
  
   verovioImageStart = new pmdCE.view.main.VerovioImageStart(),
  // verovioImageStart.id = 'verovioimagestart_'+tileId,
   verovioImageEnd = new pmdCE.view.main.VerovioImageEnd(),
 //  verovioImageEnd.id = 'verovioimageend_'+tileId,

this.items = [
verovioImageStart,
verovioImageEnd

        ],
        this.callParent()

}


  

});