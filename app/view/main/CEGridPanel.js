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
   
    initComponent: function() {
    
    this.listeners = {
    
    itemclick: function(record, item, index, e, eOpts) {  
        // items were removed
        if(verovioView.items.length == 0){
            this.createVerovioViewItems(item.data.placement);
        }
    },
    
        selectionchange: function(selected, eOpts){
            this.createVerovioViewItems(eOpts[0].data.placement);
        }
        };
     
            this.columns = [{
                xtype: 'treecolumn', //this is so we know which column will show the tree
                text: 'Name',
                flex: 2,
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
            }
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
           /* {
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
            }*/
            
            ]
        this.callParent()
    },
    
    showDialog: function(){ 
    
    var win = new pmdCE.view.main.AddDialog();
    win.show();
},

createVerovioViewItems: function(placement){
    var verovioView = Ext.getCmp('cemain').getVerovioView();
           if(verovioView.getRadioGroup() !== null){
                verovioView.remove(verovioView.getRadioGroup(), true);
           }
           var radioGroup = verovioView.createRadioGroup();
           verovioView.add(radioGroup);
           verovioView.setRadioGroup(radioGroup);
           verovioView.setNew();
           
           if(verovioView.getVerStartView() !== null){
                verovioView.remove(verovioView.getVerStartView(), true);
           }
           var verovioImageStart = new pmdCE.view.main.VerovioImageStart();
           verovioView.add(verovioImageStart);
           verovioView.setVerStartView(verovioImageStart);
           
             if(verovioView.getVerEndView() !== null){
                verovioView.remove(verovioView.getVerEndView(), true);
           }
           var verovioImageEnd = new pmdCE.view.main.VerovioImageEnd();
           verovioView.add(verovioImageEnd);
           verovioView.setVerEndView(verovioImageEnd);
                      
            if(placement === "obvious"){
                Ext.getCmp('Ambigous').setDisabled(false);
                Ext.getCmp('Obvious').setDisabled(false);
                Ext.getCmp('Obvious').setValue(true);
            }
            else if(placement === "ambigous"){
                 Ext.getCmp('Ambigous').setDisabled(false);
                Ext.getCmp('Obvious').setDisabled(false);
                Ext.getCmp('Ambigous').setValue(true);
            }
            else{
                Ext.getCmp('Ambigous').setDisabled(true);
                Ext.getCmp('Ambigous').setValue(false);
                Ext.getCmp('Obvious').setDisabled(true);
                Ext.getCmp('Obvious').setValue(false);
            }
    
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

