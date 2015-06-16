/**
 * Creates class pmdCE.view.tabPanel.ControlEventsItem that extend from Ext.panel.Panel.
 * @class
 * @classdesc pmdCE.view.tabPanel.ControlEventsItem for create hairpins-, dirs-, dynams- and slurs- items.
 */
Ext.define('pmdCE.view.tabPanel.ControlEventsItem', {
	extend: 'Ext.panel.Panel',
	requires:[
	'Ext.layout.container.HBox'],
	xtype: 'layout-horizontal-box',
	flex: 1,
	
	layout: {
		type: 'hbox',
		pack: 'start',
		align: 'stretch'
	},
	
	defaults: {
		frame: true,
		autoScroll: true
	},
	
	autoScroll: true,
	
	initComponent: function () {
		
		this.items =[];
		
		this.callParent();
	}
});