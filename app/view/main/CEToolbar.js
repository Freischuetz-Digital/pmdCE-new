Ext.define('pmdCE.view.main.CEToolbar', {
    extend: 'Ext.panel.Panel',
   
    requires: [
        'pmdCE.view.main.CEPanelTable'
    ],
    
    
    xtype: 'basic-toolbar',
    id: 'basic-toolbar',

    //height: 400,

    //html: KitchenSink.DummyText.longText,
   // bodyPadding: 20,
   
 homeButton: null,
 sourceButton: null,
 movementButton: null,
 pagesButton: null,
 arrowLeft: null,
 arrowR: null,
 
 createButton: null,
 saveButton: null,
 deleteButton: null,
 selectToolButton: null,
 loginButton: null,
 
 cePanelTable: null,
   

    initComponent: function() {
       // this.width = 500;
       
      // var me = this;

    homeButton = this.createCEBox('box', {tag: 'img', src:'../../../resources/images/Freischuetz_Logo_mini.png'}, this.homeOnItemToggle, true);
    sourceButton = this.createCEButton('splitbutton', 'Source', 'add16', [{handler: this.sourceOnItemClick}], this.click);
    movementButton = this.createCEButton('splitbutton', 'Movement', 'add16', [{handler: this.moveOnItemClick}], this.click2);
    movementButton.setDisabled(true);
    pagesButton = this.createCEButton('splitbutton', 'Pages', 'add16', [{handler: this.pagesOnItemClick}], this.click3);
    pagesButton.setDisabled(true);
    arrowLeft = this.createCEIcon('x-btn-text-icon x-ric-generic', '../../../resources/images/arrowLeft.png');
    arrowLeft.setDisabled(true);
    arrowR = this.createCEIcon('x-btn-text-icon x-ric-generic', '../../../resources/images/arrowR.png');
    arrowR.setDisabled(true);
    saveButton = this.createCEIcon('x-btn-text-icon x-ric-generic', '../../../resources/images/Save.png');
    saveButton.setDisabled(true);
    createButton = this.createCEIcon('x-btn-text-icon x-ric-generic', '../../../resources/images/add.png', [{text: 'slur'}, {text: 'hairpins'}, {text: 'dynams'}, {text: 'dir'}]);
    createButton.setDisabled(true);
    deleteButton = this.createCEIcon('x-btn-text-icon x-ric-generic', '../../../resources/images/Delete.png');
    deleteButton.setDisabled(true);
    selectToolButton = this.createCEButton('splitbutton', 'Control Events', 'add16', [{text: 'Pitch Tool'}, {text: 'Abbrev Resolver'}]);
    selectToolButton.setDisabled(true);
    loginButton = this.createCEButton('splitbutton', 'Login', 'add16');
       
       
       this.tbar = [
            homeButton,
            sourceButton,
                movementButton,
                pagesButton,
                '-', 
              arrowLeft,
              arrowR,                 
                '-', 
              saveButton,  
                createButton,
            deleteButton,  
               '->', 
              selectToolButton,
              '-', 
              loginButton];

        this.callParent()
    },
    
    onButtonClick: function(btn){        
        alert('Button Click','You clicked the "{0}" button.', btn.displayText || btn.text);
    },
    
    
   
    click: function(btn) {
       // console.log('I was clicked!');
       // console.log(btn.getMenu().items);
       // TODO: Validation: for onla one source...
       // refresh movements after new selection
       if(btn.getMenu().items.length === 1){
            btn.getMenu().removeAll();
            var app = pmdCE.getApplication();
            var store = app.getSourcesStore();
            var itemsArray = store.data.items;           
            for(var i = 0; i < itemsArray.length ; i++){ 
             var menuItem = Ext.create('Ext.menu.Item', {
             itemId: itemsArray[i].id, 
             text: itemsArray[i].id,
             handler: this.sourceOnItemClick
             });
             btn.getMenu().add(menuItem);            
          }
        }
    },
     
     click2: function(btn) {
        console.log('I was clicked! 2');
        console.log(btn.getMenu().items);
       // TODO: Validation: for onla one source...
       // refresh pages after new selection
       if(btn.getMenu().items.length === 1){
            btn.getMenu().removeAll();
            var app = pmdCE.getApplication();
            var store = app.getMovementsStore();
            var itemsArray = store.data.items;           
            for(var i = 0; i < itemsArray.length ; i++){ 
             var menuItem = Ext.create('Ext.menu.Item', {
             itemId: itemsArray[i].id, 
             text: itemsArray[i].id,
             handler: this.moveOnItemClick
             });
             btn.getMenu().add(menuItem);            
          }
        }
    },
     
     
     click3: function(btn) {
        console.log('I was clicked! 3');
        console.log(btn.getMenu().items);
       // TODO: Validation: for onla one source...
       if(btn.getMenu().items.length === 1){
            btn.getMenu().removeAll();
            var app = pmdCE.getApplication();
            var store = app.getPagesStore();
            var itemsArray = store.data.items;           
            for(var i = 0; i < itemsArray.length ; i++){ 
             var menuItem = Ext.create('Ext.menu.Item', {
             itemId: itemsArray[i].id, 
             text: itemsArray[i].id,
             handler: this.pagesOnItemClick
             });
             btn.getMenu().add(menuItem);            
          }
        }
    },
     
    sourceOnItemClick: function(item){
        sourceButton.setText(item.text);
        movementButton.setDisabled(false);
    },
    
     moveOnItemClick: function(item){
        movementButton.setText(item.text);
        pagesButton.setDisabled(false);
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
    },
    
  /*  function homeOnItemToggle(){
        window.location.href = "http://freischuetz-digital.de";
    }
    
  
  function onButtonClick(btn){        
        alert('Button Click','You clicked the "{0}" button.', btn.displayText || btn.text);
    }
 
    function onItemClick(item){
        alert('Menu Click', 'You clicked the "{0}" menu item.', item.text);
    }

    function onItemCheck(item, checked){
        alert('Item Check', 'You {1} the "{0}" menu item.', item.text, checked ? 'checked' : 'unchecked');
    }

    function onItemToggle(item, pressed){
        alert('Button Toggled', 'Button "{0}" was toggled to {1}.', item.text, pressed);
    },*/


createCEButton: function(ceType, ceSource, ceIcon, ceMenu, ceHandler){
    var ceButton = Ext.create('Ext.button.Button', {   
            xtype: ceType,
            text: ceSource,
            scope   : this,
            iconCls: ceIcon,
           // scale: 'medium',
            menu: ceMenu,
            handler: ceHandler
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


createCEIcon: function(ceCls, ceIcon, ceMenu){
    var ceIcon = Ext.create('Ext.button.Button', {   
      //  cls: ceCls,
        icon: ceIcon,
        menu: ceMenu
});
return ceIcon;
},


setPanel: function(cePanel){
cePanelTable = cePanel;
}

});




/*Ext.define('pmdCE.view.main.CEToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    
     requires: [
        'pmdCE.view.main.CEPanelTable'
    ],
  
 homeButton: null,
 sourceButton: null,
 movementButton: null,
 pagesButton: null,
 arrowLeft: null,
 arrowR: null,
 
 createButton: null,
 saveButton: null,
 deleteButton: null,
 selectToolButton: null,
 loginButton: null,
 
 cePanelTable: null,

initComponent: function () {

    var me = this;




    homeButton = me.createCEBox('box', {tag: 'img', src:'../../../resources/images/Freischuetz_Logo_mini.png'}, me.homeOnItemToggle, true);
    sourceButton = me.createCEButton('splitbutton', 'Source', 'add16', [{text: 'Item Source', handler: me.sourceOnItemClick}]);
    movementButton = me.createCEButton('splitbutton', 'Movement', 'add16', [{text: 'Item Movement', handler: me.moveOnItemClick}]);
    movementButton.setDisabled(true);
    pagesButton = me.createCEButton('splitbutton', 'Pages', 'add16', [{text: 'Item Pages', handler: me.pagesOnItemClick}]);
    pagesButton.setDisabled(true);
    arrowLeft = me.createCEIcon('x-btn-text-icon x-ric-generic', '../../../resources/images/arrowLeft.png');
    arrowLeft.setDisabled(true);
    arrowR = me.createCEIcon('x-btn-text-icon x-ric-generic', '../../../resources/images/arrowR.png');
    arrowR.setDisabled(true);
    saveButton = me.createCEIcon('x-btn-text-icon x-ric-generic', '../../../resources/images/Save.png');
    saveButton.setDisabled(true);
    createButton = me.createCEIcon('x-btn-text-icon x-ric-generic', '../../../resources/images/add.png', [{text: 'slur'}, {text: 'hairpins'}, {text: 'dynams'}, {text: 'dir'}]);
    createButton.setDisabled(true);
    deleteButton = me.createCEIcon('x-btn-text-icon x-ric-generic', '../../../resources/images/Delete.png');
    deleteButton.setDisabled(true);
    selectToolButton = me.createCEButton('splitbutton', 'Control Events', 'add16', [{text: 'Pitch Tool'}, {text: 'Abbrev Resolver'}]);
    selectToolButton.setDisabled(true);
    loginButton = me.createCEButton('splitbutton', 'Login', 'add16');
    
    Ext.create('Ext.toolbar.Toolbar', {
       renderTo: document.body,
   
        items: [
            homeButton,
            sourceButton,
                movementButton,
                pagesButton,
                '-', 
              arrowLeft,
              arrowR,                 
                '-', 
              saveButton,  
                createButton,
            deleteButton,  
               '->', 
              selectToolButton,
              '-', 
              loginButton]
              
              
               
                 
  })
  
 // me.callParent();
 },
  
  sourceOnItemClick: function(item){
       // console.log(load());
        sourceButton.setText(item.text);
        movementButton.setDisabled(false);
    },
    
     moveOnItemClick: function(item){
        movementButton.setText(item.text);
        pagesButton.setDisabled(false);
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
    },
    
    function homeOnItemToggle(){
        window.location.href = "http://freischuetz-digital.de";
    }
    
  
  function onButtonClick(btn){        
        alert('Button Click','You clicked the "{0}" button.', btn.displayText || btn.text);
    }
 
    function onItemClick(item){
        alert('Menu Click', 'You clicked the "{0}" menu item.', item.text);
    }

    function onItemCheck(item, checked){
        alert('Item Check', 'You {1} the "{0}" menu item.', item.text, checked ? 'checked' : 'unchecked');
    }

    function onItemToggle(item, pressed){
        alert('Button Toggled', 'Button "{0}" was toggled to {1}.', item.text, pressed);
    },


createCEButton: function(ceType, ceSource, ceIcon, ceMenu){
    var ceButton = Ext.create('Ext.Button', {   
            xtype: ceType,
            text: ceSource,
            scope   : this,
            iconCls: ceIcon,
           // scale: 'medium',
            menu: ceMenu
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


createCEIcon: function(ceCls, ceIcon, ceMenu){
    var ceIcon = Ext.create('Ext.button.Button', {   
      //  cls: ceCls,
        icon: ceIcon,
        menu: ceMenu
});
return ceIcon;
},


setPanel: function(cePanel){
cePanelTable = cePanel;
}

});*/


