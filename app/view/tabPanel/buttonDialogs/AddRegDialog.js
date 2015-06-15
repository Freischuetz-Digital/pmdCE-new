Ext.define('pmdCE.view.tabPanel.buttonDialogs.AddRegDialog', {
	extend: 'Ext.window.Window',
	title: 'Add Reg Element',
	flex: 1,
	//height: 200,
	//width: 500,
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
		
		for (var i = 0; i < rootNode.childNodes.length; i++) {
			if (rootNode.childNodes[i].data.id === selection.data.id) {
				selectedNode = rootNode.childNodes[i];
				Ext.getCmp('cemain').setStartMeasure(selectedNode.data.measurenr);
				Ext.getCmp('cemain').setStaffNr(selectedNode.childNodes[0].data.staff);
				var movement = Ext.getCmp('movement').getText();
				Ext.getCmp('cemain').setMeasureId(movement + "_measure" + selectedNode.data.measurenr);
				break;
			}
		}
		
		// common
		staffField = this.createTextField('staffField', 'Staff');
		staffField.setValue(selectedNode.childNodes[0].data.staff);
		staffField.setDisabled(true);
		satffFieldBetween = this.createComboBoxStaff('Second staff');
		placeField = this.createComboBox('Place');
		placeField.validate();
		tstampField = this.createTextField('tstampFieldObv', 'Tstamp');
		tstampField.validate();
		// hairpin
		if (Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1) {
			formField = this.createComboBoxForm('Form');
			tstampField2 = this.createTextField('tstampField2Obv', 'Tstamp2');
			tstampField2.validate();
		} else {
			// dynams
			formField = this.createTextField('formOrig', 'Form');
			tstampField2 = this.createTextFieldTstamp2('tstampField2Obv', 'Tstamp2');
			rend = this.createTextFieldTstamp2('rendOrig', 'Rend');
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
	
	createElement: function () {
		
		if (selectedNode !== null) {
			
			var elType = null;
			if (Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1) {
				elType = 'hairpin';
			} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dynam') > -1) {
				elType = 'dynam';
			} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dir') > -1) {
				elType = 'dir';
			}
			
			selectedNode.set('operation', 'change');
			selectedNode.set('measureid', Ext.getCmp('cemain').getMeasureId());
			
			selectedNode.appendChild({
				icon: 'resources/images/mix_volume.png',
				type: elType,
				staff: staffField.getValue(),
				staff2: satffFieldBetween.getValue(),
				tstamp: tstampField.getValue(),
				tstamp2: tstampField2.getValue(),
				place: placeField.getValue(),
				form: formField.getValue(),
				rend: typeof rend !== 'undefined' ? rend.getValue(): null,
				name: 'reg',
				tag: 'reg',
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
	
	createTextFieldTstamp2: function (fieldName, fieldLabel) {
		var me1 = this;
		var ceTextField = Ext.create('Ext.form.field.Text', {
			name: fieldName,
			id: fieldName,
			width: 285,
			fieldLabel: fieldLabel,
			listeners: {
				focus: function (e, eOpts) {
					
					me1.handleCreateButton();
				},
				render: function (c) {
					c.getEl().on('keyup', function () {
						
						me1.handleCreateButton();
					},
					c);
				}
			}
		});
		
		return ceTextField;
	},
	
	createComboBox: function (fieldName) {
		
		var states = new Array("above", "below", "between");
		var me = this;
		var ceTextField = Ext.create('Ext.form.ComboBox', {
			fieldLabel: fieldName,
			store: states,
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
	
	createComboBoxForm: function (fieldName) {
		
		var states = new Array("cres", "dim");
		var me = this;
		var ceTextField = Ext.create('Ext.form.ComboBox', {
			fieldLabel: fieldName,
			store: states,
			width: 285,
			queryMode: 'local',
			displayField: 'name',
			editable: false,
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
	
	createComboBoxStaff: function (fieldName) {
		
		var pageStaffMap = Ext.getCmp('cetoolbar').staffNr;
		var selectedPage = Ext.getCmp('pages').getText();
		
		var test = pageStaffMap[selectedPage];
		
		var dataMeasureNr = new Array(test.length);
		var value = test[0];
		for (var i = 0; i < test.length; i++) {
			dataMeasureNr[i] = value++;
		}
		
		var ceTextField = Ext.create('Ext.form.ComboBox', {
			fieldLabel: fieldName,
			store: dataMeasureNr,
			queryMode: 'local',
			displayField: 'name',
			width: 285,
			editable: true,
			icon: 'resources/images/mix_volume.png',
			listeners: {
				select: function (combo, record, index) {
				}
			}
		});
		return ceTextField;
	},
	
	handleCreateButton: function () {
		if (placeField.isValid() && formField.isValid() && tstampField.isValid() && tstampField2.isValid()) {
			createElementButton.setDisabled(false);
		} else {
			createElementButton.setDisabled(true);
		}
	},
	
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