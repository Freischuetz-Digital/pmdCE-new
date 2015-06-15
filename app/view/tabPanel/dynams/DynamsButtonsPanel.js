Ext.define('pmdCE.view.tabPanel.dynams.DynamsButtonsPanel', {
	extend: 'pmdCE.view.tabPanel.CEButtonPanel',
	
	id: "dynamsbuttonspanel",
	
	
	initComponent: function () {
		
		addElementButton = this.createCEButton('addelementbutton_1', 'Dynam');
		addElementButton.setDisabled(true);
		
		createHairpinButton = this.createHairpinButton("createhairpinbutton_1", 'Dynam');
		
		deleteElementButton = this.deleteElementButton("deleteButton_1", 'Dynam');
		deleteElementButton.setDisabled(true);
		
		changeToButton = this.createChangeToButton('changetobutton_1', 'changetobuttonchoice_1', 'changetobuttonhairpin_1', 'Dynam');
		changeToButton.setDisabled(true);
		
		this.items =[
		createHairpinButton,
		changeToButton,
		addElementButton,
		deleteElementButton],
		this.callParent()
	}
});