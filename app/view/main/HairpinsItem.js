Ext.define('pmdCE.view.main.HairpinsItem', {
    extend: 'Ext.grid.Panel',
    id:'hairpinsitem',
  //  title: 'Slurs',
    
 //    stateful: true,
 //   collapsible: true,
   // multiSelect: true,
 //   stateId: 'stateGrid',
 //   height: 350,
   
    autoScroll: true,
   
    modelTest: null,
    
    tileId: null,


   // xtype: 'array-grid',
   // id:'myGridID1',
    
  //  border: true,
  // style: 'background-color:#dfe8f6; ',
        viewConfig: {
            enableTextSelection: true
        },
    
        
       initComponent: function() {
        
    this.columns = [
        { header: 'xml id',  dataIndex: 'id', flex : 1}
    ],
    
 
          this.callParent()
},
    
    
    
    listeners:  {
   itemdblclick: function(dv, record, item, index, e) {
            /*console.log("dv");
            console.log(dv);
            console.log("record");
            console.log(record);
             console.log(record.get('place'));
            console.log("item");
            console.log(item);
            console.log("index");
            console.log(index);
            console.log("e");
            console.log(e);
            console.log("***************");*/
            tileId = record.get('id');
            
            if(typeof Ext.getCmp('ceeditor_'+tileId) === 'undefined'){
                var ceEditor = new pmdCE.view.main.CEEditor();
                Ext.getCmp('centertabeditor').add(ceEditor);
                Ext.getCmp('centertabeditor').setActiveItem(ceEditor);
              
                var app = pmdCE.getApplication();
                var store = app.getHairpinsDataStore();                              
                var itemsArray = store.data.items;  
                for(var i = 0; i < itemsArray.length ; i++){ 
                if(tileId === itemsArray[i].data.hairpinId){                
                    Ext.getCmp('controlcompview_'+tileId).getView().bindStore(store);  
                    break;
                }
                }
                
            }
            else{
                Ext.getCmp('centertabeditor').setActiveItem(Ext.getCmp('ceeditor_'+tileId));
            }
            
        
          
        }
    
    
   /* function(dv, record, item, index, e) {
   console.log("selection");
   
   Ext.getCmp('cetoolbar').getDeleButton().setDisabled(false);
   Ext.getCmp('cetoolbar').getAddButton().setDisabled(false);
   
   modelTest = record;*/
   // TODO: load verovio
   /*console.log(record);
   console.log(index);
    buttonTest.select(record.get('curvedir'));
    startField.setValue(record.get('start'));
    endField.setValue(record.get('end'));*/
    
  //  }
         },
         
         getTileId: function(){
 return  tileId;
}
    

});