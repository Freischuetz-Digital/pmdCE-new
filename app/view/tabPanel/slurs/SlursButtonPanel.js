/**
 * Creates class ppmdCE.view.tabPanel.slurs.SlursButtonPanel that extend from pmdCE.view.tabPanel.CEButtonPanel.
 * @class
 * @classdesc pmdCE.view.tabPanel.slurs.SlursButtonPanel is a class for create
 * buttons for tree table in slurs-tab.
 */
Ext.define('pmdCE.view.tabPanel.slurs.SlursButtonPanel', {
	extend: 'pmdCE.view.tabPanel.CEButtonPanel',
	
	id: "slursbuttonspanel",
	
	createNewElButton: null,
	addElementButton: null,
	changeToButton: null,
	deleteButton: null,
	
	/**
	 * Create buttons
	 * @overrides
	 */
	initComponent: function () {
		
		this.addElementButton = this.createCEButton('addelementbutton_3', 'Slur');
		this.addElementButton.setDisabled(true);
		
		this.createNewElButton = this.createHairpinButton("createhairpinbutton_3", 'Slur');
		this.createNewElButton.setDisabled(true);
		
		this.deleteButton = this.deleteElementButton("deleteButton_3", 'Slur');
		this.deleteButton.setDisabled(true);
		
		this.changeToButton = this.createChangeToButton('changetobutton_3', 'changetobuttonchoice_3',
		'changetobuttonhairpin_3', 'Slur');
		this.changeToButton.setDisabled(true);
		
		this.items =[
		this.createNewElButton,
		this.changeToButton,
		this.addElementButton,
		this.deleteButton],
		this.callParent()
	}
});