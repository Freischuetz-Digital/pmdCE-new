/**
 * Creates class ppmdCE.view.tabPanel.hairpins.HairpinsButtonPanel that extend from pmdCE.view.tabPanel.DynamsButtonsPanel.
 * @class
 * @classdesc pmdCE.view.tabPanel.hairpins.DynamsButtonsPanel is a class for create
 * buttons for tree table in dynams-tab.
 */
Ext.define('pmdCE.view.tabPanel.dynams.DynamsButtonsPanel', {
	extend: 'pmdCE.view.tabPanel.CEButtonPanel',
	
	id: "dynamsbuttonspanel",
	
	createNewElButton: null,
	addElementButton: null,
	changeToButton: null,
	
	/**
	 * Create buttons
	 * @overrides
	 */
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