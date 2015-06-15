Ext.define('pmdCE.view.tabPanel.buttonDialogs.AddAmbiguousElDialog', {
	extend: 'Ext.window.Window',
	title: 'Create Choice Element',
	flex: 1,
	//height: 200,
	//width: 500,
	modal: true,
	// bodyPadding: 10,
	border: false,
	
	autoScroll: true,
	
	ambiguousCard: null,
	
	initComponent: function () {
		
		switch (Ext.getCmp('cemain').getCard()) {
			case 1:
			ambiguousCard = new pmdCE.view.tabPanel.buttonDialogs.cards.ChoiceTstampCard();
			break;
			case 2:
			ambiguousCard = new pmdCE.view.tabPanel.buttonDialogs.cards.ChoiceTstamp2Card();
			break;
			case 3:
			ambiguousCard = new pmdCE.view.tabPanel.buttonDialogs.cards.ChoiceStaffCard();
			break;
			case 4:
			ambiguousCard = new pmdCE.view.tabPanel.buttonDialogs.cards.ChoiceTimeCard();
			break;
			case 5:
			ambiguousCard = new pmdCE.view.tabPanel.buttonDialogs.cards.ChoiceTstampStaffCard();
			break;
			case 6:
			ambiguousCard = new pmdCE.view.tabPanel.buttonDialogs.cards.ChoiceTstamp2StaffCard();
			break;
			case 7:
			ambiguousCard = new pmdCE.view.tabPanel.buttonDialogs.cards.ChoiceTimeStaffCard();
			break;
			case 8:
			ambiguousCard = new pmdCE.view.tabPanel.buttonDialogs.cards.ChoiceTstampCard();
			break;
			case 9:
			ambiguousCard = new pmdCE.view.tabPanel.buttonDialogs.cards.ChoiceTstamp2Card();
			break;
			case 10:
			ambiguousCard = new pmdCE.view.tabPanel.buttonDialogs.cards.ChoiceStaffCard();
			break;
			case 11:
			ambiguousCard = new pmdCE.view.tabPanel.buttonDialogs.cards.ChoiceTimeCard();
			break;
			case 12:
			ambiguousCard = new pmdCE.view.tabPanel.buttonDialogs.cards.ChoiceTstampStaffCard();
			break;
			case 13:
			ambiguousCard = new pmdCE.view.tabPanel.buttonDialogs.cards.ChoiceTstamp2StaffCard();
			break;
			case 14:
			ambiguousCard = new pmdCE.view.tabPanel.buttonDialogs.cards.ChoiceTimeStaffCard();
			break;
		}
		
		this.items =[
		ambiguousCard];
		
		
		this.callParent();
	}
});