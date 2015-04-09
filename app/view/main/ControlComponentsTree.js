Ext.define('pmdCE.view.main.ControlComponentsTree', {
    extend: 'Ext.grid.Panel',
    
    requires: [
        'Ext.selection.CellModel',
        'Ext.grid.*',
        'Ext.data.*',
        'Ext.util.*',
        'Ext.form.*',
        'pmdCE.model.Hairpin'
    ],
    xtype: 'cell-editing',
    /*xtype: 'tree-grid',
    flex: 3,
    region: 'center',   
    reserveScrollbar: true,
    useArrows: true,
    rootVisible: false,*/
    
    flex: 3,
    region: 'center',   
    xtype: 'array-grid',
    //store: 'Companies',
    stateful: true,
   // collapsible: true,
   // multiSelect: true,
    stateId: 'stateGrid',
   // height: 350,
   // title: 'Array Grid',
    viewConfig: {
        enableTextSelection: true
    },

   
   
    
    initComponent: function() {
       
       this.id = 'controlcompview_'+Ext.getCmp('hairpinsitem').getTileId(),
       
       
       this.cellEditing = new Ext.grid.plugin.CellEditing({
            clicksToEdit: 1
        });

        this.cellEditing.on('edit', this.onEditComplete, this);
        
            this.columns = [{
                text: 'Orig/Reg',
                width: 60,
                sortable: true
                //dataIndex: 'staff'
            },
            /*{
               // xtype: 'treecolumn', //this is so we know which column will show the tree
                text: 'XML ID',
                flex: 2,
                sortable: true,
                dataIndex: 'id'
            }, */
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
           /* {
                xtype: 'actioncolumn',
                text: 'Delete',
                width: 40,
                icon: '../../../resources/images/remove_1.png',
                align: 'center',
                 handler: this.deleteElement                
               /\* function(grid, rowIndex, colIndex, actionItem, event, record, row) {          
                }   *\/  
            }, */
            /*{
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
            },*/
            {
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
},

deleteElement: function(grid, rowIndex, colIndex, actionItem, event, record, row){    
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
},
 onAddClick: function(){
        // Create a model instance
        var rec = new pmdCE.model.Hairpin({
            common: '',
            light: 'Mostly Shady',
            price: 0,
            availDate: Ext.Date.clearTime(new Date()),
            indoor: false
        });

        this.getStore().insert(0, rec);
        this.cellEditing.startEditByPosition({
            row: 0,
            column: 0
        });
    },

    onRemoveClick: function(grid, rowIndex){
        this.getStore().removeAt(rowIndex);
    },

    onEditComplete: function(editor, context) {
        this.getView().focusRow(context.record);
    }
});

