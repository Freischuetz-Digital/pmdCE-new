/**
 * Creates class pmdCE.view.tabPanel.buttonDialogs.ChangeObviousElDialog that extend from Ext.window.Window.
 * @class
 * @classdesc pmdCE.view.tabPanel.buttonDialogs.ChangeObviousElDialog is class for switch from
 * ambigous to obvious element.
 */
Ext.define('pmdCE.view.tabPanel.buttonDialogs.ChangeObviousElDialog', {
	extend: 'Ext.window.Window',
	title: 'Change to Obvious Hairpin',
	flex: 1,
	modal: true,
	
	obviousCard: null,
	
	/**
	 * Create card
	 * @overrides
	 */
	initComponent: function () {
		
		obviousCard = new pmdCE.view.tabPanel.buttonDialogs.cards.ChangeObviousCard(),
		
		this.items =[
		obviousCard],
		this.callParent()
	}
});