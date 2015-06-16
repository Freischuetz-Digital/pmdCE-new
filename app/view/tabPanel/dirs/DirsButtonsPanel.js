/**
 * Creates class ppmdCE.view.tabPanel.hairpins.HairpinsButtonPanel that extend from pmdCE.view.tabPanel.DirsButtonsPanel.
 * @class
 * @classdesc pmdCE.view.tabPanel.hairpins.DirsButtonsPanel is a class for create
 * buttons for tree table in dirs-tab.
 */
Ext.define('pmdCE.view.tabPanel.dirs.DirsButtonsPanel', {
	extend: 'pmdCE.view.tabPanel.CEButtonPanel',
	
	id: "dirsbuttonspanel",
	
	createNewElButton: null,
	addElementButton: null,
	changeToButton: null,
	
	/**
	 * Create buttons
	 * @overrides
	 */
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