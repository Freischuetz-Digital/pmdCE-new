Ext.define('pmdCE.view.main.DeleteDialog', {
   extend: 'Ext.window.Window',
   title: 'Delete Element',
   flex: 1,
   //height: 200,
   //width: 500, 
   modal: true,
   bodyPadding: 10,
 
    initComponent: function() {
 
     this.items =  [
             
            ] , 
   
    this.buttons = [{
        text:'Delete',
        handler: function(){
        
         var store = pmdCE.getApplication().getHairpinDataStore();
	    var root = store.getRootNode();
        
          
            console.log(root);
            selection = Ext.getCmp('cegridpanel').getSelectionModel().getSelection()[0];
              for(var i = 0; i < root.childNodes.length ; i++){
	       if(root.childNodes[i].data.id === selection.data.id){
	               selectedNode = root.childNodes[i];	
	      
	      break;
	  }	      
	  }    
	  // TODO: set Measure ID?
            selectedNode.data.operation =  'delete';
           
            
            selectedNode.remove();
           
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

