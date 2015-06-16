/**
 * Creates class pmdCE.view.tabPanel.CETabPanel that extend from pmdCE.view.tabPanel.CETabPanel.
 * @class
 */
Ext.define('pmdCE.view.tabPanel.CETabPanel', {
	extend: 'Ext.tab.Panel',
	
	defaults: {
		autoScroll: true
	},
	
	id: 'cetabpanel',
	
	flex: 1,
	
	collapsible: false,
	region: 'center',
	
	slursItem: null,
	hairpinsItems: null,
	dynamsItems: null,
	dirsItems: null,
	
	/**
	 * Create items
	 * @overrides
	 */
	initComponent: function () {
		
		slursItem = new pmdCE.view.tabPanel.ControlEventsItem({
			title: 'Slurs',
			id: 'slursitem'
			// icon: 'resources/images/mix_volume.png'
		}),
		
		hairpinsItems = new pmdCE.view.tabPanel.ControlEventsItem({
			title: 'Hairpins',
			id: 'hairpinsitem',
			icon: 'resources/images/mix_volume.png'
		}),
		
		dynamsItems = new pmdCE.view.tabPanel.ControlEventsItem({
			title: 'Dynams',
			id: 'dynamsitem'
			// icon: 'resources/images/mix_volume.png'
		}),
		
		dirsItems = new pmdCE.view.tabPanel.ControlEventsItem({
			title: 'Dirs',
			id: 'dirsitem'
			// icon: 'resources/images/mix_volume.png'
		}),
		this.items =[
		slursItem,
		hairpinsItems,
		dynamsItems,
		dirsItems],
		
		this.callParent()
	}
});