Ext.define('pmdCE.view.tabPanel.buttonDialogs.ChangeObviousElDialog', {
	extend: 'Ext.window.Window',
	title: 'Change to Obvious Hairpin',
	flex: 1,
	//height: 200,
	//width: 500,
	modal: true,
	// bodyPadding: 10,
	
	staffField: null,
	tstampField: null,
	placeField: null,
	formField: null,
	tstampField2: null,
	
	obviousCard: null,
	
	initComponent: function () {
		
		obviousCard = new pmdCE.view.tabPanel.buttonDialogs.cards.ChangeObviousCard(),
		
		this.items =[
		obviousCard],
		
		
		this.callParent()
	}
});