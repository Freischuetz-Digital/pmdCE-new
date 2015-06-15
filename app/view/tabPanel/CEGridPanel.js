Ext.define('pmdCE.view.tabPanel.CEGridPanel', {
	extend: 'Ext.tree.Panel',
	
	requires:[
	'Ext.data.*',
	'Ext.grid.*',
	'Ext.tree.*',
	'Ext.ux.CheckColumn'],
	
	flex: 4,
	region: 'west',
	
	reserveScrollbar: true,
	
	useArrows: true,
	rootVisible: false,
	
	editColumn: null,
	
	showDialog: function () {
		
		var win = new pmdCE.view.main.AddDialog();
		win.show();
	},
	
	createEditColumn: function () {
		var eColumn = Ext.create('Ext.grid.column.Action', {
			
			xtype: 'actioncolumn',
			header: 'Edit',
			width: 40,
			align: 'center',
			menuDisabled: true,
			renderer: function (val, metadata, record) {
				if (record.data.depth === 1 && record.data.ambiguous === true) {
					this.items[0].icon = '';
				} else {
					this.items[0].icon = 'resources/images/edit.png';
				}
				metadata.style = 'cursor: pointer;';
				return val;
			},
			handler: this.changeElementDialog
		});
		return eColumn;
	},
	
	changeElementDialog: function (object, cell, row) {
		object.selectionModel.select(cell);
		
		if (object.selection.data.type === 'hairpin') {
			selection = Ext.getCmp('cegridpanel').getSelectionModel().getSelection()[0];
		} else if (object.selection.data.type === 'dynam') {
			selection = Ext.getCmp('dynamsgridpanel').getSelectionModel().getSelection()[0];
		} else if (object.selection.data.type === 'dir') {
			selection = Ext.getCmp('dirsgridpanel').getSelectionModel().getSelection()[0];
		}
		
		if (selection.data.obvious || selection.data.depth === 2) {
			if (selection.data.type === 'hairpin') {
				Ext.getCmp('cemain').setComponentType('Hairpin');
			} else if (selection.data.type === 'dynam') {
				Ext.getCmp('cemain').setComponentType('Dynam');
			} else if (selection.data.type === 'dir') {
				Ext.getCmp('cemain').setComponentType('Dir');
			}
			
			var win = new pmdCE.view.tabPanel.EditDialog();
			win.show();
		}
	}
});