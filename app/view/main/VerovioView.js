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
     
    createNewElButton: null,
    addElementButton: null,
    changeToButton: null,
  
     layout: {
        type: 'vbox',
        align: 'stretch'
    },
    
       
    initComponent: function() {
  
    verovioView = this;
    Ext.getCmp('cemain').setVerovioView(verovioView);
   
   addElementButton = this.createCEButton();
   addElementButton.setDisabled(true);
   
   createHairpinButton = this.createHairpinButton();
   
  deleteElementButton = this.deleteElementButton();
   deleteElementButton.setDisabled(true);
   
   changeToButton = this.createChangeToButton();
   changeToButton.setDisabled(true);
  
this.items = [
createHairpinButton,
addElementButton,
changeToButton,
deleteElementButton
        ],
        this.callParent()

},

   setVerStartView: function(verovioImageStart){
        this.verovioImageStart = verovioImageStart;       
    },
    
    getVerStartView: function(){
        return this.verovioImageStart;
    },
       
     setVerEndView: function(verovioImageEnd){
        this.verovioImageEnd = verovioImageEnd;       
    },
    
    getVerEndView: function(){
        return this.verovioImageEnd;
    },

createRadioGroup: function(){
    var radios = new Ext.form.RadioGroup({
     xtype: 'radiogroup',
     layout: 'vbox',
          //  cls: 'x-check-group-alt',
            //labelWidth: 100,
          // id: 'placementradiogroup',
          // scale: 'small',
            listeners: {
                change: function (newValue, oldValue, eOpts) {
                   if(verovioView.isElemenGroupNew){
                       verovioView.isElemenGroupNew = false;
                   }
                   else if(!verovioView.isElemenGroupNew && oldValue.Placement === 2){
                        var win = new pmdCE.view.main.ChangeToObDialog();
                       win.show();
                   }
                     else if(!verovioView.isElemenGroupNew && oldValue.Placement === 1){
                        var win = new pmdCE.view.main.ChangeToAmDialog();
                       win.show();
                   }
                
                }
                
            },
           
           
            items: [
            {boxLabel: 'Ambigous', 
           // styles: {width:"100px"},
            name: 'Placement', 
            inputValue: 1, 
            //margin: '0 10 0 10', 
           // scale: 'small', 
            id: "Ambigous", 
            disabled: true
            },
            {boxLabel: 'Obvious', 
            name: 'Placement', 
            inputValue: 2, 
           // margin: '0 10 0 0', 
            //scale: 'small', 
            id: "Obvious", 
            disabled: true
            }              
            ]   
   });
   return radios;    
},

createCEButton: function(){
    var ceButton = Ext.create('Ext.button.Button', {  
                    xtype: 'button',
                   // icon: "resources/images/drop-add.gif",
                   // glyph: null,
                   id: 'addelementbutton',
                    text: 'Add element',
                   // scale: 'medium',
                   // width: 120,
                    margin: '0 0 10 0', 
                  //  flex: 1,         
                  //  handler: ceHandler,
                     menu: [Ext.create('Ext.menu.Item', {
                        text: "Orig",
                        icon: 'resources/images/details-xml.png'
                        /*handler: function() {
                           var win = new pmdCE.view.main.AddObviousElDialog();
                            win.show();
                        }*/
                     }),
                     
                     Ext.create('Ext.menu.Item', {
                text: "Reg",
                icon: 'resources/images/details-xml.png'
               /* handler: function() {
                   var win = new pmdCE.view.main.AddAmbiguousElDialog();
                    win.show();
                }*/
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
                        text: "Ambiguous",
                       // icon: 'resources/images/details-xml.png'
                        handler: function() {
                            var win = new pmdCE.view.main.ChangeToAmDialog();
                            win.show();
                        }
                     }),
                     
                     Ext.create('Ext.menu.Item', {
                text: "Obvious",
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
                    text: 'Create hairpin',
                     margin: '0 0 10 0', 
                   // scale: 'medium',
                   //   width: 120, 
                  // bodyPadding: 10,
                  //  handler: ceHandler,
                     menu: [Ext.create('Ext.menu.Item', {
                        text: "Ambiguous",
                        icon: 'resources/images/mix_volume.png',
                        handler: function() {
                           var win = new pmdCE.view.main.AddAmbiguousElDialog();
                            win.show();
                        }
                     }),
                     
                     Ext.create('Ext.menu.Item', {
                text: "Obvious",
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
                    text: 'Delete'
                    //scale: 'medium'
                   // width: 120   
                  //  handler: ceHandler,
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
    }


});