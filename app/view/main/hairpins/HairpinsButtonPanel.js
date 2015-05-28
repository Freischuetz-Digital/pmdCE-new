Ext.define('pmdCE.view.main.hairpins.HairpinsButtonPanel', {
    extend: 'pmdCE.view.main.CEButtonPanel',
     
    id: "verovioview",
   
    initComponent: function() {
   
   addElementButton = this.createCEButton('addelementbutton');
   addElementButton.setDisabled(true);
   
   createHairpinButton = this.createHairpinButton("createhairpinbutton" , 'Hairpin');
   
  deleteElementButton = this.deleteElementButton("deleteButton");
   deleteElementButton.setDisabled(true);
   
   changeToButton = this.createChangeToButton('changetobutton', 'changetobuttonchoice', 'changetobuttonhairpin');
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