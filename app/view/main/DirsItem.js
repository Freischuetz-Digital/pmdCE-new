Ext.define('pmdCE.view.main.DirsItem', {
    extend: 'Ext.grid.Panel',
    id:'dirs',
  //  title: 'Slurs',
    
 //    stateful: true,
 //   collapsible: true,
   // multiSelect: true,
 //   stateId: 'stateGrid',
 //   height: 350,
   
    autoScroll: true,
    
   //slursStore: null,
    modelTest: null,


   // xtype: 'array-grid',
   // id:'myGridID1',
    
  //  border: true,
  // style: 'background-color:#dfe8f6; ',
        viewConfig: {
            enableTextSelection: true
        },
    
        
       initComponent: function() {

  /*  slursStore = Ext.create('Ext.data.Store', {
         storeId:'dynamsStore',
            model: 'pmdCE.model.Slurs',
             proxy: {
                 type: 'ajax',
                 url: 'data/pmd_ce_getSlurs.xql',
                 //url: 'http://localhost:8080/exist/apps/proofMEIdata/pmdCE/resources/xql/getControlEvents.xql',
                 reader: {
                     type: 'json',
                     rootProperty: 'slurs'
                 }
             },
             autoLoad: false
         }),*/
        
    this.columns = [
        { header: 'xml id',  dataIndex: 'id', flex : 1},
        { header: 'staff',  dataIndex: 'staff'}
       /* { header: 'start', dataIndex: 'start' },
        { header: 'end', dataIndex: 'end' },
        { header: 'curvedir', dataIndex: 'curvedir' }*/
        
    ],
  //  this.store = slursStore,
 
          this.callParent()
},
    
    
    
    listeners:  {
    itemclick: function(dv, record, item, index, e) {
   console.log("selection");
   
   Ext.getCmp('cetoolbar').getDeleButton().setDisabled(false);
   Ext.getCmp('cetoolbar').getAddButton().setDisabled(false);
   
   modelTest = record;
   // TODO: load verovio
   /*console.log(record);
   console.log(index);
    buttonTest.select(record.get('curvedir'));
    startField.setValue(record.get('start'));
    endField.setValue(record.get('end'));*/
    
    }
         },
    

getCETable: function(){
 return ceTable;
},

getSlursStore: function(){
 return slursStore;
},

createComponent: function(){
// TODO: create
},

saveComponents: function(){
// TODO: create
},

deleteComponent: function(){
// TODO: create
}


});