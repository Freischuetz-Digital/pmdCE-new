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
	
	/**
	 * Create buttons
	 * @overrides
	 */
	initComponent: function () {
		
		addElementButton = this.createCEButton('addelementbutton', 'Hairpin');
		addElementButton.setDisabled(true);
		
		createHairpinButton = this.createHairpinButton("createhairpinbutton", 'Hairpin');
		
		deleteElementButton = this.deleteElementButton("deleteButton", 'Hairpin');
		deleteElementButton.setDisabled(true);
		
		changeToButton = this.createChangeToButton('changetobutton', 'changetobuttonchoice', 'changetobuttonhairpin', 'Hairpin');
		changeToButton.setDisabled(true);
		
		this.items =[
		createHairpinButton,
		changeToButton,
		addElementButton,
		deleteElementButton],
		this.callParent()
	}
});