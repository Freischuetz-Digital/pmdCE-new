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
        
        var selectedObject;
       
        if(typeof eOpts[0] !== 'undefined' && eOpts[0].data.depth === 1){
        // TODO: handle menus
            Ext.getCmp('deleteButton').setDisabled(false);           
            Ext.getCmp('changetobutton').setDisabled(false);
           
            if(selected.selected.items[0].data.obvious){
                Ext.getCmp('addelementbutton').setDisabled(true);
            }
            else{
                Ext.getCmp('addelementbutton').setDisabled(false);
            }
                   
           selectedObject = selected.selected.items[0];
        }
        else if(typeof eOpts[0] !== 'undefined'&& eOpts[0].data.depth === 2){
        // TODO: handle menus
            Ext.getCmp('deleteButton').setDisabled(false);
        Ext.getCmp('addelementbutton').setDisabled(true);
        Ext.getCmp('changetobutton').setDisabled(true);
       
        selectedObject = selected.selected.items[0].parentNode;
        
        }
       
        if(typeof selectedObject !== 'undefined'){
            this.showXMLforSelectedElement(selectedObject);
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
           //  ambiguousColumn,
          //   obviousColumn,
             editColumn
           
            ]
        this.callParent()
    },
    
    showDialog: function(){ 
    
    var win = new pmdCE.view.main.AddDialog();
    win.show();
},

showXMLforSelectedElement: function(selectedObject){
       var objects = $('<div></div>');
        if(selectedObject.data.obvious){
             
            var object = $('<hairpin></hairpin>', {
               staff : selectedObject.data.staff,
                place: selectedObject.data.place,
                form: selectedObject.data.form,
                tstamp: selectedObject.data.tstamp,
                tstamp2: selectedObject.data.tstamp2,
                'xml:id': selectedObject.data.id,
                xmlns: "http://www.music-encoding.org/ns/mei",
                sameas: ""
         });
        
         $(objects).append($(object));        
         }
         else{
            
          var choice = $('<choice></choice>', {
              'xml:id': selectedObject.data.id,
                xmlns: "http://www.music-encoding.org/ns/mei"
             
            });  
         
            for(var j = 0; j < selectedObject.childNodes.length ; j++){
                if(selectedObject.childNodes[j].data.tag === 'orig'){
                    var orig = $('<orig></orig>');
                    var hair =  $('<hairpin></hairpin>', {
                        staff : selectedObject.childNodes[j].data.staff+' '+selectedObject.childNodes[j].data.staff2,
                        place: selectedObject.childNodes[j].data.place,
                        form: selectedObject.childNodes[j].data.form,
                        tstamp: selectedObject.childNodes[j].data.tstamp,
                        tstamp2: selectedObject.childNodes[j].data.tstamp2,              
                        sameas: ""
                    });
                    
                    $(orig).append($(hair)); 
                    $(choice).append($(orig)); 
                }
                if(selectedObject.childNodes[j].data.tag === 'reg'){
                        var reg = $('<reg></reg>');
                        var hair =  $('<hairpin></hairpin>', {
                        staff : selectedObject.childNodes[j].data.staff+' '+selectedObject.childNodes[j].data.staff2,
                        place: selectedObject.childNodes[j].data.place,
                        form: selectedObject.childNodes[j].data.form,
                        tstamp: selectedObject.childNodes[j].data.tstamp,
                        tstamp2: selectedObject.childNodes[j].data.tstamp2,              
                        sameas: ""
                    }); 
                    $(reg).append($(hair)); 
                    $(choice).append($(reg)); 
                }              
            } 
          
             $(objects).append($(choice));              
         }   
       
         var tmp = hljs.highlightAuto($(objects).html()).value;
        $('#xmleditorview-body').html(tmp);
    
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

