Ext.define('pmdCE.view.tabPanel.dirs.DirsButtonsPanel', {
	extend: 'pmdCE.view.tabPanel.CEButtonPanel',
	
	id: "dirsbuttonspanel",
	
	
	initComponent: function () {
		
		addElementButton = this.createCEButton('addelementbutton_2', 'Dir');
		addElementButton.setDisabled(true);
		
		createHairpinButton = this.createHairpinButton("createhairpinbutton_2", 'Dir');
		
		deleteElementButton = this.deleteElementButton("deleteButton_2", 'Dir');
		deleteElementButton.setDisabled(true);
		
		changeToButton = this.createChangeToButton('changetobutton_2', 'changetobuttonchoice_2', 'changetobuttonhairpin_2', 'Dir');
		changeToButton.setDisabled(true);
		
		this.items =[
		createHairpinButton,
		changeToButton,
		addElementButton,
		deleteElementButton],
		this.callParent()
	}
});