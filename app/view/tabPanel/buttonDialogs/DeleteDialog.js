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
	
	// layout: 'hbox',
	
	initComponent: function () {
		
		/* if(Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1){
		selection = Ext.getCmp('cegridpanel').getSelectionModel().getSelection()[0];
		root = pmdCE.getApplication().getHairpinDataStore().getRootNode();
		}
		else{
		selection = Ext.getCmp('dynamsgridpanel').getSelectionModel().getSelection()[0];
		root = pmdCE.getApplication().getDynamDataStore().getRootNode();
		}
		
		 */
		
		
		
		if (Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1) {
			selection = Ext.getCmp('cegridpanel').getSelectionModel().getSelection()[0];
			root = pmdCE.getApplication().getHairpinDataStore().getRootNode();
		} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dynam') > -1) {
			selection = Ext.getCmp('dynamsgridpanel').getSelectionModel().getSelection()[0];
			root = pmdCE.getApplication().getDynamDataStore().getRootNode();
		} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dir') > -1) {
			selection = Ext.getCmp('dirsgridpanel').getSelectionModel().getSelection()[0];
			root = pmdCE.getApplication().getDirDataStore().getRootNode();
		}
		selectedNode = selection;
		
		for (var i = 0; i < root.childNodes.length; i++) {
			if (root.childNodes[i].data.id === selection.data.id) {
				selectedId = i;
				
				break;
			}
		}
		
		
		this.items =[ {
			html: "Element \n" + selectedNode.data.name + "\n will be removed."
		}],
		
		this.buttons =[ {
			text: 'Delete',
			handler: function () {
				
				selectedNode.data.operation = 'remove';
				selectedNode.remove();
				
				if (typeof selectedId !== 'undefined') {
					if (selectedId === root.childNodes.length) {
						selectedId--;
					}
					
					if (selectedId === -1) {
						if (Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1) {
							$('#xmleditorview-body').html('');
						} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dynam') > -1) {
							$('#dynamsxmlview-body').html('');
						} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dir') > -1) {
							$('#dirsxmlview-body').html('');
						}
					} else {
						var newSelection = root.childNodes[selectedId];
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
		}, {
			text: 'Cancel',
			handler: function () {
				this.up('window').close();
			}
		}],
		
		
		this.callParent()
	}
});