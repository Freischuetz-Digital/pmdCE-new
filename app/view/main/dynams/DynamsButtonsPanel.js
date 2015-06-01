Ext.define('pmdCE.view.main.dynams.DynamsButtonsPanel', {
    extend: 'pmdCE.view.main.CEButtonPanel',
     
    id: "dynamsbuttonspanel",
    
       
    initComponent: function() {
    
   addElementButton = this.createCEButton('addelementbutton_1', 'Dynam');
   addElementButton.setDisabled(true);
   
   createHairpinButton = this.createHairpinButton("createhairpinbutton_1", 'Dynam');
   
  deleteElementButton = this.deleteElementButton("deleteButton_1", 'Dynam');
   deleteElementButton.setDisabled(true);
   
   changeToButton = this.createChangeToButton('changetobutton_1', 'changetobuttonchoice_1', 'changetobuttonhairpin_1');
   changeToButton.setDisabled(true);
  
this.items = [
createHairpinButton,
changeToButton,
addElementButton,
deleteElementButton
        ],
        this.callParent()

}
});