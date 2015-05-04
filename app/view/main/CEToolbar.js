Ext.define('pmdCE.view.main.CEToolbar', {
    extend: 'Ext.panel.Panel',
   // xtype: 'basic-toolbar',
    
    id: 'cetoolbar',
   
   /* defaults: {
       // collapsible: true,
       // border: true
    },*/
   
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
 showXmlButton: null,
 
 staffNr: null,
 pageMeasuresMap: null,
 
 me: null,
 cePanelTable: null,
 
    initComponent: function() {
    
    me = this;
      
    homeButton = this.createCEBox('box', {tag: 'img', src:'resources/images/freidi_icon_57.png', width : 26,
    height : 26}, this.homeOnItemToggle, true);
    sourceButton = this.createCEButton('splitbutton', 'Source', 'source',[{handler: this.sourceOnItemClick}], this.click);
    movementButton = this.createCEButton('splitbutton', 'Movement', 'movement',[{handler: this.moveOnItemClick}], this.click2);
    movementButton.setDisabled(true);
    arrowLeft = this.createCEIcon('arrowL', 'resources/images/page-prev-disabled.gif');
    arrowLeft.setDisabled(true);
    pagesButton = this.createCEButton('splitbutton', 'Pages', 'pages',[{handler: this.pagesOnItemClick}], this.click3);
    pagesButton.setDisabled(true);    
    arrowR = this.createCEIcon('arrowR', 'resources/images/page-next-disabled.gif');
    arrowR.setDisabled(true);
    saveButton = this.createCEIcon('saveButton', 'resources/images/Save.png', this.saveComponents);
    saveButton.setDisabled(true);
    //createButton = this.createCEIcon1();
    //('x-btn-text-icon x-ric-generic', '../../../resources/images/drop-add.gif', this.createComponent);
   // createButton.setDisabled(true);
    //deleteButton = this.createCEIcon('x-btn-text-icon x-ric-generic', 'resources/images/icon16_error.png', this.deleteComponent);
    //deleteButton.setDisabled(true);
    //showXmlButton = this.createCEIcon('x-btn-text-icon x-ric-generic', 'resources/images/xml-32.png', this.saveComponents);
    //showXmlButton.setDisabled(true);
    selectToolButton = this.createCEButton('splitbutton', 'Control Events', 'controlevents', [{text: 'Pitch Tool'}, {text: 'Abbrev Resolver'}]);
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
           // '-',
           // showXmlButton,
               '->', 
               selectToolButton,
            '-',
              loginButton
              ],
              
            
        this.callParent()
    },
 
    saveComponents: function(btn){ 
 
var store = pmdCE.getApplication().getHairpinDataStore();
var modAndCreateElements = store.getUpdatedRecords();
var deletedElements = store.getRemovedRecords();
var modRecords = modAndCreateElements.concat(deletedElements);
//store.getUpdatedRecords() 
//modRecords.add(store.getRemovedRecords()) ;

console.log("******DATA******");
console.log(modRecords);

var objects = $('<div></div>');

for(var i = 0; i < modRecords.length ; i++){
    if(modRecords[i].data.obvious){
        var object = $('<div></div>', {
                id: modRecords[i].data.id,
                operation: modRecords[i].data.operation,
                sourcePath: pagesButton.getText(),
                measureid: modRecords[i].data.measureid
         });        
            var code = $('<hairpin></hairpin>', {
               staff : modRecords[i].data.staff,
                place: modRecords[i].data.place,
                form: modRecords[i].data.form,
                tstamp: modRecords[i].data.tstamp,
                tstamp2: modRecords[i].data.tstamp2,
                'xml:id': modRecords[i].data.id,
                xmlns: "http://www.music-encoding.org/ns/mei",
                sameas: ""
         });
         $(object).append(code);
         $(objects).append($(object));        
         }
         else{
            var head = $('<div></div>', {
                id: modRecords[i].data.id,
                operation: modRecords[i].data.operation,
                sourcePath: pagesButton.getText(),
                measureid: modRecords[i].data.measureid
            }); 
         
         
          var choice = $('<choice></choice>', {
              'xml:id': modRecords[i].data.id,
                xmlns: "http://www.music-encoding.org/ns/mei"
             
            });  
         
            for(var j = 0; j < modRecords[i].childNodes.length ; j++){
                if(modRecords[i].childNodes[j].data.tag === 'orig'){
                    var orig = $('<orig></orig>');
                    var hair =  $('<hairpin></hairpin>', {
                        staff : modRecords[i].childNodes[j].data.staff,
                        place: modRecords[i].childNodes[j].data.place,
                        form: modRecords[i].childNodes[j].data.form,
                        tstamp: modRecords[i].childNodes[j].data.tstamp,
                        tstamp2: modRecords[i].childNodes[j].data.tstamp2,              
                        sameas: ""
                    });
                    
                    $(orig).append($(hair)); 
                    $(choice).append($(orig)); 
                }
                if(modRecords[i].childNodes[j].data.tag === 'reg'){
                        var reg = $('<reg></reg>');
                        var hair =  $('<hairpin></hairpin>', {
                        staff : modRecords[i].childNodes[j].data.staff,
                        place: modRecords[i].childNodes[j].data.place,
                        form: modRecords[i].childNodes[j].data.form,
                        tstamp: modRecords[i].childNodes[j].data.tstamp,
                        tstamp2: modRecords[i].childNodes[j].data.tstamp2,              
                        sameas: ""
                    }); 
                    $(reg).append($(hair)); 
                    $(choice).append($(reg)); 
                }              
            } 
           $(head).append(choice);
             $(objects).append($(head));              
         }              
 }
 
 objects = $('<div></div>').append($(objects));
 console.log("******SAVE******");
 console.log(objects);
 console.log( $(objects).html());
 

//var objects1 = '<div><div><div id="hair_c9096393-a14a-4050-a4b9-454e330afELE" operation="create" sourcepath="A_surface105" measureid="A_mov6_measure73"><hairpin place="above" staff="5" startid="#A_mov6_measure73" endid="#A_mov6_measure73_s5l1_e8" sameas="" xml:id="hair_c9096393-a14a-4050-a4b9-454e330afELE" xmlns="http://www.music-encoding.org/ns/mei"></hairpin></div></div></div>';

   $.ajax({
            url:'resources/xql/saveMEI.xql',
            type:"POST",
            data: $(objects).html(),
            contentType:"application/xml; charset=utf-8",
            dataType:"xml",
            success: function(result){
                console.log(result);
               // console.log(result.getAttribute('result')); 
               // console.log(result.result); 
                var stringXML = (new XMLSerializer()).serializeToString(result);
                console.log(stringXML);
                alert('save success: '+ stringXML);
                saveButton.setDisabled(true);
            }
        });
    },
    
     createComponent: function(btn){      
    
        var win = new pmdCE.view.main.AddDialog();
        win.show();
    },
  
    click: function() {
       if(sourceButton.getText() === 'Source'){
            sourceButton.getMenu().removeAll();
            var app = pmdCE.getApplication();
            var store = app.getSourcesStore();
            var itemsArray = store.data.items;           
            for(var i = 0; i < itemsArray.length ; i++){ 
             var menuItem = Ext.create('Ext.menu.Item', {
             itemId: itemsArray[i].data.sigle, 
             text: itemsArray[i].data.sigle,
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
            var store = app.getSourcesStore();           
            var itemsArray = store.data.items;           
            for(var i = 0; i < itemsArray.length ; i++){ 
                if(sourceButton.getText() === itemsArray[i].data.sigle){   
                for(var j = 0; j < itemsArray[i].data.mdivs.length ; j++){
                     var menuItem = Ext.create('Ext.menu.Item', {
                    itemId: itemsArray[i].data.mdivs[j].id, 
                    text: itemsArray[i].data.mdivs[j].id,
                    handler: this.moveOnItemClick          
                    });
             movementButton.getMenu().add(menuItem);                    
                }                    
              }
          }
        }
    },
        
     click3: function() {
       if(pagesButton.getText() === 'Pages'){
            pagesButton.getMenu().removeAll();
            var app = pmdCE.getApplication();
            var store = app.getSourcesStore();
            var itemsArray = store.data.items; 
            
            this.pageMeasuresMap = new Object();
            this.staffNr = new Object();

            for(var i = 0; i < itemsArray.length ; i++){                    
                if(sourceButton.getText() === itemsArray[i].data.sigle){   
                    for(var j = 0; j < itemsArray[i].data.mdivs.length ; j++){
                        if(movementButton.getText() === itemsArray[i].data.mdivs[j].id){
                            for(var k = 0; k < itemsArray[i].data.mdivs[j].pages.length ; k++){
                            var key = itemsArray[i].data.mdivs[j].pages[k].id;
                            this.pageMeasuresMap[key] = itemsArray[i].data.mdivs[j].pages[k].measures;                         
                            this.staffNr[key] = itemsArray[i].data.mdivs[j].pages[k].staffs;  
                            var menuItem = Ext.create('Ext.menu.Item', {
                            itemId: itemsArray[i].data.mdivs[j].pages[k].id, 
                            text: itemsArray[i].data.mdivs[j].pages[k].id,
                            handler: this.pagesOnItemClick
                        });
                        pagesButton.getMenu().add(menuItem);                        
                    }                   
                }               
                }
             }
          }
        }
    },
    
  
    sourceOnItemClick: function(item){
        sourceButton.setText(item.text);
        movementButton.setDisabled(false);
        
        if(movementButton.getText() !== 'Movement'){
            movementButton.setText('Movement');
            
        }
        if(pagesButton.getText() !== 'Pages'){
            pagesButton.setText('Pages');
            }
        pagesButton.setDisabled(true);
        arrowLeft.setDisabled(true);
        arrowR.setDisabled(true);
       // createButton.setDisabled(true);
       // deleteButton.setDisabled(true);
      /*  if(!saveButton.isDisabled()){
        // TODO
        alert('save?')
        saveButton.setDisabled(true);
        } 
        */
     
    },
    
     moveOnItemClick: function(item){
        movementButton.setText(item.text);
        pagesButton.setDisabled(false);
       // createButton.setDisabled(true);
       // deleteButton.setDisabled(true);
        
       /*  if(!saveButton.isDisabled()){
        // TODO
        alert('save?')
        saveButton.setDisabled(true);
        } */
        
        if(pagesButton.getText() !== 'Pages'){
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
       
     
       
       
      if(typeof Ext.getCmp('facsimileview') !== 'undefined'){
           Ext.getCmp('cepanel').remove('facsimileview');
           
       }
    facsimileView = new pmdCE.view.main.FacsimileView();
    Ext.getCmp('cepanel').add(facsimileView);
       
       
        if(typeof Ext.getCmp('verovioview') !== 'undefined'){
            // TODO: save?
            Ext.getCmp('hairpinsitem').removeAll(true);
        }
      
         verovioView = new pmdCE.view.main.VerovioView();
        // verovioView.id = 'verovioview',
   
         controllsView = new pmdCE.view.main.CEGridPanel();
        
        
         xmlView = new pmdCE.view.main.XMLEditorView();
         
         Ext.getCmp('hairpinsitem').add(controllsView);
         Ext.getCmp('hairpinsitem').add(verovioView);
         Ext.getCmp('hairpinsitem').add(xmlView);
                //Ext.getCmp('centertabeditor').setActiveItem(ceEditor);
         
         var app = pmdCE.getApplication();
         var store = app.getHairpinDataStore();
        store.getProxy().extraParams.path = item.text;

        store.load();
       Ext.getCmp('cegridpanel').getView().bindStore(store);   
         
        
    },
      
    homeOnItemToggle: function(){
        window.location.href = "http://freischuetz-digital.de";
    },


createCEButton: function(ceType, ceSource, ceId, ceMenu, ceHandler){
    var ceButton = Ext.create('Ext.button.Button', {   
            xtype: 'button',
            text: ceSource,
            id: ceId,
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


createCEIcon: function(ceId, ceIcon, ceHandler){
    var ceIcon = Ext.create('Ext.button.Button', {   
      //  cls: ceCls,
        id: ceId,
        icon: ceIcon,
        scale: 'medium',
        handler: ceHandler
});
return ceIcon;
},

createCEIcon1: function(){
    var ceIcon = Ext.create('Ext.button.Button', {  
        xtype: 'button',
      //  cls: ceCls,
        icon: "resources/images/drop-add.gif",
         menu: [Ext.create('Ext.menu.Item', {
                        text: "Obvious",
                        icon: 'resources/images/mix_volume.png',
                        handler: function() {
                           // var win = new pmdCE.view.main.AddDialog();
                           var win = new pmdCE.view.main.AddObviousElDialog();
                            win.show();
                        }
                     }),
                     
                     Ext.create('Ext.menu.Item', {
                text: "Ambiguous",
                icon: 'resources/images/mix_volume.png',
                handler: function() {
                    // TODO: choice
                    //var win = new pmdCE.view.main.ChoiceDialog();
                    var win = new pmdCE.view.main.AddAmbiguousElDialog();
                    win.show();
                }
             })
                    ]
        });
    
      

return ceIcon;
}

});

