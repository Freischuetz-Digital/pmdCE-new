/**
 * Creates class pmdCE.view.tabPanel.buttonDialogs.AddOrigDialog that extend from Ext.window.Window.
 * @class
 * @classdesc pmdCE.view.tabPanel.buttonDialogs.AddOrigDialog is class for add an orig to
 * selected ambigous element.
 */
Ext.define('pmdCE.view.tabPanel.buttonDialogs.AddOrigDialog', {
	extend: 'Ext.window.Window',
	title: 'Add Orig Element',
	flex: 1,
	id: 'obviousdialog',
	modal: true,
	bodyPadding: 10,
	layout: 'vbox',
	autoScroll: true,
	
	staffField: null,
	tstampField: null,
	placeField: null,
	formField: null,
	tstampField2: null,
	satffFieldBetween: null,
	selectedNode: null,
	rend: null,
	titleForAdd: null,
	createElementButton: null,
	
	/**
	 * Get selection from tree tabel and create all fields, buttons
	 * @overrides
	 */
	initComponent: function () {
		if (Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1) {
			selection = Ext.getCmp('cegridpanel').getSelectionModel().getSelection()[0];
			rootNode = pmdCE.getApplication().getHairpinDataStore().getRootNode();
		} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dynam') > -1) {
			selection = Ext.getCmp('dynamsgridpanel').getSelectionModel().getSelection()[0];
			rootNode = pmdCE.getApplication().getDynamDataStore().getRootNode();
		} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dir') > -1) {
			selection = Ext.getCmp('dirsgridpanel').getSelectionModel().getSelection()[0];
			rootNode = pmdCE.getApplication().getDirDataStore().getRootNode();
		}
		
		//if (selection.data.depth === 1) {
			selectedNode = selection;
			var movement = Ext.getCmp('movement').getText();
			Ext.getCmp('cemain').setMeasureId(movement + "_measure" + selectedNode.data.measurenr);
			Ext.getCmp('cemain').setStartMeasure(selectedNode.data.measurenr);
			Ext.getCmp('cemain').setStaffNr(selectedNode.childNodes[0].data.staff);
			
		//}
		
//		for (var i = 0; i < rootNode.childNodes.length; i++) {
//			if (rootNode.childNodes[i].data.id === selection.data.id) {
//				selectedNode = rootNode.childNodes[i];
//				Ext.getCmp('cemain').setStartMeasure(selectedNode.data.measurenr);
//				Ext.getCmp('cemain').setStaffNr(selectedNode.data.staff);
//				var movement = Ext.getCmp('movement').getText();
//				Ext.getCmp('cemain').setMeasureId(movement + "_measure" + selectedNode.data.measurenr);
//				break;
//			}
//		}
		
		// common
		staffField = this.createTextField('staffField', 'Staff');
		staffField.setValue(selectedNode.childNodes[0].data.staff);
		staffField.setDisabled(true);
		staffField.validate();
		//createComboBox('Staff', 'staffField');
		//createTextField('staffField', 'Staff');
		//staffField.setValue(selectedNode.childNodes[0].data.staff);
		//staffField.setDisabled(true);
		//staffField.validate();
		satffFieldBetween = this.createComboBox('Second staff', 'staffBetween');
		placeField = this.createComboBox('Place', 'place');
		placeField.validate();
		tstampField = this.createTextField('tstampFieldObv', 'Tstamp');
		tstampField.validate();
		// hairpin
		if (Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1) {
			formField = this.createComboBox('Form', 'form');
			tstampField2 = this.createTextField('tstampField2Obv', 'Tstamp2');
			tstampField2.validate();
		} else {
			// dynams
			formField = this.createTextField('formOrig', 'Form');
			tstampField2 = this.createOtionalTextField('tstampField2Obv', 'Tstamp2');
			rend = this.createOtionalTextField('rendOrig', 'Rend');
		}
		formField.validate();
		
		this.items = Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1 ?[
		staffField,
		satffFieldBetween,
		placeField,
		formField,
		tstampField,
		tstampField2]:[
		staffField,
		satffFieldBetween,
		placeField,
		formField,
		tstampField,
		tstampField2,
		rend]
		
		createElementButton = this.createNavigationButton('createElement', 'Add', this.createElement);
		this.buttons =[
		createElementButton, {
			text: 'Cancel',
			handler: function () {
				this.up('window').close();
			}
		}]
		
		this.callParent()
	},
	
	/**
	 * Crete hairpin, dir or dynams element, set new selection in tree-table and enable save button.
	 */
	createElement: function () {
		
		if (selectedNode !== null) {
			var elIcon = null;
			var elType = null;
			if (Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1) {
				elType = 'hairpin';
				elIcon = 'resources/images/mix_volume.png';
			} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dynam') > -1) {
				elType = 'dynam';
			} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dir') > -1) {
				elType = 'dir';
			}
			
			selectedNode.set('operation', 'change');
			selectedNode.set('measureid', Ext.getCmp('cemain').getMeasureId());
			
			selectedNode.appendChild({
				icon: elIcon,
				type: elType,
				staff: staffField.getValue(),
				staff2: satffFieldBetween.getValue(),
				tstamp: tstampField.getValue(),
				tstamp2: tstampField2.getValue(),
				place: placeField.getValue(),
				form: formField.getValue(),
				rend: typeof rend !== 'undefined' ? rend.getValue(): null,
				name: 'orig',
				tag: 'orig',
				leaf: true
			});
			
			selectedNode.expand();
			
			if (Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1) {
				Ext.getCmp('cegridpanel').setSelection(selectedNode);
				Ext.getCmp('cegridpanel').showXMLforSelectedElement(selectedNode);
			} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dynam') > -1) {
				Ext.getCmp('dynamsgridpanel').setSelection(selectedNode);
				Ext.getCmp('dynamsgridpanel').showXMLforSelectedElement(selectedNode);
			} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dir') > -1) {
				Ext.getCmp('dirsgridpanel').setSelection(selectedNode);
				Ext.getCmp('dirsgridpanel').showXMLforSelectedElement(selectedNode);
			}
			
			Ext.getCmp('saveButton').setDisabled(false);
			Ext.getCmp('addelementbutton').setDisabled(false);
		}
		
		this.up('window').close();
	},
	
	setTitleForAdd: function (title) {
		this.titleForAdd = title;
		console.log('setTitle');
		console.log(this.titleForAdd);
	},
	
	/**
	 * Create mandatory text field.
	 * @param {string} fieldName - text name and id.
	 * @param {string} fieldLabel - field label.
	 */
	createTextField: function (fieldName, fieldLabel) {
		var me = this;
		var ceTextField = Ext.create('Ext.form.field.Text', {
			name: fieldName,
			id: fieldName,
			width: 285,
			allowBlank: false,
			invalidCls: '',
			fieldLabel: fieldLabel,
			listeners: {
				focus: function (e, eOpts) {
					me.handleCreateButton();
				},
				render: function (c) {
					c.getEl().on('keyup', function () {
						me.handleCreateButton();
					},
					c);
				}
			}
		});
		
		return ceTextField;
	},
	
	/**
	 * Create optional text field.
	 * @param {string} fieldName - text name and id.
	 * @param {string} fieldLabel - field label.
	 */
	createOtionalTextField: function (fieldName, fieldLabel) {
		var me = this;
		var ceTextField = Ext.create('Ext.form.field.Text', {
			name: fieldName,
			id: fieldName,
			width: 285,
			fieldLabel: fieldLabel,
			listeners: {
				focus: function (e, eOpts) {
					me.handleCreateButton();
				},
				render: function (c) {
					c.getEl().on('keyup', function () {
						me.handleCreateButton();
					},
					c);
				}
			}
		});
		
		return ceTextField;
	},
	
	/**
	 * Create a mandatory, not editable combo box and store dependent from combo type.
	 * @param {string} fieldName - combo name.
	 * @param {string} fieldId - combo id and type definition.
	 */
	createComboBox: function (fieldName, fieldId) {
		var me = this;
		var storeField = null;
		if (fieldId.indexOf('staff') > -1) {
			var pageStaffMap = Ext.getCmp('cetoolbar').staffNr;
			var selectedPage = Ext.getCmp('pages').getText();
			
			var test = pageStaffMap[selectedPage];
			
			var storeField = new Array(test.length);
			var value = test[0];
			for (var i = 0; i < test.length; i++) {
				storeField[i] = value++;
			}
		}
		if (fieldId.indexOf('place') > -1) {
			storeField = new Array("above", "below", "between");
		}
		if (fieldId.indexOf('form') > -1) {
			storeField = new Array("cres", "dim");
		}
		
		var ceTextField = Ext.create('Ext.form.ComboBox', {
			fieldLabel: fieldName,
			store: storeField,
			queryMode: 'local',
			displayField: 'name',
			editable: false,
			width: 285,
			allowBlank: false,
			invalidCls: '',
			listeners: {
				select: function (combo, record, index) {
					me.handleCreateButton();
				}
			}
		});
		return ceTextField;
	},
	
	/**
	 * Handle function for disable/enable create-button.
	 */
	handleCreateButton: function () {
		if (placeField.isValid() && formField.isValid() && tstampField.isValid() && tstampField2.isValid()
		&& staffField.isValid()) {
			createElementButton.setDisabled(false);
		} else {
			createElementButton.setDisabled(true);
		}
	},
	
	/**
	 * Create a navigation button for card.
	 * @param {string} navItemId - button id.
	 * @param {string} navText - button name.
	 * @param {object} navHandler - handler for button.
	 */
	createNavigationButton: function (navItemId, navText, navHandler) {
		var navButton = Ext.create('Ext.button.Button', {
			itemId: navItemId,
			text: navText,
			handler: navHandler,
			disabled: true
		})
		return navButton;
	}
});