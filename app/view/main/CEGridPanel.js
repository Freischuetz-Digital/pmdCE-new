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
    //store: store,
  
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
        
        if(typeof eOpts[0] !== 'undefined' && eOpts[0].data.depth === 1){
        // TODO: handle menus
            Ext.getCmp('deleteButton').setDisabled(false);
            Ext.getCmp('addelementbutton').setDisabled(false);
            Ext.getCmp('changetobutton').setDisabled(false);
           // editColumn.setDisabled(true);
        }
        else if(typeof eOpts[0] !== 'undefined'&& eOpts[0].data.depth === 2){
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
                text: 'Name/Orig/Reg',
                flex: 3,
                sortable: true,
                dataIndex: 'name'
                
            }, 
            
            {
                text: 'Staff',
                flex: 1,
                sortable: true,
                dataIndex: 'staff'
            },
            {
                text: 'Measure',
                flex: 1,
                sortable: true,
                dataIndex: 'measurenr'
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
                renderer: function (val, metadata, record) {
                if (record.data.depth === 1 && record.data.ambiguous === true) {
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
   
   changeElementDialog: function(object, cell, row){ 
    object.selectionModel.select(cell);
    var win = new pmdCE.view.main.EditDialog();
    win.show();
}

    
});

