/**
 * Creates class pmdCE.view.tabPanel.CEButtonPanel that extend from Ext.panel.Panel.
 * @class
 * @classdesc pmdCE.view.tabPanel.CEButtonPanel is a help class for create
 * buttons in slurs-, hairpins-, dynams- and dirs-tabs.
 */
Ext.define('pmdCE.view.tabPanel.CEButtonPanel', {
	extend: 'Ext.panel.Panel',
	requires:[
	'Ext.layout.container.VBox'],
	
	width: 150,
	region: 'center',
	
	layout: {
		type: 'vbox',
		pack: 'start',
		align: 'stretch'
	},
	
	bodyPadding: 10,
	
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	
	/**
	 * Create add-button with menu for add orig or reg element.
	 * @param {string} buttonId.
	 * @param {string} elementName - component type.
	 */
	createCEButton: function (buttonId, elementName) {
		var ceButton = Ext.create('Ext.button.Button', {
			xtype: 'button',
			id: buttonId,
			text: 'Add',
			margin: '0 0 10 0',
			menu:[Ext.create('Ext.menu.Item', {
				text: "Orig",
				//icon: 'resources/images/mix_volume.png',				
				handler: function () {
					Ext.getCmp('cemain').setComponentType(elementName);
					var win = new pmdCE.view.tabPanel.buttonDialogs.AddOrigDialog();
					win.show();
				}
			}),
			
			Ext.create('Ext.menu.Item', {
				text: "Reg",
				//icon: 'resources/images/mix_volume.png',
				handler: function () {
					Ext.getCmp('cemain').setComponentType(elementName);
					var win = new pmdCE.view.tabPanel.buttonDialogs.AddRegDialog();
					win.show();
				}
			})]
		});
		
		return ceButton;
	},
	
	/**
	 * Create changeTo-button with menu for add orig or regs elements.
	 * @param {string} buttonId.
	 * @param {string} menuChoiceId.
	 * @param {string} menuHairpinId.
	 * @param {string} elementName - component type.
	 */
	createChangeToButton: function (buttonId, menuChoiceId, menuHairpinId, elementName) {
		
		var menuTstamp2Reg = this.createMenuItem("for Tstamp (1-2 regs)", 8, elementName);
		
		var menuTStamp22Reg = this.createMenuItem("for Tstamp2 (1-2 regs)", 9, elementName);
		
		var menuStaff2Reg = this.createMenuItem("for Staff (2 regs)", 10, elementName);
		
		var menuTime4Reg = this.createMenuItem("for Time (2-4 regs)", 11, elementName);
		
		var menuTStampAndStaff4Reg = this.createMenuItem("for Tstamp and Staff (3-4 regs)", 12, elementName);
		
		var menuTStamp2AndStaff4Reg = this.createMenuItem("for Tstamp2 and Staff (3-4 regs)", 13, elementName);
		
		var menuTimeAndStaff4Reg = this.createMenuItem("for Time and Staff (4-6 regs)", 14, elementName);
		
		var ceButton = Ext.create('Ext.button.Button', {
			xtype: 'button',
			id: buttonId,
			text: 'Change to ...',
			margin: '0 0 10 0',
			
			menu:[Ext.create('Ext.menu.Item', {
				text: "Choice",
				id: menuChoiceId,
				//icon: 'resources/images/details-xml.png',
				menu:[
				menuTstamp2Reg,
				menuTStamp22Reg,
				menuStaff2Reg,
				menuTime4Reg,
				menuTStampAndStaff4Reg,
				menuTStamp2AndStaff4Reg,
				menuTimeAndStaff4Reg]
			}),
			
			Ext.create('Ext.menu.Item', {
				text: elementName,
				id: menuHairpinId,
				//icon: 'resources/images/mix_volume.png',
				handler: function () {
					Ext.getCmp('cemain').setComponentType(elementName);
					var win = new pmdCE.view.tabPanel.buttonDialogs.ChangeObviousElDialog();
					win.show();
				}
			})]
		});
		
		return ceButton;
	},
	
	/**
	 * Create create-element-button with menu for add orig or regs elements.
	 * @param {string} buttonId.
	 * @param {string} elementName - component type.
	 */
	createHairpinButton: function (buttonId, elementName) {
		
		var menuTstamp2Reg = this.createMenuItem("for Tstamp (1-2 regs)", 1, elementName);
		
		var menuTStamp22Reg = this.createMenuItem("for Tstamp2 (1-2 regs)", 2, elementName);
		
		var menuStaff2Reg = this.createMenuItem("for Staff (2 regs)", 3, elementName);
		
		var menuTime4Reg = this.createMenuItem("for Time (2-4 regs)", 4, elementName);
		
		var menuTStampAndStaff4Reg = this.createMenuItem("for Tstamp and Staff (3-4 regs)", 5, elementName);
		
		var menuTStamp2AndStaff4Reg = this.createMenuItem("for Tstamp2 and Staff (3-4 regs)", 6, elementName);
		
		var menuTimeAndStaff4Reg = this.createMenuItem("for Time and Staff (4-6 regs)", 7, elementName);
		
		var ceButton = Ext.create('Ext.button.Button', {
			xtype: 'button',
			id: buttonId,
			text: 'Create element',
			margin: '0 0 10 0',
			menu:[Ext.create('Ext.menu.Item', {
				text: "Choice ...",
				//icon: 'resources/images/details-xml.png',
				
				menu:[
				menuTstamp2Reg,
				menuTStamp22Reg,
				menuStaff2Reg,
				menuTime4Reg,
				menuTStampAndStaff4Reg,
				menuTStamp2AndStaff4Reg,
				menuTimeAndStaff4Reg]
			}),
			
			Ext.create('Ext.menu.Item', {
				text: elementName,
				//icon: 'resources/images/mix_volume.png',
				handler: function () {
					Ext.getCmp('cemain').setComponentType(elementName);
					var win = new pmdCE.view.tabPanel.buttonDialogs.AddObviousElDialog();
					win.show();
				}
			})]
		});
		
		return ceButton;
	},
	
	/**
	 * Create menu item for ambiguous elements.
	 * @param {string} itemText - item name.
	 * @param {string} type - id of template type.
	 * @param {string} elementName - component type.
	 */
	createMenuItem: function (itemText, type, elementName) {
		var item = Ext.create('Ext.menu.Item', {
			text: itemText,
			//icon: 'resources/images/mix_volume.png',
			handler: function () {
				Ext.getCmp('cemain').setCard(type);
				Ext.getCmp('cemain').setComponentType(elementName);
				var win = new pmdCE.view.tabPanel.buttonDialogs.AddAmbiguousElDialog();
				win.show();
			}
		});
		
		return item;
	},
	
	/**
	 * Create delete button.
	 * @param {string} buttonId.
	 * @param {string} elementName - component type.
	 */
	deleteElementButton: function (buttonId, elementName) {
		var ceButton = Ext.create('Ext.button.Button', {
			xtype: 'button',
			id: buttonId,
			margin: '0 0 10 0',
			text: 'Delete',
			listeners: {				
				click: function () {
					Ext.getCmp('cemain').setComponentType(elementName);
					var win = new pmdCE.view.tabPanel.buttonDialogs.DeleteDialog();
					win.show();
				}
			}
		});
		
		return ceButton;
	}
});