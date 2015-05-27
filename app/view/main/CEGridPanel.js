Ext.define('pmdCE.view.main.CEGridPanel', {
    extend: 'Ext.tree.Panel',
    
    requires: [
        'Ext.data.*',
        'Ext.grid.*',
        'Ext.tree.*',
        'Ext.ux.CheckColumn'
    ],
   
    flex: 4,
    region: 'west',  
   
    reserveScrollbar: true,
   
    useArrows: true,
    rootVisible: false,
   
    editColumn: null,
    
    showDialog: function(){ 
    
    var win = new pmdCE.view.main.AddDialog();
    win.show();
},

showXMLforSelectedElement: function(selectedObject){
       var objects = $('<div></div>');
        if(selectedObject.data.obvious){
             
            var object = $('<hairpin></hairpin>', {
               staff : (selectedObject.data.staff2 !== "" ? (selectedObject.data.staff + ' '+selectedObject.data.staff2)  : selectedObject.data.staff),
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
            console.log('***************');
         console.log(selectedObject);
            for(var j = 0; j < selectedObject.childNodes.length ; j++){
                if(selectedObject.childNodes[j].data.tag === 'orig'){
                    var orig = $('<orig></orig>');
                    var hair =  $('<hairpin></hairpin>', {
                        staff : (selectedObject.childNodes[j].data.staff2 !== "" ? (selectedObject.childNodes[j].data.staff + ' '+selectedObject.childNodes[j].data.staff2)  : selectedObject.childNodes[j].data.staff),
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
                        staff : (selectedObject.childNodes[j].data.staff2 !== "" ? (selectedObject.childNodes[j].data.staff + ' '+selectedObject.childNodes[j].data.staff2)  : selectedObject.childNodes[j].data.staff),
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
 
   changeElementDialog: function(object, cell, row){
   object.selectionModel.select(cell);  
   selection = Ext.getCmp('cegridpanel').getSelectionModel().getSelection()[0];
   if(selection.data.obvious || selection.data.depth === 2){     
    var win = new pmdCE.view.main.EditDialog();
    win.show();
       
   }
   
}

    
});

