Ext.define('pmdCE.view.main.CEToolbar', {
    extend: 'Ext.panel.Panel',
    xtype: 'basic-toolbar',
    
    id: 'cetoolbar',
   
    defaults: {
       // collapsible: true,
       // border: true
    },
   
 homeButton: null,
 sourceButton: null,
 movementButton: null,
 pagesButton: null,
 arrowLeft: null,
 arrowR: null,
 
 //createButton: null,
 saveButton: null,
 //deleteButton: null,
 selectToolButton: null,
 loginButton: null,
 
 me: null,
 cePanelTable: null,
 
    initComponent: function() {
    
    me = this;
      
    homeButton = this.createCEBox('box', {tag: 'img', src:'../../../resources/images/freidi_icon_57.png', width : 26,
    height : 26}, this.homeOnItemToggle, true);
    sourceButton = this.createCEButton('splitbutton', 'Source', [{handler: this.sourceOnItemClick}], this.click);
    movementButton = this.createCEButton('splitbutton', 'Movement', [{handler: this.moveOnItemClick}], this.click2);
    movementButton.setDisabled(true);
    arrowLeft = this.createCEIcon('x-btn-text-icon x-ric-generic', '../../../resources/images/page-prev-disabled.gif');
    arrowLeft.setDisabled(true);
    pagesButton = this.createCEButton('splitbutton', 'Pages', [{handler: this.pagesOnItemClick}], this.click3);
    pagesButton.setDisabled(true);    
    arrowR = this.createCEIcon('x-btn-text-icon x-ric-generic', '../../../resources/images/page-next-disabled.gif');
    arrowR.setDisabled(true);
    saveButton = this.createCEIcon('x-btn-text-icon x-ric-generic', '../../../resources/images/Save.png', this.saveComponents);
    saveButton.setDisabled(true);
    //createButton = this.createCEIcon('x-btn-text-icon x-ric-generic', '../../../resources/images/drop-add.gif', this.createComponent);
    //createButton.setDisabled(true);
    //deleteButton = this.createCEIcon('x-btn-text-icon x-ric-generic', '../../../resources/images/icon16_error.png', this.deleteComponent);
    //deleteButton.setDisabled(true);
    selectToolButton = this.createCEButton('splitbutton', 'Control Events', [{text: 'Pitch Tool'}, {text: 'Abbrev Resolver'}]);
    loginButton = this.createLoginButton('splitbutton', 'Login');
       loginButton.setDisabled(true);    
       this.tbar = [
            homeButton,
            '-',
            sourceButton,
                movementButton,
                arrowLeft,
                pagesButton,             
              arrowR,
             '-',
            saveButton, 
               // createButton,
           // deleteButton,
               '->', 
               selectToolButton,
            '-',
              loginButton
              ],
              
            
        this.callParent()
    },
 
    saveComponents: function(btn){ 
       
    },
    
     createComponent: function(btn){      
     // TODO: create anpassen
        var win = new pmdCE.view.main.AddDialog();
        win.show();
    },
    
     deleteComponent: function(btn){ 
    Ext.Msg.confirm("Deletion", "The element will be deleted", function(btnText){
            if(btnText === "yes"){     
            var target = Ext.getCmp('hairpinsitem').getSelectionModel().getSelection()[0];           
            pmdCE.getApplication().getHairpinsStore().remove(target);
             pmdCE.getApplication().getHairpinsStore().sync();
             // TODO: delete daten from HirpinsDataStore?
            }
        }, this);
    },
   
    click: function() {
       if(sourceButton.getText() === 'Source'){
            sourceButton.getMenu().removeAll();
            var app = pmdCE.getApplication();
            var store = app.getSourcesStore();
            var itemsArray = store.data.items;           
            for(var i = 0; i < itemsArray.length ; i++){ 
             var menuItem = Ext.create('Ext.menu.Item', {
             itemId: itemsArray[i].id, 
             text: itemsArray[i].id,
             handler: this.sourceOnItemClick
             });
             sourceButton.getMenu().add(menuItem);            
          }
        }
    },
  
     click2: function() {
       if(movementButton.getText() === 'Movement'){
            movementButton.getMenu().removeAll();
            var app = pmdCE.getApplication();
            var store = app.getMovementsStore();           
            var itemsArray = store.data.items;           
            for(var i = 0; i < itemsArray.length ; i++){ 
                if(sourceButton.getText() === itemsArray[i].data.source_id){           
                    var menuItem = Ext.create('Ext.menu.Item', {
                    itemId: itemsArray[i].id, 
                    text: itemsArray[i].id,
                    handler: this.moveOnItemClick          
             });
             movementButton.getMenu().add(menuItem);   
              }
          }
        }
    },
        
     click3: function() {
       if(pagesButton.getText() === 'Pages'){
            pagesButton.getMenu().removeAll();
            var app = pmdCE.getApplication();
            var store = app.getPagesStore();
            var itemsArray = store.data.items;  
            for(var i = 0; i < itemsArray.length ; i++){           
            if(movementButton.getText() === itemsArray[i].data.movement_id){                
             var menuItem = Ext.create('Ext.menu.Item', {
             itemId: itemsArray[i].id, 
             text: itemsArray[i].id,
             handler: this.pagesOnItemClick
             });
             pagesButton.getMenu().add(menuItem); 
             }
          }
        }
    },
    
  
    sourceOnItemClick: function(item){
        sourceButton.setText(item.text);
        movementButton.setDisabled(false);
        
        if(movementButton.text !== 'Movement'){
            movementButton.setText('Movement');
            
        }
        if(pagesButton.text !== 'Pages'){
            pagesButton.setText('Pages');
            }
        pagesButton.setDisabled(true);
        arrowLeft.setDisabled(true);
        arrowR.setDisabled(true);
       // createButton.setDisabled(true);
       // deleteButton.setDisabled(true);
        if(!saveButton.isDisabled()){
        // TODO
        alert('save?')
        saveButton.setDisabled(true);
        } 
        
     
    },
    
     moveOnItemClick: function(item){
        movementButton.setText(item.text);
        pagesButton.setDisabled(false);
       // createButton.setDisabled(true);
        //deleteButton.setDisabled(true);
        
         if(!saveButton.isDisabled()){
        // TODO
        alert('save?')
        saveButton.setDisabled(true);
        } 
        
        if(pagesButton.text !== 'Pages'){
            pagesButton.setText('Pages');
            }
    },
    
     pagesOnItemClick:function(item){
        pagesButton.setText(item.text);
        // TODO: load facsimile and table, reload xml editor and editor
        // TODO: current number page validation
        //console.log(cePanelTable.getFacsimileView());
        //cePanelTable.getXMLView();
       // cePanelTable.getEditorView();
       // cePanelTable.getCETabView();
        arrowLeft.setDisabled(false);
        arrowR.setDisabled(false);
       // createButton.setDisabled(false);
       // deleteButton.setDisabled(false);
        // TODO: save for all testen
       /*   if(!saveButton.isDisabled()){
        alert('save?')
        saveButton.setDisabled(true);
        } */
         
         
         var app = pmdCE.getApplication();
         var store = app.getHairpinsStore();
         store.load();
         Ext.getCmp('hairpinsitem').getView().bindStore(store);   
    },
    
    homeOnItemToggle: function(){
        window.location.href = "http://freischuetz-digital.de";
    },


createCEButton: function(ceType, ceSource, ceMenu, ceHandler){
    var ceButton = Ext.create('Ext.button.Button', {   
            xtype: 'button',
            text: ceSource,
           scope   : this,
           // iconCls: ceIcon,
           // scale: 'medium',
            menu: ceMenu,
            scale: 'medium',
            handler: ceHandler
});

return ceButton;
},

createLoginButton: function(ceType, ceSource){
    var ceButton = Ext.create('Ext.button.Button', {   
            xtype: 'button',
            scale: 'medium',
            text: ceSource
});

return ceButton;
},

createCEBox: function(ceType, ceAutoEl, ceOnItemToggle, ceEnableToggle){
    var ceBox = Ext.create('Ext.button.Button', {   
       // xtype: ceType,
        autoEl: ceAutoEl,
        enableToggle: ceEnableToggle,
        toggleHandler: ceOnItemToggle
});
return ceBox;
},


createCEIcon: function(ceCls, ceIcon, ceHandler){
    var ceIcon = Ext.create('Ext.button.Button', {   
      //  cls: ceCls,
        icon: ceIcon,
        scale: 'medium',
        handler: ceHandler
});
return ceIcon;
}


});

