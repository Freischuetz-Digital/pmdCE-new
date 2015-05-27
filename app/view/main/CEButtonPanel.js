Ext.define('pmdCE.view.main.CEButtonPanel', {
    extend: 'Ext.panel.Panel',
     requires: [
        'Ext.layout.container.VBox'
    ],
   
    width: 150,
    region: 'center',
  
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },
      
    bodyPadding: 10,
   
    createNewElButton: null,
    addElementButton: null,
    changeToButton: null,
    
    card: 0,
  
     layout: {
        type: 'vbox',
        align: 'stretch'
    },

createCEButton: function(buttonId){
    var ceButton = Ext.create('Ext.button.Button', {  
                    xtype: 'button',
                   id: buttonId,
                    text: 'Add',
                    margin: '0 0 10 0', 
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


createChangeToButton: function(buttonId, menuChoiceId, menuHairpinId){
var me = this;
    
    var menuTstamp2Reg = this.createMenuItem("for Tstamp (1-2 regs)", 8, me);
    
    var menuTStamp22Reg  = this.createMenuItem("for Tstamp2 (1-2 regs)", 9, me);
    
    var menuStaff2Reg  = this.createMenuItem("for Staff (1-2 regs)", 10, me);
    
     var menuTime4Reg  = this.createMenuItem("for Time (2-4 regs)", 11, me);
     
     var menuTStampAndStaff4Reg  = this.createMenuItem("for Tstamp and Staff (3-4 regs)", 12, me);
     
     var menuTStamp2AndStaff4Reg  = this.createMenuItem("for Tstamp2 and Staff (3-4 regs)", 13, me);
     
      var menuTimeAndStaff4Reg  = this.createMenuItem("for Time and Staff (4-6 regs)", 14, me);
      
    var ceButton = Ext.create('Ext.button.Button', {  
                    xtype: 'button',
                   id: buttonId,
                    text: 'Change to ...',
                    margin: '0 0 10 0',
                  
                     menu: [Ext.create('Ext.menu.Item', {
                        text: "Choice",
                        id: menuChoiceId,
                        icon: 'resources/images/details-xml.png',
                         menu:[
                        menuTstamp2Reg,
                        menuTStamp22Reg,
                        menuStaff2Reg,
                        menuTime4Reg,
                        menuTStampAndStaff4Reg,
                        menuTStamp2AndStaff4Reg,
                        menuTimeAndStaff4Reg
                        ]
                       
                     }),
                     
                     Ext.create('Ext.menu.Item', {
                text: "Hairpin",
                id: menuHairpinId,
                icon: 'resources/images/mix_volume.png',
                handler: function() {
                    var win = new pmdCE.view.main.ChangeObviousElDialog();
                            win.show();
                }
             })
                    ]
          });

return ceButton;
},

createHairpinButton: function(buttonId){
    var me = this;
    
    var menuTstamp2Reg = this.createMenuItem("for Tstamp (1-2 regs)", 1, me);
    
    var menuTStamp22Reg  = this.createMenuItem("for Tstamp2 (1-2 regs)", 2, me);
    
    var menuStaff2Reg  = this.createMenuItem("for Staff (1-2 regs)", 3, me);
    
     var menuTime4Reg  = this.createMenuItem("for Time (2-4 regs)", 4, me);
     
     var menuTStampAndStaff4Reg  = this.createMenuItem("for Tstamp and Staff (3-4 regs)", 5, me);
     
     var menuTStamp2AndStaff4Reg  = this.createMenuItem("for Tstamp2 and Staff (3-4 regs)", 6, me);
     
      var menuTimeAndStaff4Reg  = this.createMenuItem("for Time and Staff (4-6 regs)", 7, me);
    
    var ceButton = Ext.create('Ext.button.Button', {  
                    xtype: 'button',
                    id: buttonId,
                    text: 'Create element',
                     margin: '0 0 10 0', 
                     menu: [Ext.create('Ext.menu.Item', {
                        text: "Choice ...",
                        icon: 'resources/images/details-xml.png',
                        
                        menu:[
                        menuTstamp2Reg,
                        menuTStamp22Reg,
                        menuStaff2Reg,
                        menuTime4Reg,
                        menuTStampAndStaff4Reg,
                        menuTStamp2AndStaff4Reg,
                        menuTimeAndStaff4Reg
                        ]
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


createMenuItem: function(itemText, type, me){
     var item = Ext.create('Ext.menu.Item', {
                                text: itemText,
                                icon: 'resources/images/mix_volume.png',
                                handler: function() {
                                me.setCard(type);
                                var win = new pmdCE.view.main.AddAmbiguousElDialog();          
                                    win.show();
                                }                       
                         });
                         
    return item;                     
    
},

    setCard:function(card){        
        this.card = card;
    },
    
     getCard:function(){        
        return this.card;
    },

deleteElementButton: function(buttonId){
    var ceButton = Ext.create('Ext.button.Button', {  
                    xtype: 'button',
                    id: buttonId,
                    margin: '0 0 10 0', 
                    text: 'Delete',
                   listeners: {
                   
                   click: function() {
                   
                   var win = new pmdCE.view.main.DeleteDialog();
                            win.show();
                   }
                   }
                  
          });

return ceButton;
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