Ext.define('pmdCE.view.main.CEToolbar', {
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

    homeButton = this.createCEBox('box', {tag: 'img', src:'../../../resources/images/Freischuetz_Logo_mini.png'}, homeOnItemToggle, true);
    sourceButton = this.createCEButton('splitbutton', 'Source', 'add16', [{text: 'Item Source', handler: sourceOnItemClick}]);
    movementButton = this.createCEButton('splitbutton', 'Movement', 'add16', [{text: 'Item Movement', handler: moveOnItemClick}]);
    movementButton.setDisabled(true);
    pagesButton = this.createCEButton('splitbutton', 'Pages', 'add16', [{text: 'Item Pages', handler: pagesOnItemClick}]);
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
    
    var test = Ext.create('Ext.toolbar.Toolbar', {
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
    });
  // this.callParent();
  
  function sourceOnItemClick(item){
        sourceButton.setText(item.text);
        movementButton.setDisabled(false);
    }
    
    function moveOnItemClick(item){
        movementButton.setText(item.text);
        pagesButton.setDisabled(false);
    }
    
    function pagesOnItemClick(item){
        pagesButton.setText(item.text);
        // TODO: load facsimile and table, reload xml editor and editor
        // TODO: current number page validation
        //console.log(cePanelTable.getFacsimilieView());
        //cePanelTable.getXMLView();
       // cePanelTable.getEditorView();
       // cePanelTable.getCETabView();
        arrowLeft.setDisabled(false);
        arrowR.setDisabled(false);
    }
    
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
    }
 
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

});


