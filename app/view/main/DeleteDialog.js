Ext.define('pmdCE.view.main.DeleteDialog', {
   extend: 'Ext.window.Window',
   title: 'Delete Element',
   flex: 1,
  
   defaults: {
        width: 250,
        height: 100,
        bodyPadding: 10
    },
    
    selection: null,
    selectedId: null,
    root: null,
    
   // layout: 'hbox',
 
    initComponent: function() {
    
    if(Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1){
        selection = Ext.getCmp('cegridpanel').getSelectionModel().getSelection()[0];
	   root = pmdCE.getApplication().getHairpinDataStore().getRootNode();
    }
    else{
         selection = Ext.getCmp('dynamsgridpanel').getSelectionModel().getSelection()[0];
	   root = pmdCE.getApplication().getDynamDataStore().getRootNode();
    }
    
              for(var i = 0; i < root.childNodes.length ; i++){
	       if(root.childNodes[i].data.id === selection.data.id){
	               selectedId = i;
	               selectedNode = root.childNodes[i];	
	      
	      break;
	  }	      
	  }    
 
     this.items =  [
     {
         html: "Element \n"+selectedNode.data.name +"\n will be removed."
     }
             
     ] , 
   
    this.buttons = [{
        text:'Delete',
        handler: function(){
        
            selectedNode.data.operation =  'remove';
            selectedNode.remove();
            
            if(selectedId === root.childNodes.length){
                selectedId --;
            }
            
            if(selectedId === -1){
                if(Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1){
                    $('#xmleditorview-body').html('');
                }
                else{
                    $('#dynamsxmlview-body').html('');
                }                
            }
            else{
                var newSelection = root.childNodes[selectedId];
                if(Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1){
                    Ext.getCmp('cegridpanel').setSelection(hairpin);
                }
                else{
                    Ext.getCmp('dynamsgridpanel').setSelection(hairpin);
            
                }
            }
            
           
    Ext.getCmp('saveButton').setDisabled(false);
             this.up('window').close();
        }
    },{
        text: 'Cancel',
        handler: function(){
             this.up('window').close();
        }
    }],
   

this.callParent()
    }
    
    
});

