Ext.define('pmdCE.view.main.ControlComponentsTree', {
    extend: 'Ext.tree.Panel',
    
    requires: [
        'Ext.data.*',
        'Ext.grid.*',
        'Ext.tree.*',
        'Ext.ux.CheckColumn',
        'pmdCE.model.Task'
    ],    
    xtype: 'tree-grid',
    flex: 3,
    region: 'center',
    
    reserveScrollbar: true,
    
   // title: 'Core Team Projects',
   // height: 370,
    useArrows: true,
    rootVisible: false,
   // multiSelect: true,
    //singleExpand: true,
   
    
    initComponent: function() {
       // this.width = 600;
           
       this.id = 'controlcompview_'+Ext.getCmp('hairpinsitem').getTileId(),
        
            this.columns = [{
                xtype: 'treecolumn', //this is so we know which column will show the tree
                text: 'Element',
                flex: 2,
                sortable: true,
                dataIndex: 'element'
            }, {
                text: 'Staff',
                flex: 1,
                sortable: true,
                dataIndex: 'staff'
            },{
                text: 'StartId',
                flex: 1,
                sortable: true,
                dataIndex: 'start'
            },
            {
                text: 'Tstamp',
                flex: 1,
                sortable: true,
                dataIndex: 'tstamp'
            },
            {
                text: 'EndId',
                flex: 1,
                sortable: true,
                dataIndex: 'end'
            },
            {
                text: 'Tstamp2',
                flex: 1,
                dataIndex: 'tstamp2',
                sortable: true
            },
            {
                text: 'Dur',
                flex: 1,
                sortable: true,
                dataIndex: 'dur'
            },{
                text: 'Place',
                flex: 1,
                dataIndex: 'place',
                sortable: true
            },{
                text: 'Form',
                flex: 1,
                dataIndex: 'form',
                sortable: true
            }, {
                xtype: 'actioncolumn',
                text: 'Delete',
                width: 40,
                icon: '../../../resources/images/icon16_error.png',
                align: 'center',
                 handler: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
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

Ext.Msg.confirm("Deletion", "The element will be deleted", function(btnText){
            /*if(btnText === "no"){
              
            }
            else */
            if(btnText === "yes"){
            pmdCE.getApplication().getHairpinsDataStore().remove(record);
            // record.remove(true);
             pmdCE.getApplication().getHairpinsDataStore().sync();
            }
        }, this);

                }
      
            }, {
                xtype: 'actioncolumn',
                text: 'Add',
                width: 40,
                menuDisabled: true,
                icon: '../../../resources/images/drop-add.gif',
                align: 'center',
                 handler: this.showDialog,
                
                 isDisabled: function(view, rowIdx, colIdx, item, record) {
                    return record.data.leaf;
                }
            },{
                xtype: 'actioncolumn',
                text: 'Edit',
                width: 40,
                align: 'center',
                menuDisabled: true,
                icon: '../../../resources/images/edit.png',
               
                handler: this.changeElementDialog,
                 isDisabled: function(view, rowIdx, colIdx, item, record) {
                    return !record.data.leaf;
                }
            }]
        this.callParent()
    },
    
    showDialog: function(){ 
    
    var win = new pmdCE.view.main.AddDialog();
    win.show();
},

 changeElementDialog: function(){    
    var win = new pmdCE.view.main.EditDialog();
    win.show();
}
});

