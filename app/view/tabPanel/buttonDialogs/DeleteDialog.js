/**
 * Creates class pmdCE.view.tabPanel.buttonDialogs.DeleteDialog that extend from Ext.window.Window.
 * @class
 * @classdesc pmdCE.view.tabPanel.buttonDialogs.DeleteDialog is a class for delete
 * element in table.
 */
Ext.define('pmdCE.view.tabPanel.buttonDialogs.DeleteDialog', {
	extend: 'Ext.window.Window',
	title: 'Delete Element',
	flex: 1,
	
	defaults: {
		width: 250,
		height: 100,
		bodyPadding: 10
	},
	
	selection: null,
	selectedId: null,
	root: null,
	
	/**
	 * Get selection, create buttons
	 * @overrides
	 */
	initComponent: function () {
	
	 	var me = this;
	 	
		if (Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1) {
			me.selection = Ext.getCmp('cegridpanel').getSelectionModel().getSelection()[0];
			me.root = pmdCE.getApplication().getHairpinDataStore().getRootNode();
		} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dynam') > -1) {
			me.selection = Ext.getCmp('dynamsgridpanel').getSelectionModel().getSelection()[0];
			me.root = pmdCE.getApplication().getDynamDataStore().getRootNode();
		} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dir') > -1) {
			me.selection = Ext.getCmp('dirsgridpanel').getSelectionModel().getSelection()[0];
			me.root = pmdCE.getApplication().getDirDataStore().getRootNode();
		}
		me.selectedNode = me.selection;
		
		for (var i = 0; i < me.root.childNodes.length; i++) {
			if (me.root.childNodes[i].data.id === me.selection.data.id) {
				me.selectedId = i;
				
				break;
			}
		}
		
		
		this.items =[ {
			html: "Element \n" + me.selectedNode.data.name + "\n will be removed."
		}],
		
		this.buttons =[ {
			text: 'Delete',
			handler: function () {
				
				me.selectedNode.data.operation = 'remove';
				me.selectedNode.remove();
				
				if (typeof me.selectedId !== 'undefined') {
					if (me.selectedId === me.root.childNodes.length) {
						me.selectedId--;
					}
					
					if (me.selectedId === -1) {
						if (Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1) {
							$('#xmleditorview-body').html('');
						} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dynam') > -1) {
							$('#dynamsxmlview-body').html('');
						} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dir') > -1) {
							$('#dirsxmlview-body').html('');
						}
					} else {
						var newSelection = me.root.childNodes[me.selectedId];
						if (Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1) {
							Ext.getCmp('cegridpanel').setSelection(newSelection);
						} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dynam') > -1) {
							Ext.getCmp('dynamsgridpanel').setSelection(newSelection);
						} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dir') > -1) {
							Ext.getCmp('dirsgridpanel').setSelection(newSelection);
						}
					}
				}
				
				Ext.getCmp('saveButton').setDisabled(false);
				this.up('window').close();
			}
		},
		{
			text: 'Cancel',
			handler: function () {
				this.up('window').close();
			}
		}],
				
		this.callParent()
	}
});