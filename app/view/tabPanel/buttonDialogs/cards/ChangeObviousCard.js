Ext.define('pmdCE.view.tabPanel.buttonDialogs.cards.ChangeObviousCard', {
	extend: 'Ext.panel.Panel',
	requires:[
	'Ext.layout.container.Card',
	'pmdCE.model.Hairpin'],
	id: "obviouscard",
	//xtype: 'layout-card',
	layout: 'card',
	// width: 500,
	// height: 400,
	
	//bodyPadding: 10,
	
	defaults: {
		border: false,
		autoScroll: true,
		bodyPadding: 10
	},
	
	defaultListenerScope: true,
	autoScroll: true,
	
	staffField: null,
	staffFieldCopy: null,
	startTaktField: null,
	endTaktField: null,
	placeField: null,
	formField: null,
	rend: null,
	
	tstampField: null,
	tstamp2Field: null,
	
	verovioImageStart: null,
	verovioImageEnd: null,
	
	me: null,
	
	selectedNode: null,
	
	
	initComponent: function () {
		
		me = this;
		
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
			if (rootNode.childNodes[i].data.id === selection.data.id && rootNode.childNodes[i].data.name === selection.data.name) {
				selectedNode = rootNode.childNodes[i];
				// Ext.getCmp('cemain').setStartMeasure(selectedNode.data.measurenr);
				// TODO richtige takt
				// Ext.getCmp('cemain').setEndMeasure(selectedNode.data.measurenr);
				//Ext.getCmp('cemain').setStaffNr(selectedNode.childNodes[0].data.staff);
				break;
			}
		}
		
		staffField = this.createComboBoxStaff('Staff');
		staffField.validate();
		staffFieldCopy = this.createTextField('staffFieldCopy', 'Staff');
		staffFieldCopy.setDisabled(true);
		startTaktField = this.createComboBoxMeasureNr('Start measure');
		startTaktField.validate();
		if(Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1){
			endTaktField = this.createComboBox('End measure', 'endmeasure');
			endTaktField.validate();
		}	
		else{
			endTaktField = this.createOptionalComboBox('End measure', 'endmeasure');
		}
		placeField = this.createComboBox('Place');
		placeField.validate();
		tstampField = this.createTextField('tstampFieldObv', 'Tstamp');
		tstampField.validate();
		// hairpin
		if (Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1) {
			formField = this.createComboBoxForm('Form');
			tstamp2Field = this.createTextField('tstamp2FieldOrig', 'Tstamp2');
			tstamp2Field.validate();
		} else {
			// dynams
			formField = this.createTextField('formOrig', 'Form');
			tstamp2Field = this.createTextFieldTstamp2('tstamp2FieldOrig', 'Tstamp2');
			rend = this.createTextFieldTstamp2('rendOrig', 'Rend');
		}
		formField.validate();
		
		this.items =[ {
			id: 'card-0',
			bodyPadding: 5,
			text: 'Fields for verovio load',
			items:[
			
			staffField,
			startTaktField,
			endTaktField]
		},
		{
			id: 'card-1',
			layout: 'hbox',
			
			bodyPadding: 10,
			
			defaults: {
				frame: true,
				bodyPadding: 10
			},
			
			border: false,
			items:[ {
				xtype: 'fieldset',
				title: 'Values',
				id: 'values',
				defaultType: 'textfield',
				margin: '0 10 0 0',
				defaults: {
					anchor: '100%'
				},
				
				items: Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1 ?[
				staffFieldCopy,
				placeField,
				formField]:[
				staffFieldCopy,
				placeField,
				formField,
				rend]
			},
			{
				xtype: 'fieldset',
				title: 'Start time',
				id: 'starttime',
				margin: '0 10 0 0',
				defaultType: 'textfield',
				defaults: {
					anchor: '100%'
				},
				items:[
				tstampField]
			},
			{
				xtype: 'fieldset',
				title: 'End time',
				id: 'endtime',
				margin: '0 10 0 0',
				defaultType: 'textfield',
				defaults: {
					anchor: '100%'
				},
				items:[
				
				tstamp2Field]
			}]
		}],
		
		prevButton = this.createNavigationButton('card-prev', '&laquo; Previous', 'showPrevious');
		nextButton = this.createNavigationButton('card-next', 'Next &raquo;', 'showNext');
		createElementButton = this.createNavigationButton('createElement', 'Change', 'createElement');
		this.bbar =[ '->',
		prevButton,
		nextButton,
		createElementButton, {
			text: 'Cancel',
			handler: function () {
				this.up('window').close();
			}
		}],
		
		this.callParent()
	},
	
	handleNavigationButtons: function () {
		if (staffField.isValid() && startTaktField.isValid() && endTaktField.isValid()) {
			nextButton.setDisabled(false);
		} else {
			nextButton.setDisabled(true);
		}
	},
	
	handleCreateButton: function () {
		if (placeField.isValid() && formField.isValid() && tstampField.isValid() && tstamp2Field.isValid()) {
			createElementButton.setDisabled(false);
		} else {
			createElementButton.setDisabled(true);
		}
	},
	
	createElement: function () {
		
		var elType = null;
		if (Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1) {
			elType = 'hairpin';
		} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dynam') > -1) {
			elType = 'dynam';
		} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dir') > -1) {
			elType = 'dir';
		}
		
		selectedNode.data.name = formField.getValue() + '_s' + staffField.getValue() + '_m' + placeField.getValue();
		selectedNode.data.obvious = true;
		selectedNode.data.ambiguous = false;
		selectedNode.data.type = elType;
		selectedNode.data.staff = staffField.getValue();
		selectedNode.data.tstamp = tstampField.getValue();
		selectedNode.data.tstamp2 = tstamp2Field.getValue();
		selectedNode.data.form = formField.getValue();
		selectedNode.data.place = placeField.getValue();
		selectedNode.data.operation = 'change';
		selectedNode.data.leaf = true;
		selectedNode.data.tag = "";
		if(Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1){
			selectedNode.data.icon = 'resources/images/mix_volume.png';
		}		
		selectedNode.data.measureid = Ext.getCmp('cemain').getMeasureId();
		selectedNode.data.measurenr = startTaktField.getValue();
		
		selectedNode.removeAll();
		
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
		Ext.getCmp('addelementbutton').setDisabled(true);
		
		this.up('window').close();
	},
	
	
	showNext: function () {
		this.doCardNavigation(1);
		if (typeof Ext.getCmp('cemain').getVerStartId() != 'undefined') {
			Ext.getCmp('starttime').removeAll(true);
		}
		if (typeof Ext.getCmp('cemain').getVerEndId() != 'undefined') {
			Ext.getCmp('endtime').removeAll(true);
		}
		
		
		tstampField = this.createTextField('tstampFieldObv', 'Tstamp');
		tstampField.validate();
		// hairpin
		if (Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1) {
			tstamp2Field = this.createTextField('tstamp2FieldOrig', 'Tstamp2');
			tstamp2Field.validate();
		} else {
			// dynams
			tstamp2Field = this.createTextFieldTstamp2('tstamp2FieldOrig', 'Tstamp2');
		}
		
		Ext.getCmp('starttime').add(tstampField);
		Ext.getCmp('endtime').add(tstamp2Field);
		
		verovioImageStart = new pmdCE.view.tabPanel.buttonDialogs.VerovioImageStart();
		Ext.getCmp('starttime').add(verovioImageStart);
		
		verovioImageEnd = new pmdCE.view.tabPanel.buttonDialogs.VerovioImageEnd();
		Ext.getCmp('endtime').add(verovioImageEnd);
		
		staffFieldCopy.setValue(staffField.getValue());
	},
	
	showPrevious: function (btn) {
		this.doCardNavigation(-1);
	},
	
	doCardNavigation: function (incr) {
		var me = this;
		var l = me.getLayout();
		var i = l.activeItem.id.split('card-')[1];
		var next = parseInt(i, 10) + incr;
		l.setActiveItem(next);
		
		me.down('#card-prev').setDisabled(next === 0);
		me.down('#card-next').setDisabled(next === 1);
		
		console.log("active item");
		console.log(l.activeItem);
	},
	
	
	createTextField: function (fieldName, fieldLabel) {
		var me1 = this;
		var ceTextField = Ext.create('Ext.form.field.Text', {
			name: fieldName,
			id: fieldName,
			allowBlank: false,
			invalidCls: '',
			fieldLabel: fieldLabel,
			listeners: {
				focus: function (e, eOpts) {
					me1.handleCreateButton();
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
		
		var states = new Array("above", "below");
		var me2 = this;
		var ceTextField = Ext.create('Ext.form.ComboBox', {
			fieldLabel: fieldName,
			store: states,
			queryMode: 'local',
			displayField: 'name',
			editable: false,
			allowBlank: false,
			invalidCls: '',
			listeners: {
				select: function (combo, record, index) {
					me2.handleCreateButton();
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
			editable: false,
			allowBlank: false,
			invalidCls: '',
			listeners: {
				select: function (combo, record, index) {
					if (fieldName.indexOf('Second') === -1) {
						Ext.getCmp('cemain').setStaffNr(combo.getValue());
					}
					me.handleNavigationButtons();
				}
			}
		});
		return ceTextField;
	},
	
	/**
	 * Create an optional, not editable combo box and store dependent from combo type.
	 * @param {string} fieldName - combo name.
	 * @param {string} fieldId - combo id and type definition.
	 */
	createOptionalComboBox: function (fieldName, fieldId) {
		var me = this;
		var storeField = null;
		
		if (fieldId === 'endmeasure') {
			var pageMeasuresMap = Ext.getCmp('cetoolbar').pageMeasuresMap;
			var selectedPage = Ext.getCmp('pages').getText();
			
			var test = pageMeasuresMap[selectedPage];
			
			storeField = new Array(test.length);
			var value = test[0];
			for (var i = 0; i < test.length; i++) {
				storeField[i] = value++;
			}
		}
		
		var combo = Ext.create('Ext.form.ComboBox', {
			fieldLabel: fieldName,
			id: fieldId,
			store: storeField,
			queryMode: 'local',
			displayField: 'name',
			editable: false,
			listeners: {
				select: function (combo, record, index) {
					if (combo.id === 'endmeasure') {
						me.handleMeasureField(combo);
					}
				}
			}
		});
		return combo;
	},
	
	/**
	 * Handle function for set start and end measure for get verovio.
	 * @param {object} combo.
	 */
	handleMeasureField: function (combo) {
		if (combo.id.indexOf('start') > -1) {
			Ext.getCmp('cemain').setStartMeasure(combo.getValue());
		}
		if (combo.id.indexOf('end') > -1 && typeof combo.getValue() != 'undefined') {
			Ext.getCmp('cemain').setEndMeasure(combo.getValue());
		}
		this.handleNavigationButtons();
	},
	
	
	createComboBoxMeasureNr: function (fieldName) {
		
		var pageMeasuresMap = Ext.getCmp('cetoolbar').pageMeasuresMap;
		var selectedPage = Ext.getCmp('pages').getText();
		
		var test = pageMeasuresMap[selectedPage];
		
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
			editable: false,
			allowBlank: false,
			invalidCls: '',
			listeners: {
				select: function (combo, record, index) {
					if (fieldName.indexOf('Start') > -1) {
						Ext.getCmp('cemain').setStartMeasure(combo.getValue());
					}
					if (fieldName.indexOf('End') > -1) {
						Ext.getCmp('cemain').setEndMeasure(combo.getValue());
					}
					me.handleNavigationButtons();
				}
			}
		});
		return ceTextField;
	},
	
	createComboBoxForm: function (fieldName) {
		
		var states = new Array("cres", "dim");
		var me3 = this;
		var ceTextField = Ext.create('Ext.form.ComboBox', {
			fieldLabel: fieldName,
			store: states,
			queryMode: 'local',
			displayField: 'name',
			editable: false,
			allowBlank: false,
			invalidCls: '',
			listeners: {
				select: function (combo, record, index) {
					me3.handleCreateButton();
				}
			}
		});
		
		return ceTextField;
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