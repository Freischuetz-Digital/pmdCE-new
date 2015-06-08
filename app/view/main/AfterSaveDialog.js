Ext.define('pmdCE.view.main.AfterSaveDialog', {
   extend: 'Ext.window.Window',
   title: 'Saved Element(s)',
   flex: 1,
   modal: true,
   
   border:false,
  
   autoScroll: true,
   
    defaults: {
        bodyPadding: 10
    },
  
    text: null,
    
    initComponent: function() {
    
	 text = Ext.getCmp('cemain').getAfterSaveText();
 
     this.items =  [
     {
         html: 'save success: ' + text
     }
             
     ] , 
   
    this.buttons = [{
        text:'Ok',
        handler: function(){
        var store = pmdCE.getApplication().getHairpinDataStore();
           
            store.reload();
            
          var dynamsStore = pmdCE.getApplication().getDynamDataStore();
           
            dynamsStore.reload();  
            
            var dirsStore = pmdCE.getApplication().getDirDataStore();
           
            dirsStore.reload();  
           
            Ext.getCmp('saveButton').setDisabled(true);
             this.up('window').close();
        }
    }],
   

this.callParent()
    }
    
});

