Ext.define('pmdCE.view.main.CEGridPanel', {
    extend: 'Ext.tree.Panel',
    
    requires: [
        'Ext.data.*',
        'Ext.grid.*',
        'Ext.tree.*',
        'Ext.ux.CheckColumn',
        'pmdCE.model.Hairpin'
    ],
   
    flex: 4,
    region: 'west',   
  
    id: 'cegridpanel',
    
    xtype: 'tree-grid',
    
    reserveScrollbar: true,
   
    useArrows: true,
    rootVisible: false,
    
    ambiguousColumn: null,
    obviousColumn: null,
    editColumn: null,
   
    initComponent: function() {
    
    ambiguousColumn = this.createColumn();
    obviousColumn = this.createObColumn();
    editColumn = this.createEditColumn();
    
    this.listeners = {
  
        selectionchange: function(selected, eOpts){
        
        if(eOpts[0].data.depth === 1){
        // TODO: handle menus
            Ext.getCmp('deleteButton').setDisabled(false);
            Ext.getCmp('addelementbutton').setDisabled(false);
            Ext.getCmp('changetobutton').setDisabled(false);
           // editColumn.setDisabled(true);
        }
        else if(eOpts[0].data.depth === 2){
        // TODO handle delete
        // TODO: handle menus
            Ext.getCmp('deleteButton').setDisabled(false);
        Ext.getCmp('addelementbutton').setDisabled(true);
        Ext.getCmp('changetobutton').setDisabled(true);
        //editColumn.setDisabled(false);
        }
        }
        };
     
            this.columns = [{
                xtype: 'treecolumn', //this is so we know which column will show the tree
                text: 'Name',
                flex: 3,
                sortable: true,
                dataIndex: 'name'
                
            }, 
            {
                text: 'Orig/Reg',
                flex: 1,
                sortable: true,
                dataIndex: 'tag'
            },
            {
                text: 'Staff',
                flex: 1,
                sortable: true,
                dataIndex: 'staff'
            },
            {
                text: 'Tstamp',
                flex: 1,
                sortable: true,
                dataIndex: 'tstamp'
            },
            {
                text: 'Tstamp2',
                flex: 1,
                dataIndex: 'tstamp2',
                sortable: true
            },
            {
                text: 'Place',
                flex: 1,
                dataIndex: 'place',
                sortable: true
            },{
                text: 'Form',
                flex: 1,
                dataIndex: 'form',
                sortable: true
            },
             ambiguousColumn,
             obviousColumn,
             editColumn
           
            ]
        this.callParent()
    },
    
    showDialog: function(){ 
    
    var win = new pmdCE.view.main.AddDialog();
    win.show();
},


//deleteElement: function(grid, rowIndex, colIndex, actionItem, event, record, row){    
     /*     console.log("grid");
            console.log(grid);
            console.log("rowIndex");
            console.log(rowIndex);
             console.log('colIndex');
              console.log(colIndex);
            console.log("actionItem");
            console.log(actionItem);
            console.log("event");
            console.log(event);
            console.log("record");
            console.log(record);
             console.log("row");
            console.log(row);
            console.log("***************");*/
                 /*   Ext.MessageBox.confirm('Deletion', 'Are you sure you want to delete this element?', this.showResult, this);
                    
                  //  var record = tree.getSelectionModel().getSelection()[0];
    record.remove(true);
    app.getHairpinsDataStore().sync();*/
                    
                    //pmdCE.getApplication().getHairpinsDataStore().remove(record);
                    //this.remove(row);
                //var store = app.getHairpinsDataStore();grid.getStore().removeAt(rowIndex)
                
                
               /* combo.currVal = record.get('value');
Ext.Msg.confirm('Changing Status', 'Are you sure you want to change the Status ?', function (id, value) {
if (id === 'yes') {
combo.setValue(combo.currVal);
}
}, this);
return false;
*/

/*Ext.Msg.confirm("Deletion", "The element will be deleted", function(btnText){
            /\*if(btnText === "no"){
              
            }
            else *\/
            if(btnText === "yes"){
            pmdCE.getApplication().getHairpinsDataStore().remove(record);
            // record.remove(true);
             pmdCE.getApplication().getHairpinsDataStore().sync();
            }
        }, this);
},*/
    
    createObColumn: function(){
    var eColumn = Ext.create('Ext.grid.column.Check', {
        xtype: 'checkcolumn',
                header: 'Obvious',
                flex: 1,
                disabled: true,
                align: 'center',
                dataIndex: 'obvious',
                menuDisabled: true,
               renderer: function(val, m, rec) {
                  
                 if(rec.data.depth === 1){
               
                     return (new Ext.ux.CheckColumn()).renderer(val);
                 }
                 }
                 });
   return eColumn;   
    },
    
    
     createEditColumn: function(){
    var eColumn = Ext.create('Ext.grid.column.Action', {
         
                xtype: 'actioncolumn',
                header: 'Edit',
                width: 40,
                align: 'center',
                menuDisabled: true,
                //disabled: true,
                renderer: function (val, metadata, record) {
                if (record.data.depth === 1) {
                    this.items[0].icon = '';
                } else {
                    this.items[0].icon = 'resources/images/edit.png';
                }
                metadata.style = 'cursor: pointer;';
                return val;
            },
                handler: this.changeElementDialog
            
                 });
   return eColumn;   
    },
    
    createColumn: function(){
     var eColumn = Ext.create('Ext.grid.column.Check', {
                xtype:'checkcolumn',
                header: 'Ambiguous',
                dataIndex: 'ambiguous',
                disabled: true,
                flex: 1,
                align: 'center',
                menuDisabled: true,
                renderer: function(val, m, rec) {                 
                 if(rec.data.depth === 1){              
                     return (new Ext.ux.CheckColumn()).renderer(val);
                 }
        
    }
   });
   return eColumn;
   },
   
   changeElementDialog: function(){    
    var win = new pmdCE.view.main.EditDialog();
    win.show();
}

    
});

