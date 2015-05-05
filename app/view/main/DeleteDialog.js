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
    
     var store = pmdCE.getApplication().getHairpinDataStore();
	  root = store.getRootNode();
        
    
     selection = Ext.getCmp('cegridpanel').getSelectionModel().getSelection()[0];
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
        text:'Remove',
        handler: function(){
        
            selectedNode.data.operation =  'remove';
            selectedNode.remove();
            
            if(selectedId === root.childNodes.length){
                selectedId --;
            }
            
             console.log("New selection");
             console.log(selectedId);
             console.log(root.childNodes.length);
            console.log(newSelection);
            
            if(selectedId === -1){
                 $('#xmleditorview-body').html('');
            }
            else{
                var newSelection = root.childNodes[selectedId];
      
                Ext.getCmp('cegridpanel').setSelection(newSelection);
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

