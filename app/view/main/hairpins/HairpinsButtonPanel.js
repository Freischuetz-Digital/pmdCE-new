Ext.define('pmdCE.view.main.hairpins.HairpinsButtonPanel', {
    extend: 'pmdCE.view.main.CEButtonPanel',
     
    id: "verovioview",
   
    initComponent: function() {
   
   addElementButton = this.createCEButton('addelementbutton', 'Hairpin');
   addElementButton.setDisabled(true);
   
   createHairpinButton = this.createHairpinButton("createhairpinbutton", 'Hairpin');
   
  deleteElementButton = this.deleteElementButton("deleteButton", 'Hairpin');
   deleteElementButton.setDisabled(true);
   
   changeToButton = this.createChangeToButton('changetobutton', 'changetobuttonchoice', 'changetobuttonhairpin', 'Hairpin');
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