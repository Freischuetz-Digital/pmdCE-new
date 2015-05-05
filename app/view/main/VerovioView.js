Ext.define('pmdCE.view.main.VerovioView', {
    extend: 'Ext.panel.Panel',
     requires: [
        'Ext.layout.container.VBox'
    ],
   // xtype: 'layout-vertical-box',
    width: 150,
    region: 'center',
  
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },
      
    bodyPadding: 10,
    id: "verovioview",
     
    createNewElButton: null,
    addElementButton: null,
    changeToButton: null,
  
     layout: {
        type: 'vbox',
        align: 'stretch'
    },
    
    me: null,
    
       
    initComponent: function() {
    
    me = this;
  
   addElementButton = this.createCEButton();
   addElementButton.setDisabled(true);
   
   createHairpinButton = this.createHairpinButton();
   
  deleteElementButton = this.deleteElementButton();
   deleteElementButton.setDisabled(true);
   
   changeToButton = this.createChangeToButton();
   changeToButton.setDisabled(true);
  
this.items = [
createHairpinButton,
changeToButton,
addElementButton,
deleteElementButton
        ],
        this.callParent()

},


createCEButton: function(){
    var ceButton = Ext.create('Ext.button.Button', {  
                    xtype: 'button',
                   // icon: "resources/images/drop-add.gif",
                   // glyph: null,
                   id: 'addelementbutton',
                    text: 'Add',
                   // scale: 'medium',
                   // width: 120,
                    margin: '0 0 10 0', 
                  //  flex: 1,         
                  //  handler: ceHandler,
                     menu: [Ext.create('Ext.menu.Item', {
                        text: "Orig",
                        icon: 'resources/images/mix_volume.png',
                        handler: function() {
                           var win = new pmdCE.view.main.AddOrigDialog();
                         
                            win.show();
                        }
                     }),
                     
                     Ext.create('Ext.menu.Item', {
                text: "Reg",
                icon: 'resources/images/mix_volume.png',
                handler: function() {
                   var win = new pmdCE.view.main.AddRegDialog();
          
                    win.show();
                }
             })
                    ]
          });

return ceButton;
},


createChangeToButton: function(){
    var ceButton = Ext.create('Ext.button.Button', {  
                    xtype: 'button',
                   // icon: "resources/images/drop-add.gif",
                   // glyph: null,
                   id: 'changetobutton',
                    text: 'Change to ...',
                   // scale: 'medium',
                   // width: 120,
                    margin: '0 0 10 0',
                    
                  //  flex: 1,         
                  //  handler: ceHandler,
                     menu: [Ext.create('Ext.menu.Item', {
                        text: "Choice",
                        icon: 'resources/images/details-xml.png',
                       // icon: 'resources/images/details-xml.png'
                        handler: function() {
                            var win = new pmdCE.view.main.ChangeToAmDialog();
                            win.show();
                        }
                     }),
                     
                     Ext.create('Ext.menu.Item', {
                text: "Hairpin",
                icon: 'resources/images/mix_volume.png',
               // icon: 'resources/images/details-xml.png'
                handler: function() {
                    var win = new pmdCE.view.main.ChangeToObDialog();
                            win.show();
                }
             })
                    ]
          });

return ceButton;
},

createHairpinButton: function(){
    var ceButton = Ext.create('Ext.button.Button', {  
                    xtype: 'button',
                    id: "createhairpinbutton",
                   // icon: "resources/images/drop-add.gif",
                   // glyph: null,
                    text: 'Create element',
                     margin: '0 0 10 0', 
                   // scale: 'medium',
                   //   width: 120, 
                  // bodyPadding: 10,
                  //  handler: ceHandler,
                     menu: [Ext.create('Ext.menu.Item', {
                        text: "Choice",
                        icon: 'resources/images/details-xml.png',
                        handler: function() {
                           var win = new pmdCE.view.main.AddAmbiguousElDialog();
                            win.show();
                        }
                     }),
                     
                     Ext.create('Ext.menu.Item', {
                text: "Hairpin",
                icon: 'resources/images/mix_volume.png',
                handler: function() {
                    var win = new pmdCE.view.main.AddObviousElDialog();
                            win.show();
                }
             })
                    ]
          });

return ceButton;
},

deleteElementButton: function(){
    var ceButton = Ext.create('Ext.button.Button', {  
                    xtype: 'button',
                    id: "deleteButton",
                   // icon: "resources/images/drop-add.gif",
                    margin: '0 0 10 0', 
                   // glyph: null,
                    text: 'Delete',
                    //scale: 'medium'
                   // width: 120
                   listeners: {
                   
                   click: function() {
                   
                   var win = new pmdCE.view.main.DeleteDialog();
                            win.show();
                   }
                   }
                  
          });

return ceButton;
},


   setRadioGroup: function(radioGroup){
        this.radioGroup = radioGroup;       
    },
    
    getRadioGroup: function(){
        return this.radioGroup;
    },
    
    setNew: function(){
        this.isElemenGroupNew = true;
    },
    
    deleteElement: function(){    
     

Ext.Msg.confirm("Deletion", "The element will be deleted", function(btnText){
            if(btnText === "yes"){
            
            rootNode = pmdCE.getApplication().getHairpinDataStore().getRootNode();
            console.log(rootNode);
            selection = Ext.getCmp('cegridpanel').getSelectionModel().getSelection()[0];
              for(var i = 0; i < rootNode.childNodes.length ; i++){
	       if(rootNode.childNodes[i].data.id === selection.data.id){
	               selectedNode = rootNode.childNodes[i];	
	      
	      break;
	  }	      
	  }    
            
            
            rootNode.remove(selection);
            }
        }, this);
}


});