/**
 * Creates class ppmdCE.view.tabPanel.hairpins.HairpinsButtonPanel that extend from pmdCE.view.tabPanel.CEButtonPanel.
 * @class
 * @classdesc pmdCE.view.tabPanel.hairpins.HairpinsButtonPanel is a class for create
 * buttons for tree table in hairpins-tab.
 */
Ext.define('pmdCE.view.tabPanel.hairpins.HairpinsButtonPanel', {
	extend: 'pmdCE.view.tabPanel.CEButtonPanel',
	
	id: "verovioview",
	
	createNewElButton: null,
	addElementButton: null,
	changeToButton: null,
	deleteButton: null,
	
	/**
	 * Create buttons
	 * @overrides
	 */
	initComponent: function () {
		
		this.addElementButton = this.createCEButton('addelementbutton', 'Hairpin');
		this.addElementButton.setDisabled(true);
		
		this.createHairpinButton = this.createHairpinButton("createhairpinbutton", 'Hairpin');
		
		this.deleteButton = this.deleteElementButton("deleteButton", 'Hairpin');
		this.deleteButton.setDisabled(true);
		
		this.changeToButton = this.createChangeToButton('changetobutton', 'changetobuttonchoice', 'changetobuttonhairpin', 'Hairpin');
		this.changeToButton.setDisabled(true);
		
		this.items =[
		this.createHairpinButton,
		this.changeToButton,
		this.addElementButton,
		this.deleteButton],
		this.callParent()
	}
});