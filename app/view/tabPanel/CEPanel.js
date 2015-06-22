/**
 * Creates class pmdCE.view.tabPanel.CEPanel that extend from Ext.panel.Panel.
 * @class
 */
Ext.define('pmdCE.view.tabPanel.CEPanel', {
	extend: 'Ext.panel.Panel',
	id: 'cepanel',
	requires:[
	'Ext.layout.container.Border'],
	layout: 'border',
	flex: 1,
	
	bodyBorder: false,
	
	defaults: {
		split: true
	},
	
	ceTabView: null,
	
	initComponent: function () {
		
		this.ceTabView = new pmdCE.view.tabPanel.CETabPanel(),
		
		this.items =[
		this.ceTabView],
		this.callParent();
	}
});