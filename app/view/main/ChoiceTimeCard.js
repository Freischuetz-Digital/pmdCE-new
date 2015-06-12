/**
 * Creates class pmdCE.view.main.ChoiceTimeCard that extend from pmdCE.view.main.ChoiceCard.
 * @class
 * @classdesc pmdCE.view.main.ChoiceTimeCard is class for create
 * two cards for 'create'-dialog. Card 2 of dialog consists
 * in orig-group, 4 regs and verovio view.
 * This dialog is template for create choices depended on tstamp and tstamp2.
 */
Ext.define('pmdCE.view.main.ChoiceTimeCard', {
	extend: 'pmdCE.view.main.ChoiceCard',
	
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
	checkBoxReg1: null,
	// reg2
	staffFieldReg2: null,
	placeFieldReg2: null,
	formFieldReg2: null,
	tstampFieldReg2: null,
	tstamp2FieldReg2: null,
	rendReg2: null,
	// reg3
	staffFieldReg3: null,
	placeFieldReg3: null,
	formFieldReg3: null,
	tstampFieldReg3: null,
	tstamp2FieldReg3: null,
	rendReg3: null,
	// reg4
	staffFieldReg4: null,
	placeFieldReg4: null,
	formFieldReg4: null,
	tstampFieldReg4: null,
	tstamp2FieldReg4: null,
	rendReg4: null,
	checkBoxReg4: null,
	
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
		startTaktField = this.createComboBox('Start measure', 'startmeasure');
		startTaktField.validate();
		endTaktField = this.createComboBox('End measure', 'endmeasure');
		endTaktField.validate();
		placeField = this.createComboBox('Place', 'placeorig');
		placeField.validate();
		tstampFieldOrig = this.createMandatoryTextField('tstampFieldOrig', 'Tstamp');
		tstampFieldOrig.validate();
		// hairpin
		if (Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1) {
			formField = this.createComboBox('Form', 'formOrig');
			tstamp2FieldOrig = this.createMandatoryTextField('tstamp2FieldOrig', 'Tstamp2');
			tstamp2FieldOrig.validate();
		}
		// dynams 
		else {
			formField = this.createMandatoryTextField('formOrig', 'Form');
			tstamp2FieldOrig = this.createOptionalTextField('tstamp2FieldOrig', 'Tstamp2');
			rend = this.createOptionalTextField('rendOrig', 'Rend');
		}
		formField.validate();
		
		// reg1 fields
		// common
		staffFieldReg1 = this.createMandatoryTextField('staffFieldReg1', 'Staff');
		staffFieldReg1.setDisabled(true);
		placeFieldReg1 = this.createComboBox('Place', 'placereg1');
		placeFieldReg1.setDisabled(true);
		tstampFieldReg1 = this.createMandatoryTextField('tstampFieldReg1', 'Tstamp');
		tstampFieldReg1.setDisabled(true);
		tstampFieldReg1.validate();
		// hairpin
		if (Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1) {
			formFieldReg1 = this.createComboBox('Form', 'formreg1');
			tstamp2FieldReg1 = this.createMandatoryTextField('tstamp2FieldReg1', 'Tstamp2');
			tstamp2FieldReg1.validate();
		}
		// dynams 
		else {
			formFieldReg1 = this.createMandatoryTextField('formReg1', 'Form');
			tstamp2FieldReg1 = this.createOptionalTextField('tstamp2FieldReg1', 'Tstamp2');
			rendReg1 = this.createOptionalTextField('rendReg1', 'Rend');
			rendReg1.setDisabled(true);
		}
		formFieldReg1.setDisabled(true);
		formFieldReg1.validate();
		//tstamp2FieldReg1.setDisabled(true);
		
		// reg2 fields
		// common
		staffFieldReg2 = this.createMandatoryTextField('staffFieldReg2', 'Staff');
		staffFieldReg2.setDisabled(true);
		placeFieldReg2 = this.createComboBox('Place', 'placereg2');
		placeFieldReg2.setDisabled(true);
		tstampFieldReg2 = this.createMandatoryTextField('tstampFieldReg2', 'Tstamp');
		tstampFieldReg2.setDisabled(true);
		tstampFieldReg2.validate();
		// hairpin
		if (Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1) {
			formFieldReg2 = this.createComboBox('Form', 'formreg2');
			tstamp2FieldReg2 = this.createMandatoryTextField('tstamp2FieldReg2', 'Tstamp2');
			tstamp2FieldReg2.validate();
		}
		// dynams 
		else {
			formFieldReg2 = this.createMandatoryTextField('formReg2', 'Form');
			tstamp2FieldReg2 = this.createOptionalTextField('tstamp2FieldReg2', 'Tstamp2');
			rendReg2 = this.createOptionalTextField('rendReg2', 'Rend');
			rendReg2.setDisabled(true);
		}
		formFieldReg2.setDisabled(true);
		// tstamp2FieldReg2.setDisabled(true);
		
		// reg3 fields
		// common
		staffFieldReg3 = this.createMandatoryTextField('staffFieldReg3', 'Staff');
		staffFieldReg3.setDisabled(true);
		placeFieldReg3 = this.createComboBox('Place', 'placereg3');
		placeFieldReg3.setDisabled(true);
		tstampFieldReg3 = this.createMandatoryTextField('tstampFieldReg3', 'Tstamp');
		tstampFieldReg3.validate();
		// hairpin
		if (Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1) {
			formFieldReg3 = this.createComboBox('Form', 'formreg3');
			tstamp2FieldReg3 = this.createMandatoryTextField('tstamp2FieldReg3', 'Tstamp2');
			tstamp2FieldReg3.validate();
		}
		// dynams 
		else {
			formFieldReg3 = this.createMandatoryTextField('formReg3', 'Form');
			tstamp2FieldReg3 = this.createOptionalTextField('tstamp2FieldReg3', 'Tstamp2');
			rendReg3 = this.createOptionalTextField('rendReg3', 'Rend');
			rendReg3.setDisabled(true);
		}
		formFieldReg3.setDisabled(true);
		tstamp2FieldReg3.setDisabled(true);
		
		// reg4 fields
		// common
		staffFieldReg4 = this.createMandatoryTextField('staffFieldReg4', 'Staff');
		staffFieldReg4.setDisabled(true);
		placeFieldReg4 = this.createComboBox('Place', 'placereg4');
		placeFieldReg4.setDisabled(true);
		tstampFieldReg4 = this.createMandatoryTextField('tstampFieldReg4', 'Tstamp');
		tstampFieldReg4.validate();
		// hairpin
		if (Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1) {
			formFieldReg4 = this.createComboBox('Form', 'formreg4');
			tstamp2FieldReg4 = this.createMandatoryTextField('tstamp2FieldReg4', 'Tstamp2');
			tstamp2FieldReg4.validate();
		}
		// dynams 
		else {
			formFieldReg4 = this.createMandatoryTextField('formReg4', 'Form');
			tstamp2FieldReg4 = this.createOptionalTextField('tstamp2FieldReg4', 'Tstamp2');
			rendReg4 = this.createOptionalTextField('rendReg4', 'Rend');
			rendReg4.setDisabled(true);
		}
		formFieldReg4.setDisabled(true);
		tstamp2FieldReg4.setDisabled(true);
		
		checkBoxReg1 = this.createCheckBox('Disable reg', 'checkBoxReg1');
		checkBoxReg4 = this.createCheckBox('Disable reg', 'checkBoxReg4');
		
		expertCheckBox = this.createCheckBox('Set fields editable', 'expert');
		
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
					placeField,
					formField,
					tstampFieldOrig,
					tstamp2FieldOrig]:[
					staffFieldCopy,
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
					staffFieldReg3,
					placeFieldReg3,
					formFieldReg3,
					tstampFieldReg3,
					tstamp2FieldReg3]:[
					staffFieldReg3,
					placeFieldReg3,
					formFieldReg3,
					tstampFieldReg3,
					tstamp2FieldReg3,
					rendReg3]
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
				}] // end card-1 items
			},
			{
				id: 'card-12',
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
					margin: '0 10 0 0',
					border: false,
					width: 275,
					items:[]
				},
				{
					xtype: 'fieldset',
					title: 'Reg',
					id: 'orig1',
					defaultType: 'textfield',
					margin: '0 10 0 0',
					
					items: Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1 ?[
					checkBoxReg4,
					staffFieldReg4,
					placeFieldReg4,
					formFieldReg4,
					tstampFieldReg4,
					tstamp2FieldReg4]:[
					checkBoxReg4,
					staffFieldReg4,
					placeFieldReg4,
					formFieldReg4,
					tstampFieldReg4,
					tstamp2FieldReg4,
					rendReg4]
				},
				{
					xtype: 'fieldset',
					title: 'Reg',
					id: 'starttime1',
					defaultType: 'textfield',
					margin: '0 10 0 0',
					defaults: {
						anchor: '100%'
					},
					
					items: Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1 ?[
					checkBoxReg1,
					staffFieldReg1,
					placeFieldReg1,
					formFieldReg1,
					tstampFieldReg1,
					tstamp2FieldReg1]:[
					checkBoxReg1,
					staffFieldReg1,
					placeFieldReg1,
					formFieldReg1,
					tstampFieldReg1,
					tstamp2FieldReg1,
					rendReg1]
				}] // end card-1 items
			},
			{
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
		
		prevButton = this.createNavigationButton('card-prev', '&laquo; Previous', 'showPrevious');
		nextButton = this.createNavigationButton('card-next', 'Next &raquo;', 'showNext');
		createElementButton = this.createNavigationButton('createElement', 'Create', 'createElement');
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
				staff: staffField.getValue(),
				tstamp: tstampFieldReg3.getValue(),
				tstamp2: tstamp2FieldReg3.getValue(),
				place: placeField.getValue(),
				form: formField.getValue(),
				rend: typeof rendReg3 !== 'undefined' ? rendReg3.getValue(): null,
				name: "reg",
				tag: "reg",
				leaf: true
			},
			{
				icon: 'resources/images/mix_volume.png',
				type: elType,
				staff: staffField.getValue(),
				tstamp: tstampFieldReg2.getValue(),
				tstamp2: tstamp2FieldReg2.getValue(),
				place: placeField.getValue(),
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
		} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dynam') > -1) {
			root = pmdCE.getApplication().getDynamDataStore().getRootNode();
		} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dir') > -1) {
			root = pmdCE.getApplication().getDirDataStore().getRootNode();
		}
		var parent = root.appendChild(hairpin);
		
		if (! tstamp2FieldReg1.isDisabled()) {
			hairpin.appendChild({
				icon: 'resources/images/mix_volume.png',
				type: elType,
				staff: staffField.getValue(),
				tstamp: tstampFieldReg1.getValue(),
				tstamp2: tstamp2FieldReg1.getValue(),
				place: placeField.getValue(),
				form: formField.getValue(),
				rend: typeof rendReg1 !== 'undefined' ? rendReg1.getValue(): null,
				name: "reg",
				tag: "reg",
				leaf: true
			});
		}
		
		if (! tstampFieldReg4.isDisabled()) {
			hairpin.appendChild({
				icon: 'resources/images/mix_volume.png',
				type: elType,
				staff: staffField.getValue(),
				tstamp: tstampFieldReg4.getValue(),
				tstamp2: tstamp2FieldReg4.getValue(),
				place: placeField.getValue(),
				form: formField.getValue(),
				rend: typeof rendReg4 !== 'undefined' ? rendReg4.getValue(): null,
				name: "reg",
				tag: "reg",
				leaf: true
			});
		}
		
		
		parent.expand();
		
		if (Ext.getCmp('cemain').getComponentType().indexOf('Hairpin') > -1) {
			Ext.getCmp('cegridpanel').setSelection(hairpin);
		} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dynam') > -1) {
			Ext.getCmp('dynamsgridpanel').setSelection(hairpin);
		} else if (Ext.getCmp('cemain').getComponentType().indexOf('Dir') > -1) {
			Ext.getCmp('dirsgridpanel').setSelection(hairpin);
		}
		
		Ext.getCmp('saveButton').setDisabled(false);
		this.up('window').close();
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
		if (placeField.isValid() && formField.isValid() && tstampFieldOrig.isValid() && tstamp2FieldOrig.isValid() && tstamp2FieldReg1.isValid() && tstamp2FieldReg2.isValid() && tstampFieldReg1.isValid() && tstampFieldReg2.isValid() && tstampFieldReg3.isValid() && tstampFieldReg4.isValid() && tstamp2FieldReg3.isValid() && tstamp2FieldReg4.isValid()) {
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
		verovioImageStart = new pmdCE.view.main.VerovioImageStart();
		Ext.getCmp('verovio1').add(verovioImageStart);
		verovioImageEnd = new pmdCE.view.main.VerovioImageEnd();
		Ext.getCmp('verovio2').add(verovioImageEnd);
		
		staffFieldCopy.setValue(staffField.getValue());
		staffFieldReg1.setValue(staffField.getValue());
		staffFieldReg2.setValue(staffField.getValue());
		staffFieldReg3.setValue(staffField.getValue());
		staffFieldReg4.setValue(staffField.getValue());
	},
	
	/**
	 * Handle function for set value in tstamp- tstamp2, rend or form- fields in regs.
	 */
	handleTextField: function () {
		if (this.selectedFieldId === 'tstamp2FieldOrig' && ! expertCheckBox.getValue()) {
			tstamp2FieldReg3.setValue(tstamp2FieldOrig.getValue());
			tstamp2FieldReg4.setValue(tstamp2FieldOrig.getValue());
		}
		if (this.selectedFieldId === 'tstampFieldOrig' && ! expertCheckBox.getValue()) {
			tstampFieldReg1.setValue(tstampFieldOrig.getValue());
			tstampFieldReg2.setValue(tstampFieldOrig.getValue());
		}
		if (this.selectedFieldId === 'formOrig' && ! expertCheckBox.getValue()) {
			formFieldReg1.setValue(formField.getValue());
			formFieldReg2.setValue(formField.getValue());
			formFieldReg3.setValue(formField.getValue());
			formFieldReg4.setValue(formField.getValue());
		}
		if (this.selectedFieldId === 'rendOrig' && ! expertCheckBox.getValue()) {
			rendReg1.setValue(rend.getValue());
			rendReg2.setValue(rend.getValue());
			rendReg3.setValue(rend.getValue());
			rendReg4.setValue(rend.getValue());
		}
		this.handleCreateButton();
	},
	
	/**
	 * Handle function for set StaffNr for verovio
	 * @param {object} combo.
	 */
	handleStaffField: function (combo) {
		if (combo.id.indexOf('second') === -1) {
			Ext.getCmp('cemain').setStaffNr(combo.getValue());
		}
		this.handleNavigationButtons();
	},
	
	/**
	 * Handle function for set value in place fields in regs.
	 * @param {object} combo.
	 */
	handlePlaceField: function (combo) {
		placeFieldReg1.setValue(combo.getValue());
		placeFieldReg2.setValue(combo.getValue());
		placeFieldReg3.setValue(combo.getValue());
		placeFieldReg4.setValue(combo.getValue());
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
		formFieldReg3.setValue(combo.getValue());
		formFieldReg4.setValue(combo.getValue());
		this.handleCreateButton();
	},
	
	/**
	 * Listener function for enable/disable fields
	 * if 'Set fields editable' and/or 'Disable reg' is selected.
	 * @param {object} check box.
	 * @param {boolean} checked.
	 */
	changeSelection: function (cb, checked) {
		if (cb.id === 'checkBoxReg4') {
			if (checked) {
				tstampFieldReg4.setDisabled(true);
				tstamp2FieldReg4.setDisabled(true);
			} else {
				if (! checked && expertCheckBox.getValue()) {
					tstampFieldReg4.setDisabled(false);
					tstamp2FieldReg4.setDisabled(false);
				} else if (! checked && ! expertCheckBox.getValue()) {
					tstampFieldReg4.setDisabled(false);
					tstamp2FieldReg4.setDisabled(true);
				}
			}
		} else if (cb.id === 'checkBoxReg1') {
			if (checked) {
				tstampFieldReg1.setDisabled(true);
				tstamp2FieldReg1.setDisabled(true);
			} else {
				if (! checked && expertCheckBox.getValue()) {
					tstampFieldReg1.setDisabled(false);
					tstamp2FieldReg1.setDisabled(false);
				} else if (! checked && ! expertCheckBox.getValue()) {
					tstampFieldReg1.setDisabled(true);
					tstamp2FieldReg1.setDisabled(false);
				}
			}
		}
		if (cb.id === 'expert') {
			if (checked) {
				tstampFieldReg2.setDisabled(false);
				tstampFieldReg2.validate();
				tstamp2FieldReg2.setDisabled(false);
				tstamp2FieldReg2.validate();
				
				tstampFieldReg3.setDisabled(false);
				tstampFieldReg3.validate();
				tstamp2FieldReg3.setDisabled(false);
				tstamp2FieldReg3.validate();
				
				if (checkBoxReg1.getValue()) {
					tstampFieldReg1.setDisabled(true);
					tstampFieldReg1.validate();
					tstamp2FieldReg1.setDisabled(true);
					tstamp2FieldReg1.validate();
				} else {
					tstampFieldReg1.setDisabled(false);
					tstampFieldReg1.validate();
					tstamp2FieldReg1.setDisabled(false);
					tstamp2FieldReg1.validate();
				}
				
				if (checkBoxReg4.getValue()) {
					tstampFieldReg4.setDisabled(true);
					tstampFieldReg4.validate();
					tstamp2FieldReg4.setDisabled(true);
					tstamp2FieldReg4.validate();
				} else {
					tstampFieldReg4.setDisabled(false);
					tstampFieldReg4.validate();
					tstamp2FieldReg4.setDisabled(false);
					tstamp2FieldReg4.validate();
				}
			} else {
				tstampFieldReg2.setDisabled(true);
				if (tstampFieldReg2.getValue() === "") {
					tstampFieldReg2.setValue(tstampFieldOrig.getValue());
				}
				tstampFieldReg2.validate();
				tstamp2FieldReg2.setDisabled(false);
				tstamp2FieldReg2.validate();
				
				tstampFieldReg3.setDisabled(false);
				tstampFieldReg3.validate();
				tstamp2FieldReg3.setDisabled(true);
				if (tstamp2FieldReg3.getValue() === "") {
					tstamp2FieldReg3.setValue(tstamp2FieldOrig.getValue());
				}
				tstamp2FieldReg3.validate();
				
				if (checkBoxReg1.getValue()) {
					tstampFieldReg1.setDisabled(true);
					tstampFieldReg1.validate();
					tstamp2FieldReg1.setDisabled(true);
					tstamp2FieldReg1.validate();
				} else {
					tstampFieldReg1.setDisabled(true);
					if (tstampFieldReg1.getValue() === "") {
						tstampFieldReg1.setValue(tstampFieldOrig.getValue());
					}
					tstampFieldReg1.validate();
					tstamp2FieldReg1.setDisabled(false);
					tstamp2FieldReg1.validate();
				}
				
				if (checkBoxReg4.getValue()) {
					tstampFieldReg4.setDisabled(true);
					tstampFieldReg4.validate();
					tstamp2FieldReg4.setDisabled(true);
					tstamp2FieldReg4.validate();
				} else {
					tstampFieldReg4.setDisabled(false);
					tstampFieldReg4.validate();
					tstamp2FieldReg4.setDisabled(true);
					if (tstamp2FieldReg4.getValue() === "") {
						tstamp2FieldReg4.setValue(tstamp2FieldOrig.getValue());
					}
					tstamp2FieldReg4.validate();
				}
			}
		}
		this.handleCreateButton();
	}
});