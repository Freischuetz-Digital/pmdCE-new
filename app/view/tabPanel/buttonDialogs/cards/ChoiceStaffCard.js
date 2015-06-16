/**
 * Creates class pmdCE.view.tabPanel.buttonDialogs.cards.ChoiceStaffCard that extend from pmdCE.view.tabPanel.buttonDialogs.cards.ChoiceCard.
 * @class
 * @classdesc pmdCE.view.tabPanel.buttonDialogs.cards.ChoiceStaffCard is class for create
 * two cards for 'create'- or 'change to'-dialog. Card 2 of dialog consists
 * in orig-group, 2 regs and verovio view.
 * This dialog is template for create choices depended on staff.
 */
Ext.define('pmdCE.view.tabPanel.buttonDialogs.cards.ChoiceStaffCard', {
	extend: 'pmdCE.view.tabPanel.buttonDialogs.cards.ChoiceCard',
	
	id: "ambiguouscard",
	
	// Global variables for navigation
	nextButton: null,
	prevButton: null,
	createElementButton: null,
	
	// Global variables for card1
	staffField: null,
	startTaktField: null,
	endTaktField: null,
	
	// Global variables for card2
	expertCheckBox: null,
	selectedFieldId: null,
	verovioImageStart: null,
	verovioImageEnd: null,
	// orig
	staffFieldCopy: null,
	placeField: null,
	formField: null,
	satffFieldBetween: null,
	rend: null,
	tstampFieldOrig: null,
	tstamp2FieldOrig: null,
	// reg1
	staffFieldReg1: null,
	placeFieldReg1: null,
	formFieldReg1: null,
	tstampFieldReg1: null,
	tstamp2FieldReg1: null,
	rendReg1: null,
	// reg2
	staffFieldReg2: null,
	placeFieldReg2: null,
	formFieldReg2: null,
	tstampFieldReg2: null,
	tstamp2FieldReg2: null,
	rendReg2: null,
	
	// selection in tree table
	selection: null,
	rootNode: null,
	selectedNode: null,
	// vordef. values
	vordStaff: null,
	vordForm: null,
	vordPlace: null,
	vordTStamp: null,
	vordTStamp2: null,
	vordStartMeasure: null,
	vordEndMeasure: null,
	vordRend: null,
	
	/**
	 * Init a component: create all fields, cards, navigation buttons
	 * @overrides
	 */
	initComponent: function () {
		// create orig fields
		// common
		staffField = this.createComboBox('Staff', 'staffField');
		staffField.validate();
		staffFieldCopy = this.createMandatoryTextField('staffFieldCopy', 'Staff');
		staffFieldCopy.setDisabled(true);
		satffFieldBetween = this.createComboBox('Second staff', 'sestaffcorig');
		satffFieldBetween.validate();
		startTaktField = this.createComboBox('Start measure', 'startmeasure');
		startTaktField.validate();
		endTaktField = this.createComboBox('End measure', 'endmeasure');
		endTaktField.validate();
		placeField = this.createComboBox('Place', 'p3statesorig');
		placeField.validate();
		tstampFieldOrig = this.createMandatoryTextField('tstampFieldOrig', 'Tstamp');
		tstampFieldOrig.validate();
		// hairpin
		if (Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1) {
			formField = this.createComboBox('Form', 'formOrig');
			tstamp2FieldOrig = this.createMandatoryTextField('tstamp2FieldOrig', 'Tstamp2');
			tstamp2FieldOrig.validate();
		} else {
			// dynams
			formField = this.createMandatoryTextField('formOrig', 'Form');
			tstamp2FieldOrig = this.createOptionalTextField('tstamp2FieldOrig', 'Tstamp2');
			rend = this.createOptionalTextField('rendOrig', 'Rend');
		}
		formField.validate();
		
		// reg1 fields
		// common
		staffFieldReg1 = this.createComboBox('Staff', 'staffreg1');
		staffFieldReg1.validate();
		placeFieldReg1 = this.createComboBox('Place', 'p3statesreg1');
		placeFieldReg1.validate();
		tstampFieldReg1 = this.createMandatoryTextField('tstampFieldReg1', 'Tstamp');
		tstampFieldReg1.validate();
		tstampFieldReg1.setDisabled(true);
		// hairpin
		if (Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1) {
			formFieldReg1 = this.createComboBox('Form', 'formreg1');
			tstamp2FieldReg1 = this.createMandatoryTextField('tstamp2FieldReg1', 'Tstamp2');
			tstamp2FieldReg1.validate();
		} else {
			// dynams
			formFieldReg1 = this.createMandatoryTextField('formReg1', 'Form');
			tstamp2FieldReg1 = this.createOptionalTextField('tstamp2FieldReg1', 'Tstamp2');
			rendReg1 = this.createOptionalTextField('rendReg1', 'Rend');
			rendReg1.setDisabled(true);
		}
		formFieldReg1.setDisabled(true);
		formField.validate();
		tstamp2FieldReg1.setDisabled(true);
		
		// reg2 fields
		// common
		staffFieldReg2 = this.createComboBox('Staff', "staffreg2");
		staffFieldReg2.validate();
		placeFieldReg2 = this.createComboBox('Place', 'p3statesreg2');
		placeFieldReg2.validate();
		tstampFieldReg2 = this.createMandatoryTextField('tstampFieldReg2', 'Tstamp');
		tstampFieldReg2.validate();
		tstampFieldReg2.setDisabled(true);
		// hairpin
		if (Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1) {
			formFieldReg2 = this.createComboBox('Form', 'formreg2');
			tstamp2FieldReg2 = this.createMandatoryTextField('tstamp2FieldReg2', 'Tstamp2');
			tstamp2FieldReg2.validate();
		} else {
			// dynams
			formFieldReg2 = this.createMandatoryTextField('formReg2', 'Form');
			tstamp2FieldReg2 = this.createOptionalTextField('tstamp2FieldReg2', 'Tstamp2');
			rendReg2 = this.createOptionalTextField('rendReg2', 'Rend');
			rendReg2.setDisabled(true);
		}
		formFieldReg2.setDisabled(true);
		tstamp2FieldReg2.setDisabled(true);
		
		expertCheckBox = this.createCheckBox('Set fields editable', 'expert');
		
		prevButton = this.createNavigationButton('card-prev', '&laquo; Previous', 'showPrevious');
		nextButton = this.createNavigationButton('card-next', 'Next &raquo;', 'showNext');
		createElementButton = this.createNavigationButton('createElement', 'Create', 'createElement');
		
		// for 'change to' dialog
		if (Ext.getCmp('cemain').getCard() === 10) {
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
					vordStaff = selectedNode.data.staff;
					vordStartMeasure = selectedNode.data.measurenr;
					vordForm = selectedNode.data.form;
					vordPlace = selectedNode.data.place;
					vordTStamp = selectedNode.data.tstamp;
					vordTStamp2 = selectedNode.data.tstamp2;
					vordRend = selectedNode.data.rend;
					Ext.getCmp('cemain').setStartMeasure(selectedNode.data.measurenr);
					Ext.getCmp('cemain').setStaffNr(vordStaff);
					
					if (typeof vordTStamp2 !== 'undefined' && typeof vordStartMeasure !== 'undefined') {
						var prefix = vordTStamp2.substring(0, 1);
						if (prefix !== 'm') {
							vordEndMeasure = parseInt(vordStartMeasure) + parseInt(prefix);
						} else {
							vordEndMeasure = parseInt(vordStartMeasure) + 1;
						}
						Ext.getCmp('cemain').setEndMeasure(vordEndMeasure);
					}
					break;
				}
			}
			staffField.setValue(vordStaff);
			startTaktField.setValue(vordStartMeasure);
			endTaktField.setValue(vordEndMeasure);
			placeField.setValue(vordPlace);
			tstampFieldOrig.setValue(vordTStamp);
			tstamp2FieldOrig.setValue(vordTStamp2);
			formField.setValue(vordForm);
			formFieldReg1.setValue(vordForm);
			formFieldReg2.setValue(vordForm);
			tstamp2FieldReg1.setValue(vordTStamp2);
			tstamp2FieldReg2.setValue(vordTStamp2);
			tstampFieldReg1.setValue(vordTStamp);
			tstampFieldReg2.setValue(vordTStamp);
			if (typeof rend !== 'undefined') {
				rend.setValue(vordRend);
				rendReg1.setValue(vordRend);
				rendReg2.setValue(vordRend);
			}
			this.handleNavigationButtons();
		}
		
		this.items =[ {
			id: 'card-0',
			items:[
			staffField,
			startTaktField,
			endTaktField]
		},
		{
			id: 'card-1',
			layout: 'vbox',
			border: false,
			
			items:[
			
			expertCheckBox, {
				id: 'card-11',
				layout: {
					type: 'hbox',
					pack: 'start',
					align: 'stretch'
				},
				
				bodyPadding: 10,
				
				defaults: {
					frame: true,
					bodyPadding: 10
				},
				
				border: false,
				
				items:[ {
					xtype: 'fieldset',
					title: 'Orig',
					id: 'orig',
					defaultType: 'textfield',
					margin: '0 10 0 0',
					items: Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1 ?[
					staffFieldCopy,
					satffFieldBetween,
					placeField,
					formField,
					tstampFieldOrig,
					tstamp2FieldOrig]:[
					staffFieldCopy,
					satffFieldBetween,
					placeField,
					formField,
					tstampFieldOrig,
					tstamp2FieldOrig,
					rend]
				},
				{
					xtype: 'fieldset',
					title: 'Reg',
					id: 'starttime',
					defaultType: 'textfield',
					margin: '0 10 0 0',
					defaults: {
						anchor: '100%'
					},
					
					items: Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1 ?[
					staffFieldReg1,
					placeFieldReg1,
					formFieldReg1,
					tstampFieldReg1,
					tstamp2FieldReg1]:[
					staffFieldReg1,
					placeFieldReg1,
					formFieldReg1,
					tstampFieldReg1,
					tstamp2FieldReg1,
					rendReg1]
				},
				{
					xtype: 'fieldset',
					title: 'Reg',
					id: 'endtime',
					defaultType: 'textfield',
					margin: '0 10 0 0',
					defaults: {
						anchor: '100%'
					},
					items: Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1 ?[
					staffFieldReg2,
					placeFieldReg2,
					formFieldReg2,
					tstampFieldReg2,
					tstamp2FieldReg2]:[
					staffFieldReg2,
					placeFieldReg2,
					formFieldReg2,
					tstampFieldReg2,
					tstamp2FieldReg2,
					rendReg2]
				}]
			}, {
				id: 'card-111',
				layout: 'hbox',
				border: false,
				items:[ {
					xtype: 'fieldset',
					title: 'Start Time (tstamp)',
					id: 'verovio1',
					border: true,
					width: 415,
					defaultType: 'textfield',
					defaults: {
						anchor: '100%'
					},
					margin: '0 10 0 10',
					items:[]
				},
				{
					xtype: 'fieldset',
					title: 'End Time (tstamp2)',
					id: 'verovio2',
					border: true,
					width: 415,
					defaultType: 'textfield',
					defaults: {
						anchor: '100%'
					},
					margin: '0 10 0 10',
					items:[]
				}]
			}]
		}],
		
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
	
	/**
	 * Crete hairpin, dir or dynams element, set new selection in tree-table and enable save button.
	 */
	createElement: function () {
		
		// for 'change to' dialog
		if (Ext.getCmp('cemain').getCard() === 10) {
			if (selectedNode !== null) {
				
				var elType = null;
				if (Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1) {
					elType = 'hairpin';
				} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dynam') > -1) {
					elType = 'dynam';
				} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dir') > -1) {
					elType = 'dir';
				}
				
				selectedNode.data.name = 'choice_m' + selectedNode.data.measurenr;
				selectedNode.data.obvious = false;
				selectedNode.data.ambiguous = true;
				selectedNode.data.staff = null;
				selectedNode.data.type = elType;
				selectedNode.data.measureid = Ext.getCmp('cemain').getMeasureId();
				selectedNode.data.measurenr = startTaktField.getValue();
				selectedNode.data.tstamp = null;
				selectedNode.data.tstamp2 = null;
				selectedNode.data.form = null;
				selectedNode.data.place = null;
				selectedNode.data.operation = 'change',
				selectedNode.data.icon = 'resources/images/details-xml.png',
				
				// selectedNode.removeChild(nodeToDelete);
				selectedNode.appendChild({
					icon: 'resources/images/mix_volume.png',
					rend: typeof rend !== 'undefined' ? rend.getValue(): null,
					staff: staffField.getValue(),
					staff2: satffFieldBetween.getValue(),
					tstamp: tstampFieldOrig.getValue(),
					tstamp2: tstamp2FieldOrig.getValue(),
					place: placeField.getValue(),
					form: formField.getValue(),
					name: "orig",
					tag: "orig",
					leaf: true
				});
				selectedNode.appendChild({
					icon: 'resources/images/mix_volume.png',
					rend: typeof rend !== 'undefined' ? rend.getValue(): null,
					staff: staffFieldReg1.getValue(),
					tstamp: tstampFieldReg1.getValue(),
					tstamp2: tstamp2FieldReg1.getValue(),
					place: placeFieldReg1.getValue(),
					form: formFieldReg1.getValue(),
					name: "reg",
					tag: "reg",
					leaf: true
				});
				selectedNode.appendChild({
					icon: 'resources/images/mix_volume.png',
					rend: typeof rend !== 'undefined' ? rend.getValue(): null,
					staff: staffFieldReg2.getValue(),
					tstamp: tstampFieldReg2.getValue(),
					tstamp2: tstamp2FieldReg2.getValue(),
					place: placeFieldReg2.getValue(),
					form: formFieldReg2.getValue(),
					name: "reg",
					tag: "reg",
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
		} else {
			var modelPath = null;
			var prefix = null;
			var elType = null;
			if (Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1) {
				modelPath = 'pmdCE.model.Hairpin';
				prefix = 'hairpin_';
				elType = 'hairpin';
			} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dynam') > -1) {
				modelPath = 'pmdCE.model.Dynam';
				prefix = 'dynam_';
				elType = 'dynam';
			} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dir') > -1) {
				modelPath = 'pmdCE.model.Dir';
				prefix = 'dir_';
				elType = 'dir';
			}
			
			var hairId = prefix + 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
				var r = Math.random() * 16 | 0, v = c == 'x' ? r: (r & 0x3 | 0x8);
				return v.toString(16);
			});
			
			var hairpin = Ext.create(modelPath, {
				id: hairId,
				name: 'choice_m' + startTaktField.getValue(),
				icon: 'resources/images/details-xml.png',
				type: elType,
				measureid: Ext.getCmp('cemain').getMeasureId(),
				measurenr: startTaktField.getValue(),
				operation: 'create',
				obvious: false,
				ambiguous: true,
				children:[ {
					icon: 'resources/images/mix_volume.png',
					type: elType,
					staff: staffField.getValue(),
					staff2: satffFieldBetween.getValue(),
					tstamp: tstampFieldOrig.getValue(),
					tstamp2: tstamp2FieldOrig.getValue(),
					place: placeField.getValue(),
					form: formField.getValue(),
					rend: typeof rend !== 'undefined' ? rend.getValue(): null,
					name: "orig",
					tag: "orig",
					leaf: true
				},
				{
					icon: 'resources/images/mix_volume.png',
					type: elType,
					staff: staffFieldReg1.getValue(),
					tstamp: tstampFieldReg1.getValue(),
					tstamp2: tstamp2FieldReg1.getValue(),
					place: placeFieldReg1.getValue(),
					form: formField.getValue(),
					rend: typeof rendReg1 !== 'undefined' ? rendReg1.getValue(): null,
					name: "reg",
					tag: "reg",
					leaf: true
				},
				{
					icon: 'resources/images/mix_volume.png',
					type: elType,
					staff: staffFieldReg2.getValue(),
					tstamp: tstampFieldReg2.getValue(),
					tstamp2: tstamp2FieldReg2.getValue(),
					place: placeFieldReg2.getValue(),
					form: formField.getValue(),
					rend: typeof rendReg2 !== 'undefined' ? rendReg2.getValue(): null,
					name: "reg",
					tag: "reg",
					leaf: true
				}]
			});
			
			var root = null;
			if (Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1) {
				root = pmdCE.getApplication().getHairpinDataStore().getRootNode();
				var parent = root.appendChild(hairpin);
				
				parent.expand();
				Ext.getCmp('cegridpanel').setSelection(hairpin);
			} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dynam') > -1) {
				root = pmdCE.getApplication().getDynamDataStore().getRootNode();
				var parent = root.appendChild(hairpin);
				
				parent.expand();
				Ext.getCmp('dynamsgridpanel').setSelection(hairpin);
			} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dir') > -1) {
				root = pmdCE.getApplication().getDirDataStore().getRootNode();
				var parent = root.appendChild(hairpin);
				
				parent.expand();
				Ext.getCmp('dirsgridpanel').setSelection(hairpin);
			}
			
			Ext.getCmp('saveButton').setDisabled(false);
			this.up('window').close();
		}
	},
	
	/**
	 * Handle function for disable/enable next-button.
	 */
	handleNavigationButtons: function () {
		if (staffField.isValid() && startTaktField.isValid() && endTaktField.isValid()) {
			nextButton.setDisabled(false);
		} else {
			nextButton.setDisabled(true);
		}
	},
	
	/**
	 * Handle function for disable/enable create-button.
	 */
	handleCreateButton: function () {
		if (placeField.isValid() && formField.isValid() && tstampFieldOrig.isValid() && tstamp2FieldOrig.isValid() && staffFieldReg1.isValid() && placeFieldReg1.isValid() && satffFieldBetween.isValid() && staffFieldReg2.isValid() && placeFieldReg2.isValid() && tstampFieldReg1.isValid() && tstamp2FieldReg1.isValid() && tstampFieldReg2.isValid() && tstamp2FieldReg2.isValid()) {
			createElementButton.setDisabled(false);
		} else {
			createElementButton.setDisabled(true);
		}
	},
	
	/**
	 * Switch to second card, add verovio view and set value in stafffields from selected staff field
	 */
	showNext: function () {
		this.doCardNavigation(1);
		
		if (typeof Ext.getCmp('cemain').getVerStartId() != 'undefined') {
			Ext.getCmp('verovio1').removeAll(true);
		}
		if (typeof Ext.getCmp('cemain').getVerEndId() != 'undefined') {
			Ext.getCmp('verovio2').removeAll(true);
		}
		verovioImageStart = new pmdCE.view.tabPanel.buttonDialogs.VerovioImageStart();
		Ext.getCmp('verovio1').add(verovioImageStart);
		verovioImageEnd = new pmdCE.view.tabPanel.buttonDialogs.VerovioImageEnd();
		Ext.getCmp('verovio2').add(verovioImageEnd);
		
		staffFieldCopy.setValue(staffField.getValue());
	},
	
	/**
	 * Handle function for set value in tstamp- or form- fields in regs.
	 */
	handleTextField: function () {
		if (this.selectedFieldId === 'tstamp2FieldOrig' && ! expertCheckBox.getValue()) {
			tstamp2FieldReg1.setValue(tstamp2FieldOrig.getValue());
			tstamp2FieldReg2.setValue(tstamp2FieldOrig.getValue());
		}
		if (this.selectedFieldId === 'tstampFieldOrig' && ! expertCheckBox.getValue()) {
			tstampFieldReg1.setValue(tstampFieldOrig.getValue());
			tstampFieldReg2.setValue(tstampFieldOrig.getValue());
		}
		if (this.selectedFieldId === 'formOrig' && ! expertCheckBox.getValue()) {
			formFieldReg1.setValue(formField.getValue());
			formFieldReg2.setValue(formField.getValue());
		}
		if (this.selectedFieldId === 'rendOrig' && ! expertCheckBox.getValue()) {
			rendReg1.setValue(rend.getValue());
			rendReg2.setValue(rend.getValue());
		}
		this.handleCreateButton();
	},
	
	/**
	 * Handle function for set StaffNr for verovio
	 * @param {object} combo.
	 */
	handleStaffField: function (combo) {
		if (combo.id.indexOf('sec') === -1 && combo.id.indexOf('reg') === -1) {
			Ext.getCmp('cemain').setStaffNr(combo.getValue());
			this.handleNavigationButtons();
		} else {
			// if(!expertCheckBox.getValue()){
			this.handleCreateButton();
			//}
		}
	},
	
	/**
	 * Handle function for set value in place fields in regs.
	 * @param {object} combo.
	 */
	handlePlaceField: function (combo) {
		this.handleCreateButton();
	},
	
	/**
	 * Handle function for set start and end measure for get verovio.
	 * @param {object} combo.
	 */
	handleMeasureField: function (combo) {
		if (combo.id.indexOf('start') > -1) {
			Ext.getCmp('cemain').setStartMeasure(combo.getValue());
		}
		if (combo.id.indexOf('end') > -1) {
			Ext.getCmp('cemain').setEndMeasure(combo.getValue());
		}
		this.handleNavigationButtons();
	},
	
	/**
	 * Handle function for set value in place fields in regs.
	 * @param {object} combo.
	 */
	handleFormField: function (combo) {
		formFieldReg1.setValue(combo.getValue());
		formFieldReg2.setValue(combo.getValue());
		this.handleCreateButton();
	},
	
	/**
	 * Listener function for enable/disable fields
	 * if 'Set fields editable' and/or 'Disable reg' is selected.
	 * @param {object} check box.
	 * @param {boolean} checked.
	 */
	changeSelection: function (cb, checked) {
		if (checked) {
			tstampFieldReg1.setDisabled(false);
			tstampFieldReg1.validate();
			tstamp2FieldReg1.setDisabled(false);
			tstamp2FieldReg1.validate();
			tstampFieldReg2.setDisabled(false);
			tstampFieldReg2.validate();
			tstamp2FieldReg2.setDisabled(false);
			tstamp2FieldReg2.validate();
			placeFieldReg1.setDisabled(false);
			placeFieldReg1.validate();
			placeFieldReg2.setDisabled(false);
			placeFieldReg2.validate();
			staffFieldReg1.setDisabled(false);
			staffFieldReg1.validate();
			staffFieldReg1.setDisabled(false);
			staffFieldReg1.validate();
		} else {
			tstampFieldReg1.setDisabled(true);
			if (tstampFieldReg1.getValue() === "") {
				tstampFieldReg1.setValue(tstampFieldOrig.getValue());
			}
			tstampFieldReg1.validate();
			tstamp2FieldReg1.setDisabled(true);
			if (tstamp2FieldReg1.getValue() === "") {
				tstamp2FieldReg1.setValue(tstamp2FieldOrig.getValue());
			}
			tstamp2FieldReg1.validate();
			placeFieldReg1.setDisabled(false);
			placeFieldReg1.validate();
			staffFieldReg1.setDisabled(false);
			staffFieldReg1.validate();
			
			tstampFieldReg2.setDisabled(true);
			if (tstampFieldReg2.getValue() === "") {
				tstampFieldReg2.setValue(tstampFieldOrig.getValue());
			}
			tstampFieldReg2.validate();
			tstamp2FieldReg2.setDisabled(true);
			if (tstamp2FieldReg2.getValue() === "") {
				tstamp2FieldReg2.setValue(tstamp2FieldOrig.getValue());
			}
			tstamp2FieldReg2.validate();
			placeFieldReg2.setDisabled(false);
			placeFieldReg2.validate();
			staffFieldReg2.setDisabled(false);
			staffFieldReg2.validate();
		}
		this.handleCreateButton();
	}
});