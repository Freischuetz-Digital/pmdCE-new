Ext.define('pmdCE.view.main.dynams.DynamsGridPanel', {
    extend: 'pmdCE.view.main.CEGridPanel',
    
    requires: [
        'pmdCE.model.Dynam'
    ],
   
    id: 'dynamsgridpanel',
   
    initComponent: function() {
   
    this.editColumn = this.createEditColumn();
    
    this.listeners = {
  
        selectionchange: function(selected, eOpts){
        
        var selectedObject;
       
        if(typeof eOpts[0] !== 'undefined' && eOpts[0].data.depth === 1){
            Ext.getCmp('deleteButton_1').setDisabled(false);           
            Ext.getCmp('changetobutton_1').setDisabled(false);
            
            if(selected.selected.items[0].data.obvious){
                Ext.getCmp('changetobuttonchoice_1').setDisabled(false);
                Ext.getCmp('changetobuttonchoice_1').menu.setDisabled(false);
                Ext.getCmp('changetobuttonhairpin_1').setDisabled(true);
            }
            else{
                Ext.getCmp('changetobuttonchoice_1').setDisabled(true);
                 Ext.getCmp('changetobuttonchoice_1').menu.setDisabled(true);
                 Ext.getCmp('changetobuttonhairpin_1').setDisabled(false);
            }
           
            if(selected.selected.items[0].data.obvious){
                Ext.getCmp('addelementbutton_1').setDisabled(true);
            }
            else{
                Ext.getCmp('addelementbutton_1').setDisabled(false);
            }
                   
           selectedObject = selected.selected.items[0];
        }
        else if(typeof eOpts[0] !== 'undefined'&& eOpts[0].data.depth === 2){
            Ext.getCmp('deleteButton_1').setDisabled(false);
        Ext.getCmp('addelementbutton_1').setDisabled(true);
        Ext.getCmp('changetobutton_1').setDisabled(true);
       
        selectedObject = selected.selected.items[0].parentNode;
        
        }
       
        if(typeof selectedObject !== 'undefined'){
            this.showXMLforSelectedElement(selectedObject);
        }
      
        }
        };
        
        
            this.columns = [{
                xtype: 'treecolumn', 
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
                text: '2. Staff',
                flex: 1,
                sortable: true,
                dataIndex: 'staff2'
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
          
             this.editColumn
           
            ]
        this.callParent()
    }
  
});

