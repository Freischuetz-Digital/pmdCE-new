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
	deleteButton: null,
	
	/**
	 * Create buttons
	 * @overrides
	 */
	initComponent: function () {
		
		this.addElementButton = this.createCEButton('addelementbutton_2', 'Dir');
		this.addElementButton.setDisabled(true);
		
		this.createNewElButton = this.createHairpinButton("createhairpinbutton_2", 'Dir');
		
		this.deleteButton = this.deleteElementButton("deleteButton_2", 'Dir');
		this.deleteButton.setDisabled(true);
		
		this.changeToButton = this.createChangeToButton('changetobutton_2', 'changetobuttonchoice_2', 'changetobuttonhairpin_2', 'Dir');
		this.changeToButton.setDisabled(true);
		
		this.items =[
		this.createNewElButton,
		this.changeToButton,
		this.addElementButton,
		this.deleteButton],
		this.callParent()
	}
});