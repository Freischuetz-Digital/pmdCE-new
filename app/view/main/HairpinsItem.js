Ext.define('pmdCE.view.main.HairpinsItem', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Ext.grid.column.Action'
    ],
    id:'hairpinsitem',
  //  title: 'Slurs',
    
 //    stateful: true,
 //   collapsible: true,
   // multiSelect: true,
 //   stateId: 'stateGrid',
 //   height: 350,
   icon: '../../../resources/images/mix_volume.png',
    autoScroll: true,
   
    modelTest: null,
    
    tileId: null,
    createButton: null,
   

   // xtype: 'array-grid',
   // id:'myGridID1',
    
  //  border: true,
  // style: 'background-color:#dfe8f6; ',
        viewConfig: {
            enableTextSelection: true
        },
        
    
        
       initComponent: function() {
       createButton = this.createCEIcon();
       
       this.tbar = [
       '->',
       createButton],

        
    this.columns = [
        { 
        text: 'XML ID',
        dataIndex: 'id', 
       // menuDisabled: true,
       // sortable : true,
        flex : 2
        },
        {
                xtype: 'actioncolumn',
                //text: 'Delete',
                //width: 30,
                flex : 1,
                icon: '../../../resources/images/remove_1.png',
                align: 'center',
             // menuDisabled: true,
           sortable : false,
                 handler: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
                        Ext.Msg.confirm("Deletion", "The element will be deleted", function(btnText){
                        /*if(btnText === "no"){
              
                            }
                        else */
                        if(btnText === "yes"){
                    /*  pmdCE.getApplication().getHairpinsDataStore().remove(record);
            // record.remove(true);
             pmdCE.getApplication().getHairpinsDataStore().sync();*/
                    }
                }, this);

                }
      
            }
       
        
    ]
   
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
            this.tileId = record.get('id');
            
            if(typeof Ext.getCmp('ceeditor_'+this.tileId) === 'undefined'){
                var ceEditor = new pmdCE.view.main.CEEditor();
                Ext.getCmp('centertabeditor').add(ceEditor);
                Ext.getCmp('centertabeditor').setActiveItem(ceEditor);
              
                var app = pmdCE.getApplication();
               // var store = app.getHairpinsStore();  
                 var store = app.getHairpinDataStore();
                 store.load();
                 Ext.getCmp('controlcompview_'+this.tileId).getView().bindStore(store); 
                //Ext.getCmp('controlcompview_'+this.tileId).getView().setStore( store );
                
//                var itemsArray = store.data.items; 
//                for(var i = 0; i < itemsArray.length ; i++){ 
//                console.log("tileId");
//                console.log(this.tileId);
//                console.log("itemsArray[i].data.id");
//                console.log(itemsArray[i].data.id);
//                if(this.tileId !== itemsArray[i].data.id){ 
//                
//                console.log(itemsArray[i].data.id);
//                
//                   Ext.getCmp('controlcompview_'+tileId).getView().bindStore(); 
//                   
//                   store.setData(itemsArray[i].data);
//                    
//                     //console.log(store.filter('id', itemsArray[i].data.id));
//                   // store.filter('id', itemsArray[i].data.id);
//                    // Ext.getCmp('controlcompview_'+tileId).setData(itemsArray[i].data);
//                    //break;
//                }
//                }
                
            }
            else{
                Ext.getCmp('centertabeditor').setActiveItem(Ext.getCmp('ceeditor_'+this.tileId));
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
 return  this.tileId;
},

createCEIcon: function(){
    var ceIcon = Ext.create('Ext.button.Button', {  
        xtype: 'button',
      //  cls: ceCls,
        icon: "../../../resources/images/drop-add.gif",
         menu: [Ext.create('Ext.menu.Item', {
                        text: "Obvious",
                        icon: '../../../resources/images/mix_volume.png',
                        handler: function() {
                            var win = new pmdCE.view.main.AddDialog();
                            win.show();
                        }
                     }),
                     
                     Ext.create('Ext.menu.Item', {
                text: "Ambiguous",
                icon: '../../../resources/images/mix_volume.png',
                handler: function() {
                    // TODO: choice
                    var win = new pmdCE.view.main.ChoiceDialog();
                    win.show();
                }
             })
                    ]
        });
    
      

return ceIcon;
},

onItemClick: function() {
console.log("selection");
console.log(createButton.getSelection());
       if(sourceButton.getText() === 'Source'){
            sourceButton.getMenu().removeAll();
            var app = pmdCE.getApplication();
            var store = app.getSourcesStore();
            var itemsArray = store.data.items;           
            for(var i = 0; i < itemsArray.length ; i++){ 
             var menuItem = Ext.create('Ext.menu.Item', {
             itemId: itemsArray[i].id, 
             text: itemsArray[i].id,
             handler: this.sourceOnItemClick
             });
             sourceButton.getMenu().add(menuItem);            
          }
        }
    }

});



 /* listeners: {     
                afterrender: function(c) {       
                    var headerCt = this.getView().getHeaderCt(); 
                    var menu = headerCt.getMenu();
                    
                   // console.log(menu);
                    
             
                   var menuItemObvious = Ext.create('Ext.menu.Item', {
                        text: "Obvious",
                        icon: '../../../resources/images/mix_volume.png',
                        handler: function() {
                            var win = new pmdCE.view.main.AddDialog();
                            win.show();
                        }
                     });
                         
             var menuItemAmbiguous = Ext.create('Ext.menu.Item', {
                text: "Ambiguous",
                icon: '../../../resources/images/mix_volume.png',
                handler: function() {
                    // TODO: choice
                    var win = new pmdCE.view.main.ChoiceDialog();
                    win.show();
                }
             });  
             
             menu.removeAll();
           //menu.add({xtype: 'menuseparator'}),
           menu.add(menuItemAmbiguous);
           menu.add(menuItemObvious);
                  
                   
    }
    }*/