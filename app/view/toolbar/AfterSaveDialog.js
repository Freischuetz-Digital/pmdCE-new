/**
 * Creates class pmdCE.view.toolbar.AfterSaveDialog that extend from Ext.window.Window.
 * @class
 * @classdesc pmdCE.view.toolbar.AfterSaveDialog is a information for show saved elemnets to exist db.
 */
Ext.define('pmdCE.view.toolbar.AfterSaveDialog', {
	extend: 'Ext.window.Window',
	title: 'Saved Element(s)',
	flex: 1,
	modal: true,
	
	border: false,
	
	autoScroll: true,
	
	defaults: {
		bodyPadding: 10
	},
	
	text: null,
	
	/**
	 * Create info area and refresh store for elements
	 * @overrides
	 */
	initComponent: function () {
		
		this.text = Ext.getCmp('cemain').getAfterSaveText();
		
		this.items =[ {
			html: 'save success: ' + this.text
		}],
		
		this.buttons =[ {
			text: 'Ok',
			handler: function () {
				// refresh hairpin elements after save
				var store = pmdCE.getApplication().getHairpinDataStore();
				store.reload();
				// refresh dynam elements after save
				var dynamsStore = pmdCE.getApplication().getDynamDataStore();
				dynamsStore.reload();
				// refresh dir elements after save
				var dirsStore = pmdCE.getApplication().getDirDataStore();
				dirsStore.reload();
				// refresh slur elements after save
				var slursStore = pmdCE.getApplication().getSlurDataStore();
				slursStore.reload();
				
				Ext.getCmp('saveButton').setDisabled(true);
				this.up('window').close();
			}
		}],
		
		
		this.callParent()
	}
});