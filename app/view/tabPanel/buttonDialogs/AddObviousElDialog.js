/**
 * Creates class pmdCE.view.tabPanel.buttonDialogs.AddObviousElDialog that extend from Ext.window.Window.
 * @class
 * @classdesc pmdCE.view.tabPanel.buttonDialogs.AddObviousElDialog is class create an obvious
 * element.
 */
Ext.define('pmdCE.view.tabPanel.buttonDialogs.AddObviousElDialog', {
	extend: 'Ext.window.Window',
	title: 'Create Hairpin',
	flex: 1,
	modal: true,
	
	obviousCard: null,
	
	x: 60,
    y: 60,
	
	/**
	 * Create card
	 * @overrides
	 */
	initComponent: function () {
		
		obviousCard = new pmdCE.view.tabPanel.buttonDialogs.cards.ObviousCard(),
		
		this.items =[
		obviousCard],
		
		
		this.callParent()
	}
});