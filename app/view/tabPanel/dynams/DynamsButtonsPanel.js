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
	deleteButton: null,
	
	/**
	 * Create buttons
	 * @overrides
	 */
	initComponent: function () {
		
		this.addElementButton = this.createCEButton('addelementbutton_1', 'Dynam');
		this.addElementButton.setDisabled(true);
		
		this.createNewElButton = this.createHairpinButton("createhairpinbutton_1", 'Dynam');
		
		this.deleteButton = this.deleteElementButton("deleteButton_1", 'Dynam');
		this.deleteButton.setDisabled(true);
		
		this.changeToButton = this.createChangeToButton('changetobutton_1', 'changetobuttonchoice_1', 'changetobuttonhairpin_1', 'Dynam');
		this.changeToButton.setDisabled(true);
		
		this.items =[
		this.createNewElButton,
		this.changeToButton,
		this.addElementButton,
		this.deleteButton],
		this.callParent()
	}
});